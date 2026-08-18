import { expect, test } from "@playwright/test";

const heroHeading =
  "I build auditable AI systems and full-stack products that ship.";

test("homepage positioning and responsive layout", async ({ page }, testInfo) => {
  const isMobile = testInfo.project.use.isMobile === true;

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
    const header = page.locator("header");
    const menuButton = page.getByRole("button", { name: "Toggle navigation menu" });
    const desktopLinks = page.locator("nav > div").first();
    await expect(menuButton).toBeVisible();
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");
    await expect(desktopLinks).toBeHidden();

    await menuButton.click();
    await expect(menuButton).toHaveAttribute("aria-expanded", "true");
    for (const label of ["Projects", "About", "Skills", "Contact"]) {
      await expect(
        header.getByRole("link", { name: label, exact: true }).last(),
      ).toBeVisible();
    }

    await header.getByRole("link", { name: "Projects", exact: true }).last().click();
    await expect(page).toHaveURL(/#projects$/);
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  }

  const highlightsHeading = page.getByRole("heading", {
    name: "The signal behind the work.",
  });
  await highlightsHeading.scrollIntoViewIfNeeded();
  await expect(highlightsHeading).toBeVisible();
  await expect(page.locator("#highlights article")).toHaveCount(8);
  await expect(page.locator("#highlights")).toContainText("Open Source");
  await expect(page.locator("#highlights")).toContainText("GraphKeeper + Omniveer");

  const projectsHeading = page.getByRole("heading", {
    name: "AI systems, built end to end.",
  });
  await projectsHeading.scrollIntoViewIfNeeded();
  await expect(projectsHeading).toBeVisible();
  const projectNames = await page
    .locator('#projects article[data-project-tier="main"] h3')
    .allTextContents();
  expect(projectNames).toEqual([
    "GraphKeeper",
    "Irha Beauty",
    "Omniveer Duct Lead Qualifier",
    "RAG-Powered Interactive Robotics Textbook",
    "Agent Replay",
  ]);
  const mainProjectCards = page.locator('#projects article[data-project-tier="main"]');
  for (let index = 0; index < (await mainProjectCards.count()); index += 1) {
    const projectCard = mainProjectCards.nth(index);
    await projectCard.scrollIntoViewIfNeeded();
    await expect
      .poll(() => projectCard.evaluate((element) => Number(getComputedStyle(element).opacity)))
      .toBeGreaterThan(0.99);
  }
  await expect(page.getByText("Flagship project", { exact: true })).toBeVisible();
  await expect(page.getByText("More projects", { exact: true })).toBeVisible();
  await expect(
    page.locator('#projects article[data-project-tier="more"] h3'),
  ).toHaveText(["TaskMate", "Prospector"]);
  await expect(page.getByText("Nestaro Pilot", { exact: true })).toHaveCount(0);
  await page.screenshot({ path: testInfo.outputPath("projects.png"), fullPage: true });

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
  await expect(page.locator("#website")).toBeAttached();
  await expect(page.locator("#website").locator("..")).toHaveAttribute("aria-hidden", "true");
  await expect(page.locator("#website")).toHaveAttribute("tabindex", "-1");
  await expect(
    page.locator("#contact").getByText("Duct Lead Qualifier", { exact: false }),
  ).toHaveCount(0);
  await expect(page.getByText("Available for projects", { exact: false })).toHaveCount(0);
  await page.screenshot({ path: testInfo.outputPath("contact.png") });
});
