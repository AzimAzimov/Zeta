import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function MeteringDistributionBoards() {
  return (
    <>
      <Seo
        title="Щиты учета и распределения электрической энергии ЩУР"
        description="Предназначены для приема и учета электроэнергии переменного тока частотой 50Гц и напряжением 380/220В и применяются в случаях необходимости установки аппаратов учета отдельно от вводно-распределительных устройств"
        image="/shchity-ucheta-raspredelitelniya-electroenergii.jpg"
      />
      <Breadcrumbs
        items={[
          { label: "Шкафы управления и распределения" },
          { label: "Щиты учета и распределения электрической энергии ЩУР" },
        ]}
      />
      <PageHeader bgSecondary title="Щиты учета и распределения электрической энергии ЩУР" />
      <Template
        className="pb-[88%] xl:pb-[20%]"
        equipmentImage={
          <Image
            src="/shchity-ucheta-raspredelitelniya-electroenergii.jpg"
            width={250}
            height={175}
            alt="Щиты учета и распределения электрической энергии ЩУР"
          />
        }
        analogues={["ЩУР", "ШУ"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены для приема и учета электроэнергии переменного тока частотой 50Гц и напряжением 380/220В и
            применяются в случаях необходимости установки аппаратов учета отдельно от вводно-распределительных
            устройств. Этим условием обеспечивается максимально возможная безопасность персонала, обслуживающего ВРУ.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
