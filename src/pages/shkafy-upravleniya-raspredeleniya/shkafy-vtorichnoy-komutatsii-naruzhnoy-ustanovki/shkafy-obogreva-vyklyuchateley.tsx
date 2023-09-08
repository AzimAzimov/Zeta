import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function CircuitBreakerHeatingCabinets() {
  return (
    <>
      <Seo
        title="Шкафы обогрева выключателей (ШОВ)"
        description="Предназначены для осуществления процесса обогрева высоковольтных выключателей и электромагнитных приводов на подстанциях ОРУ 35-750кВ. При этом коммутируемая мощность нагревателей составит менее 10кВт на фазу"
        image="/shkafy-obogreva-vyklyuchateley.jpg"
      />
      <Breadcrumbs
        items={[{ label: "Шкафы управления и распределения" }, { label: "Шкафы обогрева выключателей (ШОВ)" }]}
      />
      <PageHeader bgSecondary title="Шкафы обогрева выключателей (ШОВ)" />
      <Template
        className="pb-[90%] xl:pb-[20%]"
        equipmentImage={
          <Image
            src="/shkafy-obogreva-vyklyuchateley.jpg"
            width={253}
            height={214}
            alt="Шкаф обогрева выключателей (ШОВ)"
          />
        }
        analogues={["ШОВ"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены для осуществления процесса обогрева высоковольтных выключателей и электромагнитных приводов на
            подстанциях ОРУ 35-750кВ. При этом коммутируемая мощность нагревателей составит менее 10кВт на фазу.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
