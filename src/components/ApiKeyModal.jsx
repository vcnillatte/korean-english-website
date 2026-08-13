import React, { useState } from 'react';
import { Key, X, Check } from 'lucide-react';

export default function ApiKeyModal({ isOpen, onClose, apiKey, setApiKey }) {
  const [keyInput, setKeyInput] = useState(apiKey || '');
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    setApiKey(keyInput.trim());
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Key size={22} color="var(--accent-yellow-hover)" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Pengaturan Gemini API Key</h3>
          </div>
          <button onClick={onClose} className="btn-toggle" style={{ border: 'none' }}>
            <X size={20} />
          </button>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-cocoa)' }}>
          Mode 3 (Cek Kalimat) menggunakan <strong>Gemini Free Tier API</strong> untuk evaluasi AI. Masukkan API Key Anda di bawah ini jika ingin menggunakan kuota API Anda sendiri.
        </p>

        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-espresso)' }}>
              Gemini API Key:
            </label>
            <input
              type="password"
              value={keyInput}
              onChange={e => setKeyInput(e.target.value)}
              placeholder="AIzaSy..."
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(122, 106, 94, 0.3)',
                fontFamily: 'monospace',
                fontSize: '0.95rem',
                marginTop: '0.35rem'
              }}
            />
          </div>

          <p style={{ fontSize: '0.75rem', color: 'var(--text-light-cocoa)' }}>
            * API Key akan tersimpan dengan aman di `localStorage` browser Anda. Jika dikosongkan, sistem akan otomatis menggunakan layanan evaluasi cerdas bawaan.
          </p>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
            <button type="button" onClick={onClose} className="btn-chunky btn-secondary">
              Batal
            </button>
            <button type="submit" className="btn-chunky btn-primary">
              {isSaved ? (
                <>
                  <Check size={18} />
                  <span>Tersimpan!</span>
                </>
              ) : (
                <span>Simpan Key</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
