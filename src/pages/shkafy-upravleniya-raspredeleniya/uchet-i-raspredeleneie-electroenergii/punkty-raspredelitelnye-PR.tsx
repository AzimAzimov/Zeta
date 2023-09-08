import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function DistributionPoints() {
  return (
    <>
      <Seo
        title="Пункты распределительные ПР"
        description="Предназначены для распределения электроэнергии и защиты электрических установок при токах КЗ и перегрузках, для нечастых оперативных включений и отключений электрических цепей, защиты от перегрузок и токов короткого замыкания осветительных сетей трехфазного переменного тока напряжением 380/220В частотой 50Гц"
        image="/punkty-raspredelitelnye-PR.jpg"
      />
      <Breadcrumbs items={[{ label: "Шкафы управления и распределения" }, { label: "Пункты распределительные ПР" }]} />
      <PageHeader bgSecondary title="Пункты распределительные ПР" />
      <Template
        className="pb-[88%] xl:pb-[20%]"
        equipmentImage={
          <Image src="/punkty-raspredelitelnye-PR.jpg" width={240} height={382} alt="Пункты распределительные ПР" />
        }
        analogues={["ПР", "ПР8503", "ПР11", "УВРУ-Я-22", "Распределительное устройство"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены для распределения электроэнергии и защиты электрических установок при токах КЗ и перегрузках,
            для нечастых оперативных включений и отключений электрических цепей, защиты от перегрузок и токов короткого
            замыкания осветительных сетей трехфазного переменного тока напряжением 380/220В частотой 50Гц.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
