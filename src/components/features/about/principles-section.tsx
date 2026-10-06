import { principlesSection } from "@/config/content/about";
import { SectionHeader } from "@/components/ui";
import type { Principle } from "@/types";
import { cn } from "@/lib/cn";

const symbolSizeClasses: Record<Principle["symbolSize"], string> = {
  sm: "text-[32px] lg:text-symbol-sm",
  md: "text-[32px] lg:text-[35px]",
  lg: "text-[54px] lg:text-numeral",
};

export function PrinciplesSection() {
  const { title, items } = principlesSection;

  return (
    <section aria-labelledby="principles-title" className="flex flex-col gap-6 lg:gap-[30px]">
      <SectionHeader
        title={<span id="principles-title">{title}</span>}
        align="start"
        className="items-center text-center lg:items-start lg:py-[10px] lg:text-start"
        titleClassName="text-[24px] leading-[1.6] sm:text-[24px] lg:leading-[56.64px] lg:tracking-[-1.2px]"
      />
      <ul className="flex flex-col gap-3 lg:grid lg:grid-cols-5">
        {items.map((principle) => (
          <li
            key={principle.label}
            className="flex h-[90px] items-center rounded-lg border border-line bg-surface-card px-6 lg:h-auto lg:min-h-[128.7px] lg:flex-col lg:justify-center lg:border-thin lg:p-[25px] lg:text-center"
          >
            <span
              aria-hidden="true"
              className={cn(
                "flex w-[46px] shrink-0 items-center justify-center font-bold leading-none text-brand lg:h-[43.75px] lg:w-auto",
                symbolSizeClasses[principle.symbolSize],
              )}
            >
              {principle.symbol}
            </span>
            <h3 className="flex-1 text-[15px] font-bold leading-[1.6] text-ink lg:flex-none lg:pt-[10px] lg:text-label-sm">
              {principle.label}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
