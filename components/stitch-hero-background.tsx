/** Hero background layers shared with /about pages (teal base + radial glow + kinetic). */
export function StitchHeroBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 35%, rgba(85, 250, 233, 0.45) 0%, transparent 50%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-kinetic opacity-60" />
    </>
  );
}

export const stitchPageHeroSectionClass =
  "relative overflow-hidden border-b border-outline-variant/10 bg-gradient-to-br from-[#003732] via-[#005049] to-surface-dim";
