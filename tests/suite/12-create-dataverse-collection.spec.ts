import { test, expect } from "@playwright/test";
const process = (globalThis as any).process;

/**
 * @tags @21cfr
 *
 * 21 CFR Part 11 — Test #6
 * Creates a new child dataverse collection then deletes it.
 */

test(
  "21 CFR: Create dataverse collection",
  { tag: ["@21cfr"] },
  async ({ page }) => {
    await page.goto(process.env.ROOT_DATAVERSE ?? "/");
    await page.getByRole("button", { name: "Add Data" }).click();
    await page.getByRole("link", { name: "New Dataverse" }).click();
    await page
      .getByRole("textbox", { name: "Identifier" })
      .fill("playwright-testing-collection");
    await page.getByLabel("Category").selectOption("Department");
    await page.getByRole("button", { name: "Create Dataverse" }).click();
    await page.getByRole("button", { name: "Edit" }).click();
    await page.getByRole("link", { name: "Delete Dataverse" }).click();
    await page.getByRole("button", { name: "Continue" }).click();
  },
);
