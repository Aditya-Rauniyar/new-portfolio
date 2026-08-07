import React, { useState } from 'react';
import { FileCode, ExternalLink, Code, Folder, GitBranch } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function CodeWorkspace() {
  const [activeFile, setActiveFile] = useState('svic');

  const files = [
    { id: 'svic', name: 'svic_portal.config.json', type: 'json', icon: <FileCode size={14} style={{ color: '#e2e8f0' }} /> },
    { id: 'sehatvani', name: 'SehatVani.jsx', type: 'jsx', icon: <FileCode size={14} className="neon-text-mint" /> },
    { id: 'coderoom', name: 'CodeRoom.jsx', type: 'jsx', icon: <FileCode size={14} className="neon-text-cyan" /> },
    { id: 'civicspark', name: 'CivicSpark.jsx', type: 'jsx', icon: <FileCode size={14} className="neon-text-purple" /> },
    { id: 'eduadi', name: 'EduAdi.jsx', type: 'jsx', icon: <FileCode size={14} className="neon-text-mint" /> },
    { id: 'dronaai', name: 'DronaAi.jsx', type: 'jsx', icon: <FileCode size={14} className="neon-text-cyan" /> },
    { id: 'footprint', name: 'FootPrint.jsx', type: 'jsx', icon: <FileCode size={14} className="neon-text-purple" /> },
    { id: 'weatherapp', name: 'WeatherApp.js', type: 'js', icon: <FileCode size={14} style={{ color: '#f59e0b' }} /> }
  ];

  const codeContents = {
    svic: {
      title: 'Swami Vivekanand Intermediate College Portal',
      sub: 'Freelance Headless CMS Configuration & Notice Board',
      path: 'config/sanity/schema.json',
      code: `{
  "name": "svic_portal_schema",
  "title": "Swami Vivekanand Intermediate College",
  "type": "document",
  "fields": [
    { "name": "noticeTitle", "type": "string" },
    { "name": "publishDate", "type": "datetime" },
    { "name": "attachmentPdf", "type": "file" }
  ]
}`,
      overview: 'A production website built for Swami Vivekanand Intermediate College in Uttar Pradesh. Features integrated student notice boards and timetables driven by a headless Sanity.io CMS.',
      tech: ['React.js', 'Sanity.io', 'Tailwind CSS', 'WebP Optimizer'],
      metrics: [
        'Headless CMS notice board deployment for quick notice publishing.',
        'Multi-threaded WebP converters reduced initial paint delay by 35%.',
        'Mobile-friendly administrative panel for school staff management.'
      ],
      live: 'https://svic.co.in'
    },
    sehatvani: {
      title: 'SehatVani',
      sub: 'Blood Report Multi-lingual Summarizer (MERN Stack)',
      path: 'src/components/report/ReportSummarizer.jsx',
      code: `// SehatVani Report Summarizer - Multilingual Translation
import React, { useState } from 'react';

export default function ReportSummarizer({ metricsData }) {
  const [language, setLanguage] = useState('hi');
  const [isTranslating, setIsTranslating] = useState(false);

  return (
    <div className="report-panel">
      <h3>Translation Node: {language.toUpperCase()}</h3>
    </div>
  );
}`,
      overview: 'Converts complex clinical blood test parameters into simplified, actionable natural language bullet points, supporting English and Hindi layouts for accessibility.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
      metrics: [
        'JWT-protected secure REST API endpoints.',
        'High-speed JSON mapping schemas for standard medical parameters (T3, T4, Hemoglobin).',
        'Built with responsive Tailwind panels for mobile-friendly clinic visits.'
      ],
      live: 'https://sehat-vani.vercel.app',
      github: 'https://github.com/Aditya-Rauniyar/sehatvani'
    },
    coderoom: {
      title: 'CodeRoom',
      sub: 'Real-time Collaborative Code Workspace & Execution Engine',
      path: 'src/components/editor/CodeRoomSession.jsx',
      code: `// CodeRoom Real-time Collaboration & Code Execution Node
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function CodeRoomSession({ roomId, userId }) {
  const [code, setCode] = useState('// Write real-time collaborative code...');
  const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {
    const socket = io('https://api.coderoom.dev');
    socket.emit('join_room', { roomId, userId });
    return () => socket.disconnect();
  }, [roomId, userId]);

  return (
    <div className="coderoom-session">
      <h3>CodeRoom Active Workspace: {roomId}</h3>
    </div>
  );
}`,
      overview: 'A real-time collaborative code editor platform featuring multi-user rooms, instant live syntax editing, collaborative workspace sessions, and code execution capabilities.',
      tech: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'Monaco Editor'],
      metrics: [
        'Real-time WebSocket room synchronizations for instant peer editing.',
        'Custom language execution syntax highlighter & compiler runner.',
        'Optimized room state management for minimal latency.'
      ],
      github: 'https://github.com/Aditya-Rauniyar/CodeRoom'
    },
    civicspark: {
      title: 'CivicSpark',
      sub: 'Social & Civic Campaign Management Platform',
      path: 'src/components/civic/CampaignHub.jsx',
      code: `// CivicSpark Social Campaigns Platform - Evidence Validator Node
import React, { useState } from 'react';

export default function EvidenceValidator({ campaignId }) {
  return (
    <div className="evidence-panel">
      <h4>Campaign Validation Node</h4>
    </div>
  );
}`,
      overview: 'The Civic Platform is a full-stack web application that empowers individuals and organizations to create, manage, and support campaigns for social, environmental, and civic causes.',
      tech: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
      metrics: [
        'Shipped responsive campaigns dashboard and social campaign creators.',
        'Reduced component redundancy by 40% using a shared team-wide UI library.',
        'Accelerated deployment pipelines through Git branch reviews and validations.'
      ],
      github: 'https://github.com/Aditya-Rauniyar/Civics-Spark'
    },
    eduadi: {
      title: 'EduAdi',
      sub: '1st Year EdTech Learning UI Platform',
      path: 'src/components/edu/EduHub.jsx',
      code: `// EduAdi EdTech Learning Platform - HTML5/CSS3/JS
import React from 'react';

export default function EduHub() {
  return (
    <div className="edu-classroom">
      <h3>EduAdi 1st Year EdTech Learning Hub</h3>
    </div>
  );
}`,
      overview: 'A modern ready UI for an EdTech platform built with HTML, CSS, and JavaScript during 1st year for learning.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      metrics: [
        'Clean HTML5 & CSS3 layout design built during 1st year for learning.',
        'Responsive components for course materials and lecture cards.',
        'Lightweight web pages hosted live on GitHub Pages.'
      ],
      live: 'https://aditya-rauniyar.github.io/EduAdi/',
      github: 'https://github.com/Aditya-Rauniyar/EduAdi'
    },
    dronaai: {
      title: 'DronaAi',
      sub: 'MERN Real-Time Peer-to-Peer EdTech Lobbies',
      path: 'src/components/study/DronaLobby.jsx',
      code: `// DronaAi Peer-to-Peer Study Lobby Node with Socket.io
import React from 'react';

export default function DronaLobby({ lobbyId }) {
  return (
    <div className="drona-study-lobby">
      <h3>DronaAi Workspace Lobby: {lobbyId}</h3>
    </div>
  );
}`,
      overview: 'A real-time peer-to-peer educational platform featuring direct chat connections, study lobbies, Gemini API integrations, and collaborative study spaces with Socket.io.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Gemini API'],
      metrics: [
        'Dynamic study spaces enabling multiple users to share visual notes and collaborate.',
        'Gemini API automation generating study flashcards and summaries from reports.',
        'Direct study lobby connections configured with near-zero latency.'
      ],
      github: 'https://github.com/Aditya-Rauniyar/DronaAi'
    },
    footprint: {
      title: 'FootPrint',
      sub: 'Personal Environmental Carbon Calculator',
      path: 'src/components/eco/CarbonFootprint.jsx',
      code: `// Foot_Print Carbon Footprint Tracking Node
import React from 'react';

export default function CarbonFootprint() {
  return (
    <div className="eco-calculator">
      <h3>Foot_Print Tracking Node</h3>
    </div>
  );
}`,
      overview: 'An environmental tracking calculator designed to compute personal carbon impacts, analyze energy consumption variables, and offer actionable green solutions.',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
      metrics: [
        'Instant energy algorithm tracking carbon factors.',
        'Clean responsive charts plotting monthly carbon reductions.',
        'Lightweight static site built for mobile visits.'
      ],
      github: 'https://github.com/Aditya-Rauniyar/Foot_Print'
    },
    weatherapp: {
      title: 'WeatherApp',
      sub: 'Meteorological Forecast Dashboard',
      path: 'src/components/weather/WeatherDashboard.js',
      code: `// WeatherApp Meteorology Dashboard - Forecast Fetcher
const fetchWeatherForecast = async (city) => {
  return { temp: 24, wind: 5 };
};`,
      overview: 'A real-time weather forecasting dashboard providing real-time meteorological metrics, forecasts, dynamic wind gauges, and ambient temperatures.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API'],
      metrics: [
        'Fully responsive meteorological gauges optimized for all screens.',
        'Monospace temperature readings and wind dials.',
        'Zero external heavy libraries, achieving a 99/100 Lighthouse performance.'
      ],
      live: 'https://aditya-rauniyar.github.io/WeatherApp/',
      github: 'https://github.com/Aditya-Rauniyar/WeatherApp'
    }
  };

  const activeData = codeContents[activeFile] || codeContents.svic;
  const codeLines = activeData.code ? activeData.code.split('\n') : [];

  const highlightLine = (lineText) => {
    if (!lineText) return '';
    if (lineText.trim().startsWith('//') || lineText.trim().startsWith('/*')) {
      return <span style={{ color: '#64748b', fontStyle: 'italic' }}>{lineText}</span>;
    }
    return lineText;
  };

  return (
    <div className="workspace-grid">
      
      {/* 1. MOCK IDE WORKSPACE CONTAINER */}
      <div className="ide-workspace">
        
        {/* IDE Sidebar File Tree */}
        <div className="ide-file-tree">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
            <Folder size={12} />
            <span>workspace_root</span>
          </div>

          <div style={{ paddingLeft: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-primary)' }}>
              <Folder size={12} className="neon-text-mint" />
              <span>projects</span>
            </div>
            
            <div style={{ paddingLeft: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {files.map((file) => (
                <div
                  key={file.id}
                  onClick={() => setActiveFile(file.id)}
                  className={`ide-file-item ${activeFile === file.id ? 'active' : ''}`}
                >
                  {file.icon}
                  <span>{file.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IDE Editor Area */}
        <div className="ide-editor-area">
          {/* Top tabs */}
          <div className="ide-editor-tab-row">
            <div className="ide-editor-tab">
              {files.find(f => f.id === activeFile).icon}
              <span>{files.find(f => f.id === activeFile).name}</span>
            </div>
          </div>

          {/* Active Code Window */}
          <div className="ide-editor-code-container">
            <div className="ide-line-numbers">
              {codeLines.map((_, idx) => (
                <div key={idx} style={{ height: '1.5em' }}>{idx + 1}</div>
              ))}
            </div>
            <div className="ide-code-lines">
              {codeLines.map((line, idx) => (
                <div key={idx} style={{ height: '1.5em', whiteSpace: 'pre' }}>
                  {highlightLine(line)}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* 2. ARCHITECTURAL DETAILS PANEL */}
      <div className="cyber-card cyber-corners" style={{ border: '1px solid rgba(16, 185, 129, 0.15)', height: '480px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ borderBottom: '1px solid rgba(16, 185, 129, 0.15)', paddingBottom: '10px', marginBottom: '14px' }}>
          <span className="text-mono neon-text-mint" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>[ SYSTEM_DIAGNOSTICS ]</span>
          <h3 className="text-mono" style={{ fontSize: '1.1rem', margin: '4px 0 0 0' }}>{activeData.title}</h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{activeData.sub}</span>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <h4 className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--text-primary)', marginBottom: '6px' }}>[ SYSTEM_OVERVIEW ]</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {activeData.overview}
            </p>
          </div>

          <div>
            <h4 className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--text-primary)', marginBottom: '6px' }}>[ TECH_STACK ]</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {activeData.tech.map((t, idx) => (
                <span key={idx} className="tech-tag text-mono" style={{ fontSize: '0.65rem', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.15)', color: 'var(--accent-mint)', padding: '3px 6px', borderRadius: '4px' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--text-primary)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <GitBranch size={12} /> ARCHITECTURAL_METRICS
            </h4>
            <ul style={{ paddingLeft: '16px', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {activeData.metrics.map((m, idx) => (
                <li key={idx}>
                  <strong className="neon-text-mint">&gt;</strong> {m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '16px', marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <span className="text-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>FILE_PATH: {activeData.path}</span>
          
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {activeData.live && (
              <a 
                href={activeData.live} 
                target="_blank" 
                rel="noreferrer" 
                className="cyber-btn cyber-btn-cyan"
                style={{ fontSize: '0.7rem', padding: '5px 10px' }}
              >
                [LIVE DEMO] <ExternalLink size={10} style={{ marginLeft: '2px' }} />
              </a>
            )}

            {activeData.github && (
              <a 
                href={activeData.github} 
                target="_blank" 
                rel="noreferrer" 
                className="cyber-btn"
                style={{ fontSize: '0.7rem', padding: '5px 10px' }}
              >
                [SOURCE] <GithubIcon size={11} style={{ marginLeft: '2px' }} />
              </a>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
