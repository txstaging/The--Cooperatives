import { homeStats } from "@/config/content/home";
import { cn } from "@/lib/cn";

export function StatsStrip() {
  const lastIndex = homeStats.length - 1;

  return (
    <section aria-label="أرقام المنظومة" className="lg:border-y lg:border-line">
      <dl className="mx-auto grid max-w-container grid-cols-2 lg:flex lg:justify-center lg:gap-[34px]">
        {homeStats.map((stat, i) => (
          <div
            key={stat.value}
            className={cn(
              // Mobile 2×2 grid: 150px cells, each outlined at 0.5px (1px where two meet).
              "flex h-[150px] flex-col items-center justify-center gap-[3px] border-hairline border-line px-2 py-[22px] text-center",
              "lg:h-[189px] lg:max-w-[286px] lg:flex-1 lg:justify-start lg:gap-0 lg:border-0 lg:px-[25px] lg:py-[35px]",
              // Desktop row: divider after every cell except the last.
              i !== lastIndex && "lg:border-l",
            )}
          >
            <dt className="order-2 flex flex-col">
              <span className="text-[14px] font-bold leading-[1.6] text-ink lg:text-body-lg lg:leading-[22.75px]">
                {stat.label}
              </span>
              <span className="pt-[3px] text-[12px] leading-[1.6] text-content-secondary lg:pt-[5px] lg:text-[14px] lg:leading-[17.5px] lg:text-content-muted">
                {stat.caption}
              </span>
            </dt>
            {/* Visually first, but after <dt> in the DOM as <dl> requires. */}
            <dd dir="ltr" className="order-1 text-[24px] font-bold leading-[1.6] text-footer lg:text-stat lg:text-brand-deep">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
