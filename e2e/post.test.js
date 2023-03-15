import { test, expect } from "@playwright/test";

test.describe("add a post", () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL);

    await page.waitForSelector("#app");
  });

  test("pressing button works", async ({ page }) => {
    await page.getByPlaceholder("What's on your mind?").click();
    await page
      .getByPlaceholder("What's on your mind?")
      .fill("This is a post with a button");
    await page.getByRole("button", { name: "Post" }).click();

    const content = page.locator(".post-body");
    expect(content).toHaveText("This is a post with a button");
  });

  test("pressing enter works", async ({ page }) => {
    await page.getByPlaceholder("What's on your mind?").click();
    await page.getByPlaceholder("What's on your mind?").fill("This is a post");
    await page.getByPlaceholder("What's on your mind?").press("Enter");

    const content = page.locator(".post-body");
    expect(content).toHaveText("This is a post");
  });
});
