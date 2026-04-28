import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { DashboardPage } from "../views/dashboard";
import { kpiCards, monthlyData, channelData, recentEntries } from "../data/kpi";

export const dashboardRoutes = new Elysia()
  .use(html())
  .get("/dashboard", () =>
    DashboardPage({
      cards: kpiCards,
      monthly: monthlyData,
      channels: channelData,
      entries: recentEntries,
    })
  );
