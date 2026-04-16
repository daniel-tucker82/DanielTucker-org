import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="mx-auto max-w-md">
      <section className="panel-surface rounded-none p-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#66FCF1]">
          Admin Authentication
        </p>
        <SignIn
          routing="path"
          path="/sign-in"
          forceRedirectUrl="/admin"
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "rounded-none border border-[#66FCF1]/35 bg-[#1F2833] shadow-none",
            },
          }}
        />
      </section>
    </div>
  );
}
