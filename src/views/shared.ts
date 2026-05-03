export const sharedCSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #06060a;
    --dot-color: rgba(255,255,255,0.18);
    --dot-size: 1.5px;
    --dot-spacing: 22px;
    --glass-bg: rgba(10,10,24,0.72);
    --glass-border: rgba(255,255,255,0.08);
    --glass-shadow: 0 8px 32px rgba(0,0,0,0.4);
    --text: #f0f0f5;
    --text-muted: rgba(240,240,245,0.45);
    --sidebar-bg: rgba(6,6,18,0.78);
    --sidebar-border: rgba(255,255,255,0.07);
    --topbar-bg: rgba(6,6,18,0.68);
    --topbar-border: rgba(255,255,255,0.06);
    --input-bg: rgba(255,255,255,0.05);
    --input-border: rgba(255,255,255,0.1);
    --item-hover: rgba(255,255,255,0.06);
    --item-active-bg: rgba(124,90,245,0.15);
    --item-active-border: rgba(124,90,245,0.25);
    --item-active-color: #c4b5fd;
    --search-bg: rgba(255,255,255,0.06);
    --notif-bg: rgba(255,255,255,0.06);
    --stat-glow-op: 0.35;
    --progress-track: rgba(255,255,255,0.07);
    --table-row-hover: rgba(255,255,255,0.025);
    --table-border: rgba(255,255,255,0.04);
    --scrollbar-color: rgba(255,255,255,0.1);
  }

  :root.light {
    --bg: #f0eeff;
    --dot-color: rgba(90,60,200,0.10);
    --glass-bg: rgba(255,255,255,0.82);
    --glass-border: rgba(100,80,220,0.20);
    --glass-shadow: 0 8px 32px rgba(60,40,160,0.12);
    --text: #18182b;
    --text-muted: rgba(24,24,43,0.48);
    --sidebar-bg: rgba(248,246,255,0.90);
    --sidebar-border: rgba(100,80,220,0.16);
    --topbar-bg: rgba(252,250,255,0.92);
    --topbar-border: rgba(100,80,220,0.12);
    --input-bg: rgba(100,80,220,0.07);
    --input-border: rgba(100,80,220,0.22);
    --item-hover: rgba(100,80,220,0.07);
    --item-active-bg: rgba(124,90,245,0.12);
    --item-active-border: rgba(124,90,245,0.28);
    --item-active-color: #6d40e0;
    --search-bg: rgba(100,80,220,0.07);
    --notif-bg: rgba(100,80,220,0.07);
    --stat-glow-op: 0.16;
    --progress-track: rgba(100,80,220,0.10);
    --table-row-hover: rgba(100,80,220,0.04);
    --table-border: rgba(100,80,220,0.08);
    --scrollbar-color: rgba(100,80,220,0.15);
  }

  html, body { width:100%; height:100%; overflow:hidden; font-family:'Inter',sans-serif; background:var(--bg); color:var(--text); }
  /* Light mode gets a soft gradient instead of the flat --bg colour */
  :root.light body { background: linear-gradient(135deg, #f0ecff 0%, #e8edff 45%, #edf4ff 100%); }

  /*
   * FLICKER FIX: during the ripple we freeze CSS transitions so theme
   * vars switch instantly (hidden under the ripple canvas). We must NOT
   * set animation:none here — that would reset page-fade's keyframes and
   * make the element jump back to opacity:0 when the class is removed.
   */
  .no-transition * { transition: none !important; }

  .dot-grid { position:fixed; inset:0; z-index:0; pointer-events:none; background-image:radial-gradient(circle,var(--dot-color) var(--dot-size),transparent var(--dot-size)); background-size:var(--dot-spacing) var(--dot-spacing); }
  #aurora-bg { position:fixed; inset:0; z-index:1; pointer-events:none; }
  #ripple-canvas { position:fixed; inset:0; z-index:9999; pointer-events:none; }

  .theme-toggle { position:fixed; top:18px; right:18px; z-index:1000; width:44px; height:44px; border-radius:50%; background:var(--glass-bg); border:1px solid var(--glass-border); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:18px; box-shadow:var(--glass-shadow); transition:transform 0.2s ease; user-select:none; }
  .theme-toggle:hover { transform:scale(1.1) rotate(15deg); }

  .glass { background:var(--glass-bg); border:1px solid var(--glass-border); backdrop-filter:blur(28px) saturate(1.3); -webkit-backdrop-filter:blur(28px) saturate(1.3); box-shadow:var(--glass-shadow),inset 0 1px 0 rgba(255,255,255,0.06); border-radius:20px; }

  .btn { display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:11px 22px; border-radius:12px; font-size:14px; font-weight:500; cursor:pointer; border:none; transition:all 0.18s ease; font-family:inherit; letter-spacing:0.01em; }
  .btn-primary { background:linear-gradient(135deg,#7c5af5,#5b8ff9); color:#fff; box-shadow:0 4px 20px rgba(124,90,245,0.35); }
  .btn-primary:hover { transform:translateY(-1px); box-shadow:0 6px 28px rgba(124,90,245,0.5); }
  .btn-ghost { background:rgba(255,255,255,0.06); color:var(--text); border:1px solid var(--glass-border); }
  .btn-ghost:hover { background:rgba(255,255,255,0.1); }

  .input-field { width:100%; background:var(--input-bg); border:1px solid var(--input-border); border-radius:12px; padding:13px 16px; color:var(--text); font-size:14px; font-family:inherit; outline:none; transition:border-color 0.2s,box-shadow 0.2s; }
  .input-field::placeholder { color:var(--text-muted); }
  .input-field:focus { border-color:rgba(124,90,245,0.6); box-shadow:0 0 0 3px rgba(124,90,245,0.15); }

  .scroll-y { overflow-y:auto; }
  .scroll-y::-webkit-scrollbar { width:4px; }
  .scroll-y::-webkit-scrollbar-thumb { background:var(--scrollbar-color); border-radius:2px; }

  .page-fade { animation:fadeIn 0.4s ease both; }
  @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
  @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

  /* View Transition API — disable default cross-fade, JS drives clip-path */
  ::view-transition-old(root),
  ::view-transition-new(root) { animation:none; mix-blend-mode:normal; }
`;

/* ── Dashboard aurora (original blob style) ── */
export const auroraScript = `
(function startAurora() {
  var canvas = document.getElementById('aurora-bg');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  function resize() { canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  var blobs = [
    { bx:-0.05, by:1.02, rx:0.80, ry:0.72, hue:268, sat:80, lit:52, peakA:0.72, breathPeriod:9,  breathPhase:0,          driftAmp:0.03, driftPeriod:18, driftPhase:0   },
    { bx:1.05,  by:1.02, rx:0.75, ry:0.65, hue:183, sat:85, lit:54, peakA:0.60, breathPeriod:11, breathPhase:Math.PI,    driftAmp:0.03, driftPeriod:15, driftPhase:2.1 },
    { bx:0.50,  by:1.05, rx:0.90, ry:0.55, hue:245, sat:70, lit:42, peakA:0.38, breathPeriod:14, breathPhase:Math.PI*0.7,driftAmp:0.02, driftPeriod:20, driftPhase:1.0 },
    { bx:0.90,  by:0.82, rx:0.45, ry:0.30, hue:192, sat:88, lit:58, peakA:0.30, breathPeriod:8.5,breathPhase:Math.PI*1.3,driftAmp:0.025,driftPeriod:13, driftPhase:3.5 }
  ];
  function drawBlob(b,ts) {
    var s=ts*0.001;
    var breath=0.5-0.5*Math.cos(2*Math.PI*s/b.breathPeriod+b.breathPhase);
    var alpha=breath*b.peakA; if(alpha<0.004) return;
    var driftX=Math.sin(2*Math.PI*s/b.driftPeriod+b.driftPhase)*b.driftAmp;
    var cx=(b.bx+driftX)*canvas.width, cy=b.by*canvas.height;
    var rx=b.rx*canvas.width, ry=b.ry*canvas.height;
    ctx.save(); ctx.translate(cx,cy); ctx.scale(1,ry/rx);
    var g=ctx.createRadialGradient(0,0,0,0,0,rx);
    g.addColorStop(0,   'hsla('+b.hue+','+b.sat+'%,'+b.lit+'%,'+alpha+')');
    g.addColorStop(0.25,'hsla('+b.hue+','+b.sat+'%,'+(b.lit-4)+'%,'+(alpha*0.75)+')');
    g.addColorStop(0.55,'hsla('+b.hue+','+(b.sat-6)+'%,'+(b.lit-12)+'%,'+(alpha*0.35)+')');
    g.addColorStop(0.80,'hsla('+b.hue+','+(b.sat-14)+'%,'+(b.lit-20)+'%,'+(alpha*0.10)+')');
    g.addColorStop(1,   'hsla('+b.hue+','+(b.sat-20)+'%,'+(b.lit-25)+'%,0)');
    ctx.beginPath(); ctx.arc(0,0,rx,0,Math.PI*2); ctx.fillStyle=g; ctx.fill(); ctx.restore();
  }
  function render(ts) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if (!document.documentElement.classList.contains('light')) {
      ctx.globalCompositeOperation='screen';
      drawBlob(blobs[2],ts); drawBlob(blobs[0],ts); drawBlob(blobs[1],ts); drawBlob(blobs[3],ts);
      ctx.globalCompositeOperation='source-over';
    }
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
})();
`;

/* ── Login-page aurora (Stitch-style large smooth blobs) ── */
export const auroraBorealisScript = `
(function startAuroraBorealis() {
  var canvas = document.getElementById('aurora-bg');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  /*
   * Stitch-style aurora: large elliptical blobs rendered in 'screen'
   * composite mode so overlapping colours mix additively.
   *
   * bx / by      = blob centre as fraction of canvas (by > 1 = below fold)
   * rx / ry      = ellipse radii as fraction of canvas width/height
   * hue/sat/lit  = HSL colour of blob core
   * peakA        = maximum alpha at blob centre
   * breathPeriod = seconds for one full breathe cycle
   * driftAmpX/Y  = max position drift as fraction of canvas
   * driftPx/Py   = period of X / Y drift in seconds
   */
  /*
   * Layout creates the same arch shape as Stitch:
   *   left cyan peak (by≈0.78) → center purple trough (by≈0.95) ← right purple peak (by≈0.82)
   * The top visible edge of each ellipse = by - ry * 0.78, so different by/ry
   * values make the top arc curve up on the left and right like Stitch.
   */
  var blobs = [
    /* Vivid cyan-teal LEFT — arch left peak, top edge ≈ 30% from top */
    { bx:0.05, by:0.78, rx:0.60, ry:0.62, hue:188, sat:95, lit:65, peakA:0.95,
      breathPeriod:8,   breathPhase:0,    driftAmpX:0.050, driftAmpY:0.028, driftPx:13, driftPy:10, driftPhaseX:0,   driftPhaseY:1.4 },
    /* Dominant purple CENTER — trough of arch, top edge ≈ 36% from top */
    { bx:0.45, by:0.95, rx:0.90, ry:0.76, hue:258, sat:82, lit:50, peakA:0.96,
      breathPeriod:11,  breathPhase:1.57, driftAmpX:0.038, driftAmpY:0.022, driftPx:18, driftPy:14, driftPhaseX:2.1, driftPhaseY:0.5 },
    /* Purple-blue RIGHT — arch right peak, top edge ≈ 31% from top */
    { bx:0.97, by:0.82, rx:0.65, ry:0.65, hue:268, sat:85, lit:46, peakA:0.92,
      breathPeriod:9.5, breathPhase:3.93, driftAmpX:0.058, driftAmpY:0.026, driftPx:15, driftPy:11, driftPhaseX:3.8, driftPhaseY:2.9 },
    /* Pink-magenta accent — sits at the cyan/purple boundary */
    { bx:0.22, by:0.84, rx:0.44, ry:0.52, hue:310, sat:78, lit:62, peakA:0.60,
      breathPeriod:12,  breathPhase:0.47, driftAmpX:0.036, driftAmpY:0.018, driftPx:16, driftPy:12, driftPhaseX:1.2, driftPhaseY:2.3 },
    /* Dark violet undertone — fills and deepens the lower half */
    { bx:0.55, by:1.02, rx:1.10, ry:0.85, hue:245, sat:62, lit:30, peakA:0.80,
      breathPeriod:14,  breathPhase:2.51, driftAmpX:0.022, driftAmpY:0.014, driftPx:21, driftPy:17, driftPhaseX:3.1, driftPhaseY:1.1 },
  ];

  function drawBlob(b, ts) {
    var s  = ts * 0.001;
    var breath = 0.5 - 0.5 * Math.cos(2 * Math.PI * s / b.breathPeriod + b.breathPhase);
    /* Floor at 42% so blobs are always visible — Stitch aurora never goes dark */
    var alpha  = (0.42 + 0.58 * breath) * b.peakA;
    var driftX = Math.sin(2 * Math.PI * s / b.driftPx + b.driftPhaseX) * b.driftAmpX;
    var driftY = Math.sin(2 * Math.PI * s / b.driftPy + b.driftPhaseY) * b.driftAmpY;
    var cx = (b.bx + driftX) * canvas.width;
    var cy = (b.by + driftY) * canvas.height;
    var rx = b.rx * canvas.width;
    var ry = b.ry * canvas.height;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(1, ry / rx);

    var g = ctx.createRadialGradient(0, 0, 0, 0, 0, rx);
    g.addColorStop(0.00, 'hsla(' + b.hue + ',' + b.sat + '%,' + b.lit + '%,' + alpha + ')');
    g.addColorStop(0.28, 'hsla(' + b.hue + ',' + b.sat + '%,' + (b.lit - 4) + '%,' + (alpha * 0.76) + ')');
    g.addColorStop(0.55, 'hsla(' + b.hue + ',' + (b.sat - 8) + '%,' + (b.lit - 13) + '%,' + (alpha * 0.38) + ')');
    g.addColorStop(0.78, 'hsla(' + b.hue + ',' + (b.sat - 18) + '%,' + (b.lit - 22) + '%,' + (alpha * 0.11) + ')');
    g.addColorStop(1.00, 'hsla(' + b.hue + ',' + (b.sat - 28) + '%,' + (b.lit - 28) + '%,0)');

    ctx.beginPath();
    ctx.arc(0, 0, rx, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();
    ctx.restore();
  }

  function render(ts) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* Aurora is a dark-sky effect — skip entirely in light mode */
    if (!document.documentElement.classList.contains('light')) {
      ctx.globalCompositeOperation = 'screen';
      blobs.forEach(function(b) { drawBlob(b, ts); });

      /* Dark gradient masks the upper sky — arch peaks sit around 30–36% from top */
      ctx.globalCompositeOperation = 'source-over';
      var maskH = canvas.height * 0.34;
      var ov = ctx.createLinearGradient(0, 0, 0, maskH);
      ov.addColorStop(0.00, 'rgba(6,6,10,1.0)');
      ov.addColorStop(0.48, 'rgba(6,6,10,0.82)');
      ov.addColorStop(0.78, 'rgba(6,6,10,0.22)');
      ov.addColorStop(1.00, 'rgba(6,6,10,0)');
      ctx.fillStyle = ov;
      ctx.fillRect(0, 0, canvas.width, maskH);
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
})();
`;

/* ── View Transition API theme reveal (ElysiaJS-style circular clip-path) ── */
export const rippleScript = `
(function() {
  var running = false;

  window.triggerRipple = function(x, y, goingDark, callback) {
    if (running) return;
    running = true;

    /* Fallback for browsers without View Transition API */
    if (!document.startViewTransition) {
      document.documentElement.classList.add('no-transition');
      callback();
      requestAnimationFrame(function() {
        document.documentElement.classList.remove('no-transition');
        running = false;
      });
      return;
    }

    var transition = document.startViewTransition(callback);
    transition.ready.then(function() {
      var maxR = Math.hypot(
        Math.max(x, window.innerWidth  - x),
        Math.max(y, window.innerHeight - y)
      );
      document.documentElement.animate(
        { clipPath: [
            'circle(0px at ' + x + 'px ' + y + 'px)',
            'circle(' + (maxR + 10) + 'px at ' + x + 'px ' + y + 'px)'
          ]
        },
        { duration: 450, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
      );
    });
    transition.finished.then(function() { running = false; });
  };
})();
`;

export const themeToggleScript = `
(function() {
  var isDark = true;
  var btn = document.getElementById('theme-btn');
  if (!btn) return;
  btn.addEventListener('click', function(e) {
    var x = e.clientX, y = e.clientY, nextDark = !isDark;
    function apply() {
      if (nextDark) document.documentElement.classList.remove('light');
      else          document.documentElement.classList.add('light');
      isDark = nextDark;
      btn.textContent = isDark ? '☀️' : '🌙';
    }
    if (window.triggerRipple) window.triggerRipple(x, y, nextDark, apply);
    else apply();
  });
})();
`;

export const googleFonts = `<link rel="preconnect" href="https://fonts.googleapis.com" /><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />`;
