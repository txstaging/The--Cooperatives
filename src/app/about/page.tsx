import type { Metadata } from "next";
import { Container } from "@/components/ui";
import {
  AboutHero,
  PrinciplesSection,
  PurposeSection,
  Vision2030Section,
} from "@/components/features/about";
import { CtaBanner } from "@/components/features/shared";

export const metadata: Metadata = {
  title: "عن التعاونيات",
  description:
    "جمعية تعمل على تمكين التعاونيات وأصحاب المشروعات الصغيرة من خلال حلول وبرامج تساعدهم على تطوير أعمالهم.",
};

export default function AboutPage() {
  return (
    // Mobile frame: 36px top, 40px under the hero, then 48px between every block.
    <Container className="flex flex-col gap-12 pb-12 pt-9 lg:gap-[123px] lg:pb-[148px] lg:pt-[94px]">
      <AboutHero />
      <div className="-mt-2 lg:mt-0">
        <PurposeSection />
      </div>
      <div className="lg:pt-[44px]">
        <PrinciplesSection />
      </div>
      {/* Vision box and CTA are 1267px wide in Figma — 13.5px wider than the
          container on each side — once the viewport has room for it. */}
      <div className="lg:pt-[82px] xl:-mx-[13.5px]">
        <Vision2030Section />
      </div>
      <div className="xl:-mx-[13.5px]">
        <CtaBanner />
      </div>
    </Container>
  );
}
