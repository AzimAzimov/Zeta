import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function VRU11320() {
  const schemaContainer = "flex w-full justify-center border-[1px] border-primary-main bg-white py-2"

  return (
    <>
      <Seo
        title="Шкаф вводный распределительный ВРУ1-13-20"
        description="ВРУ1-13-20 - это вводная панель на 400А без блока автоматического управления освещением БАУО, с двумя аппаратами учета общих нагрузок. Предусмотрено размещение двух трехфазных групп. На вводе установлены рубильники(переключатели) серии ВР-32 на номинальный ток 400А"
        image="/VRU-1-17-70.jpg"
      />
      <Breadcrumbs
        items={[
          { label: "Шкафы управления и распределения" },
          {
            path: "/shkafy-upravleniya-raspredeleniya/uchet-i-raspredeleneie-electroenergii/vvodno-raspredelitelnye-ustroystva-VRU-1",
            label: "Вводно-распределительные устройства ВРУ-1",
          },
          { label: "Шкаф вводный распределительный ВРУ1-13-20" },
        ]}
      />
      <PageHeader bgSecondary title="Шкаф вводный распределительный ВРУ1-13-20" />
      <Template
        className="pb-[27%] xl:pb-[20%]"
        equipmentImage={
          <Image src="/VRU-1-17-70.jpg" width={249} height={297} alt="Шкаф вводный распределительный ВРУ1-13-20" />
        }
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container">
          <Paragraph>
            ВРУ1-13-20 - это вводная панель на 400А без блока автоматического управления освещением БАУО, с двумя
            аппаратами учета общих нагрузок. Предусмотрено размещение двух трехфазных групп. На вводе установлены
            рубильники(переключатели) серии ВР-32 на номинальный ток 400А. На отходящих линиях установлены
            предохранители серии ППН, ПН-2 или аналогичные. В стоимость стандартной комплектации не входят
            электросчетчики.
          </Paragraph>
        </div>
        <HeadingText tag="h3">Схема первичных соединений</HeadingText>
        <div className="template-container border-none">
          <div className={schemaContainer}>
            <Image
              src="/VRU-1-13-20-schema.jpg"
              width={361}
              height={286}
              priority={true}
              alt="Схема первичных соединений ВРУ 1-13-20"
            />
          </div>
          <Paragraph>Степень защиты оболочки корпуса IP31(возможно изготовление степенью защиты IP54).</Paragraph>
          <Paragraph>
            Устройство ВРУ 1-13-20 представляет собой электрощит с установленными элементами защиты и управления внутри
            корпуса. Панель ВРУ1 служит для приема, учета и распределения электроэнергии трехфазных и однофазных сетей
            380/220. Каждое устройство имеет паспорт изделия, сертификат соответствия, схему подключения.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
