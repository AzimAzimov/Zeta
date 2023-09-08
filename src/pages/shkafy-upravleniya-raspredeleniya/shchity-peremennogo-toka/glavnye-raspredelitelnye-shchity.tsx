import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function MainSwitchboardCabinets() {
  return (
    <>
      <Seo
        title="Главные распределительные щиты ГРЩ, ГРЩД"
        description="Предназначены для снабжение электроэнергией все здание или его части, также у нас вы можете получить подробную консультацию по оборудованию и приобрести по привлекательной цене"
        image="/glavnye-raspredelitelnye-shchity.jpg"
      />
      <Breadcrumbs
        items={[{ label: "Шкафы управления и распределения" }, { label: "Главные распределительные щиты ГРЩ, ГРЩД" }]}
      />
      <PageHeader bgSecondary title="Главные распределительные щиты ГРЩ, ГРЩД" />
      <Template
        className="pb-[93%] xl:pb-[20%]"
        equipmentImage={
          <Image
            src="/glavnye-raspredelitelnye-shchity.jpg"
            width={250}
            height={354}
            alt="Главный распределительный щит ГРЩ, ГРЩД"
          />
        }
        analogues={["ГРЩ", "ГРЩД"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Распределительный щит, через который снабжается электроэнергией все здание или его части.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
