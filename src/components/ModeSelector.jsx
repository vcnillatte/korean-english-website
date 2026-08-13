import React from 'react';
import { Languages, Puzzle, Sparkles } from 'lucide-react';

export default function ModeSelector({ activeMode, setActiveMode }) {
  const modes = [
    {
      id: 'translate',
      title: 'Mode 1: Translate',
      subtitle: 'Drilling Vocab & Spaced Repetition',
      icon: Languages,
      badge: 'Drilling'
    },
    {
      id: 'sentence-builder',
      title: 'Mode 2: Buat Kalimat',
      subtitle: 'Scaffolded Sentence Formation',
      icon: Puzzle,
      badge: 'Interactive'
    },
    {
      id: 'free-writing',
      title: 'Mode 3: Cek Kalimat',
      subtitle: 'Free Writing & AI Evaluation',
      icon: Sparkles,
      badge: 'AI Powered'
    }
  ];

  return (
    <nav className="mode-nav">
      {modes.map(mode => {
        const IconComponent = mode.icon;
        const isActive = activeMode === mode.id;
        return (
          <div
            key={mode.id}
            onClick={() => setActiveMode(mode.id)}
            className={`mode-card ${isActive ? 'active' : ''}`}
          >
            <div className="mode-title">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <IconComponent size={20} color={isActive ? '#FFD166' : '#7A6A5E'} />
                {mode.title}
              </span>
              <span className="badge badge-familiar">{mode.badge}</span>
            </div>
            <p className="mode-desc">{mode.subtitle}</p>
          </div>
        );
      })}
    </nav>
  );
}
