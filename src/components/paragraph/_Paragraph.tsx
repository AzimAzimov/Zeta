import React, { FC, HTMLAttributes } from "react"

type TagType = "p" | "span"
type ParagraphType = HTMLAttributes<HTMLParagraphElement>
type SpanType = HTMLAttributes<HTMLSpanElement>

type TParagraph = (ParagraphType | SpanType) & {
  tag?: TagType
  variant?: "normal" | "bold"
  marker?: boolean
}
export const Paragraph: FC<TParagraph> = ({ tag = "p", variant = "normal", marker, className, children, ...props }) => {
  const Tag = tag as TagType
  return (
    <Tag
      {...props}
      className={`${variant === "normal" ? "text-base md:text-sm" : "text-base-400 md:text-base-400"} ${
        marker ? "marker-rounded-fill before:rounded-sm" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
