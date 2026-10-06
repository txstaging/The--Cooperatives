import { challengesSection } from "@/config/content/home";
import { AccentText, SectionHeader } from "@/components/ui";
import type { Challenge } from "@/types";

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  return (
    <li className="relative flex flex-col gap-2 overflow-hidden rounded-4xl border-hairline border-brand-deep/[0.37] bg-surface-card p-[22px] lg:block lg:min-h-[168px] lg:pb-[70px] lg:pe-[16.5px] lg:ps-[24.5px] lg:pt-[21.5px]">
      <h3 className="text-[16px] font-bold leading-[1.6] text-ink lg:text-title-sm lg:text-content-primary">
        {challenge.title}
      </h3>
      <p className="text-[12px] leading-[1.6] text-content-primary lg:pt-px lg:text-label-xs">{challenge.description}</p>
      <span
        aria-hidden="true"
        className="text-outline h-[18px] select-none text-end text-[24px] font-extrabold leading-[1.1] lg:absolute lg:-bottom-[6px] lg:end-[16.5px] lg:h-auto lg:text-numeral"
      >
        {challenge.index}
      </span>
    </li>
  );
}

export function ChallengesSection() {
  const { title, subtitle, items } = challengesSection;

  return (
    <section aria-labelledby="challenges-title" className="flex flex-col items-center gap-6 lg:gap-10">
      <SectionHeader
        title={<span id="challenges-title"><AccentText value={title} /></span>}
        subtitle={subtitle}
        className="gap-6 sm:gap-6 lg:gap-4"
        titleClassName="text-[23px] leading-[1.5] sm:text-[23px]"
        subtitleClassName="text-[16px] leading-[1.6] sm:text-[16px]"
      />
      <ol className="grid w-full grid-cols-1 gap-[14px] lg:grid-cols-4 lg:gap-[31px]">
        {items.map((challenge) => (
          <ChallengeCard key={challenge.index} challenge={challenge} />
        ))}
      </ol>
    </section>
  );
}
