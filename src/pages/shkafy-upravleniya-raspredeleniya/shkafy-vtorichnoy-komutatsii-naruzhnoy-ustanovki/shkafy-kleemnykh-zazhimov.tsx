import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function TerminalCabinets() {
  const characteristics = [
    { param: "Сечение подключаемых проводов", value: "2-6 мм" },
    {
      param: "Количество клеммных зажимов",
      value: "до 400",
    },
    {
      param: "Номинальный ток и напряжение по требованию Заказчика",
    },
    {
      param: "Габаритные размеры шкафа, мм (ВхДхГ) по требованию Заказчика",
    },
  ]

  return (
    <>
      <Seo
        title="Шкафы клеммных зажимов"
        description="Шкафы клеммных зажимов предназначены для распределения сигналов управления и измерения, также у нас вы можете получить подробную консультацию по оборудованию и приобрести по привлекательной цене"
        image="/shkafy-kleemnykh-zazhimov.jpg"
      />
      <Breadcrumbs items={[{ label: "Шкафы управления и распределения" }, { label: "Шкафы клеммных зажимов" }]} />
      <PageHeader bgSecondary title="Шкафы клеммных зажимов" />
      <Template
        className="pb-[85%] xl:pb-[20%]"
        equipmentImage={
          <Image src="/shkafy-kleemnykh-zazhimov.jpg" width={253} height={214} alt="Шкаф клеммных зажимов" />
        }
        characteristics={characteristics}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container border-none">
          <Paragraph>Предназначены для распределения сигналов управления и измерения.</Paragraph>
          <Paragraph variant="bold">Возможности:</Paragraph>
          <Paragraph marker={true}>Предназначены для распределения сигналов управления и измерения</Paragraph>
          <Paragraph marker={true}>Соединение и разветвление вторичных и силовых цепей</Paragraph>
        </div>
      </Template>
    </>
  )
}
