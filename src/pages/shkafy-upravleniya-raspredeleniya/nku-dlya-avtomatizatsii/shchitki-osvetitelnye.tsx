import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function ShieldsLighting() {
  return (
    <>
      <Seo
        title="Щитки осветительные ОЩ, ОЩВ"
        description="Щитки осветительные ОЩ, ОЩВ предназначены для приема и распределения электрической энергии в сетях трехфазного переменного тока напряжением 380/220 В, частотой 50 Гц с глухозаземленной нейтралью, а также защиты отходящих линий при перегрузках и коротких замыканиях"
        image="/shchitki-osvetitelnye.jpg"
      />
      <Breadcrumbs items={[{ label: "Шкафы управления и распределения" }, { label: "Щитки осветительные ОЩ, ОЩВ" }]} />
      <PageHeader bgSecondary title="Щитки осветительные ОЩ, ОЩВ" />
      <Template
        className="pb-[88%] xl:pb-[20%]"
        equipmentImage={
          <Image src="/shchitki-osvetitelnye.jpg" width={222} height={297} alt="Щитки осветительные ОЩ, ОЩВ" />
        }
        analogues={["ОП", "ОЩ", "ОЩВ", "УОЩВ", "ЩОС", "ЩО", "Щиток осветительный", "УВРУ-Я-62"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены для приема и распределения электрической энергии в сетях трехфазного переменного тока
            напряжением 380/220 В, частотой 50 Гц с глухозаземленной нейтралью, а также защиты отходящих линий при
            перегрузках и коротких замыканиях.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
