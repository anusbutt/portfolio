import { expect, test } from "@playwright/test";

const heroHeading =
  "I build full-stack web systems and practical AI products for real businesses.";

test("homepage positioning and responsive layout", async ({ page }, testInfo) => {
  const isMobile = testInfo.project.name === "mobile-edge";

  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(heroHeading);
  await expect(
    page.locator('header img[src*="Gemini_Generated_Image"]'),
  ).toBeVisible();
  await expect(page.getByText("Full-stack web systems", { exact: true })).toBeVisible();

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
  } else {
    await expect(
      page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", {
        name: "Omniveer",
        exact: true,
      }),
    ).toBeVisible();
  }

  const capabilitiesHeading = page.getByRole("heading", {
    name: "Full-stack product development, with AI where it adds value.",
  });
  await capabilitiesHeading.scrollIntoViewIfNeeded();
  await expect(capabilitiesHeading).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Full-stack Web", exact: true }),
  ).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath("capabilities.png") });

  const contactHeading = page.getByRole("heading", {
    name: "Need a website, software system, or AI-powered workflow?",
  });
  await contactHeading.scrollIntoViewIfNeeded();
  await expect(contactHeading).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath("contact.png") });
});
