// /script.js - Tic Tac Toe Game
/**
 * Tic Tac Toe with 3 balanced difficulty levels:
 * - Easy: Casual / randomized play with occasional winning moves
 * - Medium: Smart and human-like — blocks threats, takes wins, beatable with tactics
 * - Hard: Unbeatable optimal Minimax with Alpha-Beta pruning
 */

class TicTacToeGame {
  constructor() {
    this.PLAYER_X = 'x';
    this.PLAYER_O = 'o';
    this.GAME_STATES = {
      PLAYING: 'PLAYING',
      X_WINS: 'X_WINS',
      O_WINS: 'O_WINS',
      DRAW: 'DRAW'
    };
    this.WINNING_COMBINATIONS = [
      [0,1,2], [3,4,5], [6,7,8], // Rows: win-0, win-1, win-2
      [0,3,6], [1,4,7], [2,5,8], // Cols: win-3, win-4, win-5
      [0,4,8], [2,4,6]           // Diagonals: win-6, win-7
    ];
    this.STORAGE_KEY = 'ttt_scores_v4';
    this.AI_DELAY = 350;
    this.CENTER = 4;
    this.CORNERS = [0, 2, 6, 8];
    this.EDGES = [1, 3, 5, 7];

    this.elements = this.initializeElements();
    this.state = this.initializeState();
    this.init();
  }

  initializeElements() {
    const elements = {
      cells: Array.from(document.querySelectorAll('[data-cell]')),
      board: document.getElementById('game-board'),
      statusDisplay: document.getElementById('status-display'),
      restartButton: document.getElementById('restart-button'),
      resetScoresBtn: document.getElementById('reset-scores'),
      winningLine: document.getElementById('winning-line'),
      difficultyRadios: Array.from(document.querySelectorAll('input[name="difficulty"]')),
      humanRadios: Array.from(document.querySelectorAll('input[name="human"]')),
      xColorRadios: Array.from(document.querySelectorAll('input[name="x-color"]')),
      oColorRadios: Array.from(document.querySelectorAll('input[name="o-color"]')),
      scoreX: document.getElementById('score-x'),
      scoreO: document.getElementById('score-o'),
      scoreDraw: document.getElementById('score-draw')
    };

    Object.entries(elements).forEach(([key, value]) => {
      if (!value || (Array.isArray(value) && value.length === 0)) {
        throw new Error(`Required element not found: ${key}`);
      }
    });

    return elements;
  }

  initializeState() {
    return {
      gameState: this.GAME_STATES.PLAYING,
      humanPlayer: this.PLAYER_X,
      aiPlayer: this.PLAYER_O,
      currentPlayer: this.PLAYER_X,
      difficulty: 'easy',
      scores: { x: 0, o: 0, d: 0 },
      board: new Array(9).fill(null),
      keyboardIndex: 0,
      moveCount: 0
    };
  }

  init() {
    try {
      this.loadScores();
      this.renderScores();
      this.attachEventListeners();
      this.startNewRound();
    } catch (error) {
      console.error('Game initialization failed:', error);
      this.setStatus('Error loading game');
    }
  }

