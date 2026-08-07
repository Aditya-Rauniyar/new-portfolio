import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import ThreeCanvas from './components/ThreeCanvas';
import HUD from './components/HUD';
import Toast from './components/Toast';
import CodingStats from './components/CodingStats';
import CodeWorkspace from './components/CodeWorkspace';
import { 
  Mail, 
  ArrowUpRight, 
  BookOpen, 
  Calendar, 
  MapPin, 
  Code,
  Layers,
  Award,
  Sparkles,
  Eye,
  Terminal,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

// Import visual project mockups
import sehatvaniMockup from './assets/sehatvani_mockup.png';
import svicPortalMockup from './assets/svic_portal_mockup.png';
import eduadiMockup from './assets/eduadi_mockup.png';
import bipartitelinkMockup from './assets/bipartitelink_mockup.png';
import coderoomMockup from './assets/coderoom_mockup.png';
import civicsparkMockup from './assets/civicspark_mockup.png';
import footprintMockup from './assets/footprint_mockup.png';
import weatherAppMockup from './assets/weather_app_mockup.png';

const Github = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('core');
  const [projectMode, setProjectMode] = useState('gallery'); // 'gallery' or 'ide'
  const [typedText, setTypedText] = useState('');
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Union of actual portfolio projects data from GitHub in exact sequence
  const visualProjects = [
    {
      id: 'svic',
      title: 'SVIC School Portal',
      sub: 'Freelance College Notice Board & CMS',
      desc: 'A production website built for Swami Vivekanand Intermediate College in Uttar Pradesh. Features integrated student notice boards and timetables driven by a headless Sanity.io CMS. Reduced paint delay by 35% using multi-threaded WebP conversions.',
      img: svicPortalMockup,
      tech: ['React.js', 'Sanity.io', 'Tailwind CSS', 'WebP Optimizer'],
      live: 'https://svic.co.in',
      github: null,
      metrics: 'Uptime: 100% | Paint Delay: -35% | Status: Deployed'
    },
    {
      id: 'sehatvani',
      title: 'SehatVani',
      sub: 'AI Medical Translation & Report Summarizer',
      desc: 'An AI-powered clinical translation platform converting complex laboratory test parameters (T3, T4, Hemoglobin) into simplified, natural language explanations in Hindi and English. Integrates secure JWT authentication and custom Express REST API endpoints.',
      img: sehatvaniMockup,
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
      live: 'https://sehat-vani.vercel.app',
      github: 'https://github.com/Aditya-Rauniyar/sehatvani',
      metrics: 'MERN Stack | Langs: Hindi / English | Deployed: Live'
    },
    {
      id: 'coderoom',
      title: 'CodeRoom',
      sub: 'Real-time Collaborative Code Workspace',
      desc: 'A real-time collaborative code editor platform featuring multi-user rooms, live syntax editing, collaborative workspace sessions, and code execution capabilities.',
      img: coderoomMockup,
      tech: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'Monaco Editor'],
      live: null,
      github: 'https://github.com/Aditya-Rauniyar/CodeRoom',
      metrics: 'Socket.io Collab | Monaco Engine | MERN Architecture'
    },
    {
      id: 'civicspark',
      title: 'CivicSpark',
      sub: 'Social & Civic Campaign Management Platform',
      desc: 'The Civic Platform is a full-stack web application that empowers individuals and organizations to create, manage, and support campaigns for social, environmental, and civic causes. With integrated AI, NGO networking, and evidence validation, it transforms civic ideas into actionable movements.',
      img: civicsparkMockup,
      tech: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
      live: null,
      github: 'https://github.com/Aditya-Rauniyar/Civics-Spark',
      metrics: 'AI Campaigns | Redundancy: -40% | Integration: Git'
    },
    {
      id: 'eduadi',
      title: 'EduAdi',
      sub: '1st Year EdTech Learning UI Platform',
      desc: 'A modern ready UI for an EdTech platform built with HTML, CSS, and JavaScript during 1st year for learning.',
      img: eduadiMockup,
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      live: 'https://aditya-rauniyar.github.io/EduAdi/',
      github: 'https://github.com/Aditya-Rauniyar/EduAdi',
      metrics: 'HTML5 / CSS3 / JS | 1st Year Project | Responsive UI'
    },
    {
      id: 'dronaai',
      title: 'DronaAi',
      sub: 'MERN Real-Time Peer-to-Peer EdTech Lobbies',
      desc: 'A real-time peer-to-peer educational platform featuring direct chat connections, study lobbies, Gemini API integrations, and collaborative study spaces with Socket.io.',
      img: bipartitelinkMockup,
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Gemini API'],
      live: null,
      github: 'https://github.com/Aditya-Rauniyar/DronaAi',
      metrics: 'MERN Socket | Live Chat Lobbies | AI: Gemini API'
    },
    {
      id: 'footprint',
      title: 'FootPrint',
      sub: 'Personal Environmental Carbon Calculator',
      desc: 'An environmental tracking calculator designed to compute personal carbon impacts, analyze energy consumption variables, and offer actionable green solutions.',
      img: footprintMockup,
      tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
      live: null,
      github: 'https://github.com/Aditya-Rauniyar/Foot_Print',
      metrics: 'Eco Telemetry | Framework: React | Uptime: 100%'
    },
    {
      id: 'weatherapp',
      title: 'WeatherApp',
      sub: 'Meteorological Forecast Dashboard',
      desc: 'A real-time weather forecasting dashboard providing real-time meteorological metrics, forecasts, dynamic wind gauges, and ambient temperatures.',
      img: weatherAppMockup,
      tech: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API'],
      live: 'https://aditya-rauniyar.github.io/WeatherApp/',
      github: 'https://github.com/Aditya-Rauniyar/WeatherApp',
      metrics: 'Meteorology | OpenWeather API | Lighthouse: 99/100'
    }
  ];

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // SDE typewriter roles
  const roles = [
    "GATE 2026 Qualified",
    "600+ DSA Problems Solved",
    "React & Node.js Developer",
    "Technocrats Club Lead"
  ];
  
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (!isDeleting) {
        setTypedText(currentRole.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex === currentRole.length) {
          isDeleting = true;
          timeoutId = setTimeout(type, 1800); // Wait at complete word
        } else {
          timeoutId = setTimeout(type, 70);
        }
      } else {
        setTypedText(currentRole.substring(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          timeoutId = setTimeout(type, 400); // Wait before typing next
        } else {
          timeoutId = setTimeout(type, 30);
        }
      }
    };

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setToast({
        show: true,
        message: 'Diagnostics incomplete. Please fill out Name, Email, and Message fields.',
        type: 'error'
      });
      return;
    }

    setIsSubmitting(true);
    const scriptURL = "https://script.google.com/macros/s/AKfycbz6qNOxwEQNWCRHz1FC-fSClV6BLp3navxJ7jGP1Xp06RWGJx8NtA2AKghJRP-mo-U/exec";
    
    try {
      const bodyData = new FormData();
      Object.keys(formData).forEach(key => bodyData.append(key, formData[key]));

      await fetch(scriptURL, { method: 'POST', body: bodyData });
      
      setToast({
        show: true,
        message: 'Secure transmission successfully completed. Payload delivered directly to Aditya\'s database!',
        type: 'success'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setToast({
        show: true,
        message: 'Direct transmission timeout. Please email me at adityarauniyar.work@gmail.com',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const skillsData = [
    { category: 'LANGUAGES & DATA STRUCTURES', items: ['C++ Compilers', 'JavaScript (ES6+)', 'SQL Querying', 'HTML5 / CSS3 Layouts', 'Dynamic Programming (DP)', 'Graph Theory & Search', 'Trees, Stacks, & Queues'] },
    { category: 'DEVELOPMENT FRAMEWORKS', items: ['React.js States & Context', 'Node.js Servers', 'Express.js Routers', 'MongoDB Collections', 'Redux Store Management', 'Sanity.io Headless CMS', 'RESTful API Engineering'] },
    { category: 'CS BASICS & UTILITIES', items: ['Git / GitHub Versioning', 'Postman API Client', 'JWT Secure Encryptions', 'Object-Oriented Programming (OOPs)', 'Database Management (DBMS)', 'Operating Systems (OS)'] }
  ];

  return (
    <div className="app-viewport">
      {/* 3D connected network graph WebGL canvas */}
      <ThreeCanvas />
      
      {/* Background neon grid */}
      <div className="bg-grid"></div>

      {/* Magical Navigation HUD & Diagnostic Terminal overlay */}
      <HUD activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main core content area inside the HUD Cockpit */}
      <main className="content-area">
        
        {/* TAB 1: SYSTEM CORE (HOME & SORT VISUALIZER) */}
        {activeTab === 'core' && (
          <section className="reveal-in">
            
            {/* Split layout: Biography on left, Live algorithm sorting visualizer on right */}
            <div className="core-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 440px', gap: '36px', alignItems: 'start' }}>
              
              <div>
                <span className="text-mono neon-text-mint font-mono" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.25em' }}>
                  [ INIT_ALGORITHMIC_COMMAND_CENTER ]
                </span>
                <h1 className="main-title" style={{ margin: '12px 0 6px 0' }}>
                  ADITYA <span className="neon-text-mint">RAUNIYAR</span>
                </h1>
                <div className="role-typewriter text-mono" style={{ marginBottom: '24px' }}>
                  $ export CURRENT_UPLINK="<span className="neon-text-cyan cursor-blink">{typedText}</span>"
                </div>

                <p className="core-bio">
                  I am a Computer Science undergraduate dedicated to rigorous <strong className="highlight-text">Data Structures &amp; Algorithms</strong>, and high-performance Web Engineering. Having successfully <strong className="highlight-text">solved over 750+ complex code problems</strong> and <strong className="highlight-text">qualified the national-level GATE 2026</strong> examination in CS/IT, I focus on building optimized full-stack applications, utilizing secure backend APIs and modular, clean code architectures.
                </p>

                {/* SDE COMMAND COUNTERS */}
                <div className="stats-grid text-mono">
                  <div className="stat-card cyber-corners">
                    <span className="stat-num neon-text-mint">750+</span>
                    <span className="stat-lbl">DSA PROBLEMS SOLVED</span>
                  </div>
                  <div className="stat-card cyber-corners">
                    <span className="stat-num neon-text-cyan">GATE 2026</span>
                    <span className="stat-lbl">QUALIFIED IT/CS</span>
                  </div>
                  <div className="stat-card cyber-corners">
                    <span className="stat-num neon-text-mint">8.30</span>
                    <span className="stat-lbl">KIET B.TECH SGPA</span>
                  </div>
                  <div className="stat-card cyber-corners">
                    <span className="stat-num neon-text-cyan">TOP 4</span>
                    <span className="stat-lbl">SPRINTHACKS 3.0</span>
                  </div>
                </div>

                <div className="cta-row" style={{ display: 'flex', gap: '16px', marginTop: '36px', flexWrap: 'wrap' }}>
                  <button onClick={() => setActiveTab('projects')} className="cyber-btn">
                    Launch Code Explorer <Layers size={14} />
                  </button>
                  <a 
                    href="mailto:adityarauniyar.work@gmail.com" 
                    className="cyber-btn cyber-btn-cyan"
                  >
                    Transmit Message <Mail size={14} />
                  </a>
                </div>
              </div>

              {/* Embedded Coding Analytics stats graph */}
              <div>
                <CodingStats />
              </div>

            </div>

            {/* FEATURED WORKSPACE SOURCE EXPLORER SECTION ON FRONT PAGE */}
            <div style={{ marginTop: '54px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                <h3 className="section-title text-mono" style={{ fontSize: '1.25rem', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="neon-text-mint">&gt;</span> FEATURED_SOURCE_WORKSPACE
                </h3>
                <button 
                  onClick={() => {
                    setActiveTab('projects');
                    setProjectMode('ide');
                  }} 
                  className="cyber-btn"
                  style={{ fontSize: '0.72rem', padding: '5px 12px' }}
                >
                  FULL IDE MODE <ArrowUpRight size={12} />
                </button>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.88rem', maxWidth: '700px' }}>
                Inspect live production architecture schemas, source files, and project parameters directly in an interactive IDE source editor.
              </p>

              {/* Embedded Interactive CodeWorkspace IDE */}
              <CodeWorkspace />
            </div>

            {/* Direct SDE Social Access Anchors */}
            <div className="social-channels" style={{ marginTop: '54px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '24px' }}>
              <span className="text-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>DIRECT_ACCESS_COORDINATES:</span>
              <div className="social-links" style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '12px', flexWrap: 'wrap' }}>
                <a href="https://www.linkedin.com/in/aditya-rauniyar-410937286/" target="_blank" rel="noreferrer" className="social-link-item">
                  <Linkedin size={20} /> <span className="text-mono" style={{ fontSize: '0.75rem' }}>LinkedIn</span>
                </a>
                <a href="https://github.com/Aditya-Rauniyar" target="_blank" rel="noreferrer" className="social-link-item">
                  <Github size={20} /> <span className="text-mono" style={{ fontSize: '0.75rem' }}>GitHub</span>
                </a>
                <a href="mailto:adityarauniyar.work@gmail.com" className="social-link-item">
                  <Mail size={20} /> <span className="text-mono" style={{ fontSize: '0.75rem' }}>Email</span>
                </a>
              </div>
            </div>

          </section>
        )}

        {/* TAB 2: SKILL MATRIX */}
        {activeTab === 'skills' && (
          <section className="reveal-in">
            <h2 className="section-title text-mono"><span className="neon-text-mint">&gt;</span> SYSTEM_SKILL_MATRIX</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '650px', fontSize: '0.95rem' }}>
              Thorough deconstruction of programming languages, dynamic algorithm logic, backend routers, databases, and core software engineering systems.
            </p>

            <div className="skills-container">
              {skillsData.map((category, idx) => (
                <div key={idx} className="cyber-card cyber-corners skills-group">
                  <h3 className="text-mono category-heading neon-text-mint">{category.category}</h3>
                  <div className="skills-badge-list">
                    {category.items.map((skill, sIdx) => (
                      <div key={sIdx} className="skill-badge text-mono">
                        <span className="badge-marker neon-text-cyan">&gt;&gt;</span> {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 3: WORKSPACE & PROJECT EXPLORER */}
        {activeTab === 'projects' && (
          <section className="reveal-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '12px', marginBottom: '6px' }}>
              <h2 className="section-title text-mono"><span className="neon-text-mint">&gt;</span> SYSTEM_WORKSPACE_EXPLORER</h2>
              <span className="text-mono" style={{ fontSize: '0.7rem', color: 'var(--accent-mint)' }}>[ ACTIVE_MODULES: 8 ]</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', maxWidth: '650px', fontSize: '0.95rem' }}>
              Interactive system diagnostics displaying a visual gallery of deployed production software alongside active directories and core source buffers.
            </p>

            {/* Smart Project Mode Select Deck */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', borderBottom: '1px solid rgba(16, 185, 129, 0.1)', paddingBottom: '12px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setProjectMode('gallery')} 
                className={`text-mono ${projectMode === 'gallery' ? 'neon-text-mint' : ''}`}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: projectMode === 'gallery' ? 'var(--accent-mint)' : 'var(--text-secondary)', 
                  fontSize: '0.82rem', 
                  fontWeight: 'bold', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '6px 14px', 
                  borderRadius: '4px', 
                  background: projectMode === 'gallery' ? 'rgba(16, 185, 129, 0.06)' : 'transparent',
                  border: projectMode === 'gallery' ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid transparent',
                  transition: 'all 0.22s cubic-bezier(0.4, 0, 0.2, 1)' 
                }}
              >
                <Eye size={13} /> [ VISUAL_GALLERY ]
              </button>
              <button 
                onClick={() => setProjectMode('ide')} 
                className={`text-mono ${projectMode === 'ide' ? 'neon-text-mint' : ''}`}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: projectMode === 'ide' ? 'var(--accent-mint)' : 'var(--text-secondary)', 
                  fontSize: '0.82rem', 
                  fontWeight: 'bold', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '6px 14px', 
                  borderRadius: '4px', 
                  background: projectMode === 'ide' ? 'rgba(16, 185, 129, 0.06)' : 'transparent',
                  border: projectMode === 'ide' ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid transparent',
                  transition: 'all 0.22s cubic-bezier(0.4, 0, 0.2, 1)' 
                }}
              >
                <Terminal size={13} /> [ SOURCE_EXPLORER ]
              </button>
            </div>

            {/* View Render Node */}
            {projectMode === 'gallery' ? (
              <div className="projects-gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' }}>
                {visualProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className="cyber-card cyber-corners project-visual-card" 
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      height: '100%', 
                      padding: '0px', 
                      overflow: 'hidden',
                      background: 'rgba(8, 12, 28, 0.55)',
                      border: '1px solid rgba(16, 185, 129, 0.12)'
                    }}
                  >
                    {/* Visual Screenshot / Code Mockup Container */}
                    <div style={{ position: 'relative', height: '175px', width: '100%', overflow: 'hidden', borderBottom: '1px solid rgba(16, 185, 129, 0.12)', background: '#040713' }}>
                      {project.img ? (
                        <img 
                          src={project.img} 
                          alt={project.title} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }} 
                          className="project-card-image"
                        />
                      ) : (
                        /* Cyber visual node mockup for projects without screenshots */
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(4, 7, 19, 0.95) 0%, rgba(16, 185, 129, 0.15) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                          <div className="laser-grid"><div className="laser-line"></div></div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(16, 185, 129, 0.2)', boxShadow: '0 0 15px rgba(255, 255, 255, 0.02)' }}>
                            <Code size={26} className="neon-text-mint" style={{ animation: 'spin 16s linear infinite' }} />
                          </div>
                          <span className="text-mono" style={{ fontSize: '0.6rem', color: 'var(--accent-mint)', marginTop: '10px', letterSpacing: '0.15em', fontWeight: 'bold' }}>
                            [{project.title.toUpperCase()}_ENGINE]
                          </span>
                        </div>
                      )}
                      
                      {/* Tech stack badge strip overlay */}
                      <div style={{ position: 'absolute', bottom: '10px', left: '12px', display: 'flex', flexWrap: 'wrap', gap: '6px', zIndex: 10 }}>
                        {project.tech.slice(0, 3).map((t, idx) => (
                          <span key={idx} style={{ fontSize: '0.58rem', background: 'rgba(4, 7, 19, 0.9)', color: 'var(--text-primary)', border: '1px solid rgba(255,255,255,0.06)', padding: '3px 8px', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span style={{ fontSize: '0.58rem', background: 'rgba(4, 7, 19, 0.9)', color: 'var(--accent-mint)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '3px 8px', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Detail Panel */}
                    <div style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                          <h3 className="neon-text-mint" style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.01em' }}>{project.title}</h3>
                          <span className="text-mono" style={{ fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>{project.id.toUpperCase()}_v1.0</span>
                        </div>
                        <h4 className="text-mono" style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{project.sub}</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.42, marginTop: '4px' }}>
                          {project.desc}
                        </p>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {/* Telemetry Metrics strip */}
                        <div className="text-mono" style={{ fontSize: '0.56rem', background: 'rgba(4, 7, 19, 0.4)', border: '1px solid rgba(16, 185, 129, 0.08)', borderRadius: '4px', padding: '6px 10px', color: 'var(--text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          [ {project.metrics} ]
                        </div>

                        {/* Control Actions Row */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          {project.live ? (
                            <a 
                              href={project.live} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="cyber-btn cyber-btn-cyan"
                              style={{ fontSize: '0.68rem', padding: '6px 12px', flex: 1, justifyContent: 'center' }}
                            >
                              [LIVE DEMO] <ExternalLink size={11} />
                            </a>
                          ) : null}

                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="cyber-btn"
                            style={{ fontSize: '0.68rem', padding: '6px 12px', flex: 1, justifyContent: 'center' }}
                          >
                            <Github size={11} /> [GITHUB]
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <CodeWorkspace />
            )}
          </section>
        )}

        {/* TAB 4: EDUCATION & EXPERIENCE ROADMAP */}
        {activeTab === 'about' && (
          <section className="reveal-in">
            
            {/* Split layout: Detailed Experience left, Detailed Education right */}
            <div className="core-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '40px', alignItems: 'start' }}>
              
              {/* Left Column: SDE Experience */}
              <div>
                <h2 className="section-title text-mono" style={{ marginBottom: '24px' }}><span className="neon-text-mint">&gt;</span> PROFESSIONAL_EXPERIENCE_LOG</h2>
                
                <div className="roadmap-timeline">
                  
                  <div className="timeline-item">
                    <div className="timeline-marker neon-text-mint"></div>
                    <div className="timeline-content cyber-card cyber-corners">
                      <div className="timeline-header">
                        <Code size={16} className="neon-text-mint" />
                        <h3 className="timeline-title">Freelance React Web Developer</h3>
                      </div>
                      <h4 className="timeline-org text-mono">Swami Vivekanand Intermediate College</h4>
                      <div className="timeline-meta text-mono">
                        <span><Calendar size={12} /> March 2026 - April 2026</span>
                        <span><MapPin size={12} /> Remote</span>
                      </div>
                      <p className="timeline-desc" style={{ marginTop: '10px' }}>
                        Designed and deployed a fully responsive, highly visual school website using **React.js** to showcase bulletins and events. Setup **Sanity.io** as a headless CMS, allowing intermediate administrative staff to independently manage student bulletins, photo galleries, and timetables. Implemented custom WebP image compressors and lazy-loading scripts, decreasing the initial paint paint delay by 35%.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-marker neon-text-cyan"></div>
                    <div className="timeline-content cyber-card cyber-corners">
                      <div className="timeline-header">
                        <Code size={16} className="neon-text-cyan" />
                        <h3 className="timeline-title">Blockchain Research Intern</h3>
                      </div>
                      <h4 className="timeline-org text-mono">0x_Befikra (Web3 Startup)</h4>
                      <div className="timeline-meta text-mono">
                        <span><Calendar size={12} /> Jan 2025 - Feb 2025</span>
                        <span><MapPin size={12} /> Remote</span>
                      </div>
                      <p className="timeline-desc" style={{ marginTop: '10px' }}>
                        Assisted in comprehensive market research of emerging Web3 startups, specializing in the TON ecosystem and native utility tokens. Prepared formatted tokenomics datasets, research summaries on blockchain parameters, and mapped user-case scenarios for token distribution models.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Academic Roadmap & Achievements */}
              <div>
                <h2 className="section-title text-mono" style={{ marginBottom: '24px' }}><span className="neon-text-cyan">&gt;</span> ACADEMIC_ROADMAP</h2>
                
                <div className="roadmap-timeline">
                  
                  <div className="timeline-item">
                    <div className="timeline-marker neon-text-cyan"></div>
                    <div className="timeline-content cyber-card cyber-corners">
                      <div className="timeline-header">
                        <BookOpen size={16} className="neon-text-cyan" />
                        <h3 className="timeline-title">Bachelor of Technology (Computer Science)</h3>
                      </div>
                      <h4 className="timeline-org text-mono">KIET Group of Institutions (AKTU)</h4>
                      <div className="timeline-meta text-mono">
                        <span><Calendar size={12} /> 2023 - 2027</span>
                        <span><MapPin size={12} /> Delhi-NCR</span>
                      </div>
                      <p className="timeline-desc" style={{ marginTop: '10px' }}>
                        Pursuing B.Tech CSE with solid academic engagement, maintaining a cumulative **SGPA of 8.30/10**. Engaging in rigorous studies of Data Structures, Algorithmic Analysis, Object-Oriented Programming (OOPs), DBMS, and modern operating system concepts.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content cyber-card cyber-corners">
                      <div className="timeline-header">
                        <BookOpen size={16} className="text-muted" />
                        <h3 className="timeline-title">Secondary Schooling (Class X & XII)</h3>
                      </div>
                      <h4 className="timeline-org text-mono">Swami Vivekanand Intermediate College (UP Board)</h4>
                      <div className="timeline-meta text-mono">
                        <span><Calendar size={12} /> Gorakhpur, UP</span>
                      </div>
                      <p className="timeline-desc" style={{ marginTop: '10px' }}>
                        * **Class XII (Intermediate):** Graduated in 2022 under the Science PCM stream with **80.60%** marks.
                        <br />
                        * **Class X (High School):** Graduated in 2020 with **87.17%** marks.
                      </p>
                    </div>
                  </div>

                  {/* Achievements and leadership blocks */}
                  <div className="timeline-item">
                    <div className="timeline-marker neon-text-purple"></div>
                    <div className="timeline-content cyber-card cyber-corners" style={{ border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                      <div className="timeline-header">
                        <Sparkles size={16} className="neon-text-purple" />
                        <h3 className="timeline-title">Achievements & Leadership Logs</h3>
                      </div>
                      <ul style={{ paddingLeft: '16px', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                        <li>**Technocrats Club Management Lead:** Coordinated recruitment, operations, and logistics for large-scale engineering hackathons (Innotech\'25, Technoverse), managing team dynamics for 20+ active organizers.</li>
                        <li>**National Hackathon Finalist:** Secured **Top 4 at SprintHacks 3.0** and became a **National Finalist at the IEEE SSH Hackathon** (competing among the top 50 out of 270 teams nationally).</li>
                        <li>**Qualified GATE 2026:** Successfully cleared the national-level CS/IT examination, demonstrating strong mastery of computer science fundamentals.</li>
                      </ul>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>
        )}

        {/* 5. CONTACT SECURE CONNECTION UPLINK */}
        <section id="contact" className="contact-uplink-section cyber-corners" style={{ marginTop: '40px' }}>
          <div className="laser-grid"><div className="laser-line"></div></div>
          
          <h2 className="section-title text-mono"><span className="neon-text-mint">&gt;</span> SECURE_COMMUNICATION_PORT</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.9rem' }}>
            Transmit secure packet data directly to Aditya\'s database. All connection payloads are routed instantly without page refreshes.
          </p>

          <form onSubmit={handleContactSubmit} className="cyber-form text-mono">
            <div className="form-row">
              <div className="form-group">
                <label>SENDER_NAME:</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter name..." 
                  className="cyber-input" 
                  required
                />
              </div>
              <div className="form-group">
                <label>SENDER_EMAIL:</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter email..." 
                  className="cyber-input" 
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>TRANSMISSION_SUBJECT:</label>
              <input 
                type="text" 
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Enter subject..." 
                className="cyber-input" 
              />
            </div>

            <div className="form-group">
              <label>TRANSMISSION_PAYLOAD_MESSAGE:</label>
              <textarea 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="4" 
                placeholder="Write packet payload message details..." 
                className="cyber-input"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="cyber-btn cyber-btn-cyan" 
              disabled={isSubmitting}
              style={{ alignSelf: 'flex-start', marginTop: '8px' }}
            >
              {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT_PACKET'}
            </button>
          </form>
        </section>

        <footer className="core-footer text-mono">
          <span>PORT_STATUS: ONLINE</span>
          <span>© {new Date().getFullYear()} ADITYA_RAUNIYAR | B.TECH CSE KIET Group of Institutions</span>
        </footer>

      </main>

      {/* Vercel Analytics telemetry tracker */}
      <Analytics />

      {/* Cyber Toast alert alerts */}
      {toast.show && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast({ ...toast, show: false })} 
        />
      )}

      {/* Localized dashboard layout stylesheet styles */}
      <style>{`
        .app-viewport {
          position: relative;
          min-height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
        }

        .content-area {
          margin-top: 60px; /* HUD header offset */
          margin-right: 260px; /* HUD sidebar offset */
          padding: 40px;
          min-height: calc(100vh - 60px);
          display: flex;
          flex-direction: column;
          gap: 48px;
          overflow-y: auto;
          position: relative;
          z-index: 10;
        }

        @media (max-width: 992px) {
          .content-area {
            margin-right: 0;
            padding: 24px;
          }
          .core-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }

        .reveal-in {
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .main-title {
          font-size: clamp(2.3rem, 5.5vw, 4.2rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .role-typewriter {
          font-size: clamp(0.95rem, 2vw, 1.25rem);
          color: var(--text-secondary);
        }

        .core-bio {
          font-size: 1.12rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 720px;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 16px;
          max-width: 750px;
          margin-top: 24px;
        }

        .stat-card {
          background: rgba(8, 12, 28, 0.45);
          border: 1px solid rgba(16, 185, 129, 0.08);
          padding: 16px;
          display: flex;
          flex-direction: column;
          border-radius: 6px;
          transition: var(--transition-smooth);
        }

        .stat-card:hover {
          border-color: var(--accent-mint);
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.08);
        }

        .stat-num {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .stat-lbl {
          font-size: 0.65rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .social-link-item {
          color: var(--text-secondary);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition-smooth);
          padding: 8px 16px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .social-link-item:hover {
          color: var(--accent-mint);
          border-color: var(--accent-mint);
          background: rgba(16, 185, 129, 0.04);
          transform: translateY(-2px);
          box-shadow: var(--glow-mint);
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        /* Skill Grid */
        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .skills-group {
          background: rgba(8, 12, 28, 0.4);
        }

        .category-heading {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          border-bottom: 1px solid rgba(16, 185, 129, 0.15);
          padding-bottom: 12px;
          margin-bottom: 16px;
        }

        .skills-badge-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .skill-badge {
          font-size: 0.85rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Timeline Section */
        .roadmap-timeline {
          position: relative;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .roadmap-timeline::before {
          content: '';
          position: absolute;
          left: 4px;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background: rgba(255, 255, 255, 0.08);
        }

        .timeline-item {
          position: relative;
        }

        .timeline-marker {
          position: absolute;
          left: -20px;
          top: 12px;
          width: 8px;
          height: 8px;
          background: var(--text-muted);
          border-radius: 50%;
          transform: translateX(-50%);
        }

        .timeline-marker.neon-text-mint {
          background: var(--accent-mint);
          box-shadow: var(--glow-mint);
        }

        .timeline-marker.neon-text-cyan {
          background: var(--accent-cyan);
          box-shadow: var(--glow-cyan);
        }

        .timeline-content {
          padding: 16px;
        }

        .timeline-title {
          font-size: 1rem;
          font-weight: 700;
        }

        .timeline-org {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .timeline-meta {
          display: flex;
          gap: 16px;
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .timeline-meta span {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .timeline-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Contact Section */
        .contact-uplink-section {
          background: rgba(16, 185, 129, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 32px;
          border-radius: 8px;
        }

        .cyber-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .cyber-input {
          background: rgba(4, 7, 19, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #fff;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          padding: 12px;
          border-radius: 6px;
          outline: none;
          transition: var(--transition-smooth);
        }

        .cyber-input:focus {
          border-color: var(--accent-mint);
          box-shadow: var(--glow-mint);
          background: rgba(4, 7, 19, 0.85);
        }

        .core-footer {
          margin-top: auto;
          padding: 24px 0 0 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          font-size: 0.65rem;
          color: var(--text-muted);
          flex-wrap: wrap;
          gap: 12px;
        }
      `}</style>
    </div>
  );
}
