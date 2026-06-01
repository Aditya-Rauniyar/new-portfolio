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
          { text: 'Active SDE Core Queries:', type: 'success' },
          { text: '  skills         - Decrypt SDE skills matrix & compiler frameworks.', type: 'info' },
          { text: '  projects       - Load complete portfolio project log database.', type: 'info' },
          { text: '  about          - Load subject academics, GATE 2026, & achievements.', type: 'info' },
          { text: '  matrix         - Real-time solved difficulty percentages bar-charts.', type: 'info' },
          { text: '  naari          - Query NAARI emergency response system parameters.', type: 'info' },
          { text: '  clear          - Flush console shell buffer.', type: 'info' },
          { text: 'Project specific diagnostics:', type: 'success' },
          { text: '  sehatvani      - Diagnostics for clinical report translator.', type: 'info' },
          { text: '  bipartitelink  - Vector map of C++ bipartite skill matching.', type: 'info' },
          { text: '  svic           - Compression notice for educational portal.', type: 'info' }
        );
        break;
      case 'skills':
        updatedHistory.push(
          { text: '[SKILL CHECKSUM LOADED SUCCESSFULLY]', type: 'success' },
          { text: '• LANGUAGES & CONCEPTS: C++ Expert (DSA Specialist), JavaScript (ES6+), SQL compilers, HTML5/CSS3. Core CS: OOPs, DBMS structures, and multi-threaded Operating Systems (OS).', type: 'info' },
          { text: '• FRAMEWORKS & STORES: React.js hooks & state management, custom context, Redux state storage, Bootstrap, responsive CSS grids, Node.js servers, Express.js REST APIs, MongoDB databases, Sanity.io CMS.', type: 'info' },
          { text: '• CS MAJORS: Bipartite network graphs, Dynamic Programming (DP), Greedy search, secure JWT encryption protocols.', type: 'info' }
        );
        break;
      case 'projects':
        updatedHistory.push(
          { text: '[PROJECT ARCHITECTURE RESOLVED]', type: 'success' },
          { text: '1. SehatVani (AI Medical Summarizer): Multi-lingual translator (English/Hindi) parsing blood metrics via Express nodes.', type: 'info' },
          { text: '2. BipartiteLink (C++ Matching Engine): Pairs complementary skilled users using bipartite graph intersections.', type: 'info' },
          { text: '3. SVIC Portal (svic.co.in): Deployed school portal utilizing Sanity.io headless CMS with WebP compression pipelines.', type: 'info' },
          { text: '4. NAARI (Women Safety Platform): Real-time geolocation tracking with Socket.io alerts & automated Twilio triggers.', type: 'info' },
          { text: '5. Blog App (Express CRUD): Indexed MongoDB collection controller querying backend EJS views.', type: 'info' },
          { text: 'Type a project name (e.g., "naari", "sehatvani", "bipartitelink", "svic") for deep diagnostics.', type: 'success' }
        );
        break;
      case 'about':
        updatedHistory.push(
          { text: '[SUBJECT PROFILE ACQUIRED]', type: 'success' },
          { text: '• SUBJECT: Aditya Rauniyar, CSE undergrad at KIET Group of Institutions (AKTU) Delhi-NCR (SGPA: 8.30/10).', type: 'info' },
          { text: '• NATION GATE: Qualified GATE 2026 IT/CS examination in Computer Science fundamentals.', type: 'info' },
          { text: '• DATA METRICS: 600+ DSA solves (350+ LeetCode, GeeksForGeeks, CodeChef 1500+ active rating).', type: 'info' },
          { text: '• HACKATHONS: Deployed Top 4 major project at SprintHacks 3.0; National Finalist in IEEE SSH Hackathon.', type: 'info' }
        );
        break;
      case 'matrix':
        updatedHistory.push(
          { text: '[SOLVED DIFFICULTY MATRIX COUNTS]', type: 'success' },
          { text: '  EASY:   [█████████████░░░░░░░░░] 42% (201 Solved)', type: 'info' },
          { text: '  MEDIUM: [████████████████░░░░░░] 52% (252 Solved)', type: 'info' },
          { text: '  HARD:   [██░░░░░░░░░░░░░░░░░░░░]  6% (28 Solved)', type: 'info' },
          { text: '  TOTAL:  481 (Vite real-time API sync active)', type: 'success' }
        );
        break;
      case 'naari':
        updatedHistory.push(
          { text: '[QUERY: NAARI EMERGENCY RESPONSE PLATFORM]', type: 'success' },
          { text: '• BACKEND CHANNELS: Socket.io real-time polling nodes.', type: 'info' },
          { text: '• LATENCY CHECK: 180ms location telemetry update interval.', type: 'info' },
          { text: '• SECURITY ENCRYPT: AES-256 coordinates envelope encryption.', type: 'info' },
          { text: '• ALERTS: Twilio emergency voice and WhatsApp payload triggers.', type: 'info' }
        );
        break;
      case 'sehatvani':
        updatedHistory.push(
          { text: '[QUERY: SEHATVANI AI MEDICAL SUMMARIZER]', type: 'success' },
          { text: '• ARCHITECTURE: Model-View-Controller (MVC) API routers.', type: 'info' },
          { text: '• DICTIONARIES: 120+ clinical parameter ranges mapped.', type: 'info' },
          { text: '• TRANSLATION: High-performance natural language summaries in Hindi and English.', type: 'info' }
        );
        break;
      case 'bipartitelink':
        updatedHistory.push(
          { text: '[QUERY: BIPARTITELINK C++ MATCHING ENGINE]', type: 'success' },
          { text: '• ALGORITHM: Disjoint Bipartite graph complementary matching.', type: 'info' },
          { text: '• MONOSPACE GRAPH RENDERING:', type: 'success' },
          { text: '    [User: Learner] ──(T3/T4 learn)──> [Adjacency Nodes] ──(teach)──> [User: Teacher]', type: 'info' },
          { text: '• COMPUTATION: Near-instant O(N) lookup time utilizing custom index hashes.', type: 'info' }
        );
        break;
      case 'svic':
        updatedHistory.push(
          { text: '[QUERY: SVIC SCHOOL PORTAL]', type: 'success' },
          { text: '• URL STAGE: Deployed live at https://svic.co.in', type: 'success' },
          { text: '• MEDIA COMPRESSION: Multi-threaded WebP lossless converter integration.', type: 'info' },
          { text: '• SPEED GAIN: 35% paint delay decrease via notice-board caching pipelines.', type: 'info' }
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
