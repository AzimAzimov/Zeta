import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"
import { acquisitions, shotAnalogues } from "@constants"

export default function SHOTCabinets() {
  return (
    <>
      <Seo
        title="Шкафы для питания и управления электродвигателями"
        description="Представляют собой унифицированную систему низковольтных комплектных устройств распределения электроэнергии для управления электроприводами и электродвигателями"
        image="/shkafy-pitaniya-i-upravleniya-electrodvigatelyami.jpg"
      />
      <Breadcrumbs
        items={[
          { label: "Шкафы управления и распределения" },
          { label: "Шкафы для питания и управления электродвигателями" },
        ]}
      />
      <PageHeader bgSecondary title="Шкафы для питания и управления электродвигателями" />
      <Template
        equipmentImage={
          <Image
            src="/shkafy-pitaniya-i-upravleniya-electrodvigatelyami.jpg"
            width={241}
            height={271}
            alt="Шкаф для питания и управления электродвигателями"
          />
        }
        analogues={shotAnalogues}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container">
          <Paragraph>
            Представляют собой унифицированную систему низковольтных комплектных устройств распределения электроэнергии
            для управления электроприводами и электродвигателями.
          </Paragraph>
          <Paragraph>
            Наши шкафы для питания и управления сертифицированы на соответствие требованиям ГОСТ Р 51321.1-2000, а также
            испытана на сейсмостойкость при сейсмических воздействиях интенсивностью 9 баллов по шкале MSK-64.
          </Paragraph>
        </div>
        <HeadingText tag="h3">НКУ предназначены для комплектования</HeadingText>
        <div className="template-container">
          {acquisitions.map(({ icon, label }) => (
            <div className="flex items-center gap-5" key={label}>
              <div className="flex h-20 w-20 flex-none items-center justify-center rounded-full border-2 border-primary-main md:h-[60px] md:w-[60px]">
                {icon}
              </div>
              <Paragraph>{label}</Paragraph>
            </div>
          ))}
          <Paragraph>Данные шкафы заменяют собой решения устаревшие решения РТЗО-88 и НКУ-СТ.</Paragraph>
        </div>
        <HeadingText tag="h4">Конструктивное выполнение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Система построена на базе унифицированного модульного конструктива фирмы НПП «ЭКРА», Prisma Plus и Blockset
            фирмы Schneider Electric и позволяет изготавливать щиты распределения электроэнергии и управления
            электроприводами на токи до 4000 (6300) А.
          </Paragraph>
          <Paragraph variant="bold">НКУ изготавливаются в двух конструктивных исполнениях:</Paragraph>
          <Paragraph marker={true}>
            НКУ-BS-СТ – система НКУ, построенная на базе унифицированных конструктивных и функциональных модулей,
            предназначенных для стационарной установки, укомплектованных низковольтными аппаратами стационарного,
            втычного и выдвижного исполнения
          </Paragraph>
          <Paragraph marker={true}>НКУ-BS-ВД – система НКУ, построенная на базе выдвижных ящиков</Paragraph>
        </div>
      </Template>
    </>
  )
}
