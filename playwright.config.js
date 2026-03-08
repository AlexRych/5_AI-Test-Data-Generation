import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  use: {
    ignoreHTTPSErrors: true, // Ignore SSL certificate errors
  },
});