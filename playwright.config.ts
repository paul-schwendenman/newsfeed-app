import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "e2e",
  use: {
    headless: false,
  },
  webServer: {
    command: "npm run start",
    port: 3000,
    timeout: 120 * 1000,
  },
});
