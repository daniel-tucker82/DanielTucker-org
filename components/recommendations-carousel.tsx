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
    title: "Change Leader",
    quote:
      "He is analytical but creative, determined but considered, pursuing best for business outcomes over local agendas... He encourages an open environment of honesty and accountability, leading by example rather than positional authority, but tackles the hard conversations when needed. I always appreciate his perspective on challenging issues, as he brings high IQ & EQ to the topic at hand. He has boundless energy and enthusiasm for making things better, and this has a positive ripple effect on the teams he works with.",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQED6ZAB5pOhVw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1670543384277?e=1778112000&v=beta&t=micHrDYG2D9iqhvH-vCUzvmpyfSkPGBEUjDIerghPlQ",
  },
  {
    name: "Henry Kwong",
    title: "Delivery Manager",
    quote:
      "He continuously strives to look for ways to improve ways of working (including his own), converting his strong natural sense of \"work smarter, not harder\" into concrete outcomes that are usable and highly appreciated by the teams.",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/C4E03AQFamWRRNNQetA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516307098282?e=1778112000&v=beta&t=Y3xqwRrerzrAlDYznBe7Ia6408eEnb50imMj3wr8O9U",
  },
  {
    name: "Michael Hitchen",
    title: "Program & IT Portfolio Leader",
    quote:
      "Dan is able to operate at a high portfolio level and then dive in to the macro team level to assist when needed. He identifies issues and proposes win-win solutions to resolve them, then manages those solutions through delivery on the small and large scale. Dan has a genuine thirst for knowledge and passion for getting to the heart of an issue.",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/C5603AQF4uMpphnGRLA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1610344545816?e=1778112000&v=beta&t=odP8pVVibZoxCfZDjXDtv9QfeX7kVDPrbGFZ-OzjUMk",
  },
  {
    name: "Duncan O'Brien",
    title: "Delivery and Project Manager",
    quote:
      "He is a natural leader and problem solver, and his dedication to process development and continuous improvement has left a lasting impression. I highly recommend Daniel to anyone seeking a leader who combines strategic vision, technical expertise, and a genuine commitment to team success.",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/C4D03AQErkCM4gGke7g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517617896077?e=1778112000&v=beta&t=IoXujdlO4s4whjvIrgyMLKyy9gOh-yFfXZgX0gFLaBM",
  },
  {
    name: "Viviana Capote",
    title: "Software Engineer",
    quote:
      "Daniel Tucker is by far one of the best project manager's I have had the pleasure to work with. He is energetic, pro-active, and takes the time to understand the needs of the team and works with them to set expectations and manage the project accordingly.",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/C5603AQHRNGWjp06GpQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1603000341803?e=1778112000&v=beta&t=uaEQkej-rEcMVd2BPNxYaGRkMrkLPq5spktaQo6zseg",
  },
  {
    name: "Shani de Leeuw",
    title: "Project Engineer",
    quote:
      "When I think of Daniel the phrase \"gets things done\" comes to mind.",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/C5603AQFv434o_MewIQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517524620485?e=1778112000&v=beta&t=3SKMzVrzuTVUhAC4xXFNQjav138i0lNvzVGEr11scbw",
  },
  {
    name: "Matthew Roberts",
    title: "Head of Engineering Operations",
    quote:
      "Dan has a natural flare for improving business practices, process and overall performance, as well as the ability to deliver complex projects, bids and business growth.",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQF251x6fkszng/profile-displayphoto-shrink_800_800/B56ZRaU9euG8Ac-/0/1736682233287?e=1778112000&v=beta&t=sj-djuiQBWUqlaWGKUu_6V1nsNgc3zdWC8ncbNUcos0",
  },
  {
    name: "Meagan Hungerford",
    title: "Engineering & Design Specialist",
    quote:
      "Time spent engaged with Dan was always informative, reflective and working with him on problems or talking through ideas ultimately helped shape the professional path that I would later follow.",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQG9FB-8ZJCRPg/profile-displayphoto-crop_800_800/B56ZrZg2csI0AI-/0/1764585860321?e=1778112000&v=beta&t=UDfptxMQphZlPzabHAa8PsBRdNkZZvJSOaVHHCAhKvY",
  },
  {
    name: "Mike Rigby",
    title: "Engineering Executive",
    quote:
      "Dan has a knack for identifying opportunities to introduce innovation into the workplace and simplifying historically complex activities... Dan takes the initiative to introduce new technologies and smarter ways of working in order to stream line processes, improve reporting, allow for better data interrogation and to reduce program costs through solutions that make it easier for project managers and engineers to focus on delivering quality solutions and outcomes.",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQH8WVCQeDYmQQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696811142072?e=1778112000&v=beta&t=N6u2FE2Ns0IdGpazzEVUsIIuIwK1Mnel9-TdA7SZJ-k",
  },
  {
    name: "Aaron Sirimanotham",
    title: "Digital Projects Manager",
    quote:
      "Above all Daniel always strives for continuous improvement through innovation which sets him apart from others.",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/C4E03AQHmUOzuPtcEsw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517534925911?e=1778112000&v=beta&t=9AvRIHeyjGXl70LWcS3L7QacaHbpjEXhZ2ddV1OpuGM",
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
    const timer = setTimeout(() => {
      setIndex((prev) => (prev >= max ? 0 : prev + 1));
    }, SLIDE_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [index, max, autoAdvancePaused]);

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
