"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

/** Auto-advance delay in milliseconds (must match `useEffect` deps below). */
const SLIDE_ADVANCE_MS = 22_000;

const recommendations = [
  {
    name: "Micha Essers",
    title: "Program Manager",
    quote:
      "Daniel is one of the sharpest minds I have worked with throughout my career. He has an incredible ability to process and absorb significant volumes of information and create innovative, lasting and scalable solutions to complex problems.",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQFLaBzS12jZsA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1677110209126?e=1778112000&v=beta&t=7BCchc8okjer9zf9xzQwXqQCIaEvB-a1ggzpJojKRlc",
  },
  {
    name: "Yasaman Ferdosi",
    title: "Productivity and Delivery Leader",
    quote:
      "Dan excels in identifying root causes and illustrating clear cause-and-effect relationships. When faced with a problem, he consistently delivers innovative and pragmatic solutions that can be effectively applied in the real world.",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQF_5LBIyYbvmw/profile-displayphoto-shrink_800_800/B4DZPXDV9_HgAc-/0/1734479799988?e=1778112000&v=beta&t=krfkD00fUsGtcclJdZhM8jTJqfyY-8JYGb_-GVfLvKU",
  },
  {
    name: "Jason Longville",
    title: "Change Manager",
    quote:
      "He is analytical but creative, determined but considered, pursuing best for business outcomes over local agendas... He encourages an open environment of honesty and accountability, leading by example rather than positional authority, but tackles the hard conversations when needed. I always appreciate his perspective on challenging issues, as he brings high IQ & EQ to the topic at hand. He has boundless energy and enthusiasm for making things better, and this has a positive ripple effect on the teams he works with.",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQED6ZAB5pOhVw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1670543384277?e=1778112000&v=beta&t=micHrDYG2D9iqhvH-vCUzvmpyfSkPGBEUjDIerghPlQ",
  },
];

export function RecommendationsCarousel() {
  const [index, setIndex] = useState(0);
  /** When true, automatic advance is off; full page load always starts playing (false). */
  const [autoAdvancePaused, setAutoAdvancePaused] = useState(false);
  const max = recommendations.length - 1;

  useEffect(() => {
    if (autoAdvancePaused) {
      return;
    }
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= max ? 0 : prev + 1));
    }, SLIDE_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [max, SLIDE_ADVANCE_MS, autoAdvancePaused]);

  const active = useMemo(() => recommendations[index], [index]);

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
          <div className="relative h-14 w-14 rounded-full border border-[#66FCF1] bg-[#0B0C10] overflow-hidden">
            <Image
              src={active.avatarUrl}
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
              const isActive = i === index;
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
