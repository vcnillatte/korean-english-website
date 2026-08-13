import { useState, useEffect } from 'react';
import { INITIAL_VOCAB, INITIAL_SENTENCE_PATTERNS, INITIAL_MODULES } from '../data/seedData';

const LOCAL_STORAGE_KEY_VOCAB = 'hb_vocab_bank_v2';
const LOCAL_STORAGE_KEY_LOGS = 'hb_attempt_logs_v2';
const LOCAL_STORAGE_KEY_SHOW_ID = 'hb_show_id_toggle_v2';
const LOCAL_STORAGE_KEY_API_KEY = 'hb_gemini_api_key_v2';

export function useAppStore() {
  // 1. Language Toggle ID state
  const [showIdToggle, setShowIdToggle] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY_SHOW_ID);
    return saved !== null ? JSON.parse(saved) : true;
  });

  // 2. Vocab Bank State (Guaranteed 160+ items)
  const [vocabs, setVocabs] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY_VOCAB);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= INITIAL_VOCAB.length) {
          return parsed;
        }
      } catch (e) {
        console.error('Failed to parse saved vocabs', e);
      }
    }
    return INITIAL_VOCAB;
  });

  // 3. Sentence Patterns & Modules
  const [sentencePatterns] = useState(INITIAL_SENTENCE_PATTERNS);
  const [modules] = useState(INITIAL_MODULES);

  // 4. Attempt Logs State
  const [attemptLogs, setAttemptLogs] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY_LOGS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse logs', e);
      }
    }
    return [];
  });

  // 5. Active Selections
  const [activeModule, setActiveModule] = useState('all');
  const [activeMode, setActiveMode] = useState('translate'); // 'translate' | 'sentence-builder' | 'free-writing'
  const [isInstructorMode, setIsInstructorMode] = useState(false);

  // 6. Gemini API Key
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem(LOCAL_STORAGE_KEY_API_KEY) || '';
  });

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_SHOW_ID, JSON.stringify(showIdToggle));
  }, [showIdToggle]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_VOCAB, JSON.stringify(vocabs));
  }, [vocabs]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_LOGS, JSON.stringify(attemptLogs));
  }, [attemptLogs]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_API_KEY, apiKey);
  }, [apiKey]);

  // Spaced-Repetition Core Logic
  const recordVocabAttempt = (vocabId, isCorrect) => {
    setVocabs(prevVocabs => {
      return prevVocabs.map(item => {
        if (item.id !== vocabId) return item;

        let newStreak = isCorrect ? item.streak + 1 : 0;
        let newLevel = item.masteryLevel;

        if (isCorrect) {
          if (newStreak >= 5) {
            newLevel = 3; // Mastered
          } else if (newStreak >= 3) {
            newLevel = Math.max(newLevel, 2); // Familiar
          } else {
            newLevel = Math.max(newLevel, 1); // Learning
          }
        } else {
          // Demotion Rule: If wrong in Familiar or Mastered, decrease 1 level
          if (item.masteryLevel >= 2) {
            newLevel = item.masteryLevel - 1;
          } else {
            newLevel = 1; // Learning
          }
        }

        return {
          ...item,
          streak: newStreak,
          masteryLevel: newLevel
        };
      });
    });
  };

  // Add Log Entry
  const addAttemptLog = (entry) => {
    const newLog = {
      id: 'log-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
      timestamp: new Date().toISOString(),
      ...entry
    };
    setAttemptLogs(prev => [newLog, ...prev]);
  };

  // Instructor Methods
  const addVocab = (newVocab) => {
    const vocabWithDefaults = {
      id: 'v-' + Date.now(),
      streak: 0,
      masteryLevel: 0,
      ...newVocab
    };
    setVocabs(prev => [vocabWithDefaults, ...prev]);
  };

  const updateVocab = (id, updatedFields) => {
    setVocabs(prev => prev.map(v => v.id === id ? { ...v, ...updatedFields } : v));
  };

  const deleteVocab = (id) => {
    setVocabs(prev => prev.filter(v => v.id !== id));
  };

  const importVocabs = (newVocabList) => {
    if (Array.isArray(newVocabList) && newVocabList.length > 0) {
      setVocabs(newVocabList);
    }
  };

  const resetAllProgress = () => {
    setVocabs(INITIAL_VOCAB);
    setAttemptLogs([]);
  };

  // Mastery Summary Counts
  const masteryStats = vocabs.reduce((acc, curr) => {
    if (curr.masteryLevel === 0) acc.new++;
    else if (curr.masteryLevel === 1) acc.learning++;
    else if (curr.masteryLevel === 2) acc.familiar++;
    else if (curr.masteryLevel === 3) acc.mastered++;
    return acc;
  }, { new: 0, learning: 0, familiar: 0, mastered: 0 });

  return {
    showIdToggle,
    setShowIdToggle,
    vocabs,
    sentencePatterns,
    modules,
    attemptLogs,
    activeModule,
    setActiveModule,
    activeMode,
    setActiveMode,
    isInstructorMode,
    setIsInstructorMode,
    apiKey,
    setApiKey,
    recordVocabAttempt,
    addAttemptLog,
    addVocab,
    updateVocab,
    deleteVocab,
    importVocabs,
    resetAllProgress,
    masteryStats
  };
}
