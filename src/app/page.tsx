import { Container } from "@/components/ui";
import {
  ChallengesSection,
  CooperativeTypesSection,
  GrowthSection,
  HomeHero,
  JourneySection,
  StatsStrip,
} from "@/components/features/home";
import { CtaBanner } from "@/components/features/shared";

export default function HomePage() {
  return (
    // Mobile frame: 36px top, 36px hero-to-stats, then 48px between every block.
    <div className="pb-12 pt-9 lg:pb-[200px] lg:pt-[75px]">
      <HomeHero />
      <div className="mt-9 lg:mt-[44px]">
        <StatsStrip />
      </div>
      <Container className="flex flex-col gap-12 pt-12 lg:gap-[197px] lg:pt-[135px]">
        <div className="flex flex-col gap-12 lg:gap-[133px]">
          <ChallengesSection />
          <GrowthSection />
        </div>
        <JourneySection />
        <CooperativeTypesSection />
        <div className="lg:pt-[18px]">
          <CtaBanner mobileSize="compact" />
        </div>
      </Container>
    </div>
  );
}
