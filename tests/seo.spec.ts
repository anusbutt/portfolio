import { expect, test } from "@playwright/test";

test("metadata and SEO routes are available", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain("Sitemap: https://www.anasbutt.site/sitemap.xml");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).toContain("<loc>https://www.anasbutt.site/</loc>");

  const response = await request.get("/");
  expect(response.ok()).toBe(true);
  const html = await response.text();
  expect(html).toContain('rel="canonical"');
  expect(html).toContain("https://www.anasbutt.site");
  expect(html).toContain('property="og:title"');
});