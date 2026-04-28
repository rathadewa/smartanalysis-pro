import { Html } from "@elysiajs/html";
import type { KpiCard, MonthlyData, ChannelData, RecentEntry } from "../data/kpi";

function KpiCardComponent({ card }: { card: KpiCard }) {
  const isPositive = card.change >= 0;
  return (
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
      <div class="flex items-center justify-between">
        <span class="text-2xl">{card.icon}</span>
        <span
          class={`text-xs font-semibold px-2 py-1 rounded-full ${
            isPositive
              ? "bg-emerald-50 text-emerald-600"
              : "bg-red-50 text-red-500"
          }`}
        >
          {isPositive ? "▲" : "▼"} {Math.abs(card.change)}%
        </span>
      </div>
      <div>
        <p class="text-sm text-gray-400 font-medium mb-1">{card.label}</p>
        <p class="text-3xl font-bold text-gray-800">
          {card.unit === "$" && <span class="text-xl font-semibold text-gray-400">$</span>}
          {card.value}
          {card.unit === "%" && <span class="text-xl font-semibold text-gray-400">%</span>}
        </p>
      </div>
      <p class="text-xs text-gray-400">vs bulan lalu</p>
    </div>
  );
}

function RecentTable({ entries }: { entries: RecentEntry[] }) {
  return (
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="px-6 py-5 border-b border-gray-100">
        <h3 class="font-semibold text-gray-700">Performa Harian</h3>
      </div>
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-gray-50 text-gray-400 text-xs uppercase tracking-wide">
            <th class="px-6 py-3 text-left">Tanggal</th>
            <th class="px-6 py-3 text-right">Revenue</th>
            <th class="px-6 py-3 text-right">Users</th>
            <th class="px-6 py-3 text-right">Orders</th>
            <th class="px-6 py-3 text-right">Konversi</th>
            <th class="px-6 py-3 text-center">Trend</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          {entries.map((entry) => (
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 font-medium text-gray-700">{entry.date}</td>
              <td class="px-6 py-4 text-right text-gray-700">{entry.revenue}</td>
              <td class="px-6 py-4 text-right text-gray-500">{entry.users}</td>
              <td class="px-6 py-4 text-right text-gray-500">{entry.orders}</td>
              <td class="px-6 py-4 text-right font-medium text-indigo-500">{entry.conversion}</td>
              <td class="px-6 py-4 text-center">
                <span class={entry.status === "up" ? "text-emerald-500" : "text-red-400"}>
                  {entry.status === "up" ? "▲" : "▼"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ChannelList({ channels }: { channels: ChannelData[] }) {
  return (
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 class="font-semibold text-gray-700 mb-5">Traffic by Channel</h3>
      <div class="space-y-4">
        {channels.map((ch) => (
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-gray-600">{ch.channel}</span>
              <span class="font-semibold text-gray-700">{ch.percentage}%</span>
            </div>
            <div class="w-full bg-gray-100 rounded-full h-2">
              <div
                class="h-2 rounded-full"
                style={`width: ${ch.percentage}%; background-color: ${ch.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DashboardPage({
  cards,
  monthly,
  channels,
  entries,
}: {
  cards: KpiCard[];
  monthly: MonthlyData[];
  channels: ChannelData[];
  entries: RecentEntry[];
}) {
  const labels = JSON.stringify(monthly.map((d) => d.month));
  const revenues = JSON.stringify(monthly.map((d) => d.revenue));
  const users = JSON.stringify(monthly.map((d) => d.users));
  const orders = JSON.stringify(monthly.map((d) => d.orders));

  return (
    <html lang="id">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SmartAnalysis Pro — KPI Dashboard</title>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: 'Inter', sans-serif; background: #f8fafc; color: #1e293b; }
          .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
          .grid-3 { display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; }
          @media (max-width: 1024px) { .grid-4 { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 640px) { .grid-4 { grid-template-columns: 1fr; } .grid-3 { grid-template-columns: 1fr; } }
          .bg-white { background: #fff; }
          .rounded-2xl { border-radius: 1rem; }
          .shadow-sm { box-shadow: 0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04); }
          .border { border-width: 1px; }
          .border-gray-100 { border-color: #f1f5f9; }
          .border-b { border-bottom-width: 1px; }
          .p-6 { padding: 1.5rem; }
          .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
          .py-5 { padding-top: 1.25rem; padding-bottom: 1.25rem; }
          .py-3 { padding-top: .75rem; padding-bottom: .75rem; }
          .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
          .px-2 { padding-left: .5rem; padding-right: .5rem; }
          .py-1 { padding-top: .25rem; padding-bottom: .25rem; }
          .mb-1 { margin-bottom: .25rem; }
          .mb-5 { margin-bottom: 1.25rem; }
          .mt-2 { margin-top: .5rem; }
          .gap-4 { gap: 1rem; }
          .space-y-4 > * + * { margin-top: 1rem; }
          .flex { display: flex; }
          .flex-col { flex-direction: column; }
          .items-center { align-items: center; }
          .justify-between { justify-content: space-between; }
          .text-xs { font-size: .75rem; }
          .text-sm { font-size: .875rem; }
          .text-xl { font-size: 1.25rem; }
          .text-2xl { font-size: 1.5rem; }
          .text-3xl { font-size: 1.875rem; }
          .font-medium { font-weight: 500; }
          .font-semibold { font-weight: 600; }
          .font-bold { font-weight: 700; }
          .text-gray-400 { color: #94a3b8; }
          .text-gray-500 { color: #64748b; }
          .text-gray-600 { color: #475569; }
          .text-gray-700 { color: #334155; }
          .text-gray-800 { color: #1e293b; }
          .text-indigo-500 { color: #6366f1; }
          .text-emerald-600 { color: #059669; }
          .text-emerald-500 { color: #10b981; }
          .text-red-500 { color: #ef4444; }
          .text-red-400 { color: #f87171; }
          .text-white { color: #fff; }
          .bg-emerald-50 { background: #ecfdf5; }
          .bg-red-50 { background: #fef2f2; }
          .bg-gray-50 { background: #f8fafc; }
          .bg-indigo-600 { background: #4f46e5; }
          .rounded-full { border-radius: 9999px; }
          .w-full { width: 100%; }
          .h-2 { height: .5rem; }
          .overflow-hidden { overflow: hidden; }
          .divide-y > * + * { border-top: 1px solid #f8fafc; }
          .divide-gray-50 > * + * { border-color: #f8fafc; }
          .transition-colors { transition: background-color .15s; }
          .hover\\:bg-gray-50:hover { background: #f8fafc; }
          .text-left { text-align: left; }
          .text-right { text-align: right; }
          .text-center { text-align: center; }
          .uppercase { text-transform: uppercase; }
          .tracking-wide { letter-spacing: .05em; }
          table { width: 100%; border-collapse: collapse; }
          th, td { white-space: nowrap; }
        `}</style>
      </head>
      <body>
        {/* Sidebar */}
        <div style="display:flex; min-height:100vh;">
          <aside style="width:240px; background:#1e1b4b; padding:2rem 1.5rem; display:flex; flex-direction:column; gap:2rem; flex-shrink:0;">
            <div>
              <p style="color:#a5b4fc; font-size:.7rem; font-weight:600; text-transform:uppercase; letter-spacing:.1em; margin-bottom:1.5rem;">SmartAnalysis Pro</p>
              <nav style="display:flex; flex-direction:column; gap:.5rem;">
                {[
                  ["📊", "Dashboard", "#"],
                  ["💡", "Insights", "#"],
                  ["📋", "Reports", "#"],
                  ["🎯", "Goals", "#"],
                  ["⚙️", "Settings", "#"],
                ].map(([icon, label, href]) => (
                  <a
                    href={href as string}
                    style={`display:flex; align-items:center; gap:.75rem; padding:.6rem .75rem; border-radius:.75rem; font-size:.875rem; color:#c7d2fe; text-decoration:none; ${label === "Dashboard" ? "background:rgba(99,102,241,.25); color:#fff; font-weight:600;" : ""}`}
                  >
                    <span>{icon as string}</span>
                    <span>{label as string}</span>
                  </a>
                ))}
              </nav>
            </div>
            <div style="margin-top:auto; padding-top:1.5rem; border-top:1px solid rgba(255,255,255,.1);">
              <div style="display:flex; align-items:center; gap:.75rem;">
                <div style="width:36px; height:36px; background:#6366f1; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; font-size:.875rem;">A</div>
                <div>
                  <p style="color:#fff; font-size:.8rem; font-weight:600;">Admin</p>
                  <p style="color:#a5b4fc; font-size:.7rem;">admin@smartanalysis.id</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main */}
          <main style="flex:1; padding:2rem; overflow:auto; min-width:0;">
            {/* Header */}
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:2rem;">
              <div>
                <h1 style="font-size:1.5rem; font-weight:700; color:#1e293b;">KPI Dashboard</h1>
                <p style="color:#94a3b8; font-size:.875rem; margin-top:.25rem;">Senin, 28 April 2026</p>
              </div>
              <div style="display:flex; gap:.75rem;">
                <select style="border:1px solid #e2e8f0; background:#fff; border-radius:.75rem; padding:.5rem 1rem; font-size:.875rem; color:#475569; cursor:pointer;">
                  <option>Apr 2026</option>
                  <option>Mar 2026</option>
                  <option>Feb 2026</option>
                </select>
                <button style="background:#6366f1; color:#fff; border:none; border-radius:.75rem; padding:.5rem 1.25rem; font-size:.875rem; font-weight:600; cursor:pointer;">
                  Export
                </button>
              </div>
            </div>

            {/* KPI Cards */}
            <div class="grid-4" style="margin-bottom:1.5rem;">
              {cards.map((card) => <KpiCardComponent card={card} />)}
            </div>

            {/* Charts Row */}
            <div class="grid-3" style="margin-bottom:1.5rem;">
              {/* Revenue Chart */}
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div class="flex items-center justify-between" style="margin-bottom:1.5rem;">
                  <h3 class="font-semibold text-gray-700">Tren Revenue & Orders</h3>
                  <div style="display:flex; gap:.5rem;">
                    {["Revenue", "Orders"].map((l) => (
                      <span style="font-size:.7rem; padding:.2rem .6rem; background:#f1f5f9; border-radius:9999px; color:#64748b;">{l}</span>
                    ))}
                  </div>
                </div>
                <canvas id="revenueChart" style="max-height:260px;" />
              </div>

              {/* Channel */}
              <ChannelList channels={channels} />
            </div>

            {/* Users Chart */}
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100" style="margin-bottom:1.5rem;">
              <h3 class="font-semibold text-gray-700" style="margin-bottom:1.5rem;">Pertumbuhan Active Users</h3>
              <canvas id="usersChart" style="max-height:180px;" />
            </div>

            {/* Table */}
            <RecentTable entries={entries} />
          </main>
        </div>

        <script>{`
          const labels = ${labels};
          const revenues = ${revenues};
          const users = ${users};
          const orders = ${orders};

          // Revenue + Orders chart
          new Chart(document.getElementById('revenueChart'), {
            type: 'line',
            data: {
              labels,
              datasets: [
                {
                  label: 'Revenue ($)',
                  data: revenues,
                  borderColor: '#6366f1',
                  backgroundColor: 'rgba(99,102,241,.08)',
                  fill: true,
                  tension: 0.4,
                  pointBackgroundColor: '#6366f1',
                  pointRadius: 4,
                  yAxisID: 'y',
                },
                {
                  label: 'Orders',
                  data: orders,
                  borderColor: '#f59e0b',
                  backgroundColor: 'rgba(245,158,11,.08)',
                  fill: true,
                  tension: 0.4,
                  pointBackgroundColor: '#f59e0b',
                  pointRadius: 4,
                  yAxisID: 'y1',
                },
              ],
            },
            options: {
              responsive: true,
              interaction: { mode: 'index', intersect: false },
              plugins: { legend: { display: false } },
              scales: {
                y: {
                  position: 'left',
                  ticks: { color: '#94a3b8', font: { size: 11 }, callback: v => '$' + (v/1000).toFixed(0) + 'k' },
                  grid: { color: '#f1f5f9' },
                },
                y1: {
                  position: 'right',
                  ticks: { color: '#94a3b8', font: { size: 11 } },
                  grid: { display: false },
                },
                x: { ticks: { color: '#94a3b8', font: { size: 11 } }, grid: { display: false } },
              },
            },
          });

          // Users chart
          new Chart(document.getElementById('usersChart'), {
            type: 'bar',
            data: {
              labels,
              datasets: [{
                label: 'Active Users',
                data: users,
                backgroundColor: labels.map((_, i) => i === labels.length - 1 ? '#6366f1' : '#e0e7ff'),
                borderRadius: 8,
              }],
            },
            options: {
              responsive: true,
              plugins: { legend: { display: false } },
              scales: {
                y: { ticks: { color: '#94a3b8', font: { size: 11 } }, grid: { color: '#f1f5f9' } },
                x: { ticks: { color: '#94a3b8', font: { size: 11 } }, grid: { display: false } },
              },
            },
          });
        `}</script>
      </body>
    </html>
  );
}
