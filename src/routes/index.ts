import { Elysia } from "elysia";

export const indexRoutes = new Elysia().get("/", () => ({
  status: "ok",
  message: "SmartAnalysis Pro is running",
}));
