import Image from "next/image";
import { cooperativeTypesSection } from "@/config/content/home";
import { AccentText, SectionHeader } from "@/components/ui";
import type { CooperativeType } from "@/types";
import { cn } from "@/lib/cn";

function CooperativeTypeCard({ item }: { item: CooperativeType }) {
  return (
    <li className="flex h-[92px] flex-col items-center justify-center gap-[14px] overflow-hidden rounded-2xl border-[0.4px] border-brand bg-surface-card p-4 text-center transition-shadow duration-200 hover:shadow-[0_8px_24px_-12px_rgb(var(--color-brand)/0.35)] lg:h-auto lg:justify-start lg:gap-3 lg:px-6 lg:py-[14px]">
      <Image
        src={item.mobileIcon.src}
        alt={item.mobileIcon.alt}
        width={item.mobileIcon.width}
        height={item.mobileIcon.height}
        unoptimized
        className={cn("shrink-0 lg:hidden", item.mobileIconFlipped && "-scale-y-100")}
      />
      <span className="hidden h-[75px] items-center justify-center lg:flex">
        <Image
          src={item.icon.src}
          alt={item.icon.alt}
          width={item.icon.width}
          height={item.icon.height}
          unoptimized
          className="h-auto max-h-full w-auto"
        />
      </span>
      <h3 className="text-[12px] font-normal leading-[1.6] text-ink lg:text-[19px] lg:font-bold lg:leading-[32.76px]">
        {item.label}
      </h3>
    </li>
  );
}

export function CooperativeTypesSection() {
  const { title, subtitle, items } = cooperativeTypesSection;

  return (
    <section aria-labelledby="types-title" className="flex flex-col gap-5 lg:gap-[50px]">
      <SectionHeader
        title={<span id="types-title"><AccentText value={title} /></span>}
        subtitle={subtitle}
        className="gap-5 sm:gap-5 lg:gap-4"
        titleClassName="text-[28px] leading-[1.5] sm:text-[28px] lg:leading-[62.6px] lg:tracking-[-1.2px]"
        subtitleClassName="text-[16px] leading-[1.6] sm:text-[16px] lg:leading-[62.6px] lg:tracking-[-1.2px]"
      />
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-x-9 lg:gap-y-[25px]">
        {items.map((item) => (
          <CooperativeTypeCard key={item.label} item={item} />
        ))}
      </ul>
    </section>
  );
}
