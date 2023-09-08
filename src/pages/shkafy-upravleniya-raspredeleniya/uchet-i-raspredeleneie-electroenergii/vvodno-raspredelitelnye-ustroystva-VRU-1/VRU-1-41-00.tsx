import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function VRU14100() {
  const schemaContainer = "flex w-full justify-center border-[1px] border-primary-main bg-white py-2"

  return (
    <>
      <Seo
        title="Распределительная панель ВРУ1-41-00 УХЛ4"
        description="ВРУ1-41-00 - это распределительная панель на 100А без блока автоматического управления освещением БАУО. Предусмотрено размещение двух трехфазных групп. На вводе не установлены рубильники(переключатели). На отходящих линиях установлены предохранители серии ППН, ПН-2 или аналогичные на номинальный ток согласно комплектации"
        image="/VRU-1-17-70.jpg"
      />
      <Breadcrumbs
        items={[
          { label: "Шкафы управления и распределения" },
          {
            path: "/shkafy-upravleniya-raspredeleniya/uchet-i-raspredeleneie-electroenergii/vvodno-raspredelitelnye-ustroystva-VRU-1",
            label: "Вводно-распределительные устройства ВРУ-1",
          },
          { label: "Распределительная панель ВРУ1-41-00 УХЛ4" },
        ]}
      />
      <PageHeader bgSecondary title="Распределительная панель ВРУ1-41-00 УХЛ4" />
      <Template
        className="pb-[25%] xl:pb-[20%]"
        equipmentImage={
          <Image src="/VRU-1-17-70.jpg" width={249} height={297} alt="Распределительная панель ВРУ1-41-00 УХЛ4" />
        }
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container">
          <Paragraph>
            ВРУ1-41-00 - это распределительная панель на 100А без блока автоматического управления освещением БАУО.
            Предусмотрено размещение двух трехфазных групп. На вводе не установлены рубильники(переключатели). На
            отходящих линиях установлены предохранители серии ППН, ПН-2 или аналогичные на номинальный ток согласно
            комплектации. Внутри корпуса устройства не предусмотрено освещение. Возможна комплектация по вашим схемам и
            с различным оборудованием (в том числе ABB, Schneider Electric, Legrand).
          </Paragraph>
        </div>
        <HeadingText tag="h3">Схема первичных соединений</HeadingText>
        <div className="template-container border-none">
          <div className={schemaContainer}>
            <Image
              src="/VRU-1-28-65-schema.jpg"
              width={303}
              height={293}
              priority={true}
              alt="Схема первичных соединений ВРУ 1-41-00"
            />
          </div>
          <Paragraph>Степень защиты оболочки корпуса IP31 (возможно изготовление степенью защиты IP54).</Paragraph>
          <Paragraph>
            Устройство ВРУ 1-41-00 представляет собой электрощит с установленными элементами защиты и управления внутри
            корпуса. Панель ВРУ1 служит для приема, учета и распределения электроэнергии трехфазных и однофазных сетей
            380/220. Каждое устройство имеет паспорт изделия, сертификат соответствия, схему подключения.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
