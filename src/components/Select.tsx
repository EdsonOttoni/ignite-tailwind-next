'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

export interface SelectProps {
  text?: string
}

export function Select(props: SelectProps) {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="py2 flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 shadow-sm data-[placeholder]:text-zinc-600">
        <SelectPrimitive.Value
          placeholder="Select a country..."
          className="text-black"
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className="z-10 w-[--radix-select-trigger-width] rounded-lg border border-zinc-200 bg-white"
          side="bottom"
          position="popper"
          sideOffset={8}
        >
          <SelectPrimitive.Viewport>
            <SelectPrimitive.Item
              value="br"
              className="flex items-center gap-2 px-3 py-2.5"
            >
              <SelectPrimitive.ItemText className="text-black">
                Brazil
              </SelectPrimitive.ItemText>
            </SelectPrimitive.Item>
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
