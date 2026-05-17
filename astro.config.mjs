import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nickdawson.net',
  output: 'static',
  build: {
    format: 'directory',
  },
});
