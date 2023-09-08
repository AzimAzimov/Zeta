import React, { FC } from "react"
import Image from "next/image"
import Link from "next/link"

import { ContactButtons, Navigation } from "./fragments"

export const Header: FC = () => (
  <header className="container flex max-w-[1288px] justify-between pt-[32px] xl:pt-6 sm:px-[15px] sm:pt-[15px]">
    <Link href="/" className="relative block h-[127px] w-[290px] xl:h-[48px] xl:w-[110px] sm:h-[32px] sm:w-[74px]">
      <Image src="/header-logo.png" alt="Логотип" width={290} height={127} priority />
    </Link>
    <div className="flex flex-col items-end xl:flex-row xl:items-center md:gap-[16px]">
      <ContactButtons />
      <Navigation />
    </div>
  </header>
)
