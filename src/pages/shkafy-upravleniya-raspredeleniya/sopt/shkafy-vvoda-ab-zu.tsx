import React from "react"
import Image from "next/image"

import { Breadcrumbs, CabinetsContent, PageHeader, Seo, Template } from "@components"

export default function ABZUCabinets() {
  const characteristics = [
    { param: "Номинальное напряжение", value: "220 Вт" },
    {
      param: "Количество секций",
      value: "4-6 шт.",
    },
  ]

  const analogues: string[] = [
    "Шкаф ввода аккумуляторной батареи",
    "Шкаф ввода зарядного устройство",
    "ШВС",
    "Шкаф ввода и распределения",
  ]

  return (
    <>
      <Seo
        title="Шкафы ввода АБ и ЗУ"
        description="Используются для бесперебойного питания оперативных цепей управления, защиты и автоматики электростанций, подстанций, электромагнитов коммутационных аппаратов, аварийного освещения и прочих объектов энергетики"
        image="/Shkafy-vvoda-AB-i-ZU.jpg"
      />
      <Breadcrumbs items={[{ label: "Шкафы управления и распределения" }, { label: "Шкафы ввода АБ и ЗУ" }]} />
      <PageHeader bgSecondary title="Шкафы ввода АБ и ЗУ" />
      <Template
        equipmentImage={<Image src="/Shkafy-vvoda-AB-i-ZU.jpg" width={243} height={356} alt="Шкаф ввода АБ и ЗУ" />}
        characteristics={characteristics}
        analogues={analogues}
      >
        <CabinetsContent isDefaultVariant={false} />
      </Template>
    </>
  )
}
