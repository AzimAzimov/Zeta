import React from "react"

import { Breadcrumbs, PageHeader, Seo } from "@components"
import { catalogueItems } from "@constants"

export default function Catalogue() {
  return (
    <>
      <Seo
        title="Каталог низковольтных комплектных устройств и шкафов для электрических станций и подстанций"
        description="Каталог низковольтных комплектных устройств модульной конструкции НКУ-MF/W, низковольтные комплектные устройства ввода а также шкафы малогабаритные для электрических станций и подстанций низковольтные"
      />
      <Breadcrumbs items={[{ label: "Каталог" }]} />
      <PageHeader title="Каталог" />
      <div className="w-full bg-secondary-main px-10 pt-5 pb-[28%] lg:px-6 md:px-[15px] md:pt-4">
        {catalogueItems.map(({ title, subtitle, pdfUrl }, index) => (
          <div
            key={title}
            className={`flex items-center justify-between py-5 md:py-4 ${
              index !== 0 ? "border-t-[1px] border-t-gray-100" : ""
            }`}
          >
            <div className="flex items-center">
              <svg width="36" height="42" viewBox="0 0 36 42" className="mr-3 md:hidden" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.55 10.32L25.71 0.42L24.66 0H1.5L0 1.5V18H3V3H21V13.5L22.5 15H33V18H36V11.4L35.55 10.32ZM24 12V3L33 12H24ZM1.5 21L0 22.5V40.5L1.5 42H34.5L36 40.5V22.5L34.5 21H1.5ZM33 36V39H3V24H33V36ZM9 33H8.04V36H6V27H9.18C11.43 27 12.57 28.08 12.57 30C12.5758 30.4081 12.493 30.8125 12.3272 31.1854C12.1615 31.5584 11.9168 31.8909 11.61 32.16C10.8665 32.7395 9.94191 33.0371 9 33ZM8.82 28.65H8.04V31.44H8.82C9.9 31.44 10.44 30.96 10.44 30.03C10.44 29.1 9.9 28.65 8.82 28.65ZM21 34.74C21.4431 34.3036 21.7895 33.779 22.0169 33.2002C22.2443 32.6214 22.3476 32.0013 22.32 31.38C22.32 28.38 20.73 27 17.52 27H14.34V36H17.52C18.1546 36.0307 18.789 35.9352 19.3863 35.7189C19.9837 35.5026 20.5322 35.1699 21 34.74ZM16.35 34.35V28.65H17.34C17.7226 28.6257 18.1062 28.6797 18.4673 28.8086C18.8284 28.9376 19.1593 29.1388 19.44 29.4C19.6943 29.667 19.8918 29.9828 20.0207 30.3282C20.1496 30.6737 20.2072 31.0417 20.19 31.41C20.2349 32.2008 19.9653 32.9772 19.44 33.57C19.1653 33.8328 18.8404 34.0374 18.4847 34.1714C18.129 34.3055 17.7498 34.3662 17.37 34.35H16.35ZM29.7 32.52H26.79V36H24.75V27H29.97V28.65H26.79V30.87H29.7V32.52Z"
                  fill="#93C01F"
                />
              </svg>
              {index === 0 ? (
                <h2>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    className="text-lg hover:text-primary-dark lg:text-base-500 md:text-sm-500"
                  >
                    {title}
                    <span className="mt-2 block text-base text-gray-300 md:text-sm">{subtitle}</span>
                  </a>
                </h2>
              ) : index === 1 ? (
                <h3>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    className="text-lg hover:text-primary-dark lg:text-base-500 md:text-sm-500"
                  >
                    {title}
                    <span className="mt-2 block text-base text-gray-300 md:text-sm">{subtitle}</span>
                  </a>
                </h3>
              ) : index === 2 ? (
                <h4>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    className="text-lg hover:text-primary-dark lg:text-base-500 md:text-sm-500"
                  >
                    {title}
                    <span className="mt-2 block text-base text-gray-300 md:text-sm">{subtitle}</span>
                  </a>
                </h4>
              ) : (
                <p>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    className="text-lg hover:text-primary-dark lg:text-base-500 md:text-sm-500"
                  >
                    {title}
                    <span className="mt-2 block text-base text-gray-300 md:text-sm">{subtitle}</span>
                  </a>
                </p>
              )}
            </div>
            <a
              className="btn-outlined h-10 w-[124px] flex-none gap-[6px] lg:h-[38px] lg:w-[38px] lg:gap-0 md:ml-7"
              href={pdfUrl}
              download={true}
              role="button"
            >
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                <g clipPath="url(#clip0_1503_196)">
                  <path d="M16 13.5H13V3.5H11V13.5H8L12 17.5L16 13.5ZM4 19.5V21.5H20V19.5H4Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_1503_196">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-base-500 lg:hidden">Скачать</span>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
