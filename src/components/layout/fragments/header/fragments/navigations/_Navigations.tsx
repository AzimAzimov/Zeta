import React, { FC, memo, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import { ModalForm } from "@components"
import { useToggle, useWindowWidth } from "@utils"

import { headerNavLinks } from "./_constants"
import { styles } from "./_styles"

export const Navigation: FC = memo(() => {
  const { route } = useRouter()

  const windowWidth = useWindowWidth()

  const [isOpenMenu, setOpenMenu] = useState(false)
  const [isOpenModal, toggleOpenModal] = useToggle(false)

  const { navMenuLines, navMenuButton, navContainer, navContainerVisible, navList, navLink, navLinkActive, orderBtn } =
    styles

  function toggleOpenMenu() {
    windowWidth < 1280 && setOpenMenu((prevState) => !prevState)
  }

  useEffect(() => {
    document.body.style.overflow = isOpenMenu && windowWidth < 1280 ? "hidden" : "unset"
  }, [isOpenMenu, windowWidth])

  return (
    <div className="mt-[45px] flex items-center xl:mt-0 xl:gap-[20px]">
      <nav aria-label="header">
        <button
          className={`${navMenuButton} ${isOpenMenu ? "shadow-none" : ""}`}
          onClick={toggleOpenMenu}
          aria-label="Меню"
        >
          <span className={`${navMenuLines} ${isOpenMenu ? "translate-y-[7px] rotate-45 md:translate-y-[4px]" : ""}`} />
          <span className={`${navMenuLines} ${isOpenMenu ? "opacity-0" : ""}`} />
          <span
            className={`${navMenuLines} ${isOpenMenu ? "-translate-y-[7px] -rotate-45 md:-translate-y-[4px]" : ""}`}
          />
        </button>
        <ul
          onClick={toggleOpenMenu}
          className={`${navContainer} ${isOpenMenu ? navContainerVisible : "xl:-right-[100%] xl:w-0"}`}
        >
          {headerNavLinks.map(({ url, title }) => (
            <li key={url} className={navList}>
              <Link
                href={url}
                className={`${navLink} ${url === route ? navLinkActive : "text-gray-300"}`}
                children={title}
              />
            </li>
          ))}
        </ul>
      </nav>
      <button className={orderBtn} onClick={toggleOpenModal} aria-label="Заказать">
        Заказать
      </button>
      <ModalForm isOpenModal={isOpenModal} toggleOpenModal={toggleOpenModal} />
    </div>
  )
})

Navigation.displayName = "Navigation"
