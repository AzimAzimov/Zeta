import React, { FC } from "react"

import { AncillaryFooter, Footer, Header, OrderButtons, Sidebar } from "./fragments"

interface ILayout {
  children: JSX.Element
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="relative mx-auto flex max-w-[1288px] justify-end gap-5 px-[24px] xl:block xl:gap-0 xl:p-0">
        <Sidebar />
        <div className="w-full xl:px-6 md:px-0">
          {children}
          <AncillaryFooter />
        </div>
        <OrderButtons />
      </div>
      <Footer />
    </>
  )
}
