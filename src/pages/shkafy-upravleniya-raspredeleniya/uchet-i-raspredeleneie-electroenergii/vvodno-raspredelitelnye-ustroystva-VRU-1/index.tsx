import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"
import { VRULinks } from "@constants"
import { DirectionRightIcon } from "@icons"

export default function VRU1() {
  return (
    <>
      <Seo
        title="Вводно-распределительные устройства ВРУ-1"
        description="Предназначены для приема и распределения электроэнергии, защиты оборудования от перегрузок и токов короткого замыкания в сетях переменного тока напряжением 380/220 В, частотой 50 и 60 Гц а, также для защиты линий при перегрузках и коротких замыканиях. ВРУ комплектуются из панелей одностороннего обслуживания и могут быть однопанельными и многопанельными"
        image="/vvodno-raspredelitelnye-ustroystva-VRU-1.jpg"
      />
      <Breadcrumbs
        items={[{ label: "Шкафы управления и распределения" }, { label: "Вводно-распределительные устройства ВРУ-1" }]}
      />
      <PageHeader bgSecondary title="Вводно-распределительные устройства ВРУ-1" />
      <Template
        equipmentImage={
          <Image
            src="/vvodno-raspredelitelnye-ustroystva-VRU-1.jpg"
            width={261}
            height={249}
            alt="Вводно-распределительные устройства ВРУ-1"
          />
        }
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены для приема и распределения электроэнергии, защиты оборудования от перегрузок и токов короткого
            замыкания в сетях переменного тока напряжением 380/220 В, частотой 50 и 60 Гц а, также для защиты линий при
            перегрузках и коротких замыканиях. ВРУ комплектуются из панелей одностороннего обслуживания и могут быть
            однопанельными и многопанельными.
          </Paragraph>
          <div className="space-y-1 pt-4">
            {VRULinks.map(({ pageName, link }) => (
              <Link
                href={link}
                key={pageName}
                className="group flex h-[50px] w-full items-center justify-between bg-gray-50 px-5 hover:bg-primary-main"
              >
                <span className="text-base-400 group-hover:text-secondary-main">{pageName}</span>
                <DirectionRightIcon className="fill-primary-main group-hover:fill-white" />
              </Link>
            ))}
          </div>
        </div>
      </Template>
    </>
  )
}
