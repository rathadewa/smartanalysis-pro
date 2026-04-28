import { Elysia } from "elysia";
import { indexRoutes } from "./routes/index";
import { dashboardRoutes } from "./routes/dashboard";

const app = new Elysia()
  .use(indexRoutes)
  .use(dashboardRoutes)
  .listen(3000);

console.log(`Server running at http://localhost:${app.server?.port}`);
