import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function BusbarClampCabinets() {
  return (
    <>
      <Seo
        title="Шкафы зажимов защиты шин (ШЗШ)"
        description="Предназначены для дифференциальной защиты двух систем распределительных шин напряжением 110-220 кВ с дополнительной обходной системой распределительных шин и высоковольтным выключателем"
        image="/shkafy_zazhimov_zashchity_shin.jpg"
      />
      <Breadcrumbs
        items={[{ label: "Шкафы управления и распределения" }, { label: "Шкафы зажимов защиты шин (ШЗШ)" }]}
      />
      <PageHeader bgSecondary title="Шкафы зажимов защиты шин (ШЗШ)" />
      <Template
        className="pb-[90%] xl:pb-[20%]"
        equipmentImage={
          <Image
            src="/shkafy_zazhimov_zashchity_shin.jpg"
            width={124}
            height={400}
            alt="Шкаф зажимов защиты шин (ШЗШ)"
          />
        }
        analogues={["ШЗШ"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены для дифференциальной защиты двух систем распределительных шин напряжением 110-220 кВ с
            дополнительной обходной системой распределительных шин и высоковольтным выключателем. При этом к
            распределительной системы шин подстанции подключены отдельные шиносоединительные высоковольтные выключатели.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
