import { auth, currentUser } from "@clerk/nextjs/server";
import { isApprovedAdminEmail } from "@/lib/admin-access";

export async function isCurrentUserApprovedAdmin() {
  const { userId } = await auth();
  if (!userId) return false;

  const user = await currentUser();
  const primaryEmail = user?.emailAddresses.find(
    (email) => email.id === user.primaryEmailAddressId,
  )?.emailAddress;
  return isApprovedAdminEmail(primaryEmail);
}
