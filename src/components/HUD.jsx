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
          { text: '  clear          - Flush console shell buffer.', type: 'info' },
          { text: 'Project specific diagnostics:', type: 'success' },
          { text: '  sehatvani      - Diagnostics for clinical report translator.', type: 'info' },
          { text: '  civicspark     - Campaign parameters for Civic Platform hub.', type: 'info' },
          { text: '  dronaai        - Socket tracking node for peer-to-peer lobby.', type: 'info' },
          { text: '  svic           - Compression notice for educational portal.', type: 'info' }
        );
        break;
      case 'skills':
        updatedHistory.push(
          { text: '[SKILL CHECKSUM LOADED SUCCESSFULLY]', type: 'success' },
          { text: '• LANGUAGES & CONCEPTS: C++ (DSA Specialist), JavaScript (ES6+), HTML5/CSS3, SQL, Python. Core: OOPs, DBMS structures, and Operating Systems.', type: 'info' },
          { text: '• FRAMEWORKS & STORES: React.js hooks & custom context, Vite, Redux state storage, Node.js servers, Express.js REST APIs, NoSQL MongoDB, Sanity headless CMS, Tailwind CSS.', type: 'info' },
          { text: '• CS UTILITIES: Version Control (Git/GitHub), Postman API, JWT encryption, Socket.io, Gemini AI API.', type: 'info' }
        );
        break;
      case 'projects':
        updatedHistory.push(
          { text: '[PROJECT ARCHITECTURE RESOLVED]', type: 'success' },
          { text: '1. SVIC School Portal: Freelance College Notice Board & CMS. Live: https://svic.co.in', type: 'info' },
          { text: '2. SehatVani: AI Clinical Report Translator (English/Hindi) [MERN]. Live: https://sehat-vani.vercel.app', type: 'info' },
          { text: '3. CodeRoom: Real-time Collaborative Code Workspace [Socket.io/Monaco]. GitHub: https://github.com/Aditya-Rauniyar/CodeRoom', type: 'info' },
          { text: '4. CivicSpark: Civic Campaign Platform with Integrated AI & NGO Networking. GitHub: https://github.com/Aditya-Rauniyar/Civics-Spark', type: 'info' },
          { text: '5. EduAdi: 1st Year EdTech Learning UI Platform. Live: https://aditya-rauniyar.github.io/EduAdi/', type: 'info' },
          { text: '6. DronaAi: Real-time P2P EdTech Lobbies & Gemini Flashcards [MERN]. GitHub: https://github.com/Aditya-Rauniyar/DronaAi', type: 'info' },
          { text: '7. FootPrint: Environmental Carbon Footprint Calculator. GitHub: https://github.com/Aditya-Rauniyar/Foot_Print', type: 'info' },
          { text: '8. WeatherApp: Real-time Meteorological Forecast Dashboard. Live: https://aditya-rauniyar.github.io/WeatherApp/', type: 'info' },
          { text: 'Type a project name (e.g., "svic", "sehatvani", "coderoom", "civicspark", "eduadi", "dronaai", "footprint", "weatherapp") for deep diagnostics.', type: 'success' }
        );
        break;
      case 'about':
        updatedHistory.push(
          { text: '[SUBJECT PROFILE ACQUIRED]', type: 'success' },
          { text: '• SUBJECT: Aditya Rauniyar, CSE undergrad at KIET Group of Institutions (AKTU) Delhi-NCR (SGPA: 8.30/10).', type: 'info' },
          { text: '• NATION GATE: Qualified GATE 2026 CS/IT examination in Computer Science fundamentals.', type: 'info' },
          { text: '• DATA METRICS: 600+ DSA solves (LeetCode, GeeksForGeeks, CodeChef).', type: 'info' },
          { text: '• HACKATHONS: Deployed Top 4 major project at SprintHacks 3.0; National Finalist in IEEE SSH Hackathon.', type: 'info' }
        );
        break;
      case 'matrix':
        updatedHistory.push(
          { text: '[SOLVED DIFFICULTY MATRIX COUNTS]', type: 'success' },
          { text: '  EASY:   [█████████████░░░░░░░░░] 40% (207 Solved)', type: 'info' },
          { text: '  MEDIUM: [████████████████░░░░░░] 52% (269 Solved)', type: 'info' },
          { text: '  HARD:   [███░░░░░░░░░░░░░░░░░░░]  8% (37 Solved)', type: 'info' },
          { text: '  TOTAL:  513 LeetCode Solved (763+ Overall across DSA Platforms)', type: 'success' }
        );
        break;
      case 'svic':
        updatedHistory.push(
          { text: '[QUERY: SVIC SCHOOL PORTAL]', type: 'success' },
          { text: '• URL DEPLOY: https://svic.co.in', type: 'success' },
          { text: '• MEDIA COMPRESSION: Multi-threaded WebP lossless converter integration.', type: 'info' },
          { text: '• SPEED GAIN: 35% paint delay decrease via notice-board caching pipelines.', type: 'info' }
        );
        break;
      case 'sehatvani':
        updatedHistory.push(
          { text: '[QUERY: SEHATVANI AI MEDICAL SUMMARIZER]', type: 'success' },
          { text: '• URL DEPLOY: https://sehat-vani.vercel.app', type: 'success' },
          { text: '• GITHUB: https://github.com/Aditya-Rauniyar/sehatvani', type: 'info' },
          { text: '• TRANSLATION: High-performance natural language summaries in Hindi and English.', type: 'info' }
        );
        break;
      case 'coderoom':
        updatedHistory.push(
          { text: '[QUERY: CODEROOM COLLABORATIVE WORKSPACE]', type: 'success' },
          { text: '• GITHUB: https://github.com/Aditya-Rauniyar/CodeRoom', type: 'success' },
          { text: '• SOCKET.IO: Real-time room synchronizations for instant multi-user editing.', type: 'info' },
          { text: '• COMPILER: Monaco Editor integration with custom execution highlighters.', type: 'info' }
        );
        break;
      case 'civicspark':
        updatedHistory.push(
          { text: '[QUERY: CIVICSPARK CIVIC PLATFORM CAMPAIGNS]', type: 'success' },
          { text: '• GITHUB: https://github.com/Aditya-Rauniyar/Civics-Spark', type: 'success' },
          { text: '• MODULES: Integrated AI validation, NGO network connections, and evidence proof registries.', type: 'info' }
        );
        break;
      case 'eduadi':
        updatedHistory.push(
          { text: '[QUERY: EDUADI 1ST YEAR EDTECH PLATFORM]', type: 'success' },
          { text: '• URL DEPLOY: https://aditya-rauniyar.github.io/EduAdi/', type: 'success' },
          { text: '• GITHUB: https://github.com/Aditya-Rauniyar/EduAdi', type: 'info' },
          { text: '• DESCRIPTION: A modern ready UI for an EdTech platform built with HTML, CSS, and JS during 1st year for learning.', type: 'info' }
        );
        break;
      case 'dronaai':
        updatedHistory.push(
          { text: '[QUERY: DRONAAI MERN P2P EDTECH PLATFORM]', type: 'success' },
          { text: '• GITHUB: https://github.com/Aditya-Rauniyar/DronaAi', type: 'success' },
          { text: '• STUDYSPECIAL: Dynamic Socket.io study spaces for collaborative visual note sharing.', type: 'info' },
          { text: '• CORE AI: Gemini API auto-generation node for summary flashcards.', type: 'info' }
        );
        break;
      case 'footprint':
        updatedHistory.push(
          { text: '[QUERY: FOOTPRINT CARBON CALCULATOR]', type: 'success' },
          { text: '• GITHUB: https://github.com/Aditya-Rauniyar/Foot_Print', type: 'success' },
          { text: '• TELEMETRY: Environmental tracking calculator for energy variables & green solutions.', type: 'info' }
        );
        break;
      case 'weatherapp':
        updatedHistory.push(
          { text: '[QUERY: WEATHERAPP METEOROLOGY DASHBOARD]', type: 'success' },
          { text: '• URL DEPLOY: https://aditya-rauniyar.github.io/WeatherApp/', type: 'success' },
          { text: '• GITHUB: https://github.com/Aditya-Rauniyar/WeatherApp', type: 'info' },
          { text: '• METRICS: Real-time meteorological forecast metrics via OpenWeather API.', type: 'info' }
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
          .hud-header {
            padding: 0 12px;
            gap: 12px;
          }
          .hud-nav {
            overflow-x: auto;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
            padding: 4px 0;
            gap: 6px;
            scrollbar-width: none;
          }
          .hud-nav::-webkit-scrollbar {
            display: none;
          }
          .hud-nav-item {
            padding: 6px 10px;
            font-size: 0.72rem;
            flex-shrink: 0;
          }
        }
        @media (max-width: 500px) {
          .system-clock {
            display: none;
          }
          .header-logo span {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
}
