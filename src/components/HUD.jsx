import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TermIcon, Cpu, Network, Compass, Send } from 'lucide-react';

export default function HUD({ activeTab, setActiveTab }) {
  const [terminalHistory, setTerminalHistory] = useState([
    { text: '==================================================', type: 'info' },
    { text: '          ALGORITHMIC COMPILER COCKPIT v2.0       ', type: 'success' },
    { text: '==================================================', type: 'info' },
    { text: 'Uplink established. Memory allocation stable.', type: 'info' },
    { text: 'Type "help" to display active system query commands.', type: 'info' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const terminalEndRef = useRef(null);

  const [systemTime, setSystemTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory]);

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const command = terminalInput.trim().toLowerCase();
    const updatedHistory = [...terminalHistory, { text: `$ ${terminalInput}`, type: 'input' }];

    switch (command) {
      case 'help':
        updatedHistory.push(
          { text: 'Available Command Center queries:', type: 'success' },
          { text: '  skills   - Decrypts complete SDE core skill matrices.', type: 'info' },
          { text: '  projects - Loads deep databases of production projects.', type: 'info' },
          { text: '  about    - Decrypts academic timeline, GATE score, and leadership details.', type: 'info' },
          { text: '  clear    - Clear console screen buffer.', type: 'info' }
        );
        break;
      case 'skills':
        updatedHistory.push(
          { text: '[SKILL CHECKSUM LOADED SUCCESSFULLY]', type: 'success' },
          { text: '• LANGUAGES & CONCEPTS: Expert in C++ programming for solving high-performance algorithmic tasks. Fluent in JavaScript (ES6+), SQL query compilers, HTML5, and CSS3 grids. Solid foundations in core CS topics: Object-Oriented Programming (OOPs), Database Management Systems (DBMS), and Operating System (OS) threads.', type: 'info' },
          { text: '• FRONTEND FRAMEWORKS: Advanced engineering in React.js module states, custom hooks, and context wrappers. Fluent in responsive grid UI layouts utilizing TailwindCSS, Redux state storage libraries, and Bootstrap.', type: 'info' },
          { text: '• BACKEND & SECURITY: Competent in designing scalable RESTful APIs in Node.js and Express.js, full MongoDB schemas, secure JSON Web Token (JWT) session validations, and configuring headless content loaders (Sanity.io).', type: 'info' }
        );
        break;
      case 'projects':
        updatedHistory.push(
          { text: '[PROJECT ARCHITECTURE RESOLVED]', type: 'success' },
          { text: '1. SehatVani (Medical Multi-lingual summarizer): Converts clinical laboratory blood test variables into simplified descriptions in English and Hindi. Coded JWT security routers and MongoDB data nodes.', type: 'info' },
          { text: '2. SkillSwap (Bipartite Peer-to-Peer exchange): A skill-matching app that pairs users with complementary skills. Core engine is built on bipartite graph-search logic, with secure user timelines.', type: 'info' },
          { text: '3. SVIC school portal (svic.co.in): Dynamic school website built for intermediate academies. Integrates Sanity.io as a headless CMS, media WebP compressions, and notice panels.', type: 'info' },
          { text: '4. Blog App (CRUD engine): Backend EJS templating engine and REST router, built to query MongoDB arrays in near O(1) indexes.', type: 'info' }
        );
        break;
      case 'about':
        updatedHistory.push(
          { text: '[SUBJECT PROFILE ACQUIRED]', type: 'success' },
          { text: '• SUBJECT: Aditya Rauniyar, Computer Science undergraduate at KIET Group of Institutions (AKTU) Delhi-NCR. Maintains an active academic record with a cumulative SGPA of 8.30/10.', type: 'info' },
          { text: '• GATE 2026: QUALIFIED the national-level CS/IT examination with high competency marks in core computer engineering.', type: 'info' },
          { text: '• DSA METRICS: Solved over 600+ complex code problems across Leetcode (350+ solved), GeeksForGeeks, and Codechef (active rating 1500+).', type: 'info' },
          { text: '• LEADERSHIP: Coordinated and managed massive recruitments, logistics, and operations for regional hackathons (Innotech\'25, Technoverse) for the KIET Technocrats Club (team of 20+ members).', type: 'info' }
        );
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        updatedHistory.push({ text: `Console Error: Parameter "${command}" not recognized. Type "help" to display parameters.`, type: 'error' });
    }

    setTerminalHistory(updatedHistory);
    setTerminalInput('');
  };

  const menuItems = [
    { id: 'core', label: 'System Core', icon: <Cpu size={15} /> },
    { id: 'skills', label: 'Skill Matrix', icon: <Network size={15} /> },
    { id: 'projects', label: 'Workspace Explorer', icon: <Cpu size={15} /> },
    { id: 'about', label: 'SDE Timeline', icon: <Compass size={15} /> },
  ];

  return (
    <div className="hud-container">
      {/* 1. TOP NAV CONTROL PANEL */}
      <header className="hud-header">
        <div className="header-logo" onClick={() => setActiveTab('core')}>
          <div className="logo-indicator"></div>
          <span className="text-mono" style={{ fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em' }}>
            ADITYA_COMMAND<span className="neon-text-mint">_v2.0</span>
          </span>
        </div>

        <nav className="hud-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`hud-nav-item text-mono ${activeTab === item.id ? 'active' : ''}`}
            >
              {item.icon}
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="system-clock text-mono">
          <Compass size={14} className="spinning-compass" />
          <span>{systemTime}</span>
        </div>
      </header>

      {/* 2. SIDEBAR DIAGNOSTIC DISPLAY */}
      <aside className="hud-sidebar">

        {/* INTERACTIVE RETRO TERMINAL SIMULATOR */}
        <div className="hud-widget cyber-corners" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div className="widget-header">
            <TermIcon size={14} className="neon-text-cyan" />
            <span className="text-mono">COMPILER_SHELL</span>
          </div>
          
          <div className="terminal-screen" style={{ flex: 1, overflowY: 'auto', padding: '10px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
            {terminalHistory.map((line, idx) => (
              <div
                key={idx}
                style={{
                  color: line.type === 'error' ? '#ff3b3b' : line.type === 'success' ? 'var(--accent-mint)' : line.type === 'input' ? 'var(--accent-cyan)' : '#8c9cb3',
                  marginBottom: '6px',
                  lineHeight: '1.4'
                }}
              >
                {line.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          <form onSubmit={handleTerminalSubmit} className="terminal-form" style={{ display: 'flex', borderTop: '1px solid rgba(16, 185, 129, 0.15)', background: 'rgba(4, 6, 13, 0.5)' }}>
            <span className="text-mono neon-text-mint" style={{ padding: '8px 4px 8px 8px', fontSize: '0.75rem' }}>$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="Query compiler..."
              className="text-mono"
              style={{
                flex: 1,
                background: 'none',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontSize: '0.75rem',
                padding: '8px 4px',
              }}
            />
            <button type="submit" style={{ background: 'none', border: 'none', color: 'var(--accent-mint)', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <Send size={12} />
            </button>
          </form>
        </div>
      </aside>

      {/* Styled Sheets local for HUD HUD */}
      <style>{`
        .hud-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 100;
          display: grid;
          grid-template-rows: 60px 1fr;
          grid-template-columns: 1fr 260px;
          grid-template-areas:
            "header header"
            "content sidebar";
        }

        .hud-header {
          grid-area: header;
          background: rgba(4, 7, 19, 0.85);
          border-bottom: 1px solid rgba(16, 185, 129, 0.15);
          backdrop-filter: blur(20px);
          pointer-events: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
        }

        .header-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .logo-indicator {
          width: 8px;
          height: 8px;
          background: var(--accent-mint);
          border-radius: 50%;
          box-shadow: var(--glow-mint);
          animation: blink 1.5s infinite;
        }

        .hud-nav {
          display: flex;
          gap: 16px;
        }

        .hud-nav-item {
          background: none;
          border: none;
          color: var(--text-secondary);
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          text-transform: uppercase;
          font-weight: 600;
          transition: var(--transition-smooth);
          position: relative;
        }

        .hud-nav-item:hover, .hud-nav-item.active {
          color: var(--accent-mint);
          text-shadow: var(--glow-mint);
        }

        .hud-nav-item.active::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent-mint);
          box-shadow: var(--glow-mint);
        }

        .system-clock {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .spinning-compass {
          animation: spin 8s linear infinite;
          color: var(--accent-mint);
        }

        .hud-sidebar {
          grid-area: sidebar;
          background: rgba(4, 7, 19, 0.75);
          border-left: 1px solid rgba(16, 185, 129, 0.1);
          backdrop-filter: blur(20px);
          pointer-events: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 12px;
          overflow-y: auto;
        }

        .hud-widget {
          background: var(--bg-secondary);
          border: 1px solid rgba(16, 185, 129, 0.15);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .widget-header {
          background: rgba(16, 185, 129, 0.05);
          border-bottom: 1px solid rgba(16, 185, 129, 0.15);
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .widget-body {
          padding: 12px;
          font-size: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .status-row {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.05);
          padding-bottom: 4px;
        }

        .status-row span:first-child {
          color: var(--text-secondary);
        }

        .terminal-screen::-webkit-scrollbar {
          width: 4px;
        }
        .terminal-screen::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.3);
          border-radius: 2px;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 992px) {
          .hud-container {
            grid-template-rows: 60px 1fr;
            grid-template-columns: 1fr;
            grid-template-areas:
              "header"
              "content";
          }
          .hud-sidebar {
            display: none;
          }
          .nav-label {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
