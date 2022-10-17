import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface HeadingPorps {
  size?: "sm" | "md" | "lg",
  children: ReactNode
  asChild?: boolean;
}

export function Heading({ size = "md", children, asChild }: HeadingPorps) {
  const Comp = asChild ? Slot : "h2"

  return (
    <Comp
      className={clsx(
        "text-gray-100 font-bold font-sans",
        {
          "text-xs": size === 'sm',
          "text-md": size === 'md',
          "text-lg": size === 'lg'
        }
      )}>{children}</Comp>
  )
}