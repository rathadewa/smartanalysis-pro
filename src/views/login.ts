import { sharedCSS, auroraBorealisScript, rippleScript, themeToggleScript, googleFonts } from "./shared";

export function loginPage(): string {
  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Smart Analysis Pro — Login</title>
${googleFonts}
<style>
${sharedCSS}

.app-layer { position:fixed; inset:0; z-index:2; display:flex; align-items:center; justify-content:center; }

.login-wrap { width:420px; padding:44px 40px 40px; }
.login-logo { display:flex; align-items:center; gap:10px; margin-bottom:36px; }
.login-logo-icon { width:36px; height:36px; border-radius:10px; background:linear-gradient(135deg,#7c5af5,#5b8ff9); display:flex; align-items:center; justify-content:center; font-size:18px; font-weight:800; color:#fff; }
.login-logo-text { font-size:18px; font-weight:700; letter-spacing:-0.02em; }
.login-logo-badge { font-size:10px; font-weight:600; padding:2px 7px; background:rgba(124,90,245,0.22); border:1px solid rgba(124,90,245,0.35); border-radius:100px; color:#a78bfa; letter-spacing:0.04em; }
.login-title { font-size:26px; font-weight:700; letter-spacing:-0.03em; margin-bottom:6px; }
.login-sub { font-size:14px; color:var(--text-muted); margin-bottom:32px; }
.login-label { display:block; font-size:12px; font-weight:500; color:var(--text-muted); margin-bottom:7px; letter-spacing:0.03em; text-transform:uppercase; }
.login-field-wrap { margin-bottom:18px; }
.login-forgot { font-size:12px; color:rgba(124,90,245,0.85); text-decoration:none; cursor:pointer; float:right; margin-top:-14px; margin-bottom:8px; display:block; }
.login-forgot:hover { color:#a78bfa; }
.login-divider { display:flex; align-items:center; gap:12px; margin:22px 0; }
.login-divider-line { flex:1; height:1px; background:var(--glass-border); }
.login-divider-text { font-size:12px; color:var(--text-muted); white-space:nowrap; }
.login-oauth { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:22px; }
.login-footer { text-align:center; font-size:13px; color:var(--text-muted); }
.login-footer a { color:#a78bfa; cursor:pointer; text-decoration:none; }
.login-footer a:hover { text-decoration:underline; }
.error-msg { font-size:12px; color:#f87171; margin-top:6px; }
.pass-wrap { position:relative; }
.pass-toggle { position:absolute; right:12px; top:50%; transform:translateY(-50%); background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:16px; padding:0; display:flex; line-height:1; }
.btn-loading { display:flex; align-items:center; gap:8px; }
.spinner { animation:spin 0.8s linear infinite; }
</style>
</head>
<body>
<canvas id="aurora-bg"></canvas>
<canvas id="ripple-canvas"></canvas>
<div class="dot-grid"></div>

<button class="theme-toggle" id="theme-btn" title="Toggle theme">☀️</button>

<div class="app-layer page-fade">
  <div class="glass login-wrap">
    <div class="login-logo">
      <div class="login-logo-icon">S</div>
      <span class="login-logo-text">Smart Analysis Pro</span>
      <span class="login-logo-badge">BETA</span>
    </div>

    <h1 class="login-title">Selamat datang kembali</h1>
    <p class="login-sub">Masuk untuk melanjutkan analisis Anda.</p>

    <form id="login-form">
      <div class="login-field-wrap">
        <label class="login-label" for="email">Email</label>
        <input id="email" class="input-field" type="email" placeholder="nama@perusahaan.com" autocomplete="email" />
      </div>
      <div class="login-field-wrap">
        <label class="login-label" for="password">Password</label>
        <div class="pass-wrap">
          <input id="password" class="input-field" type="password" placeholder="••••••••" style="padding-right:42px" autocomplete="current-password" />
          <button type="button" class="pass-toggle" id="pass-toggle">👁</button>
        </div>
        <a class="login-forgot" href="#">Lupa password?</a>
      </div>
      <div id="error-msg" class="error-msg" style="display:none"></div>
      <button type="submit" id="submit-btn" class="btn btn-primary" style="width:100%;margin-top:16px;height:46px">
        Masuk
      </button>
    </form>

    <div class="login-divider">
      <div class="login-divider-line"></div>
      <span class="login-divider-text">atau lanjutkan dengan</span>
      <div class="login-divider-line"></div>
    </div>

    <div class="login-oauth">
      <button class="btn btn-ghost" style="font-size:13px">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
        Google
      </button>
      <button class="btn btn-ghost" style="font-size:13px">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        GitHub
      </button>
    </div>

    <p class="login-footer">Belum punya akun? <a href="#">Daftar sekarang</a></p>
  </div>
</div>

<script>${auroraBorealisScript}</script>
<script>${rippleScript}</script>
<script>
${themeToggleScript}

// Password toggle
var passInput = document.getElementById('password');
var passToggle = document.getElementById('pass-toggle');
passToggle.addEventListener('click', function() {
  var isText = passInput.type === 'text';
  passInput.type = isText ? 'password' : 'text';
  passToggle.textContent = isText ? '👁' : '🙈';
});

// Login form
var form = document.getElementById('login-form');
var errorMsg = document.getElementById('error-msg');
var submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  var email = document.getElementById('email').value.trim();
  var pass = document.getElementById('password').value;
  errorMsg.style.display = 'none';

  if (!email) { errorMsg.textContent = 'Email wajib diisi.'; errorMsg.style.display = 'block'; return; }
  if (!pass) { errorMsg.textContent = 'Password wajib diisi.'; errorMsg.style.display = 'block'; return; }

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<svg class="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.25)" stroke-width="3"/><path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg> Masuk...';

  setTimeout(function() { window.location.href = '/dashboard'; }, 1200);
});
</script>
</body>
</html>`;
}
