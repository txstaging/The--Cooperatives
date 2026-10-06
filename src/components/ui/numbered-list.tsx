import type { Step } from "@/types";
import { cn } from "@/lib/cn";

interface NumberedListProps {
  items: readonly Step[];
  /** Draw a divider above the first item (desktop). */
  bordered?: boolean;
  /** Draw a divider below the last item (desktop; mobile always closes the list). */
  closed?: boolean;
  /** Pass the mobile gap between items here, e.g. `gap-5`. */
  className?: string;
}

/** Vertical list of numbered steps separated by hairline dividers. */
export function NumberedList({ items, bordered = false, closed = true, className }: NumberedListProps) {
  return (
    <ol
      className={cn(
        "flex w-full flex-col lg:block",
        bordered && "lg:border-t-thin lg:border-brand-deep/20",
        className,
      )}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <li
            key={item.index}
            className={cn(
              "flex items-start gap-[14px] border-b border-line py-4 lg:min-h-[88.4px] lg:gap-5 lg:pb-4 lg:pt-[19.7px]",
              !isLast || closed ? "lg:border-b-thin lg:border-brand-deep/20" : "lg:border-b-0",
            )}
          >
            <span className="shrink-0 text-[14px] font-bold leading-[1.8] text-footer lg:w-[18px] lg:text-[16px] lg:leading-[28px] lg:text-ink-soft">
              {item.index}
            </span>
            <span className="flex flex-col gap-[3px] lg:gap-0">
              <span className="text-[18px] font-bold leading-[1.6] text-ink lg:text-body-lg lg:text-content-primary">
                {item.title}
              </span>
              <span className="text-[15px] leading-[1.6] text-content-secondary lg:text-[16px] lg:leading-[19.25px]">
                {item.description}
              </span>
            </span>
          </li>
        );
      })}
    </ol>
  );
}
