import React, { useState, useEffect } from 'react';
import { Puzzle, RefreshCw, CheckCircle2, Volume2, ArrowRight, Lightbulb, BookOpen } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function ModeSentenceBuilder({
  sentencePatterns = [],
  vocabs = [],
  activeModule = 'mod-01',
  showIdToggle = true,
  addAttemptLog = () => {}
}) {
  const filteredPatterns = (sentencePatterns || []).filter(sp => activeModule === 'all' || sp.moduleTag === activeModule);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [placedWords, setPlacedWords] = useState([]);
  const [availableChips, setAvailableChips] = useState([]);
  const [isShaking, setIsShaking] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const currentPattern = filteredPatterns[currentIndex] || filteredPatterns[0];

  useEffect(() => {
    if (currentPattern) {
      // Shuffle options pool for chips
      const shuffled = [...(currentPattern.optionsPool || [])].sort(() => Math.random() - 0.5);
      setAvailableChips(shuffled);
      setPlacedWords([]);
      setIsShaking(false);
      setIsSuccess(false);
    }
  }, [currentIndex, activeModule, currentPattern]);

  if (!currentPattern) {
    return (
      <div className="content-card" style={{ textAlign: 'center' }}>
        <h3>Tidak ada latihan pola kalimat di modul ini.</h3>
        <p>Pilih modul lain di bagian atas.</p>
      </div>
    );
  }

  // Handle clicking a chip to place it in sentence
  const handleSelectChip = (word, index) => {
    if (isSuccess) return;
    setPlacedWords(prev => [...prev, word]);
    setAvailableChips(prev => prev.filter((_, i) => i !== index));
    setIsShaking(false);
  };

  // Handle removing a word from placed sentence back to chips
  const handleRemovePlacedWord = (indexToRemove) => {
    if (isSuccess) return;
    const wordToRemove = placedWords[indexToRemove];
    setPlacedWords(prev => prev.filter((_, i) => i !== indexToRemove));
    setAvailableChips(prev => [...prev, wordToRemove]);
    setIsShaking(false);
  };

  // Reset current pattern
  const handleReset = () => {
    const shuffled = [...(currentPattern.optionsPool || [])].sort(() => Math.random() - 0.5);
    setAvailableChips(shuffled);
    setPlacedWords([]);
    setIsShaking(false);
    setIsSuccess(false);
  };

  // Check Sentence Order
  const handleCheckSentence = () => {
    const targetOrder = currentPattern.correctOrder || [];
    const isCorrect = placedWords.length === targetOrder.length &&
      placedWords.every((val, idx) => val.toLowerCase() === targetOrder[idx].toLowerCase());

    if (isCorrect) {
      soundFx.playCorrect();
      setIsSuccess(true);
      setIsShaking(false);
      addAttemptLog({
        mode: 'formation',
        input: placedWords.join(' '),
        isCorrect: true,
        patternId: currentPattern.id
      });
    } else {
      // Forgiving UI: trigger shake animation on chip container
      soundFx.playShakeError();
      setIsShaking(true);
      addAttemptLog({
        mode: 'formation',
        input: placedWords.join(' '),
        isCorrect: false,
        patternId: currentPattern.id
      });
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredPatterns.length);
  };

  // Helper to generate word-by-word breakdown for any sentence
  const getWordBreakdown = () => {
    if (currentPattern.wordBreakdown) return currentPattern.wordBreakdown;
    
    const vocabList = vocabs || [];
    const correctList = currentPattern.correctOrder || [];

    // Auto-map words to dictionary or general meanings
    return correctList.map(w => {
      const lowerWord = w.toLowerCase();
      const matchedVocab = vocabList.find(v => v.en && (v.en.toLowerCase().includes(lowerWord) || lowerWord.includes(v.en.toLowerCase())));
      return {
        en: w,
        kr: matchedVocab ? matchedVocab.kr : (
          lowerWord.includes('today') ? '오늘' :
          lowerWord.includes('now') ? '지금' :
          lowerWord.includes('here') ? '여기' :
          lowerWord.includes('please') ? '주세요 / 부탁합니다' :
          lowerWord.includes('how much') ? '얼마예요' :
          lowerWord.includes('where') ? '어디' :
          lowerWord.includes('i') ? '저 / 나' :
          lowerWord.includes('you') ? '당신 / 손님' :
          lowerWord.includes('our') ? '저희' : '단어'
        )
      };
    });
  };

  // Helper to get grammar rule explanation comparing EN vs KR
  const getGrammarNote = () => {
    if (currentPattern.grammarNote) return currentPattern.grammarNote;

    const enText = (currentPattern.promptEN || '').toLowerCase();
    
    if (enText.includes('today') || enText.includes('now') || enText.includes('every morning')) {
      return "💡 Catatan Struktur: Dalam Bahasa Korea, keterangan waktu (seperti 오늘/매일) ditaruh di AWAL kalimat. Sedangkan dalam Bahasa Inggris, keterangan waktu (seperti 'today', 'every morning') hampir selalu ditaruh di PALING AKHIR kalimat.";
    }
    if (enText.includes('where') || enText.includes('what') || enText.includes('how')) {
      return "💡 Catatan Struktur: Kata tanya WH-Question (What, Where, How) dalam Bahasa Inggris selalu ditaruh di PALING DEPAN kalimat, diikuti oleh kata kerja bantu (is, do, can).";
    }
    if (enText.includes('can i') || enText.includes('would you')) {
      return "💡 Catatan Pola Sopan: Pola 'Can I get...' / 'Would you like...' adalah cara paling alami dan sopan untuk meminta/menawarkan sesuatu di kafe (setara dengan suffix ~주세요 / ~하시겠어요 di Korea).";
    }
    return "💡 Catatan Struktur: Bahasa Inggris menggunakan urutan SVO (Subject + Verb + Object), sedangkan Bahasa Korea menggunakan urutan SOV (Subject + Object + Verb). Kata kerja utama ditaruh di tengah dalam Bahasa Inggris!";
  };

  return (
    <div className="content-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Puzzle size={22} color="var(--accent-yellow-hover)" />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Mode 2: Buat Kalimat (Sentence Formation)</h3>
        </div>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-cocoa)' }}>
          Soal {currentIndex + 1} / {filteredPatterns.length}
        </span>
      </div>

      {/* Target Prompt Box */}
      <div style={{ backgroundColor: 'var(--bg-card-alt)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(122, 106, 94, 0.15)' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-cocoa)', fontWeight: 700, textTransform: 'uppercase' }}>
          Susun Kalimat Inggris Berdasarkan Kalimat Korea Ini:
        </p>
        <h3 className="hangul-text" style={{ fontSize: '1.6rem', color: 'var(--text-espresso)', marginTop: '0.25rem' }}>
          {currentPattern.promptKR}
        </h3>
        
        {showIdToggle && currentPattern.promptID && (
          <p style={{ fontSize: '0.9rem', color: 'var(--text-cocoa)', marginTop: '0.35rem' }}>
            🇮🇩 Ref ID: <em>"{currentPattern.promptID}"</em>
          </p>
        )}
      </div>

      {/* Sentence Slots Construction Box */}
      <div className={`sentence-slots-container ${isShaking ? 'shake-animation' : ''}`}>
        {placedWords.length === 0 ? (
          <span style={{ color: 'var(--text-light-cocoa)', fontWeight: 600 }}>
            Klik chip kata di bawah untuk menyusun kalimat...
          </span>
        ) : (
          placedWords.map((word, idx) => (
            <button
              key={idx}
              onClick={() => handleRemovePlacedWord(idx)}
              className="word-chip placed"
            >
              {word}
            </button>
          ))
        )}
      </div>

      {/* Available Word Chips Pool */}
      <div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-cocoa)', fontWeight: 700, marginBottom: '0.5rem' }}>
          Pilihan Kata (Chip Pool):
        </p>
        <div className="chip-container">
          {availableChips.map((word, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectChip(word, idx)}
              className="word-chip"
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      {/* Actions & Feedback */}
      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap', marginTop: '0.5rem' }}>
        <button onClick={handleReset} className="btn-chunky btn-secondary">
          <RefreshCw size={16} />
          Reset
        </button>

        {!isSuccess ? (
          <button
            onClick={handleCheckSentence}
            disabled={placedWords.length === 0}
            className="btn-chunky btn-primary"
          >
            Periksa Susunan
          </button>
        ) : (
          <button onClick={handleNext} className="btn-chunky btn-primary">
            <span>Soal Berikutnya</span>
            <ArrowRight size={18} />
          </button>
        )}
      </div>

      {/* Interactive Explanation Card (Triggered upon Correct Answer) */}
      {isSuccess && (
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Success Banner & Speech Audio */}
          <div className="diff-box corrected" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <CheckCircle2 size={24} color="var(--correct-sage)" />
              <div>
                <h4 style={{ color: 'var(--correct-sage)', fontWeight: 800 }}>Sempurna! Perfect Sentence!</h4>
                <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-espresso)' }}>
                  "{currentPattern.promptEN}"
                </p>
              </div>
            </div>
            <button
              onClick={() => soundFx.playSpeech(currentPattern.promptEN, 'en-US')}
              className="btn-toggle"
            >
              <Volume2 size={18} />
              <span>Dengar Suara</span>
            </button>
          </div>

          {/* Grammar Rule Explanation Box */}
          <div style={{ backgroundColor: '#FFFBEB', padding: '1.15rem', borderRadius: 'var(--radius-md)', border: '1px solid #FCD34D' }}>
            <h5 style={{ fontWeight: 800, fontSize: '0.95rem', color: '#92400E', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
              <Lightbulb size={18} color="#D97706" />
              Penjelasan Tata Bahasa (Grammar & Word Order Note):
            </h5>
            <p style={{ fontSize: '0.9rem', color: '#78350F', lineHeight: 1.5 }}>
              {getGrammarNote()}
            </p>
          </div>

          {/* Word-by-Word Dictionary Breakdown Table (EN ➔ KR) */}
          <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.15rem', borderRadius: 'var(--radius-md)' }}>
            <h5 style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-espresso)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
              <BookOpen size={18} color="var(--text-espresso)" />
              Penjelasan Kata per Kata (Word-by-Word Breakdown EN ➔ KR):
            </h5>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.65rem' }}>
              {getWordBreakdown().map((pair, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    padding: '0.6rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(122, 106, 94, 0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.2rem'
                  }}
                >
                  <span style={{ fontWeight: 800, color: 'var(--text-espresso)', fontSize: '0.95rem' }}>
                    🇬🇧 {pair.en}
                  </span>
                  <span className="hangul-text" style={{ fontSize: '0.9rem', color: 'var(--text-cocoa)' }}>
                    🇰🇷 {pair.kr}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
