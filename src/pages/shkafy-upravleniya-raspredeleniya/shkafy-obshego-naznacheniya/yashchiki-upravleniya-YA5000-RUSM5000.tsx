import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function YA5000RUSM5000() {
  const purposes: string[] = [
    "Ящики управления типа Я5000, (РУСМ5000, ЩУ5000) предназначены для управления асинхронными электродвигателями с короткозамкнутым ротором мощностью до 75 кВт., работающими в продолжительном, кратковременном или повторно-кратковременном режимах. Ящики управления РУСМ5000 применяются в помещениях с высокой влажностью и изготавливаются в корпусах со степенью защиты IР54.",
    "Соответствуют ГОСТ Р51321.1-2000.",
    "Ящики управления изготавливаются в металлических боксах с монтажной панелью. Степень защиты в зависимости от типа ящика: IP31 или IP54.",
    "Ящики комплектуются в соответствии с обозначением и типовым индексом:",
    "автоматическими выключателями",
    "пускателями",
    "тепловыми реле",
    "светосигнальной арматурой",
    "аппаратами управления (кнопки, переключатели)",
  ]

  return (
    <>
      <Seo
        title="Ящики управления Я5000, РУСМ5000"
        description="Предназначены для управления асинхронными электродвигателями с короткозамкнутым ротором мощностью до 75 кВт., работающими в продолжительном, кратковременном или повторно-кратковременном режимах. Ящики управления РУСМ5000 применяются в помещениях с высокой влажностью и изготавливаются в корпусах со степенью защиты IР54"
        image="/yashchiki-upravleniya-YA5000-RUSM5000.jpg"
      />
      <Breadcrumbs
        items={[{ label: "Шкафы управления и распределения" }, { label: "Ящики управления Я5000, РУСМ5000" }]}
      />
      <PageHeader bgSecondary title="Ящики управления Я5000, РУСМ5000" />
      <Template
        className="pb-[3%]"
        equipmentImage={
          <Image
            src="/yashchiki-upravleniya-YA5000-RUSM5000.jpg"
            width={218}
            height={266}
            alt="Ящики управления Я5000, РУСМ5000"
          />
        }
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container">
          {purposes.map((item, index) => (
            <Paragraph key={item} marker={index > 3} variant={index === 3 ? "bold" : "normal"} children={item} />
          ))}
        </div>
        <HeadingText tag="h3">Структура условного обозначения</HeadingText>
        <div className="template-container border-none">
          <Image
            src="/yashchiki-upravleniya-YA5000-RUSM5000_schema-1.jpg"
            width={580}
            height={408}
            className="w-full"
            alt="Структура условного обозначения Я5000, РУСМ5000"
          />
          <p className="pb-2 text-sm text-gray-300 md:text-xs">
            * Примечание: - указывается на второй фидер в нереверсивных двухфидерных ящиках с одним автоматическим
            выключателем на два фидера
          </p>
          <Image
            src="/yashchiki-upravleniya-YA5000-RUSM5000_schema-2.jpg"
            width={583}
            height={210}
            className="w-full"
            alt="Структура условного обозначения Я(РУСМ)5110"
          />
          <Image
            src="/yashchiki-upravleniya-YA5000-RUSM5000_schema-3.jpg"
            width={583}
            height={218}
            className="w-full"
            alt="Структура условного обозначения Я(РУСМ)5111"
          />
          <Image
            src="/yashchiki-upravleniya-YA5000-RUSM5000_schema-4.jpg"
            width={583}
            height={246}
            className="w-full"
            alt="Структура условного обозначения Я(РУСМ)5411"
          />
          <Image
            src="/yashchiki-upravleniya-YA5000-RUSM5000_schema-5.jpg"
            width={583}
            height={187}
            className="w-full"
            alt="Структура условного обозначения Я(РУСМ)5113"
          />
          <Image
            src="/yashchiki-upravleniya-YA5000-RUSM5000_schema-6.jpg"
            width={583}
            height={224}
            className="w-full"
            alt="Структура условного обозначения Я(РУСМ)5141"
          />
          <Image
            src="/yashchiki-upravleniya-YA5000-RUSM5000_schema-7.jpg"
            width={583}
            height={297}
            className="w-full"
            alt="Структура условного обозначения Я(РУСМ)5115"
          />
          <Image
            src="/yashchiki-upravleniya-YA5000-RUSM5000_schema-8.jpg"
            width={583}
            height={308}
            className="w-full"
            alt="Структура условного обозначения Я(РУСМ)5441"
          />
          <Image
            src="/yashchiki-upravleniya-YA5000-RUSM5000_schema-9.jpg"
            width={583}
            height={182}
            className="w-full"
            alt="Структура условного обозначения Я(РУСМ)5131"
          />
          <Image
            src="/yashchiki-upravleniya-YA5000-RUSM5000_schema-10.jpg"
            width={583}
            height={293}
            className="w-full"
            alt="Структура условного обозначения Я(РУСМ)5125"
          />
          <Image
            src="/yashchiki-upravleniya-YA5000-RUSM5000_schema-11.jpg"
            width={583}
            height={279}
            className="w-full"
            alt="Структура условного обозначения Я(РУСМ)5135"
          />
        </div>
      </Template>
    </>
  )
}
