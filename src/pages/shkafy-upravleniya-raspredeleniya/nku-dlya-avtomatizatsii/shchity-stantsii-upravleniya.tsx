import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function ControlStationBoards() {
  return (
    <>
      <Seo
        title="Щиты станции управления ЩСУ"
        description="Предназначены для управления насосными агрегатами с асинхронными двигателями в тепловых пунктах, также у нас вы можете получить подробную консультацию по оборудованию и приобрести по привлекательной цене"
        image="/shchity-stantsii-upravleniya.jpg"
      />
      <Breadcrumbs items={[{ label: "Шкафы управления и распределения" }, { label: "Щиты станции управления ЩСУ" }]} />
      <PageHeader bgSecondary title="Щиты станции управления ЩСУ" />
      <Template
        className="pb-[93%] xl:pb-[20%]"
        equipmentImage={
          <Image src="/shchity-stantsii-upravleniya.jpg" width={243} height={312} alt="Щиты станции управления ЩСУ" />
        }
        analogues={["ЩСУ"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначен для управления насосными агрегатами с асинхронными двигателями в тепловых пунктах.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
