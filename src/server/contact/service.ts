import { getResend } from "@/server/email/resend";
import type { ContactInput } from "@/server/contact/validation";

interface ContactConfig {
  from: string;
  to: string;
}

export function getContactConfig(): ContactConfig | null {
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!process.env.RESEND_API_KEY || !from || !to) {
    return null;
  }
  return { from, to };
}

export async function sendContactMessage(
  input: ContactInput,
  config: ContactConfig,
): Promise<void> {
  const result = await getResend().emails.send({
    from: config.from,
    to: config.to,
    subject: "Portfolio contact message",
    replyTo: input.email,
    text:
      "Name: " + input.name + String.fromCharCode(10) +
      "Email: " + input.email + String.fromCharCode(10, 10) +
      "Message:" + String.fromCharCode(10) + input.message,
  });

  if (result.error) {
    throw new Error("Resend rejected the contact message");
  }
}