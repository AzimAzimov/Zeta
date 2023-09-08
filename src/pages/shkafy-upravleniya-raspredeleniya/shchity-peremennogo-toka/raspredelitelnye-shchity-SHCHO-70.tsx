import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function DistributionCabinets() {
  return (
    <>
      <Seo
        title="Шкафы распределительные низкого напряжения ШРНН"
        description="Предназначены для комплектования щитов для приема и распределения электрической энергии, а так же для защиты от перегрузок и токов короткого замыкания в трехфазных электрических сетях с глухозаземленной нейтралью напряжением 380/220В переменного тока и частотой 50 - 60 Гц."
        image="/raspredelitelnye-shchity-SHCHO-70.png"
      />
      <Breadcrumbs items={[{ label: "Шкафы управления и распределения" }, { label: "Распределительные щиты ЩО-70" }]} />
      <PageHeader bgSecondary title="Распределительные щиты ЩО-70" />
      <Template
        className="pb-[88%] xl:pb-[20%]"
        equipmentImage={
          <Image
            src="/raspredelitelnye-shchity-SHCHO-70.png"
            width={215}
            height={325}
            alt="Распределительный щит ЩО-70"
          />
        }
        analogues={["ЩО70Э", "ЩО70Э-1УЗ", "ЩО70Э-2УЗ"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены для комплектования щитов для приема и распределения электрической энергии, а так же для защиты
            от перегрузок и токов короткого замыкания в трехфазных электрических сетях с глухозаземленной нейтралью
            напряжением 380/220В переменного тока и частотой 50 - 60 Гц.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
