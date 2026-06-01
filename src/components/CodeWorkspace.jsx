import React, { useState } from 'react';
import { Folder, FileCode, CheckCircle, ExternalLink, GitBranch, Layers } from 'lucide-react';

export default function CodeWorkspace() {
  const [activeFile, setActiveFile] = useState('sehatvani');

  const files = [
    { id: 'sehatvani', name: 'SehatVani.jsx', type: 'jsx', icon: <FileCode size={14} className="neon-text-mint" /> },
    { id: 'civicspark', name: 'CivicSpark.jsx', type: 'jsx', icon: <FileCode size={14} className="neon-text-cyan" /> },
    { id: 'dronaai', name: 'DronaAi.jsx', type: 'jsx', icon: <FileCode size={14} className="neon-text-purple" /> },
    { id: 'eduadi', name: 'EduAdi.jsx', type: 'jsx', icon: <FileCode size={14} className="neon-text-mint" /> },
    { id: 'footprint', name: 'FootPrint.jsx', type: 'jsx', icon: <FileCode size={14} className="neon-text-cyan" /> },
    { id: 'weatherapp', name: 'WeatherApp.js', type: 'js', icon: <FileCode size={14} style={{ color: '#f59e0b' }} /> },
    { id: 'svic', name: 'svic_portal.config.json', type: 'json', icon: <FileCode size={14} style={{ color: '#e2e8f0' }} /> },
    { id: 'blogapp', name: 'BlogApp.js', type: 'js', icon: <FileCode size={14} className="neon-text-mint" /> }
  ];

  const codeContents = {
    sehatvani: {
      title: 'SehatVani',
      sub: 'Blood Report Multi-lingual Summarizer (MERN Stack)',
      path: 'src/components/report/ReportSummarizer.jsx',
      code: `// SehatVani Report Summarizer - Multilingual Translation
import React, { useState } from 'react';

export default function ReportSummarizer({ metricsData }) {
  const [language, setLanguage] = useState('hi'); // Default: Hindi
  const [isTranslating, setIsTranslating] = useState(false);

  const translateMetrics = async (payload) => {
    setIsTranslating(true);
    try {
      const response = await fetch('/api/v1/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: payload, targetLang: language })
      });
      const result = await response.json();
      return result.translation;
    } catch (err) {
      console.error("Uplink translation error:", err);
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <div className="report-panel">
      <h3>Translation Node: {language.toUpperCase()}</h3>
      {/* Dynamic Blood parameters mappings */}
    </div>
  );
}`,
      overview: 'Converts complex clinical blood test parameters into simplified, actionable natural language bullet points, supporting English and Hindi layouts for accessibility.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
      metrics: [
        'JWT-protected secure REST API endpoints.',
        'High-speed JSON mapping schemas for standard medical parameters (T3, T4, Hemoglobin).',
        'Built with responsive Tailwind panels for mobile-friendly clinic visits.'
      ]
    },
    civicspark: {
      title: 'CivicSpark',
      sub: 'Social & Civic Campaign Management Platform',
      path: 'src/components/civic/CampaignHub.jsx',
      code: `// CivicSpark Social Campaigns Platform - Evidence Validator Node
import React, { useState } from 'react';

export default function EvidenceValidator({ campaignId }) {
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState(null);

  const validateCampaignEvidence = async (evidenceUrl) => {
    setIsValidating(true);
    try {
      const res = await fetch('/api/v1/campaigns/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ campaignId, evidenceUrl })
      });
      const data = await res.json();
      setValidationResult(data.status);
    } catch (err) {
      console.error("Civic validation failed:", err);
    } finally {
      setIsValidating(false);
    }
  };

  return (
    <div className="evidence-panel">
      <h4>Campaign Validation Node</h4>
      <button onClick={() => validateCampaignEvidence('https://proof.org/doc')}>Validate Campaign</button>
      {validationResult && <p>STATUS: {validationResult}</p>}
    </div>
  );
}`,
      overview: 'The Civic Platform is a full-stack web application that empowers individuals and organizations to create, manage, and support campaigns for social, environmental, and civic causes. With integrated AI, NGO networking, and evidence validation, it transforms civic ideas into actionable movements.',
      tech: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
      metrics: [
        'Shipped responsive campaigns dashboard and social campaign creators.',
        'Reduced component redundancy by 40% using a shared team-wide UI library.',
        'Accelerated deployment pipelines through Git branch reviews and validations.'
      ]
    },
    dronaai: {
      title: 'DronaAi',
      sub: 'MERN Real-Time Peer-to-Peer EdTech Lobbies',
      path: 'src/components/study/DronaLobby.jsx',
      code: `// DronaAi Peer-to-Peer Study Lobby Node with Socket.io
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function DronaLobby({ lobbyId, userId }) {
  const [socket, setSocket] = useState(null);
  const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {
    const socketConn = io('https://api.dronaai.org');
    setSocket(socketConn);

    socketConn.emit('join_lobby', { lobbyId, userId });
    socketConn.on('lobby_update', (users) => setActiveUsers(users));

    return () => socketConn.disconnect();
  }, [lobbyId, userId]);

  return (
    <div className="drona-study-lobby">
      <h3>DronaAi Workspace Lobby: {lobbyId}</h3>
      <p>Collaborators: {activeUsers.length}</p>
    </div>
  );
}`,
      overview: 'A real-time peer-to-peer educational platform featuring direct chat connections, study lobbies, Gemini API integrations, and collaborative study spaces with Socket.io.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Gemini API'],
      metrics: [
        'Dynamic study spaces enabling multiple users to share visual notes and collaborate.',
        'Gemini API automation generating study flashcards and summaries from reports.',
        'Direct study lobby connections configured with near-zero latency.'
      ]
    },
    eduadi: {
      title: 'EduAdi',
      sub: 'MERN Classroom & Lecture Hub Coordinator',
      path: 'src/components/edu/EduHub.jsx',
      code: `// EduAdi MERN Classroom Manager - Syllabus Loader
import React, { useState } from 'react';

export default function EduHub({ courseId }) {
  const [syllabus, setSyllabus] = useState([]);
  
  const loadClassroomSyllabus = async () => {
    const res = await fetch(\`/api/v1/edu/\${courseId}/syllabus\`);
    const data = await res.json();
    setSyllabus(data.chapters);
  };

  return (
    <div className="edu-classroom">
      <h3>EduAdi Classroom Hub</h3>
      <button onClick={loadClassroomSyllabus}>Decrypt Syllabus</button>
    </div>
  );
}`,
      overview: 'A classroom management and course hub platform built on the MERN stack to enable students and teachers to share course content and collaborate.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      metrics: [
        'Secure multi-tier role validations (Teacher, Student, Admin).',
        'Built with quick indexing schema to fetch student metrics under 120ms.',
        'High-contrast UI designed for responsive tablet and classroom displays.'
      ]
    },
    footprint: {
      title: 'FootPrint',
      sub: 'Personal Environmental Carbon Calculator',
      path: 'src/components/eco/CarbonFootprint.jsx',
      code: `// Foot_Print Carbon Footprint Tracking Node
import React, { useState } from 'react';

export default function CarbonFootprint() {
  const [footprint, setFootprint] = useState(0);

  const calculateImpact = (miles, energy) => {
    const impact = (miles * 0.404) + (energy * 0.92);
    setFootprint(impact);
  };

  return (
    <div className="eco-calculator">
      <h3>Foot_Print Tracking Node</h3>
      <p>CURRENT CARBON OUTPUT: {footprint} kg CO2</p>
    </div>
  );
}`,
      overview: 'An environmental tracking calculator designed to compute personal carbon impacts, analyze energy consumption variables, and offer actionable green solutions.',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
      metrics: [
        'Instant energy algorithm tracking carbon factors.',
        'Clean responsive charts plotting monthly carbon reductions.',
        'Lightweight static site built for mobile visits.'
      ]
    },
    weatherapp: {
      title: 'WeatherApp',
      sub: 'Meteorological Forecast Dashboard',
      path: 'src/components/weather/WeatherDashboard.js',
      code: `// WeatherApp Meteorology Dashboard - Forecast Fetcher
const fetchWeatherForecast = async (city) => {
  const API_KEY = "6064d7df6db8220f86221c0ad19a71db";
  try {
    const res = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}\`);
    const data = await res.json();
    return {
      temp: Math.round(data.main.temp - 273.15),
      wind: data.wind.speed,
      humidity: data.main.humidity
    };
  } catch (err) {
    console.error("Weather uplink offline:", err);
  }
};`,
      overview: 'A real-time weather forecasting dashboard providing real-time meteorological metrics, forecasts, dynamic wind gauges, and ambient temperatures.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API'],
      metrics: [
        'Fully responsive meteorological gauges optimized for all screens.',
        'Monospace temperature readings and wind dials.',
        'Zero external heavy libraries, achieving a 99/100 Lighthouse performance.'
      ]
    },
    svic: {
      title: 'Swami Vivekanand Intermediate College Portal',
      sub: 'Freelance Headless CMS Configuration',
      path: 'config/sanity/schema.json',
      code: `{
  "name": "svic_portal_schema",
  "title": "Swami Vivekanand Intermediate College",
  "type": "document",
  "fields": [
    {
      "name": "noticeTitle",
      "type": "string"
    },
    {
      "name": "publishDate",
      "type": "datetime"
    },
    {
      "name": "attachmentPdf",
      "type": "file"
    }
  ]
}`,
      overview: 'A production website built for a real intermediate college in Uttar Pradesh. Features an active headless CMS notice board and event logs allowing admin updates without code modifications.',
      tech: ['React.js', 'Sanity.io CMS', 'TailwindCSS', 'WebP Compressors'],
      metrics: [
        'Fully responsive school landing with integrated student notice boards.',
        'Lossless WebP image compressors reducing page paint delay by 35%.',
        'Deployed live at svic.co.in with active user interactions.'
      ]
    },
    blogapp: {
      title: 'Blog App',
      sub: 'Backend Express CRUD Router',
      path: 'routes/blogRouter.js',
      code: `// Express CRUD Router for Backend Blog Modules
const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

router.post('/posts/new', async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const newPost = new BlogPost({ title, content, author });
    await newPost.save();
    res.status(201).json({ success: true, post: newPost });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});`,
      overview: 'A robust, lightweight backend server built to handle full CRUD operations, database queries, and server-side EJS view rendering templates.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS Templates'],
      metrics: [
        'Clean Model-View-Controller (MVC) server-side architecture.',
        'Indexed MongoDB collection schemas to fetch post buffers instantly.',
        'Supports complete markdown formatting displays in templates.'
      ]
    }
  };

  const activeData = codeContents[activeFile];
  const codeLines = activeData.code.split('\n');

  // Syntax highlighter compiler mock helper
  const highlightLine = (line) => {
    if (line.startsWith('//') || line.startsWith('/*') || line.startsWith(' *') || line.startsWith(' * ')) {
      return <span className="code-comment">{line}</span>;
    }
    // Simple custom regex highlights
    let highlighted = line;
    const keywords = ['import', 'export', 'default', 'function', 'const', 'let', 'await', 'async', 'try', 'catch', 'return', 'class', 'public', 'struct', 'const', 'const', 'require', 'new'];
    const types = ['User', 'BipartiteLinker', 'void', 'int', 'bool', 'std::string', 'std::vector', 'std::pair'];

    // Tokenize line to preserve structural whitespace
    const tokens = line.split(/(\s+|=|\(|\)|\{|\}|;|,|<|>|::)/);
    return tokens.map((token, idx) => {
      if (keywords.includes(token.trim())) {
        return <span key={idx} className="code-keyword">{token}</span>;
      }
      if (types.includes(token.trim())) {
        return <span key={idx} className="code-type">{token}</span>;
      }
      if (token.trim().startsWith('"') || token.trim().startsWith("'")) {
        return <span key={idx} className="code-string">{token}</span>;
      }
      if (token.trim().startsWith('//')) {
        return <span key={idx} className="code-comment">{token}</span>;
      }
      return token;
    });
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
        <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '16px', marginBottom: '16px' }}>
          <span className="text-mono" style={{ fontSize: '0.7rem', color: 'var(--accent-mint)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <GitBranch size={12} /> ARCHITECTURAL_METRICS
          </span>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '4px' }}>{activeData.title}</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{activeData.sub}</p>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <h4 className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--text-primary)', marginBottom: '6px' }}>[ MODULE_SUMMARY ]</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
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
            <h4 className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--text-primary)', marginBottom: '6px' }}>[ SDE_METRICS ]</h4>
            <ul style={{ paddingLeft: '16px', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {activeData.metrics.map((m, idx) => (
                <li key={idx}>
                  <strong className="neon-text-mint">&gt;</strong> {m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '16px', marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="text-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>FILE_PATH: {activeData.path}</span>
          <a 
            href="https://github.com/Aditya-Rauniyar" 
            target="_blank" 
            rel="noreferrer" 
            className="cyber-btn"
            style={{ fontSize: '0.7rem', padding: '5px 10px' }}
          >
            [SOURCE] <ExternalLink size={10} />
          </a>
        </div>

      </div>

    </div>
  );
}
