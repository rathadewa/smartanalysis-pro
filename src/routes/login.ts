import { Elysia } from "elysia";
import { loginPage } from "../views/login";

export const loginRoutes = new Elysia()
  .get("/", () => new Response(loginPage(), { headers: { "Content-Type": "text/html;charset=utf-8" } }))
  .get("/login", () => new Response(loginPage(), { headers: { "Content-Type": "text/html;charset=utf-8" } }));
