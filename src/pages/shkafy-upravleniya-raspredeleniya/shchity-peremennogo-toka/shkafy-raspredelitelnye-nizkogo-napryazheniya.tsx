import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function LowVoltageDistributionCabinets() {
  return (
    <>
      <Seo
        title="Шкафы распределительные низкого напряжения ШРНН"
        description="Предназначены для комплектования распределительных устройств напряжением 0,4 кВ переменного тока частотой 50 Гц с глухозаземленнои нейтралью, служащих для приема, распределения электрической энергии, защиты от перегрузок и токов короткого замыкания отходящих линий"
        image="/shkafy-raspredelitelnye-nizkogo-napryazheniya.jpg"
      />
      <Breadcrumbs
        items={[
          { label: "Шкафы управления и распределения" },
          { label: "Шкафы распределительные низкого напряжения ШРНН" },
        ]}
      />
      <PageHeader bgSecondary title="Шкаф распределительный низкого напряжения ШРНН" />
      <Template
        className="pb-[88%] xl:pb-[20%]"
        equipmentImage={
          <Image
            src="/shkafy-raspredelitelnye-nizkogo-napryazheniya.jpg"
            width={238}
            height={370}
            alt="Шкаф распределительный низкого напряжения ШРНН"
          />
        }
        analogues={["ШРНН"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены для комплектования распределительных устройств напряжением 0,4 кВ переменного тока частотой 50
            Гц с глухозаземленнои нейтралью, служащих для приема, распределения электрической энергии, защиты от
            перегрузок и токов короткого замыкания отходящих линий.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
