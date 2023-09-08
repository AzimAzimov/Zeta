import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"
import { tableData } from "@constants"

export default function PowerSupplyACDC() {
  return (
    <>
      <Seo
        title="Источник питания AC/DC 125Вт"
        description="Источник питания AC/DC 125Вт используются для питания промышленной автоматики (промышленные блоки питания) мощностью до 125 Вт и выдерживают перенапряжение 300В в течение 5 сек"
        image="/istochnik-pitaniya-AC-DC.png"
      />
      <Breadcrumbs items={[{ label: "Блоки питания" }, { label: "Источник питания AC/DC 125Вт" }]} />
      <PageHeader bgSecondary title="Источник питания AC/DC 125Вт" />
      <Template
        equipmentImage={
          <Image src="/istochnik-pitaniya-AC-DC.png" width={250} height={162} alt="Источник питания AC/DC 125Вт" />
        }
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container">
          <Paragraph>
            Источник питания AC/DC 125Вт используются для питания промышленной автоматики (промышленные блоки питания)
            мощностью до 125 Вт и выдерживают перенапряжение 300В в течение 5 сек.
          </Paragraph>
        </div>
        <HeadingText tag="h3">Особенности</HeadingText>
        <div className="template-container">
          <Paragraph marker>Защита от короткого замыкания, перегрузки, перенапряжения</Paragraph>
          <Paragraph marker>Конвективное охлаждение</Paragraph>
          <Paragraph marker>Индикация включения питания</Paragraph>
          <Paragraph marker>Устойчивость к выгоранию</Paragraph>
          <Paragraph marker>В схеме используются электролитические конденсаторы с длительным сроком службы</Paragraph>
          <Paragraph marker>Выдерживает перенапряжение 300 В переменного тока в течение 5 секунд</Paragraph>
          <Paragraph marker>Высокий предел рабочей температуры – до 70˚С</Paragraph>
          <Paragraph marker>Гарантия на изделие - 3 года</Paragraph>
        </div>
        <HeadingText tag="h4">Технические характеристики</HeadingText>
        <div className="template-container border-none px-0">
          <table className="w-full table-fixed">
            <thead className="h-[34px] bg-primary-main text-left text-base-500 text-secondary-main md:text-sm-500">
              <tr>
                <th className="w-[23%] pl-5 md:px-[15px]">Характеристика</th>
                <th className="w-[43%] border-r-[1px] border-gray-100 pl-5 md:px-0"></th>
                <th className="w-[18%] border-r-[1px] border-gray-100 pl-5 md:pl-[10px]">Выход 1</th>
                <th className="w-[18%] pl-5 md:pl-[10px]">Выход 2</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(({ characteristic, param, output1, output2 }, index, array) => (
                <tr key={index}>
                  <td
                    className={`${index !== 0 && characteristic ? "border-t-[1px] border-gray-100" : ""} ${
                      array.length - 1 === index ? "border-b-[1px] border-gray-100" : ""
                    } px-5 pt-2 text-sm md:px-2 md:text-xs`}
                  >
                    {characteristic || ""}
                  </td>
                  <td className="px border-[1px] border-t-0 border-gray-100 px-5 py-2 text-sm-400 md:px-2  md:text-xs">
                    {param}
                  </td>
                  <td
                    colSpan={output2 ? 1 : 2}
                    className="border-b-[1px] border-gray-100 px-5 py-3 text-sm-500 text-primary-dark md:px-[15px] md:text-xs"
                  >
                    {output1}
                  </td>
                  <td
                    className={`${
                      output2 ? "w-full border-l-[1px]" : "w-5"
                    } border-b-[1px] border-gray-100 px-5 py-3 text-sm-500 text-primary-dark md:px-[15px] md:text-xs`}
                  >
                    {output2 || ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Template>
    </>
  )
}
