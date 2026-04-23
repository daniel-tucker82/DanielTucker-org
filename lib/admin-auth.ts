import { auth, currentUser } from "@clerk/nextjs/server";
import { isApprovedAdminEmail } from "@/lib/admin-access";

export async function isCurrentUserApprovedAdmin() {
  const { userId, sessionClaims } = await auth();
  if (!userId) return false;

  const claimsEmail =
    typeof sessionClaims?.email === "string" ? sessionClaims.email : undefined;
  if (isApprovedAdminEmail(claimsEmail)) {
    return true;
  }

  try {
    const user = await currentUser();
    const primaryEmail = user?.emailAddresses.find(
      (email) => email.id === user.primaryEmailAddressId,
    )?.emailAddress;
    return isApprovedAdminEmail(primaryEmail);
  } catch (error) {
    console.error("Failed to resolve Clerk currentUser for admin auth", error);
    return false;
  }
}
