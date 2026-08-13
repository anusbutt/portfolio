export interface ContactInput {
  name: string;
  email: string;
  message: string;
}

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
}

const allowedKeys = new Set(["name", "email", "message", "website"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function parseContactInput(value: unknown):
  | { ok: true; input: ContactInput; honeypot: boolean }
  | { ok: false; message: string } {
  if (!isRecord(value)) {
    return { ok: false, message: "Request body must be a JSON object." };
  }

  const payload = value as ContactPayload;
  if ([...Object.keys(payload)].some((key) => !allowedKeys.has(key))) {
    return { ok: false, message: "Request contains unsupported fields." };
  }

  if (
    typeof payload.name !== "string" ||
    typeof payload.email !== "string" ||
    typeof payload.message !== "string"
  ) {
    return { ok: false, message: "Name, email, and message are required." };
  }

  const input: ContactInput = {
    name: payload.name.trim(),
    email: payload.email.trim().toLowerCase(),
    message: payload.message.trim(),
  };

  if (input.name.length === 0) {
    return { ok: false, message: "Name is required." };
  }
  if (input.name.length > 100) {
    return { ok: false, message: "Name must be 100 characters or less." };
  }
  if (input.email.length === 0) {
    return { ok: false, message: "Email is required." };
  }
  if (input.email.length > 254 || !emailPattern.test(input.email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (input.message.length === 0) {
    return { ok: false, message: "Message is required." };
  }
  if (input.message.length > 2000) {
    return { ok: false, message: "Message must be 2000 characters or less." };
  }

  return {
    ok: true,
    input,
    honeypot: typeof payload.website === "string" && payload.website.trim().length > 0,
  };
}