"use client";

import { usePathname } from "next/navigation";
import { useCallback } from "react";

/** Returns a predicate telling whether a nav href matches the current route. */
export function useActivePath(): (href: string) => boolean {
  const pathname = usePathname();
  return useCallback(
    (href: string) =>
      href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`),
    [pathname],
  );
}
