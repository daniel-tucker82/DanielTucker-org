"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const recommendations = [
  {
    name: "John Smith",
    title: "CEO",
    quote:
      "He rebuilt our delivery architecture in four weeks and gave us a leadership cadence we could finally trust.",
    avatarUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Sarah Chen",
    title: "COO",
    quote:
      "Daniel creates clean operational logic and gets adoption across teams without adding ritual for ritual's sake.",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Mike Ross",
    title: "Engineering Lead",
    quote:
      "He bridges technical constraints and executive priorities better than anyone I've worked with.",
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80",
  },
];

export function RecommendationsCarousel() {
  const [index, setIndex] = useState(0);
  const max = recommendations.length - 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= max ? 0 : prev + 1));
    }, 3600);
    return () => clearInterval(timer);
  }, [max]);

  const active = useMemo(() => recommendations[index], [index]);

  return (
    <div className="border border-[#66FCF1]/25 bg-[#0B0C10] px-0 py-0">
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
        <div className="flex gap-2">
          {recommendations.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2.5 w-8 rounded-none border ${
                i === index ? "border-[#66FCF1] bg-[#66FCF1]" : "border-[#66FCF1]/35"
              }`}
              aria-label={`Show recommendation from ${item.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
