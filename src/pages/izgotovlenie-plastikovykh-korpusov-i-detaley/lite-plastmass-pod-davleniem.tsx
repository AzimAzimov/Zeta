import React from "react"

import { Breadcrumbs, PageHeader, Paragraph, Seo } from "@components"
import { plasticInjectionStages } from "@constants"

export default function PlasticInjectionMolding() {
  return (
    <>
      <Seo
        title="Литье пластмасс под давлением"
        description="Одним из направлений нашей компании является проектирование и изготовление пресс-форм для литья пластмассовых деталей, а также последующее литье на термопластавтоматах (ТПА) под давлением"
      />
      <Breadcrumbs
        items={[
          {
            path: "/izgotovlenie-plastikovykh-korpusov-i-detaley",
            label: "Изготовление пластиковых корпусов и деталей",
          },
          { label: "Литье пластмасс под давлением" },
        ]}
      />
      <PageHeader title="Литье пластмасс под давлением" />
      <div className="x-paddings bg-secondary-main pb-[46%] pt-8 xl:pb-[20%] md:pt-6">
        <Paragraph>
          Одним из направлений нашей компании является проектирование и изготовление пресс-форм для литья пластмассовых
          деталей, а также последующее литье на термопластавтоматах (ТПА) под давлением.
        </Paragraph>
        <Paragraph className="mt-4">
          <span className="font-normal">Пресс-форма для литья пластмасс под давлением</span> — это сложный
          технологический инструмент, оснастка для производства изделий из пластика.
        </Paragraph>
        <h2 className="mt-8 text-xl lg:text-lg md:mt-6 md:text-base-500">
          Процесс формования полимеров включает в себя несколько этапов:
        </h2>
        <ul className="mt-6 space-y-6">
          {plasticInjectionStages.map(({ icon, description }) => (
            <li key={description} className="flex items-center gap-5 md:gap-4">
              <span className="flex h-[72px] w-[72px] flex-none items-center justify-center rounded-full border-2 border-primary-main md:h-[50px] md:w-[50px]">
                {icon}
              </span>
              <Paragraph>{description}</Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
