import Image from "next/image";
import { RecommendationsCarousel } from "@/components/recommendations-carousel";

export default function ProfilePage() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#66FCF1]/10 bg-[#121317]">
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0C10]/95 via-transparent to-[#66FCF1]/10" />

        <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-12 py-16">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-4 mb-10">
                <span className="h-px w-12 bg-[#66FCF1]" />
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#66FCF1]">
                  Profile
                </p>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter">
                Technical Logic. Human Leadership.
              </h1>
            </div>

            <div className="col-span-12 lg:col-span-4 relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#66FCF1]/20" />
              <div className="relative aspect-[4/5] bg-[#1F2833] border border-[#66FCF1]/30 overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZkaaauSlXp4dtB4p__xbn6SirHvxIAb2P4qeBl2j9ro0c9MHSTb9I5ggvfoChT8MyhgW9UKXG9HCAtvqJd0Hle4Kxo2HCstMZracfSZNRP4xcAp_LcXb9GLS4v4sUFzEZwJBkuNIqfSKAOnidq79H3I1x8mL9ltuw5Fpwh7OyLqYCdRfkK4c5RWpC344pe3oKwPBl_9KNjH6Uw5NVXddDP0dqn9B4-SiaY9JuIL4zTrNUrK88lE8MGYNzFyt0gq4OG3hM8AunW3Q"
                  alt="Daniel Tucker"
                  fill
                  priority
                  unoptimized
                  className="object-cover grayscale brightness-90 contrast-125"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative + Bio */}
      <section className="bg-[#0B0C10] border-t border-[#66FCF1]/10">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 py-24">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 col-span-12">
              <div className="panel-surface rounded-none p-6">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#66FCF1]">
                  The Bridge
                </h2>
              </div>
            </div>
            <div className="lg:col-span-8 col-span-12">
              <blockquote className="border-l border-[#66FCF1]/35 pl-6">
                <p className="text-2xl md:text-3xl text-[#C5C6C7] leading-tight">
                  I work at the seam where strategy fails without execution. The job is
                  to convert abstract intent into operational systems that teams trust.
                </p>
                <p className="mt-6 text-[#C5C6C7] text-base md:text-lg leading-relaxed">
                  That means translating executive priorities into practical constraints,
                  making technical truth visible, and leading people through change without
                  breaking momentum.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations carousel */}
      <section className="pb-24">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
          <RecommendationsCarousel />
        </div>
      </section>
    </div>
  );
}
