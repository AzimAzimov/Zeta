import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function VRU8() {
  return (
    <>
      <Seo
        title="Вводно-распределительные устройства ВРУ-8"
        description="Предназначены дня приема и распределения электроэнергии, защиты оборудования от перегрузок и токов короткого замыкания в сетях переменного тока напряжением 380/220 В, частотой 50 и 60 Гц а, также для защиты линий при перегрузках и коротких замыканиях"
        image="/vvodno-raspredelitelnye-ustroystva-VRU-8.jpg"
      />
      <Breadcrumbs
        items={[{ label: "Шкафы управления и распределения" }, { label: "Вводно-распределительные устройства ВРУ-8" }]}
      />
      <PageHeader bgSecondary title="Вводно-распределительные устройства ВРУ-8" />
      <Template
        className="pb-[90%] xl:pb-[20%]"
        equipmentImage={
          <Image
            src="/vvodno-raspredelitelnye-ustroystva-VRU-8.jpg"
            width={224}
            height={217}
            alt="Вводно-распределительные устройства ВРУ-8"
          />
        }
        analogues={["ВРУ-8503Э", "ВРУ8504Э МУ", "ВРУ-8505Э", "ВРУ8-1Н", "УВРУ-Я-12", "ВРУ8-2Н", "УВРУ-Я-42"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены дня приема и распределения электроэнергии, защиты оборудования от перегрузок и токов короткого
            замыкания в сетях переменного тока напряжением 380/220 В, частотой 50 и 60 Гц а, также для защиты линий при
            перегрузках и коротких замыканиях.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
