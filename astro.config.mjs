import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zipla.in',
  output: 'static',
  integrations: [
    react(),
    sitemap(),
  ],
  build: {
    inlineStylesheets: 'never',
  },
});
