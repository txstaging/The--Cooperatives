import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "start";
  as?: "h1" | "h2";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  as: Heading = "h2",
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-2 sm:gap-4",
        align === "center" ? "items-center text-center" : "items-start text-start",
        className,
      )}
    >
      <Heading
        className={cn(
          "text-[30px] font-bold leading-[1.4] text-ink sm:text-[40px] lg:text-heading lg:leading-[1.6]",
          titleClassName,
        )}
      >
        {title}
      </Heading>
      {subtitle ? (
        <p
          className={cn(
            "text-body-lg text-content-secondary sm:text-[20px] lg:text-title",
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
