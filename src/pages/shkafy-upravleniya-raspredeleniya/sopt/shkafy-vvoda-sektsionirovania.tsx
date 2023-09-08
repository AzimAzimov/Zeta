import React from "react"
import Image from "next/image"

import { Breadcrumbs, CabinetsContent, PageHeader, Seo, Template } from "@components"

export default function SectioningCabinets() {
  const characteristics = [
    { param: "Номинальное напряжение", value: "220 Вт" },
    {
      param: "Количество секций",
      value: "4-6 шт.",
    },
  ]

  const analogues: string[] = ["ШВ", "ШВС"]

  return (
    <>
      <Seo
        title="Шкафы ввода и секционирования"
        description="Используются для бесперебойного питания оперативных цепей управления, защиты и автоматики электростанций, подстанций, электромагнитов коммутационных аппаратов, аварийного освещения и прочих объектов энергетики"
        image="/sectioning-cabinet.jpg"
      />
      <Breadcrumbs
        items={[{ label: "Шкафы управления и распределения" }, { label: "Шкафы ввода и секционирования" }]}
      />
      <PageHeader bgSecondary title="Шкафы ввода и секционирования" />
      <Template
        equipmentImage={
          <Image src="/sectioning-cabinet.jpg" width={224} height={289} alt="Шкаф ввода и секционирования" />
        }
        characteristics={characteristics}
        analogues={analogues}
      >
        <CabinetsContent />
      </Template>
    </>
  )
}
