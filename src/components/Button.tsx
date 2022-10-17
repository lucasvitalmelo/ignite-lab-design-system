import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonPorps {
  children: ReactNode
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonPorps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={clsx(
        "text-gray-100 font-sans",

      )}>{children}</Comp>
  )
}