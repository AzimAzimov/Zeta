import { FC } from "react"

import { IIcon } from "@types"

interface IChecked extends IIcon {
  strokeColor: string
}

export const CheckedIcon: FC<IChecked> = ({ width = 16, height = 13, className, strokeColor }) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" className={className}>
      <path
        d="M1.1665 6.45455L5.81767 11C7.14575 9.4886 14.4998 1 14.4998 1"
        stroke={strokeColor}
        strokeWidth="1.92"
        className="h-5 w-5 xl:h-4 xl:w-4"
      />
    </svg>
  )
}
