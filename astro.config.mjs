import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://viptourtransfer.gr',

  integrations: [
    react(),
    tailwind({
      // Use your existing Tailwind config and styles
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          el: 'el',
        },
      },
    }),
  ],

  // Static Site Generation (SSG)
  output: 'static',

  // Build configuration
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets',
  },

  // Vite configuration (for compatibility with existing setup)
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },

  // i18n routing configuration
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'el'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
