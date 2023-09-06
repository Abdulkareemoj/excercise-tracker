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

const envVars: DotenvConfig = await config()

await start(manifest, config);
const app = new Application();
const router = new Router();


router
.get(path:"/", middleware:(context:RouterContext<"/"))
.get()
.post()
