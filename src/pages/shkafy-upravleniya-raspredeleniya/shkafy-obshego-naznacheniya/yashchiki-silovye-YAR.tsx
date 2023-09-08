import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function PowerBoxesSeriesYAR() {
  return (
    <>
      <Seo
        title="Ящики силовые серии ЯР (П)"
        description="Предназначены для нечастых коммутаций и защиты от токов короткого замыкания в цепях трехфазного переменного тока напряжением до 380В, частотой 50Гц"
        image="/yashchiki-silovye-YAR.jpg"
      />
      <Breadcrumbs items={[{ label: "Шкафы управления и распределения" }, { label: "Ящики силовые серии ЯР (П)" }]} />
      <PageHeader bgSecondary title="Ящики силовые серии ЯР (П)" />
      <Template
        className="pb-[90%] xl:pb-[20%]"
        equipmentImage={
          <Image src="/yashchiki-silovye-YAR.jpg" width={245} height={234} alt="Ящик силовой серии ЯР (П)" />
        }
        analogues={["ЯР", "ЯРП"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены для нечастых коммутаций и защиты от токов короткого замыкания в цепях трехфазного переменного
            тока напряжением до 380В, частотой 50Гц.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
