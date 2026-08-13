export interface ContactInput {
  name: string;
  email: string;
  message: string;
}

export const CONTACT_FIELD_LIMITS = {
  name: 100,
  email: 254,
  message: 2000,
} as const;

export const CONTACT_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidContactEmail(email: string): boolean {
  return (
    email.length <= CONTACT_FIELD_LIMITS.email &&
    CONTACT_EMAIL_PATTERN.test(email)
  );
}