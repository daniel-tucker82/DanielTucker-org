"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { Recommendation } from "@/lib/page-content/recommendations";

/** Auto-advance delay in milliseconds (must match `useEffect` deps below). */
const SLIDE_ADVANCE_MS = 22_000;

export function RecommendationsCarousel({
  recommendations,
  memberName,
}: {
  recommendations: Recommendation[];
  memberName: string;
}) {
  const [index, setIndex] = useState(0);
  /** When true, automatic advance is off; full page load always starts playing (false). */
  const [autoAdvancePaused, setAutoAdvancePaused] = useState(false);
  const max = recommendations.length - 1;
  const safeIndex = Math.min(index, Math.max(max, 0));

  useEffect(() => {
    if (autoAdvancePaused) {
      return;
    }
    if (recommendations.length <= 1) {
      return;
    }
    const timer = setTimeout(() => {
      setIndex((prev) => (prev >= max ? 0 : prev + 1));
    }, SLIDE_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [index, max, autoAdvancePaused, recommendations.length]);

  const active = useMemo(
    () => recommendations[safeIndex],
    [recommendations, safeIndex],
  );

  if (!active) {
    return (
      <div className="border border-[#66FCF1]/25 bg-[#0B0C10] p-10">
        <div className="border border-[#66FCF1]/35 bg-[#0B0C10]/55 p-6">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1]">
            Feedback
          </p>
          <p className="mt-3 text-2xl font-bold leading-tight text-white">
            Recommendations for {memberName} will appear here soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-[#66FCF1]/25 bg-[#0B0C10] px-0 py-0">
      <style>{`
        @keyframes recommendations-carousel-progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
      <motion.div
        key={active.name}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.x < -35) setIndex((prev) => (prev >= max ? 0 : prev + 1));
          if (info.offset.x > 35) setIndex((prev) => (prev <= 0 ? max : prev - 1));
        }}
        initial={{ opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
        className="cursor-grab active:cursor-grabbing"
      >
        <div className="p-10">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#66FCF1] bg-[#0B0C10]">
              <Image
                src={active.avatarSrc}
                alt={active.name}
                fill
                unoptimized
                className="object-cover grayscale contrast-125"
                sizes="56px"
                priority={false}
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">{active.name}</p>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1]">
                {active.title}
              </p>
            </div>
          </div>
          <blockquote className="mt-5 border border-[#66FCF1]/35 bg-[#0B0C10]/55 p-6 text-sm text-[#C5C6C7]">
            <p className="mt-3 text-2xl font-bold leading-tight text-white">
              &ldquo;{active.quote}&rdquo;
            </p>
          </blockquote>
        </div>
      </motion.div>
      <div className="border-t border-[#66FCF1]/25 px-10 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2">
            {recommendations.map((item, i) => {
              const isActive = i === safeIndex;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`relative h-2.5 w-8 overflow-hidden rounded-none border bg-[#0B0C10] ${
                    isActive ? "border-[#66FCF1]" : "border-[#66FCF1]/35"
                  }`}
                  aria-label={`Show recommendation from ${item.name}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span
                    className="pointer-events-none absolute inset-0 bg-[#66FCF1]/10"
                    aria-hidden
                  />
                  {isActive ? (
                    <span
                      key={`${index}-${autoAdvancePaused ? "paused" : "playing"}`}
                      className="pointer-events-none absolute inset-y-0 left-0 w-full origin-left bg-[#66FCF1] will-change-transform"
                      style={
                        autoAdvancePaused
                          ? { transform: "scaleX(1)" }
                          : {
                              transform: "scaleX(0)",
                              animation: `recommendations-carousel-progress ${SLIDE_ADVANCE_MS}ms linear forwards`,
                            }
                      }
                      aria-hidden
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setAutoAdvancePaused((p) => !p)}
            className="inline-flex items-center gap-2 rounded-none border border-[#66FCF1]/45 px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1] hover:border-[#66FCF1] hover:bg-[#66FCF1]/10"
            aria-pressed={autoAdvancePaused ? "true" : "false"}
            aria-label={
              autoAdvancePaused
                ? "Resume automatic slide rotation"
                : "Pause automatic slide rotation"
            }
          >
            {autoAdvancePaused ? (
              <>
                <Play className="h-4 w-4 shrink-0" aria-hidden />
                Play
              </>
            ) : (
              <>
                <Pause className="h-4 w-4 shrink-0" aria-hidden />
                Pause
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
