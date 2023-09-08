import React, { FC } from "react"
import Link from "next/link"

type CrumbItem = {
  label: string
  path?: string
}

interface IBreadcrumbs {
  items: CrumbItem[]
}

export const Breadcrumbs: FC<IBreadcrumbs> = ({ items }) => {
  return (
    <nav aria-label="breadcrumbs">
      <ol className="mt-[35px] flex flex-wrap gap-2 md:mt-4 md:px-[15px]">
        <li className="text-sm-400 text-secondary-light hover:text-primary-main">
          <Link href="/">Главная</Link>
        </li>
        {items.map(({ label, path }, index) => (
          <li
            className="relative flex items-center pl-3 text-sm-400 text-secondary-light before:absolute before:left-0 before:flex before:h-1 before:w-1 before:rounded-full before:bg-secondary-light hover:text-primary-main hover:before:bg-primary-main"
            key={index}
          >
            {path ? <Link href={path}>{label}</Link> : label}
          </li>
        ))}
      </ol>
    </nav>
  )
}
