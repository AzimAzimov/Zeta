import React, { FC } from "react"

import { DOTS, IPaginationProps, usePagination } from "./_utils"

interface IPagination extends IPaginationProps {
  onPageChange: (currentPage: number) => void
}

export const Pagination: FC<IPagination> = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null
  }

  return (
    <ul className="mx-auto flex justify-center gap-2">
      {paginationRange?.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li
              key={pageNumber}
              className="h-8 w-8 cursor-default bg-none px-3 text-center text-base-500 text-secondary-light"
            >
              &#8230;
            </li>
          )
        }

        return (
          <li
            key={pageNumber}
            className={`flex h-8 w-8 items-center justify-center px-3 text-center text-sm font-medium ${
              pageNumber === currentPage
                ? "bg-primary-main text-black"
                : "cursor-pointer bg-gray-50 text-secondary-light"
            }`}
            onClick={() => onPageChange(Number(pageNumber))}
          >
            {pageNumber}
          </li>
        )
      })}
    </ul>
  )
}
