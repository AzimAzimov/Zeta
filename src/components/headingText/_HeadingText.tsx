import React, { FC, HTMLAttributes } from "react"

type TagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
type HeadingType = HTMLAttributes<HTMLHeadingElement>
type ParagraphType = HTMLAttributes<HTMLParagraphElement>
type SpanType = HTMLAttributes<HTMLSpanElement>

type THeadingText = (HeadingType | ParagraphType | SpanType) & {
  tag?: TagType
  variant?: "main" | "secondary"
}
export const HeadingText: FC<THeadingText> = ({ tag = "h2", variant = "main", className, children, ...props }) => {
  const Tag = tag as TagType
  return (
    <div className={`flex w-full items-center ${variant === "main" ? "gap-4 overflow-hidden pl-5 md:pl-[15px]" : ""} `}>
      <Tag
        {...props}
        className={`${variant === "main" ? "text-lg" : "text-xl lg:text-lg md:text-base-500"} ${className}`}
      >
        {children}
      </Tag>
      {variant === "main" && <span className="h-[3px] min-w-[10%] flex-1 bg-primary-main" />}
    </div>
  )
}
