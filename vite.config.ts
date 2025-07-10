import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // Keep console logs for debugging
        pure_funcs: ['console.info', 'console.debug', 'console.trace'] // Remove other console types
      }
    },
    rollupOptions: {
      output: {
        manualChunks: undefined // Ensure scripts are not split inappropriately
      }
    }
  }
});
