// Web Audio API Synthesizer for Cafe App Sound Effects

class SoundEffectsManager {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  playCorrect() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    
    // Play warm dual-tone chime (E5 -> G#5)
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc2.type = 'triangle';

    osc1.frequency.setValueAtTime(659.25, now); // E5
    osc1.frequency.exponentialRampToValueAtTime(830.61, now + 0.15); // G#5

    osc2.frequency.setValueAtTime(329.63, now);
    osc2.frequency.exponentialRampToValueAtTime(415.30, now + 0.15);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.35);
    osc2.stop(now + 0.35);
  }

  playShakeError() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Gentle low pitch wobble (forgiving UI)
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.setValueAtTime(180, now + 0.1);
    osc.frequency.setValueAtTime(200, now + 0.2);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.3);
  }

  playSpeech(text, lang = 'ko-KR') {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel(); // Stop current speech
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9; // Slightly slower for clear learning pronunciation
    window.speechSynthesis.speak(utterance);
  }
}

export const soundFx = new SoundEffectsManager();
