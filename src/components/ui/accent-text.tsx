import type { AccentText as AccentTextData } from "@/types";
import { cn } from "@/lib/cn";

interface AccentTextProps {
  value: AccentTextData;
  accentClassName?: string;
}

export function AccentText({ value, accentClassName = "text-brand" }: AccentTextProps) {
  return (
    <>
      {value.text}
      {value.accent ? <span className={cn(accentClassName)}>{value.accent}</span> : null}
    </>
  );
}
