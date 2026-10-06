"use client";

import { usePathname } from "next/navigation";
import { useCallback } from "react";

export function useActivePath(): (href: string) => boolean {
  const pathname = usePathname();
  return useCallback(
    (href: string) =>
      href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`),
    [pathname],
  );
}
