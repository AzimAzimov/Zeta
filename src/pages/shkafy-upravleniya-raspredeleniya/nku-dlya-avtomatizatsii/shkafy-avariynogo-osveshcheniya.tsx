import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function EmergencyLightingCabinets() {
  return (
    <>
      <Seo
        title="Шкафы аварийного освещения ШАО"
        description="Предназначены для питания светильников аварийного освещения от сети переменного тока или при пропадании этой сети-от сети постоянного тока, также у нас Вы можете получить подробную консультацию по оборудованию и приобрести по привлекательной цене"
        image="/shkafy-avariynogo-osveshcheniya.jpg"
      />
      <Breadcrumbs
        items={[{ label: "Шкафы управления и распределения" }, { label: "Шкафы аварийного освещения ШАО" }]}
      />
      <PageHeader bgSecondary title="Шкафы аварийного освещения ШАО" />
      <Template
        className="pb-[93%] xl:pb-[20%]"
        equipmentImage={
          <Image
            src="/shkafy-avariynogo-osveshcheniya.jpg"
            width={161}
            height={322}
            alt="Шкафы аварийного освещения ШАО"
          />
        }
        analogues={["ШАО"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены для питания светильников аварийного освещения от сети переменного тока или при пропадании этой
            сети-от сети постоянного тока.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
