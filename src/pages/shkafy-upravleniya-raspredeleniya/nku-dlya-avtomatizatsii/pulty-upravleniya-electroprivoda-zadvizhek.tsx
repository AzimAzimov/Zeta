import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function ElectricDriveControlPanel() {
  return (
    <>
      <Seo
        title="Пульты управления электропривода задвижек БЭЗ"
        description="Предназначены для коммутации и управления электроприводами задвижек и другой запорной и регулирующей арматуры, можно приобрести по доступной цене в Москве и по всей России"
        image="/pulty-upravleniya-electroprivoda-zadvizhek.jpg"
      />
      <Breadcrumbs
        items={[
          { label: "Шкафы управления и распределения" },
          { label: "Пульты управления электропривода задвижек БЭЗ" },
        ]}
      />
      <PageHeader bgSecondary title="Пульты управления электропривода задвижек БЭЗ" />
      <Template
        className="pb-[93%] xl:pb-[20%]"
        equipmentImage={
          <Image
            src="/pulty-upravleniya-electroprivoda-zadvizhek.jpg"
            width={196}
            height={266}
            alt="Пульты управления электропривода задвижек БЭЗ"
          />
        }
        analogues={["БЭЗ", "УВРУ-П-32"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены для коммутации и управления электроприводами задвижек и другой запорной и регулирующей
            арматуры.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
