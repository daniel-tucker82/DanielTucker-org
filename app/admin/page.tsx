import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { isApprovedAdminEmail } from "@/lib/admin-access";
import { AdminBlogManager } from "@/components/admin-blog-manager";
import { getBlogPosts } from "@/lib/blog-storage";
import { getSiteConfig } from "@/lib/site-config";
import { HeroSectionEditor } from "@/components/hero-section-editor";

export default async function AdminPage() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();
  const primaryEmail = user?.emailAddresses.find(
    (email) => email.id === user.primaryEmailAddressId,
  )?.emailAddress;

  if (!isApprovedAdminEmail(primaryEmail)) {
    redirect("/unauthorized");
  }

  const posts = await getBlogPosts();
  const siteConfig = await getSiteConfig();

  return (
    <div className="space-y-8">
      <section className="blueprint-grid border border-[#66FCF1]/30 bg-[#1F2833]/35 p-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#66FCF1]">
          Admin Dashboard
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white">
          Operations Control Surface
        </h1>
        <p className="mt-4 text-[#C5C6C7]">
          Authenticated through Clerk and restricted to approved admin identities.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="panel-surface rounded-none p-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#66FCF1]">
            Active Pilots
          </p>
          <p className="mt-3 text-3xl font-semibold text-white">3</p>
          <p className="mt-1 text-sm text-[#C5C6C7]">Engagement slots remaining</p>
        </article>
        <article className="panel-surface rounded-none p-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#66FCF1]">
            Recovery Pipeline
          </p>
          <p className="mt-3 text-3xl font-semibold text-white">2</p>
          <p className="mt-1 text-sm text-[#C5C6C7]">Priority interventions in flight</p>
        </article>
        <article className="panel-surface rounded-none p-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#66FCF1]">
            Weekly Velocity Delta
          </p>
          <p className="mt-3 text-3xl font-semibold text-white">+18%</p>
          <p className="mt-1 text-sm text-[#C5C6C7]">Cross-team throughput shift</p>
        </article>
      </section>

      <section className="panel-surface rounded-none p-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#66FCF1]">
          Session
        </p>
        <p className="mt-3 text-[#C5C6C7]">Authorized as: {primaryEmail}</p>
      </section>

      <HeroSectionEditor initialConfig={siteConfig} />

      <AdminBlogManager initialPosts={posts} />
    </div>
  );
}
