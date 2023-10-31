import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@contexts': '/src/contexts',
      '@config': '/config',
      '@css': '/src/css',
      '@fonts': '/src/fonts',
      '@images': '/src/images',
      '@scripts': '/src/scripts',
      '@videos': '/src/videos/',
    }
  }
})
