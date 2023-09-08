import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function VoltageTransformerTerminalCabinets() {
  return (
    <>
      <Seo
        title="Шкафы зажимов трансформаторов напряжения (ШЗН)"
        description="Предназначены для организации вторичных цепей подключения высоковольтных автотрансформаторов, также у нас вы можете получить подробную консультацию по оборудованию и приобрести по привлекательной цене"
        image="/shkafy_zazhimov_transformatorov.jpg"
      />
      <Breadcrumbs
        items={[
          { label: "Шкафы управления и распределения" },
          { label: "Шкафы зажимов трансформаторов напряжения (ШЗН)" },
        ]}
      />
      <PageHeader bgSecondary title="Шкафы зажимов трансформаторов напряжения (ШЗН)" />
      <Template
        className="pb-[90%] xl:pb-[20%]"
        equipmentImage={
          <Image
            src="/shkafy_zazhimov_transformatorov.jpg"
            width={244}
            height={176}
            alt="Шкаф зажимов трансформаторов напряжения (ШЗН)"
          />
        }
        analogues={["ШЗН"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначен для организации вторичных цепей подключения высоковольтных автотрансформаторов.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
