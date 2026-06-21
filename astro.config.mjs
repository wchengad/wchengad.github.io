import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Personal GitHub Pages site (served from the domain root)
  site: 'https://wchengad.github.io',
  base: '/',
  integrations: [
    mdx(),
    sitemap({
      // Only the live pages — disabled routes (cv/projects/news/blog/…) redirect to 404
      filter: (page) =>
        page === 'https://wchengad.github.io/' ||
        page === 'https://wchengad.github.io/publications/',
      // Stamp lastmod on every build so search engines re-crawl sooner
      lastmod: new Date(),
    }),
  ],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
