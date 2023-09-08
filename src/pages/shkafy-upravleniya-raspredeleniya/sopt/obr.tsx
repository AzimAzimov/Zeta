import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"
import { obrAnalogues, obrCharacteristics, obrFunctionalities, obrRequirements } from "@constants"

export default function Obr() {
  return (
    <>
      <Seo
        title="Шкафы питания цепей оперативной блокировки разъединителей (ОБР)"
        description="Обеспечивают функцию блокировки управления коммутационной аппаратурой на объектах. Заказать шкаф питания цепей оперативной блокировки разъединителей в России (Москве) по доступной цене"
        image="/obr-image.jpg"
      />
      <Breadcrumbs
        items={[
          { label: "Шкафы управления и распределения" },
          { label: "Шкафы питания цепей оперативной блокировки разъединителей (ОБР)" },
        ]}
      />
      <PageHeader bgSecondary title="Шкафы питания цепей оперативной блокировки разъединителей (ОБР)" />
      <Template
        equipmentImage={
          <Image
            src="/obr-image.jpg"
            width={235}
            height={419}
            alt="Шкаф питания цепей оперативной блокировки разъединителей (ОБР)"
          />
        }
        characteristics={obrCharacteristics}
        analogues={obrAnalogues}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container">
          <Paragraph>Обеспечивают функцию блокировки управления коммутационной аппаратурой на объектах.</Paragraph>
        </div>
        <HeadingText tag="h3">Функциональные возможности шкафов ОБР</HeadingText>
        <div className="template-container">
          {obrFunctionalities.map((item) => (
            <Paragraph key={item} marker={true} children={item} />
          ))}
        </div>
        <HeadingText tag="h4">Требования к устройствам</HeadingText>
        <div className="template-container border-none">
          {obrRequirements.map((item, index) => (
            <Paragraph key={item} marker={index < 4} children={item} />
          ))}
        </div>
      </Template>
    </>
  )
}
