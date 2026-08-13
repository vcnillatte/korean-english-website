import React, { useState } from 'react';
import { Shield, Plus, Download, Upload, Trash2, Edit3, Save, RotateCcw, Filter, CheckCircle, XCircle } from 'lucide-react';

export default function InstructorDashboard({
  vocabs,
  modules,
  attemptLogs,
  addVocab,
  updateVocab,
  deleteVocab,
  importVocabs,
  resetAllProgress
}) {
  const [activeTab, setActiveTab] = useState('vocab-editor'); // 'vocab-editor' | 'attempt-logs' | 'import-export'
  const [selectedModuleFilter, setSelectedModuleFilter] = useState('all');

  // Form State for Adding New Vocab
  const [isAdding, setIsAdding] = useState(false);
  const [newForm, setNewForm] = useState({
    en: '',
    kr: '',
    id_optional: '',
    pronunciation: '',
    partOfSpeech: 'noun',
    moduleTag: 'mod-01',
    contextTag: 'cafe-general'
  });

  // Editing State
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  // Json Import text state
  const [jsonInputText, setJsonInputText] = useState('');
  const [importStatus, setImportStatus] = useState(null);

  const filteredVocabs = vocabs.filter(v => selectedModuleFilter === 'all' || v.moduleTag === selectedModuleFilter);

  // Handle Add Vocab Submit
  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newForm.en || !newForm.kr) return;
    addVocab(newForm);
    setNewForm({
      en: '',
      kr: '',
      id_optional: '',
      pronunciation: '',
      partOfSpeech: 'noun',
      moduleTag: 'mod-01',
      contextTag: 'cafe-general'
    });
    setIsAdding(false);
  };

  // Start Editing Row
  const handleStartEdit = (item) => {
    setEditingId(item.id);
    setEditForm({ ...item });
  };

  // Save Edit Row
  const handleSaveEdit = (id) => {
    updateVocab(id, editForm);
    setEditingId(null);
  };

  // Export Data to JSON file
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(vocabs, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `hangulbridge_vocab_export_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import JSON handler
  const handleImportJSONSubmit = (e) => {
    e.preventDefault();
    try {
      const parsed = JSON.parse(jsonInputText);
      if (Array.isArray(parsed)) {
        importVocabs(parsed);
        setImportStatus({ success: true, message: `Berhasil mengimpor ${parsed.length} data kosakata!` });
        setJsonInputText('');
      } else {
        setImportStatus({ success: false, message: 'Format JSON harus berupa Array of Vocab objects.' });
      }
    } catch (err) {
      setImportStatus({ success: false, message: 'JSON tidak valid. Periksa format penulisan.' });
    }
  };

  return (
    <div className="content-card">
      {/* Title & Instructor Nav Tabs */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Shield size={24} color="var(--accent-yellow-hover)" />
          <div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800 }}>Dashboard Instruktur (Teacher Control Panel)</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-cocoa)' }}>
              Kelola seed data kosakata, analisis log kesalahan murid, dan ekspor/impor modul.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setActiveTab('vocab-editor')}
            className={`btn-toggle ${activeTab === 'vocab-editor' ? 'active' : ''}`}
          >
            Vocab Bank Editor
          </button>
          <button
            onClick={() => setActiveTab('attempt-logs')}
            className={`btn-toggle ${activeTab === 'attempt-logs' ? 'active' : ''}`}
          >
            Attempt Logs ({attemptLogs.length})
          </button>
          <button
            onClick={() => setActiveTab('import-export')}
            className={`btn-toggle ${activeTab === 'import-export' ? 'active' : ''}`}
          >
            Import / Export JSON
          </button>
        </div>
      </div>

      {/* TAB 1: VOCAB BANK EDITOR */}
      {activeTab === 'vocab-editor' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Header Controls for Table */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Filter size={18} className="text-cocoa" />
              <select
                value={selectedModuleFilter}
                onChange={(e) => setSelectedModuleFilter(e.target.value)}
                className="select-custom"
              >
                <option value="all">Semua Modul ({vocabs.length} kata)</option>
                {modules.map(m => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
            </div>

            <button onClick={() => setIsAdding(!isAdding)} className="btn-chunky btn-primary">
              <Plus size={18} />
              <span>Tambah Kosakata Baru</span>
            </button>
          </div>

          {/* Add Vocab Form Modal/Card */}
          {isAdding && (
            <form onSubmit={handleAddSubmit} style={{ backgroundColor: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-md)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 800 }}>English (Target)</label>
                <input
                  type="text"
                  required
                  value={newForm.en}
                  onChange={e => setNewForm({ ...newForm, en: e.target.value })}
                  placeholder="e.g. Cold Brew"
                  style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 800 }}>Korean (Hangul)</label>
                <input
                  type="text"
                  required
                  value={newForm.kr}
                  onChange={e => setNewForm({ ...newForm, kr: e.target.value })}
                  placeholder="e.g. 콜드 브루"
                  style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 800 }}>Indonesian (Optional)</label>
                <input
                  type="text"
                  value={newForm.id_optional}
                  onChange={e => setNewForm({ ...newForm, id_optional: e.target.value })}
                  placeholder="e.g. Kopi dingin"
                  style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 800 }}>Pronunciation (Teks)</label>
                <input
                  type="text"
                  value={newForm.pronunciation}
                  onChange={e => setNewForm({ ...newForm, pronunciation: e.target.value })}
                  placeholder="e.g. koldeu beureu"
                  style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 800 }}>Part of Speech</label>
                <select
                  value={newForm.partOfSpeech}
                  onChange={e => setNewForm({ ...newForm, partOfSpeech: e.target.value })}
                  style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }}
                >
                  <option value="noun">Noun (Kata Benda)</option>
                  <option value="verb">Verb (Kata Kerja)</option>
                  <option value="adj">Adjective (Kata Sifat)</option>
                  <option value="phrase">Phrase (Frasa)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 800 }}>Modul</label>
                <select
                  value={newForm.moduleTag}
                  onChange={e => setNewForm({ ...newForm, moduleTag: e.target.value })}
                  style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }}
                >
                  {modules.map(m => (
                    <option key={m.id} value={m.id}>{m.name}</option>
                  ))}
                </select>
              </div>

              <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
                <button type="button" onClick={() => setIsAdding(false)} className="btn-toggle">Batal</button>
                <button type="submit" className="btn-chunky btn-primary" style={{ minHeight: '36px', padding: '0.4rem 1rem' }}>Simpan Kosakata</button>
              </div>
            </form>
          )}

          {/* Table of Vocabularies */}
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>English</th>
                  <th>Korean (Hangul)</th>
                  <th>ID Ref</th>
                  <th>Pronunciation</th>
                  <th>Modul</th>
                  <th>Mastery</th>
                  <th>Streak</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredVocabs.map(item => {
                  const isEditing = editingId === item.id;
                  return (
                    <tr key={item.id}>
                      <td>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editForm.en}
                            onChange={e => setEditForm({ ...editForm, en: e.target.value })}
                            style={{ width: '100%' }}
                          />
                        ) : (
                          <strong>{item.en}</strong>
                        )}
                      </td>
                      <td className="hangul-text">
                        {isEditing ? (
                          <input
                            type="text"
                            value={editForm.kr}
                            onChange={e => setEditForm({ ...editForm, kr: e.target.value })}
                            style={{ width: '100%' }}
                          />
                        ) : (
                          item.kr
                        )}
                      </td>
                      <td>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editForm.id_optional || ''}
                            onChange={e => setEditForm({ ...editForm, id_optional: e.target.value })}
                            style={{ width: '100%' }}
                          />
                        ) : (
                          item.id_optional || '-'
                        )}
                      </td>
                      <td>{item.pronunciation || '-'}</td>
                      <td>
                        <span className="badge badge-familiar">{item.moduleTag}</span>
                      </td>
                      <td>
                        <span className={`badge ${
                          item.masteryLevel === 3 ? 'badge-mastered' :
                          item.masteryLevel === 2 ? 'badge-familiar' :
                          item.masteryLevel === 1 ? 'badge-learning' : 'badge-new'
                        }`}>
                          Lvl {item.masteryLevel}
                        </span>
                      </td>
                      <td>{item.streak}x</td>
                      <td>
                        {isEditing ? (
                          <button onClick={() => handleSaveEdit(item.id)} className="btn-toggle" style={{ color: 'var(--correct-sage)' }}>
                            <Save size={16} />
                          </button>
                        ) : (
                          <div style={{ display: 'flex', gap: '0.4rem' }}>
                            <button onClick={() => handleStartEdit(item)} className="btn-toggle" title="Edit">
                              <Edit3 size={14} />
                            </button>
                            <button onClick={() => deleteVocab(item.id)} className="btn-toggle" style={{ color: 'var(--incorrect-terracotta)' }} title="Hapus">
                              <Trash2 size={14} />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: ATTEMPT LOGS */}
      {activeTab === 'attempt-logs' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-cocoa)' }}>
            Riwayat pengerjaan murid untuk memantau titik kesalahan gramatikal & hafalan.
          </p>

          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Waktu (ISO)</th>
                  <th>Mode Latihan</th>
                  <th>Input Murid</th>
                  <th>Status</th>
                  <th>AI Feedback / Catatan</th>
                </tr>
              </thead>
              <tbody>
                {attemptLogs.length === 0 ? (
                  <tr>
                    <td colSpan={5} style={{ textAlign: 'center', color: 'var(--text-cocoa)', padding: '2rem' }}>
                      Belum ada riwayat pengerjaan murid.
                    </td>
                  </tr>
                ) : (
                  attemptLogs.map(log => (
                    <tr key={log.id}>
                      <td style={{ fontSize: '0.8rem', color: 'var(--text-cocoa)' }}>
                        {new Date(log.timestamp).toLocaleTimeString()} ({new Date(log.timestamp).toLocaleDateString()})
                      </td>
                      <td>
                        <span className="badge badge-learning">{log.mode}</span>
                      </td>
                      <td>
                        <strong>"{log.input}"</strong>
                      </td>
                      <td>
                        {log.isCorrect ? (
                          <span style={{ color: 'var(--correct-sage)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                            <CheckCircle size={16} /> Benar
                          </span>
                        ) : (
                          <span style={{ color: 'var(--incorrect-terracotta)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                            <XCircle size={16} /> Salah
                          </span>
                        )}
                      </td>
                      <td style={{ fontSize: '0.85rem' }}>
                        {log.aiFeedback ? (
                          <span>Revisi: <em>"{log.aiFeedback}"</em></span>
                        ) : '-'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: IMPORT / EXPORT */}
      {activeTab === 'import-export' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={handleExportJSON} className="btn-chunky btn-primary">
              <Download size={18} />
              <span>Ekspor Data Kosakata (JSON)</span>
            </button>
            <button onClick={resetAllProgress} className="btn-chunky btn-secondary" style={{ color: 'var(--incorrect-terracotta)' }}>
              <RotateCcw size={18} />
              <span>Reset Semua Progres Murid</span>
            </button>
          </div>

          <form onSubmit={handleImportJSONSubmit} style={{ backgroundColor: 'var(--bg-card-alt)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Import Seed Data Baru (JSON Format):</h4>
            <textarea
              rows={6}
              value={jsonInputText}
              onChange={e => setJsonInputText(e.target.value)}
              placeholder="Paste JSON array kosakata di sini..."
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc', fontFamily: 'monospace', fontSize: '0.85rem' }}
            />
            <div style={{ marginTop: '0.75rem', display: 'flex', justifyContent: 'flex-end' }}>
              <button type="submit" className="btn-chunky btn-primary">
                <Upload size={18} />
                <span>Impor JSON</span>
              </button>
            </div>
            {importStatus && (
              <p style={{ marginTop: '0.5rem', fontWeight: 700, color: importStatus.success ? 'var(--correct-sage)' : 'var(--incorrect-terracotta)' }}>
                {importStatus.message}
              </p>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
