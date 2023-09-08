import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function SolenoidPowerCabinets() {
  return (
    <>
      <Seo
        title="Шкафы питания соленоидов (ШПВ)"
        description="Предназначены для питания трехфазным переменным электрическим током катушек включения высоковольтных выключателей, при подключение в кольцо одного или двух питающих кабелей на подстанциях ОРУ 35-750кВ"
        image="/shkafy-pitaniya-solenoidov.jpg"
      />
      <Breadcrumbs
        items={[{ label: "Шкафы управления и распределения" }, { label: "Шкафы питания соленоидов (ШПВ)" }]}
      />
      <PageHeader bgSecondary title="Шкафы питания соленоидов (ШПВ)" />
      <Template
        className="pb-[90%] xl:pb-[20%]"
        equipmentImage={
          <Image src="/shkafy-pitaniya-solenoidov.jpg" width={135} height={351} alt="Шкафы питания соленоидов (ШПВ)" />
        }
        analogues={["ШПВ", "ШПВК"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены для питания трехфазным переменным электрическим током катушек включения высоковольтных
            выключателей, при подключение в кольцо одного или двух питающих кабелей на подстанциях ОРУ 35-750кВ.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
