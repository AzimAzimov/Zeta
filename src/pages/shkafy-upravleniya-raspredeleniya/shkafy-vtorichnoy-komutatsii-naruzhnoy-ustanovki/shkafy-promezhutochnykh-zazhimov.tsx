import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function IntermediateTerminalCabinets() {
  return (
    <>
      <Seo
        title="Шкафы промежуточных зажимов (ШЗВ)"
        description="Шкафы промежуточных зажимов (ШЗВ) предназначены для организации электрических соединений вторичных цепей на подстанция ОРУ 35-750кВ, также у нас вы можете получить подробную консультацию по оборудованию и приобрести по привлекательной цене"
        image="/shkafy-promezhutochnykh-zazhimov.jpg"
      />
      <Breadcrumbs
        items={[{ label: "Шкафы управления и распределения" }, { label: "Шкафы промежуточных зажимов (ШЗВ)" }]}
      />
      <PageHeader bgSecondary title="Шкафы промежуточных зажимов (ШЗВ)" />
      <Template
        className="pb-[90%] xl:pb-[20%]"
        equipmentImage={
          <Image
            src="/shkafy-promezhutochnykh-zazhimov.jpg"
            width={202}
            height={400}
            alt="Шкаф промежуточных зажимов (ШЗВ)"
          />
        }
        analogues={["ШЗВ"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены для организации электрических соединений вторичных цепей на подстанция ОРУ 35-750кВ.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
