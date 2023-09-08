import React from "react"
import Link from "next/link"

import { Breadcrumbs, PageHeader, Paragraph, Seo } from "@components"
import { plasticCasesPartsLinks } from "@constants"
import { DirectionRightIcon } from "@icons"

export default function PlasticCasesParts() {
  return (
    <>
      <Seo
        title="Изготовление пластиковых корпусов и деталей"
        description="Завод электротехники и автоматики предоставляет полный спектр услуг от разработки стилистического дизайна изделий и изготовления «пилотной партии» продукции до серийного производства пластиковых корпусов и деталей. Для создания изделий используется собственное производство, где применяется современное оборудование"
        keywords="Дизайн и разработка конструкции, прототипирование и литье в силиконовые формы, литье пластмасс, вакуумное формование листовых материалов, услуги по сборке и покраске готовых изделий"
      />
      <Breadcrumbs items={[{ label: "Изготовление пластиковых корпусов и деталей" }]} />
      <PageHeader title="Изготовление пластиковых корпусов и деталей" />
      <div className="x-paddings bg-secondary-main pb-[35%] pt-8 xl:pb-[20%] md:pt-6">
        <Paragraph>
          Наша компания предоставляет полный спектр услуг от разработки стилистического дизайна изделий и изготовления
          «пилотной партии» продукции до серийного производства пластиковых корпусов и деталей. Для создания изделий
          используется собственное производство, где применяется современное оборудование.
        </Paragraph>
        <h2 className="mt-8 text-xl lg:mt-6 lg:text-lg md:text-base-500">Работа ведется в следующих направлениях:</h2>
        <ul className="mt-4 md:mt-0">
          {plasticCasesPartsLinks.map(({ icon, link, label }, index) => (
            <li className={index !== 0 ? "border-t-[1px] border-gray-100" : ""} key={label}>
              <Link href={link} className="flex w-full items-center justify-between gap-6 py-2 md:py-4">
                <div className="flex items-center gap-5 md:gap-4">
                  <span className="flex h-[72px] w-[72px] flex-none items-center justify-center rounded-full border-2 border-primary-main md:h-[50px] md:w-[50px]">
                    {icon}
                  </span>
                  <p className="text-lg lg:text-base-500 md:text-sm-500">{label}</p>
                </div>
                <DirectionRightIcon className="flex-none fill-primary-main md:h-3 md:w-5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
