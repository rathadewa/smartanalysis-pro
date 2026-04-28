import { Elysia } from "elysia";
import { indexRoutes } from "./routes/index";

const app = new Elysia()
  .use(indexRoutes)
  .listen(3000);

console.log(`Server running at http://localhost:${app.server?.port}`);
