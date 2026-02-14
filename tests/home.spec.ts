import { expect, test } from "@playwright/test";

test("home page loads and resume link exists", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Esteban");
  await expect(page.getByRole("link", { name: /Download Resume|Descargar CV/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Book a Call|Book Intro Call|Agendar/ })).toBeVisible();
});
