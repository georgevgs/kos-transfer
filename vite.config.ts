import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from 'path';

const projectRoot = process.env.PROJECT_ROOT || import.meta.dirname;

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(projectRoot, 'src')
    }
  },
  build: {
    // Output directory
    outDir: 'dist',
    // Generate sourcemaps for production debugging (optional - remove if not needed)
    sourcemap: false,
    // Optimize chunks
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion'],
          'icons-vendor': ['@phosphor-icons/react'],
        },
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Minify with esbuild (faster than terser)
    minify: 'esbuild',
    // Target modern browsers
    target: 'es2020',
  },
  // Preview server configuration
  preview: {
    port: 4173,
    strictPort: true,
  },
  // Dev server configuration
  server: {
    port: 5173,
    strictPort: true,
    host: true,
  },
});
