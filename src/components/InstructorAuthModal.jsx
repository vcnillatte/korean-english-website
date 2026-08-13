import React, { useState } from 'react';
import { Lock, ShieldCheck, X, AlertCircle } from 'lucide-react';

export default function InstructorAuthModal({ isOpen, onClose, onSuccess }) {
  const [passcode, setPasscode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    // Default teacher passcode is 1234 or admin
    if (passcode.trim() === '1234' || passcode.trim().toLowerCase() === 'admin') {
      setErrorMsg('');
      setPasscode('');
      onSuccess();
    } else {
      setErrorMsg('PIN / Kata sandi instruktur salah.');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '400px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ backgroundColor: 'var(--bg-surface)', padding: '0.5rem', borderRadius: 'var(--radius-pill)' }}>
              <Lock size={20} color="var(--text-espresso)" />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Akses Instruktur</h3>
          </div>
          <button onClick={onClose} className="btn-toggle" style={{ border: 'none' }}>
            <X size={20} />
          </button>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-cocoa)' }}>
          Area ini khusus untuk Instruktur/Guru untuk mengelola modul & melihat analitik murid. Masukkan PIN instruktur untuk melanjutkan.
        </p>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-espresso)' }}>
              PIN / Passcode Instruktur:
            </label>
            <input
              type="password"
              autoFocus
              value={passcode}
              onChange={e => setPasscode(e.target.value)}
              placeholder="Masukkan PIN"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: 'var(--radius-md)',
                border: '2px solid rgba(122, 106, 94, 0.3)',
                fontSize: '1.1rem',
                letterSpacing: '0.2em',
                textAlign: 'center',
                outline: 'none',
                marginTop: '0.35rem'
              }}
            />
          </div>

          {errorMsg && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--incorrect-terracotta)', fontSize: '0.85rem', fontWeight: 700 }}>
              <AlertCircle size={16} />
              <span>{errorMsg}</span>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
            <button type="button" onClick={onClose} className="btn-chunky btn-secondary" style={{ minHeight: '40px', fontSize: '0.85rem' }}>
              Batal
            </button>
            <button type="submit" className="btn-chunky btn-primary" style={{ minHeight: '40px', fontSize: '0.85rem' }}>
              <ShieldCheck size={18} />
              <span>Masuk Dashboard</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
