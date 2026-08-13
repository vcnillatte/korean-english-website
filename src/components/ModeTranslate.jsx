import React, { useState, useEffect } from 'react';
import { Volume2, RotateCw, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function ModeTranslate({
  vocabs = [],
  activeModule,
  showIdToggle,
  recordVocabAttempt,
  addAttemptLog
}) {
  // Filter vocabs based on active module
  const filteredVocabs = (vocabs || []).filter(v => activeModule === 'all' || v.moduleTag === activeModule);

  const [currentIndex, setCurrentIndex] = useState(0);
  // Default translation direction set to Korean -> English
  const [direction, setDirection] = useState('KR_TO_EN'); // 'KR_TO_EN' | 'EN_TO_KR'
  const [isFlipped, setIsFlipped] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null); // { isCorrect: boolean, message: string }

  const currentVocab = filteredVocabs[currentIndex] || filteredVocabs[0];

  // Reset all card states when card index, module, or direction changes
  useEffect(() => {
    setIsFlipped(false);
    setFeedback(null);
    setUserAnswer('');
  }, [currentIndex, activeModule, direction]);

  if (!currentVocab) {
    return (
      <div className="content-card" style={{ textAlign: 'center' }}>
        <h3>Tidak ada kosakata di modul ini.</h3>
        <p>Pilih modul lain di bagian atas.</p>
      </div>
    );
  }

  // Handle Speech Pronunciation
  const handlePlayAudio = (e) => {
    e.stopPropagation();
    soundFx.playSpeech(currentVocab.kr, 'ko-KR');
  };

  // Helper function to normalize text (remove punctuation, lower case)
  const normalize = (str) => (str || '').toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").trim();

  // Helper function to extract all possible valid answers if target has 'atau', '/', 'or', ',', etc.
  const extractPossibleAnswers = (rawText) => {
    if (!rawText) return [];
    // Remove text inside parentheses e.g. "테이크아웃 (포장)" -> "테이크아웃 ", also keep full text
    const textWithoutParens = rawText.replace(/\(.*?\)/g, ' ');
    const combined = `${rawText} / ${textWithoutParens}`;
    
    // Split by slash, 'atau', 'or', comma
    const parts = combined.split(/[\/,\n]| 또는 | atau | or /g);
    
    return parts.map(p => normalize(p)).filter(p => p.length > 0);
  };

  // Check Answer Function (Smart match with 'atau' / '/' options support)
  const handleCheckAnswer = (e) => {
    e.preventDefault();
    if (!userAnswer.trim()) return;

    const userClean = normalize(userAnswer);

    let mainTargetText = direction === 'KR_TO_EN' ? currentVocab.en : currentVocab.kr;
    let optionalIdText = currentVocab.id_optional || '';

    // Extract all valid variations
    const validTargets = extractPossibleAnswers(mainTargetText);
    const validIdTargets = extractPossibleAnswers(optionalIdText);

    // Match if user's input matches ANY of the valid variations
    const isMatch = validTargets.some(target => target === userClean) ||
      validIdTargets.some(idAns => idAns === userClean) ||
      normalize(mainTargetText) === userClean ||
      (optionalIdText && normalize(optionalIdText) === userClean);

    // Reveal back of card upon check
    setIsFlipped(true);

    if (isMatch) {
      soundFx.playCorrect();
      setFeedback({ isCorrect: true, message: 'Benar sekali! Excellent!' });
      recordVocabAttempt(currentVocab.id, true);
      addAttemptLog({
        mode: 'translate',
        input: userAnswer,
        isCorrect: true,
        vocabId: currentVocab.id
      });
    } else {
      soundFx.playShakeError();
      setFeedback({
        isCorrect: false,
        message: `Kurang tepat. Jawaban yang benar: "${mainTargetText}"`
      });
      recordVocabAttempt(currentVocab.id, false);
      addAttemptLog({
        mode: 'translate',
        input: userAnswer,
        isCorrect: false,
        vocabId: currentVocab.id
      });
    }
  };

  const handleNext = () => {
    setIsFlipped(false);
    setFeedback(null);
    setUserAnswer('');
    setCurrentIndex((prev) => (prev + 1) % filteredVocabs.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setFeedback(null);
    setUserAnswer('');
    setCurrentIndex((prev) => (prev - 1 + filteredVocabs.length) % filteredVocabs.length);
  };

  const getMasteryBadgeClass = (level) => {
    switch(level) {
      case 0: return 'badge-new';
      case 1: return 'badge-learning';
      case 2: return 'badge-familiar';
      case 3: return 'badge-mastered';
      default: return 'badge-new';
    }
  };

  const getMasteryLabel = (level) => {
    switch(level) {
      case 0: return 'New';
      case 1: return 'Learning';
      case 2: return 'Familiar';
      case 3: return 'Mastered';
      default: return 'New';
    }
  };

  return (
    <div className="content-card">
      {/* Top Controls & Direction Toggle */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-cocoa)' }}>Mode Drilling:</span>
          <button
            onClick={() => setDirection('KR_TO_EN')}
            className={`btn-toggle ${direction === 'KR_TO_EN' ? 'active' : ''}`}
          >
            🇰🇷 Korean → 🇬🇧 English
          </button>
          <button
            onClick={() => setDirection('EN_TO_KR')}
            className={`btn-toggle ${direction === 'EN_TO_KR' ? 'active' : ''}`}
          >
            🇬🇧 English → 🇰🇷 Korean
          </button>
        </div>

        <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-cocoa)' }}>
          Kartu {currentIndex + 1} / {filteredVocabs.length}
        </div>
      </div>

      {/* 3D Flashcard - key={currentVocab.id} forces React to unmount & remount fresh card on index change */}
      <div
        key={currentVocab.id}
        className={`flashcard-wrapper ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
        title="Klik kartu untuk melihat/menyembunyikan arti"
      >
        <div className="flashcard-inner">
          {/* Front Side (ALWAYS SHOWN FIRST ON NEW CARD) */}
          <div className="flashcard-front">
            <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <span className={`badge ${getMasteryBadgeClass(currentVocab.masteryLevel)}`}>
                {getMasteryLabel(currentVocab.masteryLevel)} (Streak: {currentVocab.streak})
              </span>
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-cocoa)', fontWeight: 700, textTransform: 'uppercase' }}>
              {direction === 'KR_TO_EN' ? 'Korean (Hangul)' : 'English (Target)'}
            </div>

            <h2 className={direction === 'KR_TO_EN' ? 'hangul-text' : ''} style={{ fontSize: '2rem', color: 'var(--text-espresso)' }}>
              {direction === 'KR_TO_EN' ? currentVocab.kr : currentVocab.en}
            </h2>

            {direction === 'KR_TO_EN' && currentVocab.pronunciation && (
              <p style={{ fontSize: '0.95rem', color: 'var(--text-cocoa)', fontStyle: 'italic' }}>
                [{currentVocab.pronunciation}]
              </p>
            )}

            <button
              onClick={handlePlayAudio}
              className="btn-toggle"
              style={{ marginTop: '0.5rem' }}
            >
              <Volume2 size={18} />
              <span>Dengarkan Pengucapan (Audio)</span>
            </button>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-light-cocoa)', marginTop: '0.5rem' }}>
              (Ketik jawaban di bawah atau klik kartu ini untuk membalik)
            </p>
          </div>

          {/* Back Side (REVEALED ONLY UPON FLIP OR CHECK) */}
          <div className="flashcard-back">
            <div style={{ fontSize: '0.85rem', color: 'var(--text-cocoa)', fontWeight: 700, textTransform: 'uppercase' }}>
              Arti & Pengucapan
            </div>

            <h2 className={direction === 'KR_TO_EN' ? '' : 'hangul-text'} style={{ fontSize: '2rem', color: 'var(--text-espresso)' }}>
              {direction === 'KR_TO_EN' ? currentVocab.en : currentVocab.kr}
            </h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-cocoa)', fontStyle: 'italic' }}>
              [{currentVocab.pronunciation}]
            </p>

            {showIdToggle && currentVocab.id_optional && (
              <div style={{ marginTop: '0.3rem', padding: '0.2rem 0.6rem', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-cocoa)' }}>
                  🇮🇩 ID: <strong>{currentVocab.id_optional}</strong>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Answer Input Form & Feedback */}
      <form onSubmit={handleCheckAnswer} style={{ maxWidth: '580px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button type="button" onClick={handlePrev} className="btn-chunky btn-secondary" style={{ minWidth: '48px', padding: '0.5rem' }} title="Kartu Sebelumnya">
            ←
          </button>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder={direction === 'KR_TO_EN' ? "Ketik jawaban dalam English..." : "Ketik jawaban dalam Korean (Hangul)..."}
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: '2px solid rgba(122, 106, 94, 0.25)',
              fontSize: '1rem',
              outline: 'none',
              fontFamily: 'inherit'
            }}
          />
          <button type="submit" className="btn-chunky btn-primary">
            Periksa
          </button>
          <button type="button" onClick={handleNext} className="btn-chunky btn-secondary" style={{ minWidth: '48px', padding: '0.5rem' }} title="Kartu Berikutnya">
            →
          </button>
        </div>

        {feedback && (
          <div
            className={`diff-box ${feedback.isCorrect ? 'corrected' : 'original'} ${!feedback.isCorrect ? 'shake-animation' : ''}`}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {feedback.isCorrect ? (
                <CheckCircle2 size={20} color="var(--correct-sage)" />
              ) : (
                <XCircle size={20} color="var(--incorrect-terracotta)" />
              )}
              <span style={{ fontWeight: 700, color: feedback.isCorrect ? 'var(--correct-sage)' : 'var(--incorrect-terracotta)' }}>
                {feedback.message}
              </span>
            </div>

            <button type="button" onClick={handleNext} className="btn-chunky btn-primary" style={{ minHeight: '38px', padding: '0.4rem 0.85rem' }}>
              <span>Lanjut</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
