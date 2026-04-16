export const APPROVED_ADMIN_EMAILS = [
  "daniel@nexusaspyre.com",
  "daniel.tucker82@gmail.com",
] as const;

export function isApprovedAdminEmail(emailAddress: string | null | undefined) {
  if (!emailAddress) return false;
  const normalized = emailAddress.trim().toLowerCase();
  return APPROVED_ADMIN_EMAILS.includes(
    normalized as (typeof APPROVED_ADMIN_EMAILS)[number],
  );
}
