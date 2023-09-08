import React, { FC, ReactNode } from "react"

interface ITemplate {
  equipmentImage: JSX.Element
  children: ReactNode
  characteristics?: { param: string; value?: string }[]
  analogues?: string[]
  imageChildren?: ReactNode
  className?: string
}

export const Template: FC<ITemplate> = ({
  equipmentImage,
  children,
  characteristics,
  analogues,
  imageChildren,
  className = "",
}) => {
  return (
    <div className="flex h-auto bg-secondary-main pl-5 lg:flex-col lg:pl-0">
      <figure className="flex w-full max-w-[280px] flex-col border-r-[1px] border-l-[1px] border-gray-100 bg-gray-50/50 xl:max-w-[300px] lg:max-w-full lg:flex-row lg:border-none lg:pl-5 md:flex-col md:pl-0">
        <div className="relative flex w-full justify-center py-8 lg:max-w-[280px] md:max-w-full md:py-6 md:px-[15px]">
          {equipmentImage}
        </div>
        <figcaption className="lg:w-full lg:border-l-[1px] lg:border-gray-100 lg:pt-8 md:border-none md:pt-0">
          {characteristics && (
            <>
              <p className="flex h-[48px] w-full items-center bg-primary-main pl-5 text-lg text-secondary-main md:text-base-500">
                Характеристики
              </p>
              <ul className="max-w-[420px] px-5 pt-2 pb-4">
                {characteristics.map(({ param, value }, index) => (
                  <li
                    key={param + index}
                    className={`flex items-center justify-between gap-5 py-2 ${
                      index !== 0 && value ? "border-t-[1px] border-gray-100" : ""
                    } ${index !== 0 && !value ? "pt-0" : ""}`}
                  >
                    <p
                      className={`${
                        value ? "text-base md:text-sm" : "text-sm text-secondary-dark md:text-xs md:font-light"
                      }`}
                    >
                      {param}
                    </p>
                    {value && <span className="max-w-[80px] flex-none text-base-500 text-primary-dark">{value}</span>}
                  </li>
                ))}
              </ul>
            </>
          )}
          {analogues && (
            <>
              <p className="flex h-[48px] w-full items-center bg-primary-main pl-5 text-lg text-secondary-main md:text-base-500">
                Аналоги
              </p>
              <ul className="max-w-[420px] px-5 pt-2 pb-4">
                {analogues.map((analog, index) => (
                  <li key={analog + index} className={`py-2 ${index !== 0 ? "border-t-[1px] border-gray-100" : ""}`}>
                    <p className="text-base md:text-sm">{analog}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
          {imageChildren}
        </figcaption>
      </figure>
      <div className={`w-full pt-8 pb-[20%] md:pt-6 ${className}`}>{children}</div>
    </div>
  )
}
