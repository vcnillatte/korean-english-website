import React from 'react';
import { Coffee, Settings, Lock, BookOpen, Layers, ChevronDown } from 'lucide-react';

export default function Header({
  showIdToggle,
  setShowIdToggle,
  modules,
  activeModule,
  setActiveModule,
  masteryStats,
  isInstructorMode,
  setIsInstructorMode,
  onOpenInstructorAuth,
  onOpenApiKeyModal
}) {
  const handleInstructorClick = () => {
    if (isInstructorMode) {
      // Exit instructor mode back to student mode
      setIsInstructorMode(false);
    } else {
      // Prompt password auth modal
      onOpenInstructorAuth();
    }
  };

  return (
    <header className="header-bar">
      {/* Brand & Title */}
      <div className="logo-area">
        <div className="logo-icon">
          <Coffee size={24} color="#2D241E" />
        </div>
        <div>
          <h1 className="logo-title">HangulBridge</h1>
          <p className="logo-subtitle">Cafe English & Korean Sentence Practice</p>
        </div>
      </div>

      {/* Mastery Stats Overview */}
      <div className="mastery-stats-bar">
        <span className="stat-pill new" title="Belum pernah dites">New: {masteryStats.new}</span>
        <span className="stat-pill learning" title="Sedang dipelajari">Learning: {masteryStats.learning}</span>
        <span className="stat-pill familiar" title="Benar 3x berturut-turut">Familiar: {masteryStats.familiar}</span>
        <span className="stat-pill mastered" title="Benar 5x berturut-turut">Mastered: {masteryStats.mastered}</span>
      </div>

      {/* Header Action Controls */}
      <div className="header-controls">
        {/* Elegant Module Dropper Selector */}
        <div className="elegant-select-wrapper" title="Pilih Modul Pembelajaran">
          <Layers size={16} className="elegant-select-icon-left" />
          <select
            value={activeModule}
            onChange={(e) => setActiveModule(e.target.value)}
            className="elegant-select"
            aria-label="Pilih Modul"
          >
            <option value="all">Semua Modul (160 Kata)</option>
            {modules.map(mod => (
              <option key={mod.id} value={mod.id}>{mod.name}</option>
            ))}
          </select>
          <ChevronDown size={16} className="elegant-select-icon-right" />
        </div>

        {/* Compact Indonesian Flag Toggle Switch (Revision 2) */}
        <div
          onClick={() => setShowIdToggle(!showIdToggle)}
          className="flag-toggle-switch"
          title={showIdToggle ? "Matikan Referensi Bahasa Indonesia" : "Aktifkan Referensi Bahasa Indonesia"}
        >
          <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>🇮🇩</span>
          <div className={`switch-track ${showIdToggle ? 'active' : ''}`}>
            <div className="switch-thumb" />
          </div>
        </div>

        {/* Gemini API Key Config Button */}
        <button
          onClick={onOpenApiKeyModal}
          className="btn-toggle"
          title="Pengaturan Gemini API Key"
        >
          <Settings size={16} />
          <span>API Key</span>
        </button>

        {/* Small discreet Instructor Access Icon */}
        <button
          onClick={handleInstructorClick}
          className={`btn-toggle ${isInstructorMode ? 'active' : ''}`}
          title={isInstructorMode ? "Kembali ke Mode Murid" : "Akses Instruktur (Perlu PIN Guru)"}
          style={{ padding: '0.4rem 0.65rem' }}
        >
          {isInstructorMode ? (
            <>
              <BookOpen size={16} />
              <span style={{ fontSize: '0.8rem' }}>Exit Admin</span>
            </>
          ) : (
            <>
              <Lock size={16} />
              <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>Guru</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
