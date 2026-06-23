import { NextRequest, NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

function validateBody(body: ContactBody): string | null {
  if (!body.name || body.name.trim().length === 0) {
    return "Name is required";
  }
  if (body.name.length > 100) {
    return "Name must be 100 characters or less";
  }
  if (!body.email || body.email.trim().length === 0) {
    return "Email is required";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email)) {
    return "Please enter a valid email address";
  }
  if (!body.message || body.message.trim().length === 0) {
    return "Message is required";
  }
  if (body.message.length > 2000) {
    return "Message must be 2000 characters or less";
  }
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json();

    const validationError = validateBody(body);
    if (validationError) {
      return NextResponse.json(
        { success: false, message: validationError },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    await getResend().emails.send({
      from: "portfolio@anusyousuf.com",
      to: "buttanus3@gmail.com",
      subject: `Portfolio Contact: ${body.name}`,
      replyTo: body.email,
      text: `Name: ${body.name}\nEmail: ${body.email}\n\nMessage:\n${body.message}`,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
