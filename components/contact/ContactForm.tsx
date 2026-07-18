"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { socialLinks } from "@/data/socials";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!name.trim()) errs.name = "Name is required";
    else if (name.length > 100) errs.name = "Name must be 100 characters or less";

    if (!email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email";

    if (!message.trim()) errs.message = "Message is required";
    else if (message.length > 2000) errs.message = "Message must be 2000 characters or less";

    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setStatusMessage("Message sent successfully! I'll get back to you soon.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setStatusMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-surface px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/[0.06] blur-[120px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="06 / Contact"
          title="Need a website, software system, or AI-powered workflow?"
          description="Tell me what you are building, where the current process slows down, and what a successful result should look like. I can help turn it into a complete, production-ready system."
        />

        <div className="mt-14 grid border-t border-white/[0.09] pt-10 md:grid-cols-[0.65fr_1.35fr] md:gap-16 lg:mt-20 lg:gap-24 lg:pt-14">
          <div>
            <p className="max-w-sm text-lg leading-8 text-stone-300">
              Let&apos;s turn the requirement into a clear, reliable product.
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Find me online</p>
            <div className="mt-4 flex flex-col items-start gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-10 items-center gap-3 text-sm text-stone-400 transition-colors hover:text-stone-100"
                >
                  <span className="text-accent transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                  {link.platform}
                </a>
              ))}
            </div>
          </div>

        <motion.form
          className="mt-12 space-y-7 md:mt-0"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          noValidate
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.16em] text-stone-500"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
              }}
              className={`min-h-12 w-full border bg-transparent px-4 text-stone-100 placeholder-stone-700 transition-colors focus:border-accent ${
                errors.name ? "border-red-500" : "border-white/15 hover:border-white/30"
              }`}
              placeholder="Your name"
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-sm text-red-400">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.16em] text-stone-500"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
              }}
              className={`min-h-12 w-full border bg-transparent px-4 text-stone-100 placeholder-stone-700 transition-colors focus:border-accent ${
                errors.email ? "border-red-500" : "border-white/15 hover:border-white/30"
              }`}
              placeholder="you@example.com"
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.16em] text-stone-500"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) setErrors((p) => ({ ...p, message: undefined }));
              }}
              className={`w-full resize-none border bg-transparent px-4 py-3 text-stone-100 placeholder-stone-700 transition-colors focus:border-accent ${
                errors.message ? "border-red-500" : "border-white/15 hover:border-white/30"
              }`}
              placeholder="Tell me about your project..."
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-2 text-sm text-red-400">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex min-h-12 w-full items-center justify-center gap-3 bg-accent px-7 text-sm font-semibold text-stone-950 transition-colors hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              <>
                Send message <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </>
            )}
          </button>

          {status !== "idle" && (
            <p
              role="status"
              aria-live="polite"
              className={`border-l-2 pl-3 text-sm ${
                status === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </motion.form>
        </div>
        </div>
    </section>
  );
}
