import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function VRU11770() {
  const schemaContainer = "flex w-full justify-center border-[1px] border-primary-main bg-white py-2"

  return (
    <>
      <Seo
        title="Шкаф вводный распределительный ВРУ1-17-70"
        description="ВРУ1-17-70 - это вводная панель на 100А с блоком АВР, и одним аппаратом учета общих нагрузок. Предусмотрено размещение двух трехфазных групп. На вводе установлены рубильники(переключатели) серии ВР-32 на номинальный ток 100А"
        image="/VRU-1-17-70.jpg"
      />
      <Breadcrumbs
        items={[
          { label: "Шкафы управления и распределения" },
          {
            path: "/shkafy-upravleniya-raspredeleniya/uchet-i-raspredeleneie-electroenergii/vvodno-raspredelitelnye-ustroystva-VRU-1",
            label: "Вводно-распределительные устройства ВРУ-1",
          },
          { label: "Шкаф вводный распределительный ВРУ1-17-70" },
        ]}
      />
      <PageHeader bgSecondary title="Шкаф вводный распределительный ВРУ1-17-70" />
      <Template
        className="pb-[30%] xl:pb-[20%]"
        equipmentImage={
          <Image src="/VRU-1-17-70.jpg" width={249} height={297} alt="Шкаф вводный распределительный ВРУ1-17-70" />
        }
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container">
          <Paragraph>
            ВРУ1-17-70 - это вводная панель на 100А с блоком АВР, и одним аппаратом учета общих нагрузок. Предусмотрено
            размещение двух трехфазных групп. На вводе установлены рубильники(переключатели) серии ВР-32 на номинальный
            ток 100А. На отходящих линиях установлены предохранители серии ППН, ПН-2 или аналогичные.
          </Paragraph>
        </div>
        <HeadingText tag="h3">Схема первичных соединений</HeadingText>
        <div className="template-container border-none">
          <div className={schemaContainer}>
            <Image
              src="/VRU-1-17-70-schema.jpg"
              width={434}
              height={325}
              priority={true}
              alt="Схема первичных соединений ВРУ1-17-70 "
            />
          </div>
          <Paragraph>Степень защиты оболочки корпуса IP31(возможно изготовление степенью защиты IP54).</Paragraph>
          <Paragraph>
            Устройство ВРУ 1-17-70 представляет собой электрощит с установленными элементами защиты и управления внутри
            корпуса. Панель ВРУ1 служит для приема, учета и распределения электроэнергии трехфазных и однофазных сетей
            380/220. Каждое устройство имеет паспорт изделия, сертификат соответствия, схему подключения.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
