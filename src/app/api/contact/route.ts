import { NextRequest, NextResponse } from "next/server";
import { consumeContactRequest } from "@/server/contact/rate-limit";
import { parseContactInput } from "@/server/contact/validation";
import {
  getContactConfig,
  sendContactMessage,
} from "@/server/contact/service";

export const runtime = "nodejs";

function jsonError(message: string, status: number, headers?: HeadersInit) {
  return NextResponse.json({ success: false, message }, { status, headers });
}

function getClientKey(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return (forwardedFor?.split(",")[0]?.trim() || "unknown").slice(0, 100);
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("Request body must be valid JSON.", 400);
  }

  const parsed = parseContactInput(body);
  if (!parsed.ok) {
    return jsonError(parsed.message, 400);
  }

  if (parsed.honeypot) {
    return jsonError("Unable to process this request.", 400);
  }

  const limit = consumeContactRequest(getClientKey(request));
  if (!limit.allowed) {
    return jsonError("Too many requests. Please try again later.", 429, {
      "Retry-After": String(limit.retryAfterSeconds),
    });
  }

  const config = getContactConfig();
  if (!config) {
    console.error("Contact service is not configured");
    return jsonError("Contact service is temporarily unavailable.", 503);
  }

  try {
    await sendContactMessage(parsed.input, config);
  } catch (error) {
    console.error("Contact provider error", error instanceof Error ? error.message : "unknown");
    return jsonError("Unable to send your message right now. Please try again later.", 502);
  }

  return NextResponse.json({
    success: true,
    message: "Message sent successfully.",
  });
}