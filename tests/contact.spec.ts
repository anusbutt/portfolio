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

  test("reports missing email configuration without exposing server details", async ({ request }) => {
    const response = await request.post("/api/contact", {
      data: {
        name: "Test visitor",
        email: "visitor@example.com",
        message: "Hello from an automated acceptance test.",
      },
    });
    expect(response.status()).toBe(503);
    await expect(response.json()).resolves.toEqual({
      success: false,
      message: "Contact service is temporarily unavailable.",
    });
  });
});