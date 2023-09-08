import React, { FC } from "react"

import { SidebarSlider } from "@components"
import { useWindowWidth } from "@utils"

import { Categories } from "./fragments"

export const Sidebar: FC = () => {
  const windowWidth = useWindowWidth()

  return (
    <aside className="z-10 mt-4 max-w-[295px] bg-secondary-main xl:container xl:mt-[37px] xl:max-w-full xl:bg-[transparent] xl:px-[24px] md:mt-4 md:px-[15px]">
      <Categories />
      {windowWidth > 1279 && <SidebarSlider />}
    </aside>
  )
}
