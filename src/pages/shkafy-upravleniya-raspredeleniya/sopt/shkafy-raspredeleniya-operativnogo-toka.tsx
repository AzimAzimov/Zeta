import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"
import { shrotCharacteristics, shrotComposition, shrotPeculiarities } from "@constants"

export default function Shrot() {
  return (
    <>
      <Seo
        title="Шкафы распределения оперативного тока (ШРОТ)"
        description="Предназначены для питания оперативных цепей управления, защиты, автоматики и сигнализации на электрических станциях и подстанциях и могут быть использованы и в других отраслях промышленности"
        image="/shrot.png"
      />
      <Breadcrumbs
        items={[
          { label: "Шкафы управления и распределения" },
          { label: "Шкафы распределения оперативного тока (ШРОТ)" },
        ]}
      />
      <PageHeader bgSecondary title="Шкафы распределения оперативного тока (ШРОТ)" />
      <Template
        equipmentImage={
          <Image src="/shrot.png" width={210} height={419} alt="Шкаф распределения оперативного тока (ШРОТ)" />
        }
        characteristics={shrotCharacteristics}
        analogues={["Шкаф с автоматическими выключателями"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container">
          <Paragraph>
            Предназначены для питания оперативных цепей управления, защиты, автоматики и сигнализации на электрических
            станциях и подстанциях и могут быть использованы и в других отраслях промышленности.
          </Paragraph>
        </div>
        <HeadingText tag="h3">Особенности шкафа</HeadingText>
        <div className="template-container">
          {shrotPeculiarities.map((item) => (
            <Paragraph key={item} marker={true} children={item} />
          ))}
        </div>
        <HeadingText tag="h4">Состав</HeadingText>
        <div className="template-container">
          {shrotComposition.map((item, index) => (
            <Paragraph key={item} marker={index < 9} children={item} />
          ))}
        </div>
        <HeadingText tag="h5">Типовые схемы ШРОТ</HeadingText>
        <div className="template-container border-none">
          <Image src="/shrot-schema.jpg" className="h-auto w-full" width={583} height={97} alt="Типовые схемы ШРОТ" />
        </div>
      </Template>
    </>
  )
}
