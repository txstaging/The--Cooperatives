import type { AccentText as AccentTextData } from "@/types";
import { cn } from "@/lib/cn";

interface AccentTextProps {
  value: AccentTextData;
  accentClassName?: string;
}

/** Renders a phrase whose trailing part is highlighted in an accent color. */
export function AccentText({ value, accentClassName = "text-brand" }: AccentTextProps) {
  return (
    <>
      {value.text}
      {value.accent ? <span className={cn(accentClassName)}>{value.accent}</span> : null}
    </>
  );
}
