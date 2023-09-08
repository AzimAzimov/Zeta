import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function FloorBoards() {
  return (
    <>
      <Seo
        title="Щитки этажные ЩЭ"
        description="Предназначены для приема, распределения и учета электроэнергии напряжением 220В (380В), также у нас вы можете получить подробную консультацию по оборудованию и приобрести по привлекательной цене"
        image="/shchitki-etazhnye-SHCHE.jpg"
      />
      <Breadcrumbs items={[{ label: "Шкафы управления и распределения" }, { label: "Щитки этажные ЩЭ" }]} />
      <PageHeader bgSecondary title="Щитки этажные ЩЭ" />
      <Template
        className="pb-[92%] xl:pb-[20%]"
        equipmentImage={<Image src="/shchitki-etazhnye-SHCHE.jpg" width={233} height={174} alt="Щитки этажные ЩЭ" />}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>Предназначены для приема, распределения и учета электроэнергии напряжением 220В (380В).</Paragraph>
        </div>
      </Template>
    </>
  )
}
