import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

type ContainerProps<T extends ElementType> = {
  as?: T;
  size?: "default" | "wide";
} & Omit<ComponentPropsWithoutRef<T>, "as">;

const sizeClasses = {
  default: "max-w-container",
  wide: "max-w-wide",
} as const;

export function Container<T extends ElementType = "div">({
  as,
  size = "default",
  className,
  ...props
}: ContainerProps<T>) {
  const Component: ElementType = as ?? "div";
  return (
    <Component
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8 xl:px-0", sizeClasses[size], className)}
      {...props}
    />
  );
}
