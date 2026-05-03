import { sharedCSS, auroraScript, rippleScript, themeToggleScript, googleFonts } from "./shared";

export function dashboardPage(): string {
  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Smart Analysis Pro — Dashboard</title>
${googleFonts}
<style>
${sharedCSS}

html, body { overflow:hidden; }

.dashboard-wrap { position:fixed; inset:0; z-index:2; display:flex; }

/* Sidebar */
.sidebar { width:240px; min-width:240px; height:100%; display:flex; flex-direction:column; padding:24px 16px; background:var(--sidebar-bg); border-right:1px solid var(--sidebar-border); backdrop-filter:blur(40px); -webkit-backdrop-filter:blur(40px); gap:6px; z-index:10; }
.sidebar-logo { display:flex; align-items:center; gap:10px; padding:0 8px; margin-bottom:28px; }
.sidebar-logo-icon { width:30px; height:30px; border-radius:8px; background:linear-gradient(135deg,#7c5af5,#5b8ff9); display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:800; color:#fff; }
.sidebar-logo-text { font-size:15px; font-weight:700; letter-spacing:-0.02em; }
.sidebar-section-label { font-size:10px; font-weight:600; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted); padding:8px 8px 4px; }
.sidebar-item { display:flex; align-items:center; gap:11px; padding:10px 12px; border-radius:11px; cursor:pointer; font-size:13.5px; font-weight:450; color:var(--text-muted); transition:all 0.15s ease; border:1px solid transparent; user-select:none; }
.sidebar-item:hover { background:var(--item-hover); color:var(--text); }
.sidebar-item.active { background:var(--item-active-bg); border-color:var(--item-active-border); color:var(--item-active-color); }
.sidebar-item-icon { width:17px; text-align:center; font-size:15px; opacity:0.85; }
.sidebar-spacer { flex:1; }
.sidebar-avatar { display:flex; align-items:center; gap:10px; padding:10px 12px; border-radius:11px; background:var(--item-hover); border:1px solid var(--glass-border); cursor:pointer; transition:background 0.15s; }
.sidebar-avatar:hover { background:var(--input-bg); }
.avatar-circle { width:30px; height:30px; border-radius:50%; background:linear-gradient(135deg,#7c5af5,#5b8ff9); display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; color:#fff; flex-shrink:0; }
.sidebar-avatar-info { flex:1; min-width:0; }
.sidebar-avatar-name { font-size:13px; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.sidebar-avatar-role { font-size:11px; color:var(--text-muted); }

/* Main */
.main-content { flex:1; min-width:0; display:flex; flex-direction:column; overflow:hidden; }

/* Topbar */
.topbar { height:64px; min-height:64px; display:flex; align-items:center; justify-content:space-between; padding:0 28px; background:var(--topbar-bg); border-bottom:1px solid var(--topbar-border); backdrop-filter:blur(40px); -webkit-backdrop-filter:blur(40px); }
.topbar-title { font-size:17px; font-weight:650; letter-spacing:-0.02em; }
.topbar-right { display:flex; align-items:center; gap:12px; }
.topbar-search { display:flex; align-items:center; gap:9px; background:var(--search-bg); border:1px solid var(--glass-border); border-radius:10px; padding:8px 14px; cursor:text; }
.topbar-search-input { background:none; border:none; outline:none; color:var(--text); font-size:13px; font-family:inherit; width:180px; }
.topbar-search-input::placeholder { color:var(--text-muted); }
.topbar-notif { width:36px; height:36px; border-radius:10px; display:flex; align-items:center; justify-content:center; background:var(--notif-bg); border:1px solid var(--glass-border); cursor:pointer; font-size:16px; transition:background 0.15s; position:relative; }
.topbar-notif:hover { background:var(--item-hover); }
.notif-dot { position:absolute; top:7px; right:7px; width:7px; height:7px; border-radius:50%; background:#a78bfa; border:1.5px solid var(--bg); }
.topbar-theme-btn { width:36px; height:36px; border-radius:10px; display:flex; align-items:center; justify-content:center; background:var(--notif-bg); border:1px solid var(--glass-border); cursor:pointer; font-size:16px; transition:background 0.15s; user-select:none; }
.topbar-theme-btn:hover { background:var(--item-hover); }

/* Page body */
.page-body { flex:1; overflow-y:auto; padding:28px; display:flex; flex-direction:column; gap:24px; }
.page-body::-webkit-scrollbar { width:5px; }
.page-body::-webkit-scrollbar-thumb { background:var(--scrollbar-color); border-radius:3px; }

/* Stats */
.stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
.stat-card { padding:22px 20px; display:flex; flex-direction:column; gap:10px; position:relative; overflow:hidden; }
.stat-card-glow { position:absolute; top:-30px; right:-30px; width:90px; height:90px; border-radius:50%; filter:blur(30px); opacity:var(--stat-glow-op); pointer-events:none; }
.stat-label { font-size:12px; font-weight:500; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.06em; }
.stat-value { font-size:30px; font-weight:750; letter-spacing:-0.03em; line-height:1; }
.stat-change { font-size:12px; font-weight:500; display:flex; align-items:center; gap:4px; }
.stat-change.up { color:#4ade80; }
.stat-change.down { color:#f87171; }

/* Charts */
.charts-row { display:grid; grid-template-columns:2fr 1fr; gap:16px; align-items:start; }
.chart-card { padding:24px; }
.chart-card-title { font-size:14px; font-weight:600; margin-bottom:4px; }
.chart-card-sub { font-size:12px; color:var(--text-muted); margin-bottom:20px; }

.bar-chart { display:flex; align-items:flex-end; gap:6px; height:100px; }
.bar-wrap { flex:1; display:flex; flex-direction:column; align-items:center; gap:6px; height:100%; justify-content:flex-end; }
.bar { width:100%; border-radius:6px 6px 0 0; transition:opacity 0.15s; cursor:pointer; min-height:4px; }
.bar:hover { opacity:0.8; }
.bar-label { font-size:10px; color:var(--text-muted); }

.donut-wrap { display:flex; flex-direction:column; align-items:center; gap:16px; }
.donut-legend { width:100%; display:flex; flex-direction:column; gap:8px; }
.legend-item { display:flex; align-items:center; justify-content:space-between; font-size:13px; }
.legend-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
.legend-label { display:flex; align-items:center; gap:8px; color:var(--text); }
.legend-val { font-weight:600; }

/* Table */
.table-card { padding:24px; }
.table-card-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:18px; }
.table-card-title { font-size:14px; font-weight:600; }
.data-table { width:100%; border-collapse:collapse; }
.data-table th { font-size:11px; font-weight:600; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.06em; padding:0 0 12px; text-align:left; border-bottom:1px solid var(--glass-border); }
.data-table td { padding:13px 0; border-bottom:1px solid var(--table-border); font-size:13px; vertical-align:middle; }
.data-table tr:last-child td { border-bottom:none; }
.data-table tr:hover td { background:var(--table-row-hover); }
.badge { display:inline-flex; padding:3px 10px; border-radius:100px; font-size:11px; font-weight:600; }
.badge-green { background:rgba(74,222,128,0.12); color:#4ade80; }
.badge-yellow { background:rgba(251,191,36,0.12); color:#fbbf24; }
.badge-red { background:rgba(248,113,113,0.12); color:#f87171; }
.user-cell { display:flex; align-items:center; gap:10px; }
.user-av { width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; color:#fff; flex-shrink:0; }

/* Activity */
.activity-card { padding:24px; }
.activity-list { display:flex; flex-direction:column; }
.activity-item { display:flex; align-items:flex-start; gap:12px; padding:12px 0; border-bottom:1px solid var(--table-border); }
.activity-item:last-child { border-bottom:none; }
.activity-icon { width:32px; height:32px; border-radius:9px; display:flex; align-items:center; justify-content:center; font-size:14px; flex-shrink:0; }
.activity-main { font-size:13px; line-height:1.4; }
.activity-time { font-size:11px; color:var(--text-muted); margin-top:2px; }

/* Progress */
.progress-card { padding:24px; }
.progress-list { display:flex; flex-direction:column; gap:18px; }
.progress-item-label { display:flex; justify-content:space-between; align-items:center; margin-bottom:7px; font-size:13px; }
.progress-val { font-weight:600; color:var(--text-muted); }
.progress-track { height:6px; background:var(--progress-track); border-radius:100px; overflow:hidden; }
.progress-fill { height:100%; border-radius:100px; transition:width 1s ease; }
</style>
</head>
<body>
<canvas id="aurora-bg"></canvas>
<canvas id="ripple-canvas"></canvas>
<div class="dot-grid"></div>

<div class="dashboard-wrap page-fade">
  <!-- SIDEBAR -->
  <aside class="sidebar">
    <div class="sidebar-logo">
      <div class="sidebar-logo-icon">S</div>
      <span class="sidebar-logo-text">Smart Analysis</span>
    </div>

    <span class="sidebar-section-label">Menu</span>
    <div class="sidebar-item active" data-page="overview">
      <span class="sidebar-item-icon">⊞</span> Overview
    </div>
    <div class="sidebar-item" data-page="analytics">
      <span class="sidebar-item-icon">◑</span> Analytics
    </div>
    <div class="sidebar-item" data-page="reports">
      <span class="sidebar-item-icon">☰</span> Reports
    </div>
    <div class="sidebar-item" data-page="users">
      <span class="sidebar-item-icon">◎</span> Users
    </div>
    <div class="sidebar-item" data-page="settings">
      <span class="sidebar-item-icon">◈</span> Settings
    </div>

    <div class="sidebar-spacer"></div>

    <div class="sidebar-avatar" id="logout-btn" title="Klik untuk logout">
      <div class="avatar-circle">RA</div>
      <div class="sidebar-avatar-info">
        <div class="sidebar-avatar-name">Rina Andriani</div>
        <div class="sidebar-avatar-role">Admin</div>
      </div>
      <span style="color:var(--text-muted);font-size:14px">↩</span>
    </div>
  </aside>

  <!-- MAIN -->
  <div class="main-content">
    <!-- TOPBAR -->
    <header class="topbar">
      <span class="topbar-title" id="page-title">Overview</span>
      <div class="topbar-right">
        <div class="topbar-search">
          <span style="color:var(--text-muted);font-size:14px">⌕</span>
          <input class="topbar-search-input" placeholder="Cari data, laporan..." />
        </div>
        <div class="topbar-notif">
          🔔
          <div class="notif-dot"></div>
        </div>
        <button class="topbar-theme-btn" id="theme-btn" title="Toggle theme">☀️</button>
        <div class="avatar-circle" style="width:32px;height:32px;font-size:12px;border-radius:9px;cursor:default">RA</div>
      </div>
    </header>

    <!-- BODY -->
    <div class="page-body scroll-y">

      <!-- STATS -->
      <div class="stats-grid">
        <div class="glass stat-card">
          <div class="stat-card-glow" style="background:#7c5af5"></div>
          <span class="stat-label">Total Revenue</span>
          <span class="stat-value">$284,592</span>
          <span class="stat-change up">↑ +12.4% <span style="color:var(--text-muted);font-weight:400">vs bulan lalu</span></span>
        </div>
        <div class="glass stat-card">
          <div class="stat-card-glow" style="background:#5b8ff9"></div>
          <span class="stat-label">Active Users</span>
          <span class="stat-value">18,340</span>
          <span class="stat-change up">↑ +8.1% <span style="color:var(--text-muted);font-weight:400">vs bulan lalu</span></span>
        </div>
        <div class="glass stat-card">
          <div class="stat-card-glow" style="background:#f87171"></div>
          <span class="stat-label">Conversion</span>
          <span class="stat-value">3.67%</span>
          <span class="stat-change down">↓ -0.3% <span style="color:var(--text-muted);font-weight:400">vs bulan lalu</span></span>
        </div>
        <div class="glass stat-card">
          <div class="stat-card-glow" style="background:#34d399"></div>
          <span class="stat-label">Avg. Session</span>
          <span class="stat-value">4m 22s</span>
          <span class="stat-change up">↑ +5.9% <span style="color:var(--text-muted);font-weight:400">vs bulan lalu</span></span>
        </div>
      </div>

      <!-- CHARTS ROW -->
      <div class="charts-row">
        <!-- Line chart -->
        <div class="glass chart-card">
          <div class="chart-card-title">Revenue Trend</div>
          <div class="chart-card-sub">Jan – Des 2025 · dalam ribuan USD</div>
          <svg id="line-chart" viewBox="0 0 400 110" style="width:100%;height:110px;overflow:visible">
            <defs>
              <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#7c5af5"/>
                <stop offset="100%" stop-color="#5b8ff9"/>
              </linearGradient>
              <linearGradient id="lg2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#7c5af5" stop-opacity="0.25"/>
                <stop offset="100%" stop-color="#7c5af5" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <path id="line-area" fill="url(#lg2)"/>
            <path id="line-path" stroke="url(#lg1)" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <circle id="line-dot" r="4" fill="#5b8ff9" style="stroke:var(--glass-bg)" stroke-width="2"/>
          </svg>
          <div style="display:flex;justify-content:space-between;margin-top:8px">
            <span style="font-size:10px;color:var(--text-muted)">Jan</span>
            <span style="font-size:10px;color:var(--text-muted)">Feb</span>
            <span style="font-size:10px;color:var(--text-muted)">Mar</span>
            <span style="font-size:10px;color:var(--text-muted)">Apr</span>
            <span style="font-size:10px;color:var(--text-muted)">May</span>
            <span style="font-size:10px;color:var(--text-muted)">Jun</span>
            <span style="font-size:10px;color:var(--text-muted)">Jul</span>
            <span style="font-size:10px;color:var(--text-muted)">Aug</span>
            <span style="font-size:10px;color:var(--text-muted)">Sep</span>
            <span style="font-size:10px;color:var(--text-muted)">Oct</span>
            <span style="font-size:10px;color:var(--text-muted)">Nov</span>
            <span style="font-size:10px;color:var(--text-muted)">Dec</span>
          </div>
        </div>

        <!-- Donut chart -->
        <div class="glass chart-card">
          <div class="chart-card-title">Traffic Source</div>
          <div class="chart-card-sub">Total sesi bulan ini</div>
          <div class="donut-wrap">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="38" fill="none" style="stroke:var(--progress-track)" stroke-width="12"/>
              <circle cx="60" cy="60" r="38" fill="none" stroke="#7c5af5" stroke-width="12"
                stroke-dasharray="159.6 79.8" stroke-dashoffset="0" stroke-linecap="round"
                style="transform:rotate(-90deg);transform-origin:60px 60px"/>
              <circle cx="60" cy="60" r="38" fill="none" stroke="#5b8ff9" stroke-width="12"
                stroke-dasharray="106.4 132.9" stroke-dashoffset="-159.6" stroke-linecap="round"
                style="transform:rotate(-90deg);transform-origin:60px 60px"/>
              <circle cx="60" cy="60" r="38" fill="none" stroke="#34d399" stroke-width="12"
                stroke-dasharray="72.2 166.9" stroke-dashoffset="-266.0" stroke-linecap="round"
                style="transform:rotate(-90deg);transform-origin:60px 60px"/>
              <circle cx="60" cy="60" r="38" fill="none" stroke="#fbbf24" stroke-width="12"
                stroke-dasharray="41.8 197.4" stroke-dashoffset="-338.2" stroke-linecap="round"
                style="transform:rotate(-90deg);transform-origin:60px 60px"/>
              <text x="60" y="58" text-anchor="middle" style="fill:var(--text)" font-size="14" font-weight="700" font-family="Inter">10,000</text>
              <text x="60" y="73" text-anchor="middle" style="fill:var(--text-muted)" font-size="9" font-family="Inter">TOTAL</text>
            </svg>
            <div class="donut-legend">
              <div class="legend-item">
                <div class="legend-label"><div class="legend-dot" style="background:#7c5af5"></div>Organic</div>
                <span class="legend-val">4,200</span>
              </div>
              <div class="legend-item">
                <div class="legend-label"><div class="legend-dot" style="background:#5b8ff9"></div>Paid Ads</div>
                <span class="legend-val">2,800</span>
              </div>
              <div class="legend-item">
                <div class="legend-label"><div class="legend-dot" style="background:#34d399"></div>Social</div>
                <span class="legend-val">1,900</span>
              </div>
              <div class="legend-item">
                <div class="legend-label"><div class="legend-dot" style="background:#fbbf24"></div>Referral</div>
                <span class="legend-val">1,100</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BAR + PROGRESS -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
        <!-- Bar chart -->
        <div class="glass chart-card">
          <div class="chart-card-title">Sesi Harian</div>
          <div class="chart-card-sub">7 hari terakhir</div>
          <div class="bar-chart">
            <div class="bar-wrap"><div class="bar" style="height:65px;background:linear-gradient(180deg,#7c5af5,rgba(124,90,245,0.3))"></div><span class="bar-label">Mon</span></div>
            <div class="bar-wrap"><div class="bar" style="height:86px;background:linear-gradient(180deg,#7c5af5,rgba(124,90,245,0.3))"></div><span class="bar-label">Tue</span></div>
            <div class="bar-wrap"><div class="bar" style="height:57px;background:linear-gradient(180deg,#7c5af5,rgba(124,90,245,0.3))"></div><span class="bar-label">Wed</span></div>
            <div class="bar-wrap"><div class="bar" style="height:88px;background:linear-gradient(180deg,#5b8ff9,rgba(91,143,249,0.3));box-shadow:0 0 12px rgba(91,143,249,0.5)"></div><span class="bar-label">Thu</span></div>
            <div class="bar-wrap"><div class="bar" style="height:77px;background:linear-gradient(180deg,#7c5af5,rgba(124,90,245,0.3))"></div><span class="bar-label">Fri</span></div>
            <div class="bar-wrap"><div class="bar" style="height:98px;background:linear-gradient(180deg,#7c5af5,rgba(124,90,245,0.3))"></div><span class="bar-label">Sat</span></div>
            <div class="bar-wrap"><div class="bar" style="height:91px;background:linear-gradient(180deg,#7c5af5,rgba(124,90,245,0.3))"></div><span class="bar-label">Sun</span></div>
          </div>
        </div>

        <!-- Progress -->
        <div class="glass progress-card">
          <div style="font-size:14px;font-weight:600;margin-bottom:20px">Performa Tim</div>
          <div class="progress-list">
            <div>
              <div class="progress-item-label"><span>Marketing</span><span class="progress-val">78%</span></div>
              <div class="progress-track"><div class="progress-fill" style="width:78%;background:linear-gradient(90deg,rgba(124,90,245,0.53),#7c5af5)"></div></div>
            </div>
            <div>
              <div class="progress-item-label"><span>Product</span><span class="progress-val">62%</span></div>
              <div class="progress-track"><div class="progress-fill" style="width:62%;background:linear-gradient(90deg,rgba(91,143,249,0.53),#5b8ff9)"></div></div>
            </div>
            <div>
              <div class="progress-item-label"><span>Support</span><span class="progress-val">91%</span></div>
              <div class="progress-track"><div class="progress-fill" style="width:91%;background:linear-gradient(90deg,rgba(52,211,153,0.53),#34d399)"></div></div>
            </div>
            <div>
              <div class="progress-item-label"><span>Sales</span><span class="progress-val">55%</span></div>
              <div class="progress-track"><div class="progress-fill" style="width:55%;background:linear-gradient(90deg,rgba(251,191,36,0.53),#fbbf24)"></div></div>
            </div>
          </div>
        </div>
      </div>

      <!-- TABLE + ACTIVITY -->
      <div style="display:grid;grid-template-columns:3fr 2fr;gap:16px;align-items:start">
        <!-- Table -->
        <div class="glass table-card">
          <div class="table-card-header">
            <span class="table-card-title">Top Klien</span>
            <button class="btn btn-ghost" style="padding:6px 14px;font-size:12px;border-radius:9px">Lihat semua</button>
          </div>
          <table class="data-table">
            <thead>
              <tr><th>Nama</th><th>Revenue</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><div class="user-cell"><div class="user-av" style="background:#7c5af5">RA</div><div><div style="font-weight:500">Rina Andriani</div><div style="font-size:11px;color:var(--text-muted)">rina@corp.co</div></div></div></td>
                <td style="font-weight:600">$12,450</td>
                <td><span class="badge badge-green">Active</span></td>
              </tr>
              <tr>
                <td><div class="user-cell"><div class="user-av" style="background:#5b8ff9">BS</div><div><div style="font-weight:500">Budi Santoso</div><div style="font-size:11px;color:var(--text-muted)">budi@firms.io</div></div></div></td>
                <td style="font-weight:600">$9,870</td>
                <td><span class="badge badge-yellow">Pending</span></td>
              </tr>
              <tr>
                <td><div class="user-cell"><div class="user-av" style="background:#34d399">CD</div><div><div style="font-weight:500">Citra Dewi</div><div style="font-size:11px;color:var(--text-muted)">citra@wave.id</div></div></div></td>
                <td style="font-weight:600">$7,340</td>
                <td><span class="badge badge-green">Active</span></td>
              </tr>
              <tr>
                <td><div class="user-cell"><div class="user-av" style="background:#f87171">DK</div><div><div style="font-weight:500">Dedi Kurniawan</div><div style="font-size:11px;color:var(--text-muted)">dedi@startx.id</div></div></div></td>
                <td style="font-weight:600">$5,210</td>
                <td><span class="badge badge-red">Inactive</span></td>
              </tr>
              <tr>
                <td><div class="user-cell"><div class="user-av" style="background:#fbbf24">EP</div><div><div style="font-weight:500">Eka Putri</div><div style="font-size:11px;color:var(--text-muted)">eka@labs.co</div></div></div></td>
                <td style="font-weight:600">$4,080</td>
                <td><span class="badge badge-green">Active</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Activity -->
        <div class="glass activity-card">
          <div style="font-size:14px;font-weight:600;margin-bottom:4px">Aktivitas Terbaru</div>
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:16px">5 aktivitas terakhir</div>
          <div class="activity-list">
            <div class="activity-item">
              <div class="activity-icon" style="background:rgba(124,90,245,0.15)">💬</div>
              <div><div class="activity-main"><b>Rina Andriani</b> menambahkan komentar pada laporan Q1</div><div class="activity-time">2 menit lalu</div></div>
            </div>
            <div class="activity-item">
              <div class="activity-icon" style="background:rgba(91,143,249,0.15)">📈</div>
              <div><div class="activity-main"><b>Revenue target</b> tercapai 94% bulan ini</div><div class="activity-time">18 menit lalu</div></div>
            </div>
            <div class="activity-item">
              <div class="activity-icon" style="background:rgba(52,211,153,0.15)">👤</div>
              <div><div class="activity-main"><b>Pengguna baru</b> bergabung: dedy@corp.id</div><div class="activity-time">1 jam lalu</div></div>
            </div>
            <div class="activity-item">
              <div class="activity-icon" style="background:rgba(251,191,36,0.15)">⚠️</div>
              <div><div class="activity-main"><b>Anomali terdeteksi</b> pada data konversi Asia</div><div class="activity-time">3 jam lalu</div></div>
            </div>
            <div class="activity-item">
              <div class="activity-icon" style="background:rgba(74,222,128,0.15)">✅</div>
              <div><div class="activity-main"><b>Backup</b> database selesai dengan sukses</div><div class="activity-time">5 jam lalu</div></div>
            </div>
          </div>
        </div>
      </div>

    </div><!-- end page-body -->
  </div><!-- end main-content -->
</div><!-- end dashboard-wrap -->

<script>${auroraScript}</script>
<script>${rippleScript}</script>
<script>
${themeToggleScript}

// Sidebar nav
document.querySelectorAll('.sidebar-item').forEach(function(item) {
  item.addEventListener('click', function() {
    document.querySelectorAll('.sidebar-item').forEach(function(i) { i.classList.remove('active'); });
    item.classList.add('active');
    document.getElementById('page-title').textContent = item.textContent.trim();
  });
});

// Logout
document.getElementById('logout-btn').addEventListener('click', function() {
  window.location.href = '/login';
});

// Line chart
(function() {
  var data = [42,58,45,70,65,80,74,91,85,110,98,115];
  var w=400, h=110;
  var min=Math.min.apply(null,data), max=Math.max.apply(null,data);
  var range=max-min||1;
  var pts=data.map(function(v,i) {
    return [(i/(data.length-1))*w, h-((v-min)/range)*(h-16)-4];
  });
  var pathD=pts.map(function(p,i) {
    if(i===0) return 'M'+p[0]+','+p[1];
    return 'C'+(pts[i-1][0]+30)+','+(pts[i-1][1])+' '+(p[0]-30)+','+p[1]+' '+p[0]+','+p[1];
  }).join(' ');
  var areaD=pathD+' L'+w+','+h+' L0,'+h+' Z';
  document.getElementById('line-area').setAttribute('d', areaD);
  document.getElementById('line-path').setAttribute('d', pathD);
  var last=pts[pts.length-1];
  document.getElementById('line-dot').setAttribute('cx', last[0]);
  document.getElementById('line-dot').setAttribute('cy', last[1]);
})();
</script>
</body>
</html>`;
}
