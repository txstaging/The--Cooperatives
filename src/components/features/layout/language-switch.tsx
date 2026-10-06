import { cn } from "@/lib/cn";

interface LanguageSwitchProps {
  className?: string;
}

/**
 * Locale toggle placeholder. Wire this to the i18n router once an English
 * locale exists; it is a button so it never links to a missing page.
 */
export function LanguageSwitch({ className }: LanguageSwitchProps) {
  return (
    <button
      type="button"
      lang="en"
      aria-label="Switch to English"
      className={cn(
        "text-[12px] font-bold leading-[21px] text-ink transition-colors hover:text-brand",
        className,
      )}
    >
      EN
    </button>
  );
}
