export type HeroCalloutConfig = {
  enabled: boolean;
  title: string;
  subtitle: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

export type SiteConfig = {
  heroCallout: HeroCalloutConfig;
};
