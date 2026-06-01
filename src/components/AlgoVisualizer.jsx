import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, AlertCircle } from 'lucide-react';

export default function AlgoVisualizer() {
  const [array, setArray] = useState([]);
  const [activeIndices, setActiveIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(60); // ms delay

  const arraySize = 16;

  // Initialize randomized array
  const generateNewArray = () => {
    if (isSorting) return;
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(Math.floor(Math.random() * 85) + 15); // values 15 to 100
    }
    setArray(newArray);
    setActiveIndices([]);
    setSortedIndices([]);
  };

  useEffect(() => {
    generateNewArray();
  }, []);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Bubble Sort algorithm with animation delays
  const runBubbleSort = async () => {
    if (isSorting) return;
    setIsSorting(true);
    setSortedIndices([]);

    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Mark active comparison indices
        setActiveIndices([j, j + 1]);
        await sleep(speed);

        if (arr[j] > arr[j + 1]) {
          // Swap values
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          await sleep(speed);
        }
      }
      // Element at n - i - 1 is now in its final sorted position
      setSortedIndices((prev) => [...prev, n - i - 1]);
    }

    setActiveIndices([]);
    setIsSorting(false);
  };

  // Selection Sort algorithm with animation delays
  const runSelectionSort = async () => {
    if (isSorting) return;
    setIsSorting(true);
    setSortedIndices([]);

    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        setActiveIndices([j, minIdx]);
        await sleep(speed);

        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }

      if (minIdx !== i) {
        // Swap values
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        setArray([...arr]);
        await sleep(speed);
      }
      setSortedIndices((prev) => [...prev, i]);
    }

    setActiveIndices([]);
    setIsSorting(false);
  };

  return (
    <div className="algo-visualizer-widget cyber-card cyber-corners">
      <div className="widget-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-mint)', boxShadow: 'var(--glow-mint)' }}></span>
          <h4 className="text-mono" style={{ fontSize: '0.85rem', letterSpacing: '0.05em' }}>LIVE_ALGO_VISUALIZER</h4>
        </div>
        <span className="text-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
          {isSorting ? 'COMPILING_OPS...' : 'SYS_IDLE'}
        </span>
      </div>

      {/* Visualizer Bars Area */}
      <div 
        style={{ 
          height: '160px', 
          display: 'flex', 
          alignItems: 'flex-end', 
          justifyContent: 'space-between', 
          gap: '8px',
          background: 'rgba(4, 6, 13, 0.4)',
          border: '1px solid rgba(16, 185, 129, 0.08)',
          borderRadius: '8px',
          padding: '16px 12px 0 12px',
          marginBottom: '20px'
        }}
      >
        {array.map((value, idx) => {
          let barClass = 'algo-bar';
          if (activeIndices.includes(idx)) barClass += ' active';
          if (sortedIndices.includes(idx)) barClass += ' sorted';

          return (
            <div 
              key={idx}
              className={barClass}
              style={{ 
                height: `${value}%`, 
                flex: 1, 
                position: 'relative'
              }}
            >
              {/* Optional values shown above on hover */}
              <span 
                className="text-mono" 
                style={{ 
                  position: 'absolute', 
                  top: '-16px', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  fontSize: '0.6rem', 
                  color: 'var(--text-secondary)',
                  opacity: activeIndices.includes(idx) ? 1 : 0,
                  transition: 'opacity 0.2s'
                }}
              >
                {value}
              </span>
            </div>
          );
        })}
      </div>

      {/* Control Buttons */}
      <div 
        style={{ 
          display: 'flex', 
          gap: '12px', 
          alignItems: 'center', 
          flexWrap: 'wrap' 
        }}
      >
        <button 
          onClick={runBubbleSort}
          disabled={isSorting}
          className="cyber-btn"
          style={{ fontSize: '0.75rem', padding: '6px 12px' }}
        >
          <Play size={12} /> BUBBLE_SORT
        </button>

        <button 
          onClick={runSelectionSort}
          disabled={isSorting}
          className="cyber-btn"
          style={{ fontSize: '0.75rem', padding: '6px 12px' }}
        >
          <Play size={12} /> SELECTION_SORT
        </button>

        <button 
          onClick={generateNewArray}
          disabled={isSorting}
          className="cyber-btn cyber-btn-cyan"
          style={{ fontSize: '0.75rem', padding: '6px 12px' }}
        >
          <RotateCcw size={12} /> SCRAMBLE
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '14px', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
        <AlertCircle size={10} className="neon-text-mint" />
        <span className="text-mono">TIME_COMPLEXITY: O(N²) | SPACE_COMPLEXITY: O(1)</span>
      </div>
    </div>
  );
}
