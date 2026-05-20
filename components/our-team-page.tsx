import { RecommendationsCarousel } from "@/components/recommendations-carousel";
import { TeamProfileExperience } from "@/components/team-profile-experience";
import { applyOurTeamHero, applyOurTeamTail } from "@/lib/page-content/our-team";
import { loadStitchTemplate } from "@/lib/stitch-templates";
import { splitMainAtMarker } from "@/lib/stitch-templates/split-main";

const CAROUSEL_MARKER = "<!-- Profile Carousel Section -->";
const CTA_MARKER = "<!-- CTA Section -->";

export async function OurTeamPage() {
  const base = await loadStitchTemplate("team");
  const [heroPart, rest] = splitMainAtMarker(base.mainHtml, CAROUSEL_MARKER);
  const ctaIndex = rest.indexOf(CTA_MARKER);
  const tailPart = ctaIndex === -1 ? "" : rest.slice(ctaIndex);

  const heroHtml = applyOurTeamHero(heroPart);
  const tailHtml = applyOurTeamTail(tailPart);

  return (
    <div className="stitch-template-root">
      {base.styleCss ? (
        <style dangerouslySetInnerHTML={{ __html: base.styleCss }} />
      ) : null}
      <div className="stitch-template-main font-body-md text-on-surface">
        <div dangerouslySetInnerHTML={{ __html: heroHtml }} />
        <TeamProfileExperience />
        <div dangerouslySetInnerHTML={{ __html: tailHtml }} />
      </div>
      <section className="border-t border-outline-variant/20 bg-surface-container-lowest py-24">
        <div className="mx-auto max-w-max-width px-gutter">
          <RecommendationsCarousel />
        </div>
      </section>
    </div>
  );
}
