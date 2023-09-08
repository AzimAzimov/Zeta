import { FC } from "react"

import { IIcon } from "@types"

export const PhoneIcon: FC<IIcon> = ({ width = 24, height = 24, className }) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-label="Телефон" className={className}>
      <path d="M7.12 10.79C8.56 13.62 10.88 15.93 13.71 17.38L15.91 15.18C16.18 14.91 16.58 14.82 16.93 14.94C18.05 15.31 19.26 15.51 20.5 15.51C21.05 15.51 21.5 15.96 21.5 16.51V20C21.5 20.55 21.05 21 20.5 21C11.11 21 3.5 13.39 3.5 4C3.5 3.45 3.95 3 4.5 3H8C8.55 3 9 3.45 9 4C9 5.25 9.2 6.45 9.57 7.57C9.68 7.92 9.6 8.31 9.32 8.59L7.12 10.79Z" />
    </svg>
  )
}
