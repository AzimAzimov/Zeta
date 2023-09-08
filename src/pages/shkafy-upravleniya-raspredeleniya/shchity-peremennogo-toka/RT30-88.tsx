import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function RT3088() {
  return (
    <>
      <Seo
        title="РТЗО-88"
        description="Предназначены для приема распределения электрической энергии и управления электроприводами в сетях напряжением до 1000 В с глухозаземленной нейтралью, управления, контроля, сигнализации и защиты оборудования"
        image="/RT30-88.jpg"
      />
      <Breadcrumbs items={[{ label: "Шкафы управления и распределения" }, { label: "РТЗО-88" }]} />
      <PageHeader bgSecondary title="РТЗО-88" />
      <Template
        className="pb-[88%] xl:pb-[20%]"
        equipmentImage={<Image src="/RT30-88.jpg" width={253} height={214} alt="РТЗО-88" />}
        analogues={["УВРУ-Щ", "КСАТО", "КСАТО-УВРУ"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены для приема распределения электрической энергии и управления электроприводами в сетях
            напряжением до 1000 В с глухозаземленной нейтралью, управления, контроля, сигнализации и защиты
            оборудования.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
