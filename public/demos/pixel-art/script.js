// /script.js
// Happy Little Pixels — Bob Ross inspired pixel art editor
// Features: brush, spray, eraser, shapes, fill, picker, symmetry mode, palette

(() => {
  // DOM Elements
  const canvas = document.getElementById('canvas');
  const overlay = document.getElementById('overlayCanvas');
  const wrapper = document.getElementById('canvasWrapper');
  const colorInput = document.getElementById('colorPicker');
  const toolSelect = document.getElementById('toolSelect');
  const brushSizeEl = document.getElementById('brushSize');
  const undoBtn = document.getElementById('undoBtn');
  const redoBtn = document.getElementById('redoBtn');
  const toggleGridBtn = document.getElementById('toggleGrid');
  const resetBtn = document.getElementById('resetBtn');
  const exportBtn = document.getElementById('exportBtn');
  const symmetryBtn = document.getElementById('symmetryBtn');
  const canvasSizeBtn = document.getElementById('canvasSizeBtn');
  const canvasSizeModal = document.getElementById('canvasSizeModal');
  const canvasWidthInput = document.getElementById('canvasWidth');
  const canvasHeightInput = document.getElementById('canvasHeight');
  const applySizeBtn = document.getElementById('applySizeBtn');
  const cancelSizeBtn = document.getElementById('cancelSizeBtn');
  const colorPalette = document.getElementById('colorPalette');
  const recentColors = document.getElementById('recentColors');

  // HUD Elements
  const hudTool = document.getElementById('hudTool');
  const hudColor = document.getElementById('hudColor');
  const hudSize = document.getElementById('hudSize');
  const hudZoom = document.getElementById('hudZoom');
  const hudCoords = document.getElementById('hudCoords');
  const hudCanvas = document.getElementById('hudCanvas');
  const hudSymmetry = document.getElementById('hudSymmetry');
  const symmetryStat = document.getElementById('symmetryStat');
  const bobQuote = document.getElementById('bobQuote');

  // Bob Ross Quotes
  const BOB_QUOTES = [
    "There are no mistakes, only happy little accidents.",
    "We don't make mistakes, just happy little accidents.",
    "Let's build a happy little cloud.",
    "Beat the devil out of it.",
    "Happy little trees live right here.",
    "Talent is a pursued interest. Anything you're willing to practice, you can do.",
    "I think there's an artist hidden at the bottom of every single one of us.",
    "We want happy paintings. Happy paintings. If you want sad things, watch the news.",
    "Look around. Look at what we have. Beauty is everywhere—you only have to look to see it.",
    "The secret to doing anything is believing that you can do it.",
    "In painting, you have unlimited power. You have the ability to move mountains.",
    "There's nothing wrong with having a tree as a friend.",
    "Every day is a good day when you paint.",
    "Just let go — and fall like a little waterfall.",
    "Water's like me. It's lazy... it always looks for the easiest way to do things."
  ];

  // Nature-inspired color palette
  const NATURE_PALETTE = [
    // Sky colors
    '#87CEEB', '#B6D7E8', '#6BB3D9', '#4A90A4',
    // Forest greens
    '#228B22', '#2D4A2D', '#4A6B4A', '#6B8E23',
    // Earth tones
    '#8B4513', '#D2B48C', '#CD853F', '#A0522D',
    // Water
    '#4169E1', '#1E90FF', '#00CED1', '#20B2AA',
    // Sunset/warmth
    '#DAA520', '#FF6347', '#FF7F50', '#FFD700',
    // Mountains/rocks
    '#708090', '#778899', '#696969', '#2F4F4F',
    // Flowers
    '#FF69B4', '#DA70D6', '#9370DB', '#BA55D3',
    // Basics
    '#FFFFFF', '#F5F5DC', '#000000', '#2B2B2B'
  ];

  // Config
  const DEFAULT_WIDTH = 512;
  const DEFAULT_HEIGHT = 384;

  // State
  let dpr = Math.max(1, window.devicePixelRatio || 1);
  let width = DEFAULT_WIDTH;
  let height = DEFAULT_HEIGHT;
  let zoom = 1;
  let pan = { x: 0, y: 0 };

  // Tools: brush, spray, eraser, line, rect, ellipse, fill, picker
  let tool = 'brush';
  let brushSize = Math.max(1, Math.min(50, parseInt(brushSizeEl.value || '5')));
  let color = colorInput.value || '#2b2b2b';
  let gridOn = false;
  let symmetryMode = 'off'; // 'off', 'vertical', 'horizontal', 'both'

  // Recent colors (max 8)
  let recentColorsList = ['#2B2B2B', '#FFFFFF'];
  const MAX_RECENT = 8;

  // Canvas contexts
  const ctx = canvas.getContext('2d', { alpha: true });
  const octx = overlay.getContext('2d', { alpha: true });

  // History for undo/redo
  const history = [];
  let historyIndex = -1;
  const MAX_HISTORY = 50;

  // Interaction state
  let isDrawing = false;
  let start = null;
  let last = null;
  let isPanning = false;
  let lastTouchDist = null;

  // Tool name mapping for HUD
  const TOOL_NAMES = {
    brush: 'Nature Brush',
    spray: 'Gentle Mist',
    eraser: 'Cloud Wipe',
    line: 'Tree Branch',
    rect: 'Mountain Frame',
    ellipse: 'Happy Circle',
    fill: 'Color Wash',
    picker: 'Color Harvest'
  };

  // Initialize
  function init() {
    resizeCanvas(width, height);
    clearCanvas();
    pushHistory();
    buildPalette();
    updateRecentColors();
    bindEvents();
    updateHUD();
    centerCanvas();
    render();
    startQuoteRotation();
  }

  // Resize canvases
  function resizeCanvas(w, h) {
    width = w;
    height = h;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    overlay.width = Math.floor(width * dpr);
    overlay.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    overlay.style.width = width + 'px';
    overlay.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    octx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (hudCanvas) hudCanvas.textContent = `${width}×${height}`;
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, width, height);
  }

  // History management
  function pushHistory() {
    if (historyIndex < history.length - 1) history.splice(historyIndex + 1);
    const snap = ctx.getImageData(0, 0, canvas.width, canvas.height);
    history.push(snap);
    if (history.length > MAX_HISTORY) history.shift();
    historyIndex = history.length - 1;
    updateUndoButtons();
  }

  function undo() {
    if (historyIndex <= 0) return;
    historyIndex--;
    ctx.putImageData(history[historyIndex], 0, 0);
    render();
    updateUndoButtons();
  }

  function redo() {
    if (historyIndex >= history.length - 1) return;
    historyIndex++;
    ctx.putImageData(history[historyIndex], 0, 0);
    render();
    updateUndoButtons();
  }

  function updateUndoButtons() {
    undoBtn.disabled = historyIndex <= 0;
    redoBtn.disabled = historyIndex >= history.length - 1;
  }

  // Tool/color setters
  function setTool(t) {
    tool = t;
    toolSelect.value = t;
    updateHUD();
    drawOverlay();
  }

  function setColor(c) {
    color = c;
    colorInput.value = c;
    addRecentColor(c);
    updateHUD();
  }

  function setBrushSize(s) {
    brushSize = Math.max(1, Math.min(100, Math.round(s)));
    brushSizeEl.value = String(brushSize);
    updateHUD();
    drawOverlay();
  }

  // Recent colors
  function addRecentColor(c) {
    const idx = recentColorsList.indexOf(c.toUpperCase());
    if (idx !== -1) recentColorsList.splice(idx, 1);
    recentColorsList.unshift(c.toUpperCase());
    if (recentColorsList.length > MAX_RECENT) recentColorsList.pop();
    updateRecentColors();
  }

  function updateRecentColors() {
    if (!recentColors) return;
    recentColors.innerHTML = '';
    recentColorsList.forEach(c => {
      const swatch = document.createElement('button');
      swatch.className = 'swatch';
      swatch.style.background = c;
      swatch.title = c;
      swatch.addEventListener('click', () => setColor(c));
      recentColors.appendChild(swatch);
    });
  }

  // Build color palette
  function buildPalette() {
    if (!colorPalette) return;
    colorPalette.innerHTML = '';
    NATURE_PALETTE.forEach(c => {
      const swatch = document.createElement('button');
      swatch.className = 'swatch';
      swatch.style.background = c;
      swatch.title = c;
      swatch.addEventListener('click', () => setColor(c));
      colorPalette.appendChild(swatch);
    });
  }

  // Symmetry mode
  function cycleSymmetry() {
    const modes = ['off', 'vertical', 'horizontal', 'both'];
    const idx = modes.indexOf(symmetryMode);
    symmetryMode = modes[(idx + 1) % modes.length];
    symmetryBtn.classList.toggle('active', symmetryMode !== 'off');
    if (symmetryStat) symmetryStat.hidden = symmetryMode === 'off';
    const labels = { off: 'Off', vertical: '↔ Vertical', horizontal: '↕ Horizontal', both: '⊕ Both' };
    if (hudSymmetry) hudSymmetry.textContent = labels[symmetryMode];
    render();
  }

  // Canvas positioning
  function centerCanvas() {
    const rect = wrapper.getBoundingClientRect();
    pan.x = (rect.width - width * zoom) / 2;
    pan.y = (rect.height - height * zoom) / 2;
  }

  function render() {
    overlay.style.transform = canvas.style.transform = `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`;
    drawOverlay();
    updateHUD();
  }

  function drawOverlay() {
    octx.clearRect(0, 0, width, height);
    
    // Grid
    if (gridOn && zoom > 0.5) {
      const gridSize = zoom > 2 ? 16 : 32;
      octx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--grid-color') || 'rgba(0,0,0,0.06)';
      octx.lineWidth = 1 / zoom;
      for (let x = 0; x <= width; x += gridSize) {
        octx.beginPath();
        octx.moveTo(x + 0.5, 0);
        octx.lineTo(x + 0.5, height);
        octx.stroke();
      }
      for (let y = 0; y <= height; y += gridSize) {
        octx.beginPath();
        octx.moveTo(0, y + 0.5);
        octx.lineTo(width, y + 0.5);
        octx.stroke();
      }
    }

    // Symmetry guides
    if (symmetryMode !== 'off') {
      octx.strokeStyle = 'rgba(218, 165, 32, 0.5)';
      octx.lineWidth = 2 / zoom;
      octx.setLineDash([5 / zoom, 5 / zoom]);
      if (symmetryMode === 'vertical' || symmetryMode === 'both') {
        octx.beginPath();
        octx.moveTo(width / 2, 0);
        octx.lineTo(width / 2, height);
        octx.stroke();
      }
      if (symmetryMode === 'horizontal' || symmetryMode === 'both') {
        octx.beginPath();
        octx.moveTo(0, height / 2);
        octx.lineTo(width, height / 2);
        octx.stroke();
      }
      octx.setLineDash([]);
    }

    // Shape preview
    if (isDrawing && start && (tool === 'line' || tool === 'rect' || tool === 'ellipse')) {
      const e = last || start;
      octx.strokeStyle = color;
      octx.fillStyle = hexToRgba(color, 0.12);
      octx.lineWidth = Math.max(1, brushSize / 4);
      
      drawShapePreview(octx, start, e);
    }

    // Brush cursor preview
    if ((tool === 'brush' || tool === 'eraser' || tool === 'spray') && last) {
      octx.fillStyle = hexToRgba(color, tool === 'eraser' ? 0.18 : 0.12);
      octx.strokeStyle = hexToRgba(color, 0.4);
      octx.lineWidth = 1;
      octx.beginPath();
      octx.arc(last.x, last.y, Math.max(1, brushSize / 2), 0, Math.PI * 2);
      octx.fill();
      octx.stroke();
    }
  }

  function drawShapePreview(context, s, e) {
    const x = Math.min(s.x, e.x), y = Math.min(s.y, e.y);
    const w = Math.abs(e.x - s.x), h = Math.abs(e.y - s.y);
    
    if (tool === 'line') {
      context.beginPath();
      context.moveTo(s.x, s.y);
      context.lineTo(e.x, e.y);
      context.stroke();
    } else if (tool === 'rect') {
      context.fillRect(x, y, w, h);
      context.strokeRect(x + 0.5, y + 0.5, w, h);
    } else if (tool === 'ellipse') {
      context.beginPath();
      context.ellipse((s.x + e.x) / 2, (s.y + e.y) / 2, w / 2 || 1, h / 2 || 1, 0, 0, Math.PI * 2);
      context.fill();
      context.stroke();
    }
  }

  // Helpers
  function clientToCanvasPoint(clientX, clientY) {
    const rect = wrapper.getBoundingClientRect();
    const x = (clientX - rect.left - pan.x) / zoom;
    const y = (clientY - rect.top - pan.y) / zoom;
    return { x: Math.round(x), y: Math.round(y) };
  }

  function hexToRgba(hex, a = 1) {
    const h = (hex || '#000000').replace('#', '');
    const r = parseInt(h.substring(0, 2), 16);
    const g = parseInt(h.substring(2, 4), 16);
    const b = parseInt(h.substring(4, 6), 16);
    return `rgba(${r},${g},${b},${a})`;
  }

  function getMirroredPoints(p) {
    const points = [p];
    if (symmetryMode === 'vertical' || symmetryMode === 'both') {
      points.push({ x: width - p.x, y: p.y });
    }
    if (symmetryMode === 'horizontal' || symmetryMode === 'both') {
      points.push({ x: p.x, y: height - p.y });
    }
    if (symmetryMode === 'both') {
      points.push({ x: width - p.x, y: height - p.y });
    }
    return points;
  }

  // Draw routines
  function drawDot(x, y, size, col, erase = false) {
    if (erase) {
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,1)';
      ctx.beginPath();
      ctx.arc(x, y, Math.max(1, size / 2), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    } else {
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.arc(x, y, Math.max(1, size / 2), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawSpray(x, y, size, col) {
    const density = Math.floor(size * 2);
    const radius = size / 2;
    ctx.fillStyle = col;
    for (let i = 0; i < density; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * radius;
      const dx = Math.cos(angle) * r;
      const dy = Math.sin(angle) * r;
      ctx.fillRect(Math.round(x + dx), Math.round(y + dy), 1, 1);
    }
  }

  function drawLinePixels(x0, y0, x1, y1, size, col, erase = false) {
    let dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
    let dy = Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
    let err = (dx > dy ? dx : -dy) / 2;
    while (true) {
      drawDot(x0, y0, size, col, erase);
      if (x0 === x1 && y0 === y1) break;
      const e2 = err;
      if (e2 > -dx) { err -= dy; x0 += sx; }
      if (e2 < dy) { err += dx; y0 += sy; }
    }
  }

  function floodFill(x, y, newColor) {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = img.data;
    const scale = dpr;
    const imgWidth = canvas.width;
    
    const idx = ((Math.floor(y * scale)) * imgWidth + Math.floor(x * scale)) * 4;
    const targetR = data[idx], targetG = data[idx + 1], targetB = data[idx + 2], targetA = data[idx + 3];
    const newR = parseInt(newColor.slice(1, 3), 16);
    const newG = parseInt(newColor.slice(3, 5), 16);
    const newB = parseInt(newColor.slice(5, 7), 16);
    
    if (targetR === newR && targetG === newG && targetB === newB && targetA === 255) return;
    
    const stack = [[x, y]];
    const visited = new Set();
    
    while (stack.length) {
      const [cx, cy] = stack.pop();
      const key = `${cx},${cy}`;
      if (visited.has(key)) continue;
      if (cx < 0 || cy < 0 || cx >= width || cy >= height) continue;
      
      const i = (Math.floor(cy * scale) * imgWidth + Math.floor(cx * scale)) * 4;
      if (data[i] === targetR && data[i + 1] === targetG && data[i + 2] === targetB && data[i + 3] === targetA) {
        data[i] = newR;
        data[i + 1] = newG;
        data[i + 2] = newB;
        data[i + 3] = 255;
        visited.add(key);
        stack.push([cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1]);
      }
    }
    ctx.putImageData(img, 0, 0);
  }

  // Event handlers
  function onPointerDown(e) {
    if (e.button === 1 || e.buttons === 4) {
      isPanning = true;
      wrapper.classList.add('panning');
      return;
    }
    
    isDrawing = true;
    const p = clientToCanvasPoint(e.clientX, e.clientY);
    start = { x: p.x, y: p.y };
    last = { x: p.x, y: p.y };

    if (tool === 'picker') {
      pickColor(p.x, p.y);
      isDrawing = false;
      start = null;
      last = null;
      return;
    }

    if (tool === 'fill') {
      getMirroredPoints(p).forEach(pt => floodFill(pt.x, pt.y, color));
      pushHistory();
      isDrawing = false;
      start = null;
      last = null;
      return;
    }

    if (tool === 'brush' || tool === 'eraser') {
      const erase = tool === 'eraser';
      getMirroredPoints(p).forEach(pt => drawDot(pt.x, pt.y, brushSize, color, erase));
    } else if (tool === 'spray') {
      getMirroredPoints(p).forEach(pt => drawSpray(pt.x, pt.y, brushSize, color));
    }
    render();
  }

  function onPointerMove(e) {
    const p = clientToCanvasPoint(e.clientX, e.clientY);
    last = { x: p.x, y: p.y };
    hudCoords.textContent = `${p.x}, ${p.y}`;

    if (e.buttons === 4 || isPanning) {
      pan.x += e.movementX;
      pan.y += e.movementY;
      render();
      return;
    }

    if (!isDrawing || !start) {
      drawOverlay();
      return;
    }

    if (tool === 'brush' || tool === 'eraser') {
      const erase = tool === 'eraser';
      getMirroredPoints(start).forEach((sp, i) => {
        const ep = getMirroredPoints(p)[i];
        drawLinePixels(sp.x, sp.y, ep.x, ep.y, brushSize, color, erase);
      });
      start = { x: p.x, y: p.y };
    } else if (tool === 'spray') {
      getMirroredPoints(p).forEach(pt => drawSpray(pt.x, pt.y, brushSize, color));
    }
    render();
  }

  function onPointerUp(e) {
    if (isPanning) {
      isPanning = false;
      wrapper.classList.remove('panning');
      return;
    }
    if (!isDrawing) return;
    isDrawing = false;

    if (tool === 'line' || tool === 'rect' || tool === 'ellipse') {
      const s = start, ep = last || start;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = Math.max(1, brushSize / 4);
      
      getMirroredPoints(s).forEach((ms, i) => {
        const me = getMirroredPoints(ep)[i];
        drawFinalShape(ms, me);
      });
    }

    pushHistory();
    start = null;
    last = null;
    render();
  }

  function drawFinalShape(s, e) {
    const x = Math.min(s.x, e.x), y = Math.min(s.y, e.y);
    const w = Math.abs(e.x - s.x), h = Math.abs(e.y - s.y);
    
    if (tool === 'line') {
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(e.x, e.y);
      ctx.stroke();
    } else if (tool === 'rect') {
      ctx.fillRect(x, y, w, h);
      ctx.strokeRect(x + 0.5, y + 0.5, w, h);
    } else if (tool === 'ellipse') {
      ctx.beginPath();
      ctx.ellipse((s.x + e.x) / 2, (s.y + e.y) / 2, w / 2 || 1, h / 2 || 1, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
  }

  function pickColor(x, y) {
    const pix = ctx.getImageData(Math.floor(x * dpr), Math.floor(y * dpr), 1, 1).data;
    if (pix[3] === 0) return; // transparent
    setColor(`#${[pix[0], pix[1], pix[2]].map(n => n.toString(16).padStart(2, '0')).join('')}`);
  }

  // Touch support for pinch zoom
  function onTouchStart(e) {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastTouchDist = Math.hypot(dx, dy);
    }
  }

  function onTouchMove(e) {
    if (e.touches.length === 2 && lastTouchDist !== null) {
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const scale = dist / lastTouchDist;
      
      const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      const rect = wrapper.getBoundingClientRect();
      const mx = centerX - rect.left;
      const my = centerY - rect.top;
      
      const oldZoom = zoom;
      zoom = Math.max(0.25, Math.min(8, zoom * scale));
      pan.x = mx - (mx - pan.x) * (zoom / oldZoom);
      pan.y = my - (my - pan.y) * (zoom / oldZoom);
      
      lastTouchDist = dist;
      render();
    }
  }

  function onTouchEnd() {
    lastTouchDist = null;
  }

  // Wheel zoom
  function onWheel(e) {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const rect = wrapper.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const oldZoom = zoom;
      zoom = Math.max(0.25, Math.min(8, zoom - Math.sign(e.deltaY) * 0.15));
      pan.x = mx - (mx - pan.x) * (zoom / oldZoom);
      pan.y = my - (my - pan.y) * (zoom / oldZoom);
      render();
    }
  }

  // Keyboard shortcuts
  function onKeyDown(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;
    
    if (e.ctrlKey || e.metaKey) {
      if (e.key.toLowerCase() === 'z') { e.preventDefault(); undo(); }
      if (e.key.toLowerCase() === 'y') { e.preventDefault(); redo(); }
      return;
    }

    switch (e.key.toLowerCase()) {
      case 'g': gridOn = !gridOn; toggleGridBtn.classList.toggle('active', gridOn); render(); break;
      case 'm': cycleSymmetry(); break;
      case '[': setBrushSize(brushSize - 1); break;
      case ']': setBrushSize(brushSize + 1); break;
      case '+': case '=': zoom = Math.min(8, zoom + 0.25); render(); break;
      case '-': zoom = Math.max(0.25, zoom - 0.25); render(); break;
      case '1': setTool('brush'); break;
      case '2': setTool('spray'); break;
      case '3': setTool('eraser'); break;
      case '4': setTool('line'); break;
      case '5': setTool('rect'); break;
      case '6': setTool('ellipse'); break;
      case '7': setTool('fill'); break;
      case '8': setTool('picker'); break;
    }
  }

  function updateHUD() {
    hudTool.textContent = TOOL_NAMES[tool] || tool;
    hudColor.textContent = color.toUpperCase();
    hudSize.textContent = String(brushSize);
    hudZoom.textContent = `${Math.round(zoom * 100)}%`;
  }

  // Save PNG
  function savePNG() {
    const out = document.createElement('canvas');
    out.width = canvas.width;
    out.height = canvas.height;
    const outCtx = out.getContext('2d', { alpha: true });
    outCtx.drawImage(canvas, 0, 0);
    out.toBlob(blob => {
      const link = document.createElement('a');
      link.download = `happy-little-pixels_${width}x${height}_${new Date().toISOString().replace(/[:.]/g, '-')}.png`;
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);
    });
  }

  // Canvas size modal
  function openSizeModal() {
    canvasWidthInput.value = width;
    canvasHeightInput.value = height;
    canvasSizeModal.hidden = false;
  }

  function closeSizeModal() {
    canvasSizeModal.hidden = true;
  }

  function applyCanvasSize() {
    const newW = Math.max(16, Math.min(2048, parseInt(canvasWidthInput.value) || width));
    const newH = Math.max(16, Math.min(2048, parseInt(canvasHeightInput.value) || height));
    
    // Save current content
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    tempCanvas.getContext('2d').drawImage(canvas, 0, 0);
    
    resizeCanvas(newW, newH);
    clearCanvas();
    
    // Restore content (centered or cropped)
    ctx.drawImage(tempCanvas, 0, 0, Math.min(tempCanvas.width, canvas.width), Math.min(tempCanvas.height, canvas.height), 0, 0, Math.min(width, tempCanvas.width / dpr), Math.min(height, tempCanvas.height / dpr));
    
    pushHistory();
    centerCanvas();
    render();
    closeSizeModal();
  }

  // Bob Ross quotes rotation
  function startQuoteRotation() {
    if (!bobQuote) return;
    let quoteIdx = 0;
    setInterval(() => {
      quoteIdx = (quoteIdx + 1) % BOB_QUOTES.length;
      bobQuote.style.opacity = 0;
      setTimeout(() => {
        bobQuote.textContent = `"${BOB_QUOTES[quoteIdx]}"`;
        bobQuote.style.opacity = 1;
      }, 300);
    }, 12000);
  }

  // Bind all events
  function bindEvents() {
    // Pointer events
    wrapper.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    wrapper.addEventListener('contextmenu', e => e.preventDefault());
    wrapper.addEventListener('wheel', onWheel, { passive: false });

    // Touch events for pinch zoom
    wrapper.addEventListener('touchstart', onTouchStart, { passive: false });
    wrapper.addEventListener('touchmove', onTouchMove, { passive: false });
    wrapper.addEventListener('touchend', onTouchEnd);

    // Controls
    toolSelect.addEventListener('change', () => setTool(toolSelect.value));
    colorInput.addEventListener('input', () => setColor(colorInput.value));
    brushSizeEl.addEventListener('input', () => setBrushSize(+brushSizeEl.value));
    undoBtn.addEventListener('click', undo);
    redoBtn.addEventListener('click', redo);
    toggleGridBtn.addEventListener('click', () => {
      gridOn = !gridOn;
      toggleGridBtn.classList.toggle('active', gridOn);
      render();
    });
    symmetryBtn.addEventListener('click', cycleSymmetry);
    resetBtn.addEventListener('click', () => {
      if (confirm('Clear the canvas and start fresh?')) {
        clearCanvas();
        pushHistory();
        render();
      }
    });
    exportBtn.addEventListener('click', savePNG);

    // Canvas size modal
    canvasSizeBtn.addEventListener('click', openSizeModal);
    cancelSizeBtn.addEventListener('click', closeSizeModal);
    applySizeBtn.addEventListener('click', applyCanvasSize);
    
    // Preset buttons
    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        canvasWidthInput.value = btn.dataset.w;
        canvasHeightInput.value = btn.dataset.h;
      });
    });

    // Close modal on backdrop click
    canvasSizeModal.addEventListener('click', e => {
      if (e.target === canvasSizeModal) closeSizeModal();
    });

    // Keyboard
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', () => {
      centerCanvas();
      render();
    });
  }

  // Start
  init();
})();
