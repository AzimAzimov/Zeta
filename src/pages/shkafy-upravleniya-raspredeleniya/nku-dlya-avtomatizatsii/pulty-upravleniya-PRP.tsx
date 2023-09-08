import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function ControlPanel() {
  return (
    <>
      <Seo
        title="Пульты управления ПРП"
        description="Предназначены для оперативного управления энергетическим оборудованием электрических станций и подстанций, являются рабочим местом оператора"
        image="/pulty-upravleniya-PRP.jpg"
      />
      <Breadcrumbs items={[{ label: "Шкафы управления и распределения" }, { label: "Пульты управления ПРП" }]} />
      <PageHeader bgSecondary title="Пульты управления ПРП" />
      <Template
        className="pb-[93%] xl:pb-[20%]"
        equipmentImage={<Image src="/pulty-upravleniya-PRP.jpg" width={242} height={181} alt="Пульты управления ПРП" />}
        analogues={["БЭЗ", "УВРУ-П-31", "ПРП-9"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены для оперативного управления энергетическим оборудованием электрических станций и подстанций,
            являются рабочим местом оператора.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
