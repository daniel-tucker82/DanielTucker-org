import { clerkMiddleware } from "@clerk/nextjs/server";
import { getClerkMiddlewareOptions } from "@/lib/clerk-domains";

/**
 * Admin routes enforce auth in app/admin/page.tsx and API handlers so unauthenticated
 * users get a same-origin redirect to /sign-in. Avoid auth.protect() here — on
 * satellite hosts it can rewrite to a 404 before the page runs.
 */
export default clerkMiddleware(
  async () => {},
  (req) => getClerkMiddlewareOptions(req.nextUrl.hostname),
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
