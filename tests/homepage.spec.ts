import { expect, test } from "@playwright/test";

const heroHeading =
  "I build auditable AI systems and full-stack products that ship.";

test("homepage positioning and responsive layout", async ({ page }, testInfo) => {
  const isMobile = testInfo.project.name === "mobile-edge";

  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(heroHeading);
  await expect(
    page.locator('header img[src*="logo.png"]'),
  ).toBeVisible();
  await expect(page.getByText("Open to AI & full-stack roles", { exact: true })).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);

  await page.screenshot({ path: testInfo.outputPath("hero.png") });

  if (isMobile) {
    const menuButton = page.getByRole("button", { name: "Toggle navigation menu" });
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await expect(page.getByRole("link", { name: "Projects", exact: true })).toBeVisible();
    await menuButton.click();
  }

  const projectsHeading = page.getByRole("heading", {
    name: "Shipped systems, with the code to prove it.",
  });
  await projectsHeading.scrollIntoViewIfNeeded();
  await expect(projectsHeading).toBeVisible();
  const projectNames = await page.locator("#projects article h3").allTextContents();
  expect(projectNames).toEqual(["GraphKeeper", "Agent Replay", "Prospector", "Commit Voice"]);
  await expect(page.getByText("Featured open source", { exact: true })).toBeVisible();

  const capabilitiesHeading = page.getByRole("heading", { name: "The tools behind the work." });
  await capabilitiesHeading.scrollIntoViewIfNeeded();
  await expect(
    page.getByRole("heading", { name: "Product Engineering", exact: true }),
  ).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath("capabilities.png") });

  const contactHeading = page.getByRole("heading", {
    name: "Looking for an AI or full-stack engineer?",
  });
  await contactHeading.scrollIntoViewIfNeeded();
  await expect(contactHeading).toBeVisible();
  await expect(page.getByText("Founder of Omniveer.", { exact: true })).toBeVisible();
  await expect(page.getByText("Duct Lead Qualifier", { exact: false })).toHaveCount(0);
  await expect(page.getByText("Available for projects", { exact: false })).toHaveCount(0);
  await page.screenshot({ path: testInfo.outputPath("contact.png") });
});
