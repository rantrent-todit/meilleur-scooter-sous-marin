export interface SiteConfig {
  siteName: string;
  siteDomain: string;
  tagline: string;
  description: string;
  contactEmail: string;
  // Métadonnées SEO prioritaires (optimisation mot-clé "Meilleur", sans branding)
  primaryKeyword?: string;
  homeSeoTitle?: string;
  homeH1?: string;
  homeTagline?: string;
  homeDescription?: string;
  affiliate: {
    amazonTag: string;
    disclaimer: string;
  };
  theme: {
    primaryColor: string;
    primaryHoverColor: string;
    accentColor: string;
  };
}

export const siteConfig: SiteConfig = {
  siteName: "AquaPropulse",
  siteDomain: "https://meilleur-scooter-sous-marin.fr",
  tagline: "Le comparatif indépendant des meilleurs scooters et propulseurs sous-marins",
  description: "Comparez les meilleurs scooters sous-marins : tests, avis d'experts, puissance et autonomie pour choisir le propulseur aquatique idéal au meilleur prix.",
  contactEmail: "contact@meilleur-scooter-sous-marin.fr",
  primaryKeyword: "Meilleur scooter sous marin",
  homeSeoTitle: "Meilleur scooter sous marin : Comparatif, Tests & Guide",
  homeH1: "Meilleur scooter sous marin",
  homeTagline: "Le comparatif indépendant des meilleurs scooters et propulseurs sous-marins",
  homeDescription: "Comparez les meilleurs scooters sous-marins : tests, avis d'experts, puissance et autonomie pour choisir le propulseur aquatique idéal au meilleur prix.",
  affiliate: {
    amazonTag: "amazonwp0b-21",
    disclaimer: "En tant que Partenaire Amazon, ce site réalise un bénéfice sur les achats remplissant les conditions requises."
  },
  theme: {
    primaryColor: "#0369a1",
    primaryHoverColor: "#075985",
    accentColor: "#f97316"
  }
};
