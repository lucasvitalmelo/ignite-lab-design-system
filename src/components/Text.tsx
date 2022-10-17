import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface TextPorps {
  size?: "sm" | "md" | "lg",
  children: ReactNode
  asChild?: boolean;
}

export function Text({ size = "md", children, asChild }: TextPorps) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      className={clsx(
        "text-gray-100 font-sans",
        {
          "text-xs": size === 'sm',
          "text-md": size === 'md',
          "text-lg": size === 'lg'
        }
      )}>{children}</Comp>
  )
}