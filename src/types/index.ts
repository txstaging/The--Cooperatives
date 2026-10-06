export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: readonly NavLink[];
  /** The mobile design leaves this column out. */
  desktopOnly?: boolean;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * A heading split into a plain part and an accent-colored part, e.g.
 * "معًا نبني تعاونيات " + "أقوى".
 */
export interface AccentText {
  text: string;
  accent?: string;
}

export interface Stat {
  value: string;
  label: string;
  caption: string;
}

export interface Challenge {
  index: string;
  title: string;
  description: string;
}

export interface Step {
  index: string;
  title: string;
  description: string;
}

export interface CooperativeType {
  label: string;
  icon: ImageAsset;
  /** The mobile frame uses its own, smaller exports. */
  mobileIcon: ImageAsset;
  mobileIconFlipped?: boolean;
}

export interface Principle {
  label: string;
  symbol: string;
  /** Glyph size differs per symbol to keep them optically balanced. */
  symbolSize: "sm" | "md" | "lg";
}

export interface PurposeStatement {
  eyebrow: string;
  title: string;
  description: string;
}

export interface VisionPillar {
  index: string;
  title: string;
  description: string;
}

export interface CallToAction {
  label: string;
  href: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  /** `mailto:` / `tel:` link for actionable details. */
  href?: string;
  /** Latin values (email, phone) must render left-to-right inside the RTL page. */
  dir?: "ltr";
}

export interface ContactFormField {
  name: string;
  label: string;
}

export interface PlanAction extends CallToAction {
  variant: "primary" | "outline";
}

export interface Plan {
  id: "basic" | "growth" | "partnership";
  name: string;
  /** Small label above the name; the recommended plan shows `badge` instead. */
  eyebrow?: string;
  badge?: string;
  description: string;
  features: readonly string[];
  actions: readonly PlanAction[];
  recommended?: boolean;
}

export interface PlanComparisonRow {
  feature: string;
  /** Availability per plan, in the same order as the plans list. */
  availability: readonly [boolean, boolean, boolean];
}

export interface IconFeature {
  title: string;
  description?: string;
  icon: ImageAsset;
}

export interface FaqItem {
  question: string;
  answer: string;
}
