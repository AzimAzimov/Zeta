import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function DisconnectorControlCabinets() {
  return (
    <>
      <Seo
        title="Шкафы управления разъединителями (ШУР)"
        description="Предназначены для управления одним или двумя разъединителями, также у нас вы можете получить подробную консультацию по оборудованию и приобрести по привлекательной цене"
        image="/shkafy-upravleniya-razedinitelyami.jpg"
      />
      <Breadcrumbs
        items={[{ label: "Шкафы управления и распределения" }, { label: "Шкафы управления разъединителями (ШУР)" }]}
      />
      <PageHeader bgSecondary title="Шкафы управления разъединителями (ШУР)" />
      <Template
        className="pb-[90%] xl:pb-[20%]"
        equipmentImage={
          <Image
            src="/shkafy-upravleniya-razedinitelyami.jpg"
            width={199}
            height={352}
            alt="Шкафы управления разъединителями (ШУР)"
          />
        }
        analogues={["ШУР"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>Предназначены для управления одним или двумя разъединителями.</Paragraph>
          <Paragraph>Используются на электрических станциях и подстанциях.</Paragraph>
        </div>
      </Template>
    </>
  )
}
