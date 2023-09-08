import { FC, useEffect } from "react"

import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import { ComponentOptionsType } from "@fancyapps/ui/types/Fancybox/options"

import "@fancyapps/ui/dist/fancybox/fancybox.css"

interface IFancybox {
  options: Partial<ComponentOptionsType>
  children: JSX.Element
}

export const Fancybox: FC<IFancybox> = ({ options, children }) => {
  useEffect(() => {
    const option = options || {}

    NativeFancybox.bind("[data-fancybox]", option)

    return () => {
      NativeFancybox.destroy()
    }
  }, [options])

  return <>{children}</>
}
