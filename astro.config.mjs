import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://gkviptransfer.gr',

  integrations: [
    react(),
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

  // Always serve URLs with a trailing slash so canonical, sitemap, and Netlify routing agree
  trailingSlash: 'always',

  // Build configuration
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets',
  },

  // Vite configuration (for compatibility with existing setup)
  vite: {
    plugins: [tailwindcss()],
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
