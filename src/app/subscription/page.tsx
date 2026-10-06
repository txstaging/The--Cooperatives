import type { Metadata } from "next";
import {
  BenefitsSection,
  ComparisonSection,
  FaqSection,
  JoinBanner,
  JoiningStepsSection,
  PlansSection,
  SubscriptionHero,
  TrustSection,
} from "@/components/features/subscription";

export const metadata: Metadata = {
  title: "الاشتراك",
  description:
    "حلول وبرامج وخدمات مصممة لتلبية احتياجات التعاونيات وأصحاب المشروعات الصغيرة وأصحاب الأموال والشركاء.",
};

export default function SubscriptionPage() {
  return (
    <>
      <SubscriptionHero />
      <PlansSection />
      <ComparisonSection />
      <BenefitsSection />
      <JoiningStepsSection />
      <TrustSection />
      <FaqSection />
      <JoinBanner />
    </>
  );
}
