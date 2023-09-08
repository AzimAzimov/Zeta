import React from "react"
import Image from "next/image"

import { Breadcrumbs, CabinetsContent, PageHeader, Seo, Template } from "@components"

export default function SHOT() {
  const characteristics = [
    { param: "Номинальное напряжение", value: "220 Вт" },
    {
      param: "Количество секций",
      value: "4-6 шт.",
    },
  ]

  const analogues: string[] = ["ШОЛ", "Шкаф распределения среднего уровня", "ШПТ", "ШРСУ"]

  return (
    <>
      <Seo
        title="Шкафы отходящих линий"
        description="Используются для бесперебойного питания оперативных цепей управления, защиты и автоматики электростанций, подстанций, электромагнитов коммутационных аппаратов, аварийного освещения и прочих объектов энергетики"
        image="/shkafy_otkhodyashchikh-liniy.jpg"
      />
      <Breadcrumbs items={[{ label: "Шкафы управления и распределения" }, { label: "Шкафы отходящих линий" }]} />
      <PageHeader bgSecondary title="Шкафы отходящих линий" />
      <Template
        equipmentImage={
          <Image src="/shkafy_otkhodyashchikh-liniy.jpg" width={252} height={326} alt="Шкаф отходящих линий" />
        }
        characteristics={characteristics}
        analogues={analogues}
      >
        <CabinetsContent />
      </Template>
    </>
  )
}
