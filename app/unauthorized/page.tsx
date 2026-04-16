import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <section className="blueprint-grid border border-[#66FCF1]/30 bg-[#1F2833]/35 p-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#66FCF1]">
          Access Restricted
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Unauthorized</h1>
        <p className="mt-4 text-[#C5C6C7]">
          Your account is signed in but does not have admin privileges for this
          control surface.
        </p>
      </section>

      <section className="panel-surface rounded-none p-6">
        <p className="text-[#C5C6C7]">
          If this is unexpected, contact Daniel to confirm your admin allowlist
          status in Clerk.
        </p>
        <div className="mt-5 flex gap-3">
          <Link
            href="/"
            className="rounded-none border border-[#66FCF1]/45 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#C5C6C7] transition-colors hover:border-[#66FCF1] hover:text-white"
          >
            Return Home
          </Link>
          <Link
            href="/admin"
            className="rounded-none border border-[#66FCF1] bg-[#0B0C10] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1] transition-colors hover:bg-[#66FCF1] hover:text-[#0B0C10]"
          >
            Retry Admin
          </Link>
        </div>
      </section>
    </div>
  );
}
