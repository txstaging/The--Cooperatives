import type { ComponentProps } from "react";
import { SectionHeader } from "@/components/ui";
import { cn } from "@/lib/cn";

type SectionHeadingProps = ComponentProps<typeof SectionHeader>;

/** The subscription page uses a tighter 36px section title than the rest of the site. */
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
        "text-[28px] leading-[1.3] text-content-primary sm:text-[36px] sm:leading-[1.25] lg:text-[36px] lg:leading-[1.25]",
        titleClassName,
      )}
      subtitleClassName={cn("leading-[1.5] lg:leading-[1.5]", subtitleClassName)}
      {...props}
    />
  );
}
