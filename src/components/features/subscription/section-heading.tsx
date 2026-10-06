import type { ComponentProps } from "react";
import { SectionHeader } from "@/components/ui";
import { cn } from "@/lib/cn";

type SectionHeadingProps = ComponentProps<typeof SectionHeader>;

/**
 * The subscription page uses a tighter section title than the rest of the site:
 * 28px ink with an 18px subtle subtitle on mobile, 36px on desktop.
 */
export function SectionHeading({
  align = "start",
  className,
  titleClassName,
  subtitleClassName,
  ...props
}: SectionHeadingProps) {
  return (
    <SectionHeader
      align={align}
      className={cn("sm:gap-2", className)}
      titleClassName={cn(
        "text-[28px] leading-[1.25] text-ink sm:text-[28px] lg:text-[36px] lg:leading-[1.25] lg:text-content-primary",
        titleClassName,
      )}
      subtitleClassName={cn(
        "text-[18px] leading-[1.5] text-content-subtle sm:text-[18px] lg:leading-[1.5] lg:text-content-secondary",
        subtitleClassName,
      )}
      {...props}
    />
  );
}
