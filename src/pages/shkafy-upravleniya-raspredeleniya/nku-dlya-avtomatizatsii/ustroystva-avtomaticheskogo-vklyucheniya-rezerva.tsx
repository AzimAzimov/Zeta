import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function AutomaticTransferSwitching() {
  return (
    <>
      <Seo
        title="Устройства автоматического включения резерва АВР"
        description="Предназначены для автоматического переключения на резервное питание приборов освещения и силового электрооборудования при исчезновении нормального сетевого напряжения и для возврата электроцепей в исходное состояние при восстановлении в сети нормального напряжения"
        image="/ustroystva-avtomaticheskogo-vklyucheniya-rezerva.jpg"
      />
      <Breadcrumbs
        items={[
          { label: "Шкафы управления и распределения" },
          { label: "Устройства автоматического включения резерва АВР" },
        ]}
      />
      <PageHeader bgSecondary title="Устройства автоматического включения резерва АВР" />
      <Template
        className="pb-[88%] xl:pb-[20%]"
        equipmentImage={
          <Image
            src="/ustroystva-avtomaticheskogo-vklyucheniya-rezerva.jpg"
            width={230}
            height={308}
            alt="Устройства автоматического включения резерва АВР"
          />
        }
        analogues={["ЩАП", "Шкаф автоматического переключения на резерв", "ЩАВР", "УВРУ-Я", "УВРУ-ЯШ"]}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>
            Предназначены для автоматического переключения на резервное питание приборов освещения и силового
            электрооборудования при исчезновении нормального сетевого напряжения и для возврата электроцепей в исходное
            состояние при восстановлении в сети нормального напряжения.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
