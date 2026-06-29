import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sleepyfran.me",
  markdown: {
    processor: unified(),
  },
  integrations: [mdx(), sitemap()],
});
