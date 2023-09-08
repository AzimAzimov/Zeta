import React from "react"

import { Breadcrumbs, PageHeader, Paragraph, Seo } from "@components"
import { polymerMoldingStages } from "@constants"

export default function Prototyping() {
  return (
    <>
      <Seo
        title="Вакуумное формование листовых материалов"
        description="Одно из направлений деятельности нашей компании – вакуумное формование листовых материалов для создания пластмассовых деталей"
      />
      <Breadcrumbs
        items={[
          {
            path: "/izgotovlenie-plastikovykh-korpusov-i-detaley",
            label: "Изготовление пластиковых корпусов и деталей",
          },
          { label: "Вакуумное формование листовых материалов" },
        ]}
      />
      <PageHeader title="Вакуумное формование листовых материалов" />
      <div className="x-paddings bg-secondary-main pb-[20%] pt-8 md:pt-6">
        <Paragraph>
          Одно из направлений деятельности нашей компании – вакуумное формование листовых материалов для создания
          пластмассовых деталей.
        </Paragraph>
        <Paragraph className="mt-4">
          Вакуумное формование производится на вакуум-формовочном оборудовании (ВФМ).
        </Paragraph>
        <h2 className="mt-8 text-xl lg:text-lg md:mt-6 md:text-base-500">
          Процесс формования полимеров включает в себя несколько этапов:
        </h2>
        <ul className="mt-6 space-y-6">
          {polymerMoldingStages.map(({ icon, title, subtitle }) => (
            <li key={title} className="flex items-center gap-5 md:gap-4">
              <span className="flex h-[72px] w-[72px] flex-none items-center justify-center rounded-full border-2 border-primary-main md:h-[50px] md:w-[50px]">
                {icon}
              </span>
              <div className="space-y-2">
                <p className="text-lg md:text-base-500">{title}</p>
                <Paragraph>{subtitle}</Paragraph>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
