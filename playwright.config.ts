import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],

  use: {
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
    trace: 'on',
    screenshot: 'on',
    video: 'on',
    headless: false,
  },

  browser: [
    {
      name: 'chrome',   // Chrome
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'edge',       // Edge
      use: { ...devices['Desktop Edge'] },
    },
    {
      name: 'firefox',       // Edge
      use: { ...devices['Desktop FireFox'] },
    },
  ]
});
