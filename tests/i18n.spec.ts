import { expect, test } from "@playwright/test";

test("language toggle switches EN to ES", async ({ page }) => {
  await page.goto("/");
  const toggle = page.getByRole("button", { name: /EN|ES/ });
  await toggle.click();

  await expect(page.getByRole("link", { name: "Impacto" })).toBeVisible();
});
