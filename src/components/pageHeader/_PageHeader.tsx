import React, { FC } from "react"

import { styles } from "./_styles"

interface IPageHeader {
  title: string
  className?: string
  bgPrimary?: boolean
  bgSecondary?: boolean
}

export const PageHeader: FC<IPageHeader> = ({ title, className = "", bgPrimary = true, bgSecondary }) => {
  const { header, headerPseudoEl } = styles
  const currentBg: string = bgSecondary
    ? "bg-[url('/page-header-bg-secondary.jpg')]"
    : bgPrimary
    ? "bg-[url('/page-header-bg-primary.jpg')]"
    : ""
  return <h1 className={`${header} ${headerPseudoEl} ${currentBg} ${className}`}>{title}</h1>
}
