import { defineConfig } from '@playwright/test';
import config from './playwright.config';
export default defineConfig({
  ...config,
  outputDir: 'test-results/dev',
  testMatch: ['navigation.spec.ts'],
  use: { ...config.use, baseURL: 'http://127.0.0.1:4200' },
  webServer: {
    command: 'npm start -- --host 127.0.0.1',
    url: 'http://127.0.0.1:4200',
    reuseExistingServer: !process.env['CI'],
    timeout: 120000,
  },
});
