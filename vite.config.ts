/// <reference types="vite/client" />
/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    watch: false,
    reporters: ['verbose'],
    coverage: {
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.{test,d}.{ts,tsx}',
        'src/main.tsx',
        'src/setupTests.ts',
        'src/store/*',
      ],
      provider: 'c8',
      all: true,
    },
  },
});
