export interface KpiCard {
  label: string;
  value: string;
  change: number;
  unit: string;
  icon: string;
}

export interface MonthlyData {
  month: string;
  revenue: number;
  users: number;
  orders: number;
}

export interface ChannelData {
  channel: string;
  percentage: number;
  color: string;
}

export const kpiCards: KpiCard[] = [
  { label: "Total Revenue", value: "124,500", change: 12.5, unit: "$", icon: "💰" },
  { label: "Active Users", value: "8,234", change: 5.2, unit: "", icon: "👥" },
  { label: "Conversion Rate", value: "3.8", change: 0.4, unit: "%", icon: "📈" },
  { label: "Avg Order Value", value: "89.20", change: 8.1, unit: "$", icon: "🛒" },
];

export const monthlyData: MonthlyData[] = [
  { month: "Nov", revenue: 89000, users: 6100, orders: 980 },
  { month: "Dec", revenue: 105000, users: 7200, orders: 1150 },
  { month: "Jan", revenue: 98000, users: 6800, orders: 1080 },
  { month: "Feb", revenue: 112000, users: 7600, orders: 1240 },
  { month: "Mar", revenue: 118000, users: 7900, orders: 1310 },
  { month: "Apr", revenue: 124500, users: 8234, orders: 1398 },
];

export const channelData: ChannelData[] = [
  { channel: "Organic Search", percentage: 38, color: "#6366f1" },
  { channel: "Direct", percentage: 27, color: "#22d3ee" },
  { channel: "Social Media", percentage: 20, color: "#f59e0b" },
  { channel: "Referral", percentage: 15, color: "#10b981" },
];

export interface RecentEntry {
  date: string;
  revenue: string;
  users: number;
  orders: number;
  conversion: string;
  status: "up" | "down";
}

export const recentEntries: RecentEntry[] = [
  { date: "Apr 28", revenue: "$4,280", users: 312, orders: 48, conversion: "4.1%", status: "up" },
  { date: "Apr 27", revenue: "$3,950", users: 298, orders: 43, conversion: "3.9%", status: "up" },
  { date: "Apr 26", revenue: "$4,110", users: 305, orders: 45, conversion: "3.8%", status: "up" },
  { date: "Apr 25", revenue: "$3,720", users: 280, orders: 39, conversion: "3.5%", status: "down" },
  { date: "Apr 24", revenue: "$4,490", users: 324, orders: 52, conversion: "4.3%", status: "up" },
];
