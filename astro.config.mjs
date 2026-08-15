import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zipla.in',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap(),
  ],
  build: {
    inlineStylesheets: 'never',
  },
});