  loadScores() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        const parsedScores = JSON.parse(saved);
        this.state.scores = { ...this.state.scores, ...parsedScores };
      }
    } catch (error) {
      console.warn('Failed to load scores:', error);
    }
  }

  attachEventListeners() {
    this.elements.difficultyRadios.forEach(radio => {
      radio.addEventListener('change', () => this.handleDifficultyChange());
    });

    this.elements.humanRadios.forEach(radio => {
      radio.addEventListener('change', () => this.handleHumanPlayerChange());
    });

    this.elements.restartButton.addEventListener('click', () => this.startNewRound());
    this.elements.resetScoresBtn.addEventListener('click', () => this.resetScores());
    this.elements.board.addEventListener('keydown', (e) => this.handleKeyboardNavigation(e));

    // Color change listeners
    this.elements.xColorRadios.forEach(radio => {
      radio.addEventListener('change', () => this.handleColorChange('x'));
    });
    this.elements.oColorRadios.forEach(radio => {
      radio.addEventListener('change', () => this.handleColorChange('o'));
    });
  }

  handleColorChange(player) {
    const colorMap = {
      teal: '#D6FF5C',
      red: '#ef4444',
      blue: '#7AFFD2',
      green: '#22c55e',
      purple: '#a855f7',
      orange: '#FFB86B',
      pink: '#ec4899',
      cyan: '#7AFFD2',
      yellow: '#eab308',
      lime: '#D6FF5C'
    };

    if (player === 'x') {
      const selectedColor = this.elements.xColorRadios.find(r => r.checked)?.value;
      if (selectedColor && colorMap[selectedColor]) {
        document.documentElement.style.setProperty('--x-color', colorMap[selectedColor]);
      }
    } else {
      const selectedColor = this.elements.oColorRadios.find(r => r.checked)?.value;
      if (selectedColor && colorMap[selectedColor]) {
        document.documentElement.style.setProperty('--o-color', colorMap[selectedColor]);
      }
    }
  }

  handleDifficultyChange() {
    const selectedDifficulty = this.elements.difficultyRadios.find(r => r.checked)?.value;
    if (selectedDifficulty && selectedDifficulty !== this.state.difficulty) {
      this.state.difficulty = selectedDifficulty;
    }
  }

  handleHumanPlayerChange() {
    const selectedPlayer = this.elements.humanRadios.find(r => r.checked)?.value;
    if (selectedPlayer && selectedPlayer !== this.state.humanPlayer) {
      this.state.humanPlayer = selectedPlayer;
      this.state.aiPlayer = selectedPlayer === this.PLAYER_X ? this.PLAYER_O : this.PLAYER_X;
      this.startNewRound();
    }
  }

  startNewRound() {
    this.state.gameState = this.GAME_STATES.PLAYING;
    this.state.currentPlayer = this.PLAYER_X;
    this.state.board.fill(null);
    this.state.keyboardIndex = 0;
    this.state.moveCount = 0;

    this.resetBoard();
    this.resetWinningLine();
    this.elements.statusDisplay.classList.remove('win', 'draw');
    this.elements.cells[0].focus();

    if (this.state.currentPlayer === this.state.humanPlayer) {
      this.setStatus('Your turn');
    } else {
      this.setStatus('AI is thinking...');
      this.scheduleAIMove();
    }
  }

  resetBoard() {
    this.elements.cells.forEach((cell, index) => {
      cell.classList.remove(this.PLAYER_X, this.PLAYER_O, 'clicked', 'winner-cell');
      cell.textContent = '';
      cell.disabled = false;
      cell.setAttribute('aria-label', `Cell ${index + 1}: Empty`);
      
      const newCell = cell.cloneNode(true);
      cell.parentNode.replaceChild(newCell, cell);
      newCell.addEventListener('click', (e) => this.handlePlayerInput(e));
    });
    
    this.elements.cells = Array.from(document.querySelectorAll('[data-cell]'));
  }

  resetWinningLine() {
    this.elements.winningLine.className = 'winning-line';
    this.elements.cells.forEach(cell => cell.classList.remove('winner-cell'));
  }

  handlePlayerInput(event) {
    if (this.state.gameState !== this.GAME_STATES.PLAYING) return;
    
    const cell = event.currentTarget;
    const cellIndex = parseInt(cell.dataset.index);
    
    if (cellIndex < 0 || cellIndex > 8) return;
    if (this.state.currentPlayer !== this.state.humanPlayer) return;
    if (this.state.board[cellIndex] !== null) return;

    this.makeMove(cellIndex, this.state.humanPlayer);
    
    if (this.checkForWin(this.state.humanPlayer)) {
      this.endGame(false, this.state.humanPlayer);
    } else if (this.checkForDraw()) {
      this.endGame(true);
    } else {
      this.switchTurns();
      this.scheduleAIMove();
    }
  }

  makeMove(index, player) {
    if (index < 0 || index > 8 || this.state.board[index] !== null) {
      return false;
    }

    this.state.board[index] = player;
    this.state.moveCount++;
    
    const cell = this.elements.cells[index];
    this.renderMove(cell, player);

    return true;
  }

  renderMove(cell, player) {
    cell.classList.add('clicked', player);
    cell.textContent = player.toUpperCase();
    const cellNum = parseInt(cell.dataset.index) + 1;
    cell.setAttribute('aria-label', `Cell ${cellNum}: ${player.toUpperCase()}`);
    cell.disabled = true;
  }

  scheduleAIMove() {
    if (this.state.gameState !== this.GAME_STATES.PLAYING || this.state.currentPlayer !== this.state.aiPlayer) {
      return;
    }
    
    this.setStatus('AI is thinking...');
    setTimeout(() => this.makeAIMove(), this.AI_DELAY);
  }

  makeAIMove() {
    if (this.state.gameState !== this.GAME_STATES.PLAYING || this.state.currentPlayer !== this.state.aiPlayer) {
      return;
    }

    const bestMove = this.getBestAIMove();
    if (bestMove === null || bestMove === undefined) return;

    this.makeMove(bestMove, this.state.aiPlayer);
    
    if (this.checkForWin(this.state.aiPlayer)) {
      this.endGame(false, this.state.aiPlayer);
    } else if (this.checkForDraw()) {
      this.endGame(true);
    } else {
      this.switchTurns();
      this.focusNextEmptyCell(bestMove);
    }
  }

  checkBoardWin(board, player) {
    return this.WINNING_COMBINATIONS.some(combo =>
      board[combo[0]] === player &&
      board[combo[1]] === player &&
      board[combo[2]] === player
    );
  }

  checkForWin(player, board = this.state.board) {
    return this.checkBoardWin(board, player);
  }

  checkForDraw() {
    return this.state.board.every(cell => cell !== null) && 
           !this.checkForWin(this.PLAYER_X) && 
           !this.checkForWin(this.PLAYER_O);
  }

  getWinningCombination() {
    return this.WINNING_COMBINATIONS.find(combo => 
      this.state.board[combo[0]] !== null && 
      this.state.board[combo[0]] === this.state.board[combo[1]] &&
      this.state.board[combo[0]] === this.state.board[combo[2]]
    );
  }

  endGame(isDraw, winner = null) {
    if (isDraw) {
      this.state.gameState = this.GAME_STATES.DRAW;
      this.state.scores.d++;
      this.setStatus("It's a draw!");
      this.elements.statusDisplay.classList.add('draw');
    } else {
      this.state.gameState = winner === this.PLAYER_X ? this.GAME_STATES.X_WINS : this.GAME_STATES.O_WINS;
      
      if (winner === this.state.humanPlayer) {
        this.setStatus('You win!');
      } else {
        this.setStatus('AI wins!');
      }

      if (winner === this.PLAYER_X) {
        this.state.scores.x++;
      } else {
        this.state.scores.o++;
      }
      
      const winningCombo = this.getWinningCombination();
      if (winningCombo) {
        this.showWinningLine(winningCombo, winner);
      }
      
      this.elements.statusDisplay.classList.add('win');
    }
    
    this.renderScores();
    this.saveScores();
  }

  switchTurns() {
    this.state.currentPlayer = this.state.currentPlayer === this.PLAYER_X ? this.PLAYER_O : this.PLAYER_X;
    if (this.state.currentPlayer === this.state.humanPlayer) {
      this.setStatus('Your turn');
    } else {
      this.setStatus('AI is thinking...');
    }
  }

  getEmptyIndices(board = this.state.board) {
    const emptyIndices = [];
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        emptyIndices.push(i);
      }
    }
    return emptyIndices;
  }

  findWinningMove(player) {
    for (const combo of this.WINNING_COMBINATIONS) {
      const p0 = this.state.board[combo[0]];
      const p1 = this.state.board[combo[1]];
      const p2 = this.state.board[combo[2]];

      if (p0 === player && p1 === player && p2 === null) return combo[2];
      if (p0 === player && p2 === player && p1 === null) return combo[1];
      if (p1 === player && p2 === player && p0 === null) return combo[0];
    }
    return null;
  }

  // --- AI Difficulty Engine ---

  getBestAIMove() {
    const emptyIndices = this.getEmptyIndices();
    if (emptyIndices.length === 0) return null;

    switch (this.state.difficulty) {
      case 'easy':
        return this.getEasyMove(emptyIndices);
      case 'medium':
        return this.getMediumMove(emptyIndices);
      case 'hard':
        return this.getHardMove();
      default:
        return this.getMediumMove(emptyIndices);
    }
  }

  // Easy: Casual play (85% random, 15% immediate win if available)
  getEasyMove(emptyIndices) {
    if (Math.random() < 0.15) {
      const winMove = this.findWinningMove(this.state.aiPlayer);
      if (winMove !== null) return winMove;
    }
    return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  }

  // Medium: Human-like intelligence
  // - Always takes an immediate win (100%)
  // - Blocks player's winning moves 80% of the time
  // - 60% optimal move, 40% strategic corner/center/random move
  getMediumMove(emptyIndices) {
    const winMove = this.findWinningMove(this.state.aiPlayer);
    if (winMove !== null) return winMove;

    const blockMove = this.findWinningMove(this.state.humanPlayer);
    if (blockMove !== null && Math.random() < 0.8) {
      return blockMove;
    }

    if (Math.random() < 0.6) {
      const optimal = this.getHardMove();
      if (optimal !== null && optimal !== undefined) return optimal;
    }

    if (emptyIndices.includes(this.CENTER) && Math.random() < 0.5) {
      return this.CENTER;
    }
    const availableCorners = this.CORNERS.filter(c => emptyIndices.includes(c));
    if (availableCorners.length > 0 && Math.random() < 0.5) {
      return availableCorners[Math.floor(Math.random() * availableCorners.length)];
    }

    return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  }

  // Hard: Unbeatable optimal Minimax with Alpha-Beta pruning
  getHardMove() {
    const emptyIndices = this.getEmptyIndices();
    // Fast opening: if whole board is empty, pick center or corner
    if (emptyIndices.length === 9) {
      const openings = [this.CENTER, 0, 2, 6, 8];
      return openings[Math.floor(Math.random() * openings.length)];
    }
    const result = this.minimax(this.state.board, true, 0, -Infinity, Infinity);
    return result.index;
  }

  // Canonical Minimax with Alpha-Beta pruning
  minimax(board, isMaximizing, depth = 0, alpha = -Infinity, beta = Infinity) {
    if (this.checkBoardWin(board, this.state.aiPlayer)) {
      return { score: 10 - depth, index: null };
    }
    if (this.checkBoardWin(board, this.state.humanPlayer)) {
      return { score: depth - 10, index: null };
    }
    const emptyIndices = this.getEmptyIndices(board);
    if (emptyIndices.length === 0) {
      return { score: 0, index: null };
    }

    if (isMaximizing) {
      let maxScore = -Infinity;
      let bestIndex = emptyIndices[0];
      for (const idx of emptyIndices) {
        board[idx] = this.state.aiPlayer;
        const result = this.minimax(board, false, depth + 1, alpha, beta);
        board[idx] = null;
        if (result.score > maxScore) {
          maxScore = result.score;
          bestIndex = idx;
        }
        alpha = Math.max(alpha, maxScore);
        if (beta <= alpha) break;
      }
      return { score: maxScore, index: bestIndex };
    } else {
      let minScore = Infinity;
      let bestIndex = emptyIndices[0];
      for (const idx of emptyIndices) {
        board[idx] = this.state.humanPlayer;
        const result = this.minimax(board, true, depth + 1, alpha, beta);
        board[idx] = null;
        if (result.score < minScore) {
          minScore = result.score;
          bestIndex = idx;
        }
        beta = Math.min(beta, minScore);
        if (beta <= alpha) break;
      }
      return { score: minScore, index: bestIndex };
    }
  }

  showWinningLine(winningCombo, winner) {
    const comboIndex = this.WINNING_COMBINATIONS.indexOf(winningCombo);
    if (comboIndex === -1) return;
    
    this.resetWinningLine();
    
    // Highlight winning cells
    winningCombo.forEach(index => {
      if (this.elements.cells[index]) {
        this.elements.cells[index].classList.add('winner-cell');
      }
    });

    setTimeout(() => {
      this.elements.winningLine.className = `winning-line show win-${comboIndex} ${winner}-win`;
    }, 50);
  }

  setStatus(message) {
    this.elements.statusDisplay.textContent = message;
  }

  renderScores() {
    this.elements.scoreX.textContent = this.state.scores.x.toString();
    this.elements.scoreO.textContent = this.state.scores.o.toString();
    this.elements.scoreDraw.textContent = this.state.scores.d.toString();
  }

  saveScores() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state.scores));
    } catch (error) {
      console.warn('Failed to save scores:', error);
    }
  }

  resetScores() {
    this.state.scores = { x: 0, o: 0, d: 0 };
    this.saveScores();
    this.renderScores();
    this.setStatus('Scores reset');
  }

  handleKeyboardNavigation(event) {
    const navigationKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 
                          'Home', 'End', 'PageUp', 'PageDown', 'Enter', ' '];
    
    if (!navigationKeys.includes(event.key)) return;
    
    const currentRow = Math.floor(this.state.keyboardIndex / 3);
    const currentCol = this.state.keyboardIndex % 3;
    let newRow = currentRow;
    let newCol = currentCol;
    
    switch (event.key) {
      case 'ArrowUp': newRow = (currentRow + 2) % 3; break;
      case 'ArrowDown': newRow = (currentRow + 1) % 3; break;
      case 'ArrowLeft': newCol = (currentCol + 2) % 3; break;
      case 'ArrowRight': newCol = (currentCol + 1) % 3; break;
      case 'Home': newRow = 0; newCol = 0; break;
      case 'End': newRow = 2; newCol = 2; break;
      case 'PageUp': newRow = 0; break;
      case 'PageDown': newRow = 2; break;
      case 'Enter':
      case ' ':
        if (this.state.gameState === this.GAME_STATES.PLAYING && this.state.currentPlayer === this.state.humanPlayer) {
          this.elements.cells[this.state.keyboardIndex].click();
          event.preventDefault();
        }
        return;
    }
    
    const newIndex = newRow * 3 + newCol;
    if (newIndex !== this.state.keyboardIndex) {
      this.state.keyboardIndex = newIndex;
      this.elements.cells[this.state.keyboardIndex].focus();
      event.preventDefault();
    }
  }

  focusNextEmptyCell(fromIndex) {
    const emptyIndices = this.getEmptyIndices();
    if (emptyIndices.length === 0) return;
    
    let targetIndex = emptyIndices.find(index => index > fromIndex);
    if (targetIndex === undefined) {
      targetIndex = emptyIndices[0];
    }
    
    this.state.keyboardIndex = targetIndex;
    this.elements.cells[targetIndex].focus();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  try {
    new TicTacToeGame();
  } catch (error) {
    console.error('Failed to initialize game:', error);
  }
});
