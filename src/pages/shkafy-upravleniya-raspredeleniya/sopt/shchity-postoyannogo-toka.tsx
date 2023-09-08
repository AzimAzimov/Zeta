import React from "react"
import Image from "next/image"

import { Breadcrumbs, CabinetsContent, PageHeader, Seo, Template } from "@components"
import { shptAnalogues, shptCharacteristics } from "@constants"

export default function SHPT() {
  return (
    <>
      <Seo
        title="Щиты постоянного тока (ЩПТ)"
        description="Используются для бесперебойного питания оперативных цепей управления, защиты и автоматики электростанций, подстанций, электромагнитов коммутационных аппаратов, аварийного освещения и прочих объектов энергетики"
        image="/Shchity-postoyannogo-toka.jpg"
      />
      <Breadcrumbs items={[{ label: "Шкафы управления и распределения" }, { label: "Щиты постоянного тока (ЩПТ)" }]} />
      <PageHeader bgSecondary title="Щиты постоянного тока (ЩПТ)" />
      <Template
        equipmentImage={
          <Image src="/Shchity-postoyannogo-toka.jpg" width={255} height={358} alt="Щит постоянного тока (ЩПТ)" />
        }
        characteristics={shptCharacteristics}
        analogues={shptAnalogues}
      >
        <CabinetsContent />
      </Template>
    </>
  )
}
