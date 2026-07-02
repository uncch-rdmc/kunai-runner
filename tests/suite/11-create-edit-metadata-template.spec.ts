import { test, expect } from "@playwright/test";
const process = (globalThis as any).process;

/**
 * @tags @21cfr
 *
 * 21 CFR Part 11 — Tests #3 & #4
 * Creates a dataset template, edits its name, then deletes it.
 */

test(
  "21 CFR: Create and edit metadata template",
  { tag: ["@21cfr"] },
  async ({ page }) => {
    await page.goto(process.env.ROOT_DATAVERSE ?? "/");
    await page.getByText("Edit").click();
    await page.getByText("Dataset Templates").click();
    await page.getByText("Create Dataset Template").first().click();
    await page
      .locator('[id$=":templateName"]')
      .type("Playwright Test Template");
    const templateFormLocators = await page.locator('[id$=":inputText"]').all();
    await templateFormLocators[0].type("Test Citation");
    await templateFormLocators[6].type("Playwright Auto Tester");
    await templateFormLocators[11].type("tester-dummy@unc.edu");
    await page
      .locator('[id$=":description"]')
      .first()
      .type(
        "This is a dummy template created by Playwright for testing purposes.",
      );

    await page
      .locator(".ui-selectcheckboxmenu-multiple-container")
      .first()
      .click();

    await page
      .locator(".ui-selectcheckboxmenu-items-wrapper")
      .first()
      .getByText("Chemistry")
      .click();

    await page.getByRole("button", { name: "Save + Add Terms" }).click();
    await page.getByRole("button", { name: "Save Dataset Template" }).click();

    await page.getByRole("button", { name: "Edit Template" }).first().click();
    await page.getByRole("link", { name: "Metadata" }).click();
    await page
      .locator('[id$=":templateName"]')
      .fill("Playwright Test Template II");
    await page.getByRole("button", { name: "Save Changes" }).click();

    await page
      .locator(".btn-group")
      .first()
      .locator('[data-original-title="Delete"]')
      .click();
    await page.getByRole("button", { name: "Continue" }).click();
  },
);
