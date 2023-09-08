import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function VRU3() {
  return (
    <>
      <Seo
        title="Вводно-распределительные устройства ВРУ-3"
        description="Предназначены дня приема и распределения электроэнергии, защиты оборудования от перегрузок и токов короткого замыкания в сетях переменного тока напряжением 380/220 В, частотой 50 и 60 Гц а, также для защиты линий при перегрузках и коротких замыканиях"
        image="/vvodno-raspredelitelnye-ustroystva-VRU-3.jpg"
      />
      <Breadcrumbs
        items={[{ label: "Шкафы управления и распределения" }, { label: "Вводно-распределительные устройства ВРУ-3" }]}
      />
      <PageHeader bgSecondary title="Вводно-распределительные устройства ВРУ-3" />
      <Template
        className="pb-[90%] xl:pb-[20%]"
        equipmentImage={
          <Image
            src="/vvodno-raspredelitelnye-ustroystva-VRU-3.jpg"
            width={260}
            height={196}
            alt="Вводно-распределительные устройства ВРУ-3"
          />
        }
        analogues={["ВРУ-3Э"]}
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
