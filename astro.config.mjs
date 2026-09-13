// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://stellar-facts.example.com',
  // Static output (default) — every page is prerendered at build time.
  output: 'static',
});
