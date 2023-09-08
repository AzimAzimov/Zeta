import { FC } from "react"

import { IIcon } from "@types"

export const DirectionRightIcon: FC<IIcon> = ({ width = 27, height = 13, className }) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={className}>
      <path d="M20.0163 4.875H0.5V8.125H20.0163V13L26.5 6.5L20.0163 0V4.875Z" />
    </svg>
  )
}
