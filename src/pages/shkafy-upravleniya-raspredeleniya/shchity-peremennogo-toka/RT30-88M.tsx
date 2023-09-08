import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function RT3088M() {
  return (
    <>
      <Seo
        title="РТЗО-88М"
        description="Предназначены для питания и управления электроприводами мощностью до 10 кВт и электроприводами запорной и регулирующей арматуры мощностью до 14-28 кВт, а также электродвигателями мощностью до 10 кВт механизмов собственных нужд электростанций (ТЭС и АЭС)"
        image="/RT30-88M.jpg"
      />
      <Breadcrumbs items={[{ label: "Шкафы управления и распределения" }, { label: "РТЗО-88М" }]} />
      <PageHeader bgSecondary title="РТЗО-88М" />
      <Template
        className="pb-[88%] xl:pb-[20%]"
        equipmentImage={<Image src="/RT30-88M.jpg" width={253} height={214} alt="РТЗО-88М" />}
        analogues={["РТЗО-88B", "РТЗО-88SE", "РТЗО-88BSO"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены для питания и управления электроприводами мощностью до 10 кВт и электроприводами запорной и
            регулирующей арматуры мощностью до 14-28 кВт, а также электродвигателями мощностью до 10 кВт механизмов
            собственных нужд электростанций (ТЭС и АЭС). Кроме того, предусмотрено отдельное исполнение НКУ для
            промышленности и коммунального хозяйства.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
