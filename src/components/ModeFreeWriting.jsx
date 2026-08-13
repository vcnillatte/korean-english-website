import React, { useState } from 'react';
import { Sparkles, Send, CheckCircle2, AlertCircle, RefreshCw, Volume2 } from 'lucide-react';
import { evaluateSentenceWithGemini } from '../utils/geminiApi';
import { CAFE_FREEWRITE_PROMPTS } from '../data/seedData';
import { soundFx } from '../utils/soundEffects';

export default function ModeFreeWriting({
  apiKey,
  showIdToggle,
  addAttemptLog,
  onOpenApiKeyModal
}) {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [userSentence, setUserSentence] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiResult, setAiResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const currentPrompt = CAFE_FREEWRITE_PROMPTS[selectedPromptIndex] || CAFE_FREEWRITE_PROMPTS[0];

  const handleEvaluate = async (e) => {
    e.preventDefault();
    if (!userSentence.trim()) return;

    setIsLoading(true);
    setErrorMessage(null);
    setAiResult(null);

    const scenarioText = currentPrompt.scenarioEN;
    const res = await evaluateSentenceWithGemini(userSentence, scenarioText, apiKey);

    setIsLoading(false);

    if (res.success) {
      setAiResult(res.data);
      if (res.data.is_correct) {
        soundFx.playCorrect();
      } else {
        soundFx.playShakeError();
      }

      addAttemptLog({
        mode: 'freewrite',
        input: userSentence,
        isCorrect: res.data.is_correct,
        aiFeedback: res.data.corrected_sentence
      });
    } else {
      setErrorMessage(res.message || 'Terjadi kesalahan saat menghubungkan ke Gemini API.');
    }
  };

  const handleInsertVocabChip = (word) => {
    setUserSentence(prev => prev ? `${prev} ${word}` : word);
  };

  return (
    <div className="content-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles size={22} color="var(--accent-yellow-hover)" />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Mode 3: Cek Kalimat (Free Writing via AI)</h3>
        </div>
        
        {!apiKey && (
          <button onClick={onOpenApiKeyModal} className="btn-toggle" style={{ color: 'var(--mastery-learning)' }}>
            ⚠️ Gunakan Custom API Key
          </button>
        )}
      </div>

      {/* Scenario Selector & Prompt Box */}
      <div style={{ backgroundColor: 'var(--bg-card-alt)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(122, 106, 94, 0.15)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-cocoa)', fontWeight: 700, textTransform: 'uppercase' }}>
            Pilih Skenario Percakapan Kafe:
          </span>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {CAFE_FREEWRITE_PROMPTS.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedPromptIndex(idx);
                  setAiResult(null);
                  setErrorMessage(null);
                }}
                className={`btn-toggle ${selectedPromptIndex === idx ? 'active' : ''}`}
                style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}
              >
                Skenario {idx + 1}
              </button>
            ))}
          </div>
        </div>

        <h4 className="hangul-text" style={{ fontSize: '1.25rem', color: 'var(--text-espresso)', marginBottom: '0.25rem' }}>
          {currentPrompt.scenarioKR}
        </h4>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-cocoa)' }}>
          {currentPrompt.scenarioEN}
        </p>

        {showIdToggle && currentPrompt.scenarioID && (
          <p style={{ fontSize: '0.85rem', color: 'var(--text-light-cocoa)', marginTop: '0.35rem' }}>
            🇮🇩 ID Ref: {currentPrompt.scenarioID}
          </p>
        )}

        {/* Suggested Vocab Chips */}
        <div style={{ marginTop: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-cocoa)' }}>Kata Kunci Bantuan:</span>
          {currentPrompt.suggestedVocab.map((v, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleInsertVocabChip(v)}
              className="badge badge-learning"
              style={{ border: 'none', cursor: 'pointer' }}
              title="Klik untuk menyisipkan kata ini"
            >
              + {v}
            </button>
          ))}
        </div>
      </div>

      {/* Text Area Free Writing Form */}
      <form onSubmit={handleEvaluate} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-cocoa)', marginBottom: '0.4rem' }}>
            Tulis Kalimat Bahasa Inggris Anda di Sini:
          </label>
          <textarea
            rows={3}
            value={userSentence}
            onChange={(e) => setUserSentence(e.target.value)}
            placeholder="Contoh: Can I get a hot latte with oat milk please?"
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              border: '2px solid rgba(122, 106, 94, 0.25)',
              fontSize: '1.05rem',
              fontFamily: 'inherit',
              outline: 'none',
              resize: 'vertical'
            }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <button
            type="button"
            onClick={() => setUserSentence('')}
            className="btn-chunky btn-secondary"
          >
            Bersihkan
          </button>
          <button
            type="submit"
            disabled={isLoading || !userSentence.trim()}
            className="btn-chunky btn-primary"
          >
            {isLoading ? (
              <>
                <RefreshCw size={18} className="animate-spin" />
                <span>AI Sedang Memeriksa...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Evaluasi Kalimat AI</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Error Message Alert (PRD 8 HTTP 429 handling) */}
      {errorMessage && (
        <div className="diff-box original shake-animation" style={{ borderColor: 'var(--incorrect-terracotta)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <AlertCircle size={24} color="var(--incorrect-terracotta)" />
          <div>
            <h4 style={{ color: 'var(--incorrect-terracotta)', fontWeight: 800 }}>Pemberitahuan Sistem</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-espresso)' }}>{errorMessage}</p>
          </div>
        </div>
      )}

      {/* AI Evaluation Output - Diff View (PRD 5.5) */}
      {aiResult && (
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={20} color="var(--accent-yellow-hover)" />
            Hasil Evaluasi AI Grammar:
          </h4>

          <div className="diff-container">
            {/* Original Sentence */}
            <div className="diff-box original">
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-cocoa)', textTransform: 'uppercase' }}>
                Kalimat Asli Anda:
              </span>
              <p style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '0.4rem', color: 'var(--text-espresso)' }}>
                "{userSentence}"
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                {aiResult.is_correct ? (
                  <span className="badge badge-mastered">✓ Tata Bahasa Benar</span>
                ) : (
                  <span className="badge badge-learning">⚡ Perlu Penyesuaian</span>
                )}
              </div>
            </div>

            {/* Corrected Sentence */}
            <div className="diff-box corrected">
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--correct-sage)', textTransform: 'uppercase' }}>
                Revisi / Kalimat Alami:
              </span>
              <p style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '0.4rem', color: 'var(--text-espresso)' }}>
                "{aiResult.corrected_sentence}"
              </p>
              <button
                type="button"
                onClick={() => soundFx.playSpeech(aiResult.corrected_sentence, 'en-US')}
                className="btn-toggle"
                style={{ marginTop: '0.5rem' }}
              >
                <Volume2 size={16} />
                <span>Dengar Pengucapan</span>
              </button>
            </div>
          </div>

          {/* Bilingual Explanations */}
          <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
            <h5 style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-espresso)', marginBottom: '0.5rem' }}>
              Penjelasan Tata Bahasa (Bilingual Explanation):
            </h5>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
              <div>
                <strong style={{ color: 'var(--text-espresso)' }}>🇬🇧 English:</strong> {aiResult.grammar_explanation_en}
              </div>
              <div className="hangul-text" style={{ fontSize: '0.95rem' }}>
                <strong style={{ color: 'var(--text-espresso)' }}>🇰🇷 Korean:</strong> {aiResult.grammar_explanation_kr}
              </div>
              {showIdToggle && aiResult.grammar_explanation_id && (
                <div>
                  <strong style={{ color: 'var(--text-cocoa)' }}>🇮🇩 Indonesian:</strong> {aiResult.grammar_explanation_id}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
