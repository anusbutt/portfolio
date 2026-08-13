import { expect, test } from "@playwright/test";

test.describe("contact API boundary", () => {
  test("rejects malformed JSON", async ({ request }) => {
    const response = await request.post("/api/contact", {
      data: "not-json",
      headers: { "Content-Type": "application/json" },
    });
    expect(response.status()).toBe(400);
    await expect(response.json()).resolves.toMatchObject({ success: false });
  });

  test("rejects invalid contact input", async ({ request }) => {
    const response = await request.post("/api/contact", {
      data: { name: "", email: "invalid", message: "" },
    });
    expect(response.status()).toBe(400);
    await expect(response.json()).resolves.toMatchObject({ success: false });
  });

  test("rejects populated honeypot input", async ({ request }) => {
    const response = await request.post("/api/contact", {
      data: {
        name: "Automated visitor",
        email: "visitor@example.com",
        message: "This should not be delivered.",
        website: "https://bot.example/",
      },
    });
    expect(response.status()).toBe(400);
    await expect(response.json()).resolves.toEqual({ success: false, message: "Unable to process this request." });
  });

  test("reports missing email configuration without exposing server details", async ({ request }) => {
    const response = await request.post("/api/contact", {
      data: {
        name: "Test visitor",
        email: "visitor@example.com",
        message: "Hello from an automated acceptance test.",
        website: "",
      },
    });
    expect(response.status()).toBe(503);
    await expect(response.json()).resolves.toEqual({
      success: false,
      message: "Contact service is temporarily unavailable.",
    });
  });
});

test("submits the contact form with an empty honeypot", async ({ page }) => {
  let requestBody: Record<string, unknown> | undefined;
  await page.route("/api/contact", async (route) => {
    requestBody = route.request().postDataJSON() as Record<string, unknown>;
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: true, message: "Message sent successfully." }),
    });
  });

  await page.goto("/");
  await page.locator("#name").fill("Test visitor");
  await page.locator("#email").fill("visitor@example.com");
  await page.locator("#message").fill("Hello from an automated acceptance test.");
  await page.getByRole("button", { name: "Send message" }).click();

  await expect(page.getByRole("status")).toHaveText("Message sent successfully! I'll get back to you soon.");
  expect(requestBody).toMatchObject({
    name: "Test visitor",
    email: "visitor@example.com",
    message: "Hello from an automated acceptance test.",
    website: "",
  });
});