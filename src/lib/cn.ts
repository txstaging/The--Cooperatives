import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge must know the custom tokens from `tailwind.config.ts`;
 * otherwise it treats e.g. `text-body-lg` or `border-thin` as colors and
 * drops them (or the real color class) as "conflicts".
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "caption",
            "label-xs",
            "label-sm",
            "body-sm",
            "body",
            "body-lg",
            "title-sm",
            "title",
            "symbol-sm",
            "heading-sm",
            "heading-md",
            "stat",
            "heading",
            "cta",
            "display",
            "display-lg",
            "numeral",
          ],
        },
      ],
      "border-w": [{ border: ["thin", "hairline"] }],
      "border-w-x": [{ "border-x": ["thin", "hairline"] }],
      "border-w-y": [{ "border-y": ["thin", "hairline"] }],
      "border-w-t": [{ "border-t": ["thin", "hairline"] }],
      "border-w-r": [{ "border-r": ["thin", "hairline"] }],
      "border-w-b": [{ "border-b": ["thin", "hairline"] }],
      "border-w-l": [{ "border-l": ["thin", "hairline"] }],
      "border-w-s": [{ "border-s": ["thin", "hairline"] }],
      "border-w-e": [{ "border-e": ["thin", "hairline"] }],
    },
  },
});

/** Merge conditional class names and resolve Tailwind conflicts. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
