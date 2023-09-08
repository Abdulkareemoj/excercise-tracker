/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

await start(manifest, config);

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = "Hello World";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
