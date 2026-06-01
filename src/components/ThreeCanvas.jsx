import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // 1. Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040713, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 250;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x040713, 1);
    currentMount.appendChild(renderer.domElement);

    // 2. Setup Connected Network Nodes
    const nodeCount = 120;
    const maxLinkDistance = 70;

    const positions = new Float32Array(nodeCount * 3);
    const velocities = new Float32Array(nodeCount * 3);
    const originalPositions = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 450;
      positions[i + 1] = (Math.random() - 0.5) * 450;
      positions[i + 2] = (Math.random() - 0.5) * 450;

      originalPositions[i] = positions[i];
      originalPositions[i + 1] = positions[i + 1];
      originalPositions[i + 2] = positions[i + 2];

      velocities[i] = (Math.random() - 0.5) * 0.45;
      velocities[i + 1] = (Math.random() - 0.5) * 0.45;
      velocities[i + 2] = (Math.random() - 0.5) * 0.45;
    }

    // Node Points Material
    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Circular Glow Texture
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(16, 185, 129, 0.8)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 16, 16);
    const pointTexture = new THREE.CanvasTexture(canvas);

    const pointsMaterial = new THREE.PointsMaterial({
      size: 5.5,
      map: pointTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    // Edge Connections (LineSegments)
    const linesGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });

    const lines = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(lines);

    // Mouse Vector
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = 0;

    const handleMouseMove = (event) => {
      mouse.targetX = (event.clientX - window.innerWidth / 2) * 0.12;
      mouse.targetY = (event.clientY - window.innerHeight / 2) * 0.12;
    };

    const handleScroll = () => {
      scrollY = window.scrollY * 0.1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 3. Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const posArr = pointsGeometry.attributes.position.array;

      // Animate node positions
      for (let i = 0; i < nodeCount * 3; i += 3) {
        posArr[i] += velocities[i];
        posArr[i + 1] += velocities[i + 1];
        posArr[i + 2] += velocities[i + 2];

        // Bounce back limits
        if (Math.abs(posArr[i]) > 220) velocities[i] *= -1;
        if (Math.abs(posArr[i + 1]) > 220) velocities[i + 1] *= -1;
        if (Math.abs(posArr[i + 2]) > 220) velocities[i + 2] *= -1;
      }
      pointsGeometry.attributes.position.needsUpdate = true;

      // Real-time Adjacency Link Segments calculation
      const linePositions = [];
      for (let i = 0; i < nodeCount; i++) {
        const idxA = i * 3;
        const xA = posArr[idxA];
        const yA = posArr[idxA + 1];
        const zA = posArr[idxA + 2];

        for (let j = i + 1; j < nodeCount; j++) {
          const idxB = j * 3;
          const xB = posArr[idxB];
          const yB = posArr[idxB + 1];
          const zB = posArr[idxB + 2];

          const dx = xA - xB;
          const dy = yA - yB;
          const dz = zA - zB;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxLinkDistance) {
            linePositions.push(xA, yA, zA);
            linePositions.push(xB, yB, zB);
          }
        }
      }

      // Update Line Geometry Buffers
      linesGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(new Float32Array(linePositions), 3)
      );

      // Mouse Lerps
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      camera.position.x += (mouse.x - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y - scrollY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Rotations
      points.rotation.y = elapsedTime * 0.018;
      lines.rotation.y = elapsedTime * 0.018;
      points.rotation.x = elapsedTime * 0.009;
      lines.rotation.x = elapsedTime * 0.009;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      pointTexture.dispose();
      linesGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
