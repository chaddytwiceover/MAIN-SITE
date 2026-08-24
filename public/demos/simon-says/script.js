// Simon Says Game Logic with Web Audio API Synthesizer
const colors = ["green", "red", "yellow", "blue"];
let sequence = [];
let userSequence = [];
let score = 0;
let bestScore = parseInt(localStorage.getItem('simonSaysBestScore')) || 0;
let playing = false;
let gameState = "IDLE"; // IDLE, WATCHING, PLAYING, GAME_OVER
let difficulty = "medium";
let startTime = 0;
let reactionTimes = [];
let avgReactionTime = 0;

// Audio Synthesizer (Web Audio API)
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

const soundFrequencies = {
  green: 329.63,  // E4
  red: 261.63,    // C4
  yellow: 392.00, // G4
  blue: 523.25,   // C5
  error: 130.81   // C3 low buzz
};

function playTone(freq, duration = 0.25, type = 'sine') {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Ignore audio errors if blocked by browser policy
  }
}

// Difficulty configurations
const difficulties = {
  easy: { delay: 700, gap: 350, displayTime: 450 },
  medium: { delay: 500, gap: 200, displayTime: 320 },
  hard: { delay: 350, gap: 120, displayTime: 200 }
};

const colorBtns = colors.map(c => document.getElementById(c));
const startBtn = document.getElementById("start-btn");
const scoreVal = document.getElementById("score-val");
const bestVal = document.getElementById("best-val");
const seqVal = document.getElementById("seq-val");
const stateText = document.getElementById("state-text");
const statePill = document.getElementById("state-display");
const messageDisplay = document.getElementById("message");

function updateDisplay() {
  if (scoreVal) scoreVal.textContent = score.toString();
  if (bestVal) bestVal.textContent = bestScore.toString();
  if (seqVal) seqVal.textContent = sequence.length.toString();
  
  if (stateText) stateText.textContent = gameState;

  if (statePill) {
    statePill.className = 'state-pill';
    if (gameState === 'PLAYING') statePill.classList.add('playing');
    else if (gameState === 'WATCHING') statePill.classList.add('watching');
    else if (gameState === 'GAME_OVER') statePill.classList.add('gameover');
  }
}

function setMessage(msg, type = '') {
  if (!messageDisplay) return;
  messageDisplay.textContent = msg;
  messageDisplay.className = 'status-msg';
  if (type) messageDisplay.classList.add(type);
}

function playSequence() {
  userSequence = [];
  gameState = "WATCHING";
  updateDisplay();
  setMessage("WATCH THE SEQUENCE");
  colorBtns.forEach(btn => btn.disabled = true);

  let i = 0;
  const config = difficulties[difficulty];
  
  const playNextLight = () => {
    if (i >= sequence.length) {
      colorBtns.forEach(btn => btn.disabled = false);
      gameState = "PLAYING";
      startTime = Date.now();
      updateDisplay();
      setMessage(`YOUR TURN (1/${sequence.length})`);
      return;
    }

    const color = sequence[i];
    const btn = colorBtns[colors.indexOf(color)];
    
    setTimeout(() => {
      btn.classList.add("active");
      playTone(soundFrequencies[color], config.displayTime / 1000);
      
      setTimeout(() => {
        btn.classList.remove("active");
        i++;
        playNextLight();
      }, config.displayTime);
    }, config.gap);
  };

  setTimeout(playNextLight, config.delay);
}

function nextRound() {
  sequence.push(colors[Math.floor(Math.random() * colors.length)]);
  playSequence();
}

function handleColorClick(e) {
  if (!playing || gameState !== "PLAYING") return;
  
  const color = e.target.id;
  const clickTime = Date.now();
  const reactionTime = clickTime - startTime;
  
  userSequence.push(color);
  e.target.classList.add("active");
  playTone(soundFrequencies[color], 0.2);
  setTimeout(() => e.target.classList.remove("active"), 180);
  
  const idx = userSequence.length - 1;
  if (userSequence[idx] !== sequence[idx]) {
    gameState = "GAME_OVER";
    playing = false;
    colorBtns.forEach(btn => btn.disabled = true);
    playTone(soundFrequencies.error, 0.45, 'sawtooth');
    
    if (score > bestScore) {
      bestScore = score;
      localStorage.setItem('simonSaysBestScore', bestScore);
      setMessage(`NEW BEST: ${score}! TRY AGAIN`, 'success');
    } else {
      setMessage(`GAME OVER — SCORE: ${score}`, 'error');
    }
    
    if (startBtn) startBtn.textContent = 'PLAY AGAIN';
    updateDisplay();
    return;
  }
  
  reactionTimes.push(reactionTime);
  const sum = reactionTimes.reduce((a, b) => a + b, 0);
  avgReactionTime = Math.round(sum / reactionTimes.length);
  
  if (userSequence.length === sequence.length) {
    score++;
    gameState = "IDLE";
    updateDisplay();
    setMessage("PERFECT!", 'success');
    setTimeout(nextRound, 800);
  } else {
    startTime = Date.now();
    setMessage(`YOUR TURN (${userSequence.length + 1}/${sequence.length})`);
  }
}

function startGame() {
  getAudioContext();
  sequence = [];
  userSequence = [];
  score = 0;
  reactionTimes = [];
  avgReactionTime = 0;
  playing = true;
  gameState = "IDLE";
  if (startBtn) startBtn.textContent = 'RESTART';
  updateDisplay();
  colorBtns.forEach(btn => btn.disabled = true);
  setMessage("GET READY...");
  setTimeout(nextRound, 600);
}

function setDifficulty(level) {
  if (playing) return;
  
  difficulty = level;
  updateDisplay();
  document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.difficulty === level);
  });
}

colorBtns.forEach(btn => btn.addEventListener("click", handleColorClick));
if (startBtn) startBtn.addEventListener("click", startGame);

// Initialize difficulty buttons
document.querySelectorAll('.difficulty-btn').forEach(btn => {
  btn.addEventListener('click', () => setDifficulty(btn.dataset.difficulty));
});

// Initial display update
updateDisplay();
setMessage("PRESS START TO PLAY");
