import { Elysia } from "elysia";
import { dashboardPage } from "../views/dashboard";

export const dashboardRoutes = new Elysia()
  .get("/dashboard", () => new Response(dashboardPage(), { headers: { "Content-Type": "text/html;charset=utf-8" } }));
