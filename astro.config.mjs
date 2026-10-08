// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600, 700, 800, 900],
      subsets: ['cyrillic', 'latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Playfair Display',
      cssVariable: '--font-playfair-display',
      weights: [400, 500, 600, 700, 800, 900],
      subsets: ['cyrillic', 'latin'],
    },
  ],
});
