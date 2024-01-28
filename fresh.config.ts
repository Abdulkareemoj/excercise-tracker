import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugin/tailwind.ts";

export default defineConfig({
  plugins: [tailwind()],
});
