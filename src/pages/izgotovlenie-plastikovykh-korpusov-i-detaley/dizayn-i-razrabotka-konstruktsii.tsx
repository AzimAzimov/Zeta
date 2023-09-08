import React from "react"

import { Breadcrumbs, PageHeader, Paragraph, Seo } from "@components"
import { designAndConstructionStages } from "@constants"

export default function DesignAndConstructionDevelopment() {
  return (
    <>
      <Seo
        title="Дизайн и разработка конструкции"
        description="Завод электротехники и автоматики предлагает свои услуги в области разработки дизайна и конструкции будущего изделия по индивидуальному заданию заказчика. Специалисты нашей компании осуществляют работы по разработке дизайна будущего изделия как в 2D-эскизах, так и в  3D-моделях с учетом технических требований заказчика"
        keywords="Дизайн изделия в 2D-эскизах и 3D-моделях с учетом технических требований, заказать дизайн и разработка конструкции в Москве по всей России"
      />
      <Breadcrumbs
        items={[
          {
            path: "/izgotovlenie-plastikovykh-korpusov-i-detaley",
            label: "Изготовление пластиковых корпусов и деталей",
          },
          { label: "Дизайн и разработка конструкции" },
        ]}
      />
      <PageHeader title="Дизайн и разработка конструкции" />
      <div className="x-paddings bg-secondary-main pb-[30%] pt-8 xl:pb-[20%] md:pt-6">
        <Paragraph>
          Компания предлагает свои услуги в области разработки дизайна и конструкции будущего изделия по индивидуальному
          заданию заказчика. Специалисты нашей компании осуществляют работы по разработке дизайна будущего изделия как в
          2D-эскизах, так и в 3D-моделях с учетом технических требований заказчика. При этом предложенное решение
          является гарантированно выполнимым на производстве за счет учета технологии производства и предварительной
          конструкторской проработкой изделия.
        </Paragraph>
        <h2 className="my-6 text-xl lg:text-lg md:text-base-500">
          Основные этапы дизайна изделия и разработки конструкции
        </h2>
        <ul className="relative space-y-8 overflow-hidden before:absolute before:left-[7px] before:top-[3.8%] before:h-[93%] before:w-[2px] before:bg-primary-main md:space-y-6">
          {designAndConstructionStages.map((item) => (
            <li
              className="relative pl-9 text-base before:absolute before:left-0 before:top-[50%] before:h-4 before:w-4 before:translate-y-[-50%] before:rounded-full before:border-2 before:border-primary-main before:bg-secondary-main md:pl-8 md:text-sm"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
