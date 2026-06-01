import React, { useEffect } from 'react';
import { Terminal, CheckCircle2, AlertTriangle, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onClose]);

  const getBorderColor = () => {
    if (type === 'success') return 'var(--accent-cyan)';
    if (type === 'error') return 'var(--accent-purple)';
    return '#ffaa00';
  };

  const getIcon = () => {
    if (type === 'success') return <CheckCircle2 className="neon-text-cyan" size={18} />;
    if (type === 'error') return <AlertTriangle className="neon-text-purple" size={18} />;
    return <Terminal size={18} />;
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 100000,
        minWidth: '300px',
        maxWidth: '450px',
        background: 'rgba(6, 8, 19, 0.85)',
        border: `1px solid ${getBorderColor()}`,
        borderRadius: '8px',
        padding: '16px',
        backdropFilter: 'blur(16px)',
        boxShadow: type === 'success' ? 'var(--glow-cyan)' : 'var(--glow-purple)',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        animation: 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}
    >
      <div style={{ marginTop: '2px' }}>{getIcon()}</div>
      
      <div style={{ flex: 1 }}>
        <h4
          className="text-mono"
          style={{
            fontSize: '0.8rem',
            color: getBorderColor(),
            textTransform: 'uppercase',
            fontWeight: 700,
            marginBottom: '4px',
            letterSpacing: '0.05em',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: getBorderColor(), animation: 'blink 1s infinite' }}></span>
          {type === 'success' ? 'Uplink Established' : 'Uplink Interrupted'}
        </h4>
        <p style={{ fontSize: '0.85rem', color: '#c4d1e6', lineHeight: 1.4 }}>
          {message}
        </p>
      </div>

      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: '#53647c',
          cursor: 'pointer',
          padding: '2px',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#53647c')}
      >
        <X size={14} />
      </button>

      {/* Slide-in Keyframe Animation Style Element */}
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateY(100px) scale(0.9);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
