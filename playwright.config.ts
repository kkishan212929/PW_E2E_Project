import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  timeout :30 *1000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  
  reporter: [
              ['allure-playwright', {outputFolder: '../reports/allure-results'}] ,
              ['html',{outputFolder: '../reports/html-report'}]],

  use: {
    screenshot: 'only-on-failure',
    video :'retain-on-failure',
    trace: 'on-first-retry',
    viewport : {width :1280 ,height :720},
    ignoreHTTPSErrors : true,
    permissions : ['geolocation'],
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

   /* {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/
  ]

});
