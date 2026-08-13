import React, { useState } from 'react';
import Header from './components/Header';
import ModeSelector from './components/ModeSelector';
import ModeTranslate from './components/ModeTranslate';
import ModeSentenceBuilder from './components/ModeSentenceBuilder';
import ModeFreeWriting from './components/ModeFreeWriting';
import InstructorDashboard from './components/InstructorDashboard';
import InstructorAuthModal from './components/InstructorAuthModal';
import ApiKeyModal from './components/ApiKeyModal';
import { useAppStore } from './store/useAppStore';

export default function App() {
  const store = useAppStore();
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleInstructorAuthSuccess = () => {
    setIsAuthModalOpen(false);
    store.setIsInstructorMode(true);
  };

  return (
    <div className="app-container">
      {/* Header with Title, Stats, Module Select, ID Toggle, & Discreet Instructor Icon */}
      <Header
        showIdToggle={store.showIdToggle}
        setShowIdToggle={store.setShowIdToggle}
        modules={store.modules}
        activeModule={store.activeModule}
        setActiveModule={store.setActiveModule}
        masteryStats={store.masteryStats}
        isInstructorMode={store.isInstructorMode}
        setIsInstructorMode={store.setIsInstructorMode}
        onOpenInstructorAuth={() => setIsAuthModalOpen(true)}
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
      />

      {/* Main View Area */}
      {store.isInstructorMode ? (
        <InstructorDashboard
          vocabs={store.vocabs}
          modules={store.modules}
          attemptLogs={store.attemptLogs}
          addVocab={store.addVocab}
          updateVocab={store.updateVocab}
          deleteVocab={store.deleteVocab}
          importVocabs={store.importVocabs}
          resetAllProgress={store.resetAllProgress}
        />
      ) : (
        <>
          {/* Mode Selector Tabs */}
          <ModeSelector
            activeMode={store.activeMode}
            setActiveMode={store.setActiveMode}
          />

          {/* Mode 1: Translate (Drilling) */}
          {store.activeMode === 'translate' && (
            <ModeTranslate
              vocabs={store.vocabs}
              activeModule={store.activeModule}
              showIdToggle={store.showIdToggle}
              recordVocabAttempt={store.recordVocabAttempt}
              addAttemptLog={store.addAttemptLog}
            />
          )}

          {/* Mode 2: Buat Kalimat (Scaffolded Sentence Formation) */}
          {store.activeMode === 'sentence-builder' && (
            <ModeSentenceBuilder
              sentencePatterns={store.sentencePatterns}
              vocabs={store.vocabs}
              activeModule={store.activeModule}
              showIdToggle={store.showIdToggle}
              addAttemptLog={store.addAttemptLog}
            />
          )}

          {/* Mode 3: Cek Kalimat (Free Writing via AI) */}
          {store.activeMode === 'free-writing' && (
            <ModeFreeWriting
              apiKey={store.apiKey}
              showIdToggle={store.showIdToggle}
              addAttemptLog={store.addAttemptLog}
              onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
            />
          )}
        </>
      )}

      {/* Instructor PIN Login Modal */}
      <InstructorAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleInstructorAuthSuccess}
      />

      {/* API Key Modal */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        apiKey={store.apiKey}
        setApiKey={store.setApiKey}
      />

      {/* Footer */}
      <footer style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(122, 106, 94, 0.15)', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-cocoa)' }}>
        <p>☕ <strong>HangulBridge</strong> — Cafe English & Korean Practice App</p>
        <p style={{ fontSize: '0.75rem', marginTop: '0.2rem', opacity: 0.8 }}>
          Powered by React, Spaced Repetition Logic & Gemini AI
        </p>
      </footer>
    </div>
  );
}
