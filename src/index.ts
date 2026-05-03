import { Elysia } from "elysia";
import { loginRoutes, dashboardRoutes } from "./routes/index";

const app = new Elysia()
  .use(loginRoutes)
  .use(dashboardRoutes)
  .listen(3000);

console.log(`Server running at http://localhost:${app.server?.port}`);
