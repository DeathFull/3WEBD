import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("link", { name: "Listes" }).click();
  await page.getByRole("button", { name: "Créer une liste" }).click();
  await page.getByPlaceholder("Entrer un nom").press("CapsLock");
  await page.getByPlaceholder("Entrer un nom").fill("V");
  await page.getByPlaceholder("Entrer un nom").press("CapsLock");
  await page.getByPlaceholder("Entrer un nom").fill("Voltaire");
  await page.getByPlaceholder("Entrer un nom").press("Enter");
  await page.getByRole("list").getByRole("button").nth(3).click();
});
