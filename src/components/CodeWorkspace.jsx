import React, { useState } from 'react';
import { Folder, FileCode, CheckCircle, ExternalLink, GitBranch, Layers } from 'lucide-react';

export default function CodeWorkspace() {
  const [activeFile, setActiveFile] = useState('sehatvani');

  const files = [
    { id: 'sehatvani', name: 'SehatVani.jsx', type: 'jsx', icon: <FileCode size={14} className="neon-text-mint" /> },
    { id: 'bipartitelink', name: 'BipartiteLink.cpp', type: 'cpp', icon: <FileCode size={14} className="neon-text-cyan" /> },
    { id: 'svic', name: 'svic_portal.config.json', type: 'json', icon: <FileCode size={14} style={{ color: '#f59e0b' }} /> },
    { id: 'naari', name: 'NaariSafety.jsx', type: 'jsx', icon: <FileCode size={14} className="neon-text-purple" /> },
    { id: 'blogapp', name: 'BlogApp.js', type: 'js', icon: <FileCode size={14} className="neon-text-mint" /> }
  ];

  const codeContents = {
    sehatvani: {
      title: 'SehatVani',
      sub: 'Blood Report Multi-lingual Summarizer (Full Stack)',
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
    bipartitelink: {
      title: 'BipartiteLink',
      sub: 'Peer-to-Peer Skill Matchmaking (C++ Core Simulation)',
      path: 'core/matchmaker/BipartiteLink.cpp',
      code: `// BipartiteLink Core Complementary Matchmaking Algorithm
#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>

struct User {
    std::string id;
    std::vector<std::string> skillsToTeach;
    std::vector<std::string> skillsToLearn;
};

class BipartiteLinker {
public:
    std::vector<std::pair<std::string, std::string>> findOptimalMatches(
        const std::vector<User>& users
    ) {
        std::vector<std::pair<std::string, std::string>> matches;
        // Search complementary bipartite intersections
        for (size_t i = 0; i < users.size(); ++i) {
            for (size_t j = i + 1; j < users.size(); ++j) {
                if (hasComplementarySkill(users[i], users[j])) {
                    matches.push_back({users[i].id, users[j].id});
                }
            }
        }
        return matches;
    }
};`,
      overview: 'A bipartite graph complementary search engine built to instantly match study partners who possess teaching skills that overlap with the learning needs of others.',
      tech: ['C++', 'Bipartite Matching', 'Adjacency lists', 'STL Vectors'],
      metrics: [
        'Optimized bipartite graph lookup mapping algorithms.',
        'Structured with custom clean hash maps to reduce lookups to near O(N) in typical loads.',
        'Integrated as the core engine in a Node.js full-stack exchange server.'
      ]
    },
    naari: {
      title: 'NAARI',
      sub: 'Women Security & Emergency Response Platform',
      path: 'src/components/safety/NaariEmergency.jsx',
      code: `// NAARI Emergency Response System - Location Polling Node
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function NaariEmergency({ userId }) {
  const [coords, setCoords] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketConn = io('https://api.naarisafety.org');
    setSocket(socketConn);
    
    // Begin high-precision geolocation updates
    navigator.geolocation.watchPosition((pos) => {
      const payload = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        timestamp: Date.now()
      };
      setCoords(payload);
      socketConn.emit('update_coordinates', { userId, payload });
    }, (err) => console.error(err), { enableHighAccuracy: true });

    return () => socketConn.disconnect();
  }, [userId]);

  return (
    <div className="safety-node">
      <h3>Active Tracking Node</h3>
      {coords && <p>LAT: {coords.lat} | LNG: {coords.lng}</p>}
    </div>
  );
}`,
      overview: 'A dedicated emergency response web app featuring high-precision coordinate polling, automated WhatsApp/SMS emergency alerts, and a real-time tracking dashboard.',
      tech: ['React Native', 'Socket.io', 'Node.js', 'Google Maps API', 'Twilio'],
      metrics: [
        '98% location polling accuracy under extreme network conditions.',
        'Fully responsive emergency UI with integrated one-click hardware button hooks.',
        'Socket-based live dashboard updating coordinates at a stable 180ms latency.'
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
      "title": "Bulletin Notice Title",
      "type": "string"
    },
    {
      "name": "publishDate",
      "title": "Publishing Date",
      "type": "datetime"
    },
    {
      "name": "attachmentPdf",
      "title": "Official Announcement PDF Link",
      "type": "file"
    }
  ]
}`,
      overview: 'A production website built for a real intermediate college in Uttar Pradesh. Features an active headless CMS backend, allowing administrative staff to post bulletins in real-time.',
      tech: ['React.js', 'Sanity.io CMS', 'TailwindCSS', 'WebP Compressors'],
      metrics: [
        'Fully responsive school landing with integrated student notice boards.',
        'Optimized images with lossless WebP compression, leading to a 35% reduction in initial paint delay.',
        'Hosted live at svic.co.in with active user interactions.'
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

// CREATE: Write new blog log
router.post('/posts/new', async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const newPost = new BlogPost({ title, content, author });
    await newPost.save();
    res.status(201).json({ success: true, post: newPost });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ: Fetch all logs
router.get('/posts', async (req, res) => {
  const posts = await BlogPost.find().sort({ createdAt: -1 });
  res.render('blogList', { posts });
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
