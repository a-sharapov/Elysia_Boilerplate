import cors from "@elysiajs/cors";
import { jwt } from "@elysiajs/jwt";
import serverTiming from "@elysiajs/server-timing";
import { swagger } from "@elysiajs/swagger";
import config from "@lib/config";
import { createMotd, fallbackHandler, pipe } from "@lib/misc/utils";
import { routes } from "@lib/routes";
import { Elysia } from "elysia";

const { secret, port, version, healthyTpl } = config;
const baseUrl = `/api/v${version}`;
const isDevelopment = process.env.NODE_ENV !== "production";

const app = new Elysia()
  .onError(fallbackHandler)
  .use(cors())
  .use(serverTiming())
  .use(
    jwt({
      name: "jwt",
      secret,
    })
  )
  .get("/", () => Bun.file(healthyTpl))
  .get("/api", ({ set }) => (set.redirect = baseUrl))
  .group(baseUrl, (app) => app.use(routes));

isDevelopment &&
  app.use(
    swagger({
      path: baseUrl,
    })
  );

app.listen(port || 5757);

pipe(createMotd, console.log)(app);

export type App = typeof app;
