import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"
import { lightingControlBoxTableData } from "@constants"

export default function LightingControlBox() {
  const th =
    "flex h-[108px] items-center justify-center border-r-[1px] border-gray-100 px-[10px] text-center text-sm-500 text-secondary-main md:px-2"
  const td =
    "border-r-[1px] text-center border-b-[1px] border-gray-100 py-3 px-[10px] text-sm flex justify-center items-center md:px-2"

  return (
    <>
      <Seo
        title="Ящики управления освещением ЯУО-9601, ЯУО-9602"
        description="Ящики управления освещением ЯУО-9601 (с фотодатчиком и недельным реле), ЯУО-9602 предназначены для автоматического, местного, ручного или дистанционного (из диспетчерского пункта) управления осветительными сетями и установками производственных зданий, сооружений, территорий любых объектов с любыми источниками света (лампами накаливания, ДРЛ, ДРИ, ДНаТ, люминесцентными и др.)"
        image="/yashchiki-upravleniya-osvesheniem.jpg"
      />
      <Breadcrumbs
        items={[
          { label: "Шкафы управления и распределения" },
          { label: "Ящики управления освещением ЯУО-9601, ЯУО-9602" },
        ]}
      />
      <PageHeader bgSecondary title="Ящики управления освещением ЯУО-9601, ЯУО-9602" />
      <Template
        equipmentImage={
          <Image
            src="/yashchiki-upravleniya-osvesheniem.jpg"
            width={253}
            height={214}
            alt="Ящик управления освещением ЯУО-9601, ЯУО-9602"
          />
        }
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container">
          <Paragraph>
            Ящики управления освещением ЯУО-9601 (с фотодатчиком и недельным реле), ЯУО-9602 предназначены для
            автоматического, местного, ручного или дистанционного (из диспетчерского пункта) управления осветительными
            сетями и установками производственных зданий, сооружений, территорий любых объектов с любыми источниками
            света (лампами накаливания, ДРЛ, ДРИ, ДНаТ, люминесцентными и др.)
          </Paragraph>
          <Paragraph>Климатическое исполнение и категория размещения - У3.1.</Paragraph>
        </div>
        <HeadingText tag="h3">Технические характеристики</HeadingText>
        <div className="template-container border-none px-0">
          <Paragraph className="px-5 md:px-[15px]">
            Технические характеристики ящиков ЯУО-9601, ЯУО-9602 приведены в таблице 1.
          </Paragraph>
          <table className="w-full table-auto">
            <thead className="">
              <tr className="flex w-full bg-primary-main">
                <th className={`${th} w-[29%]`}>Наименование</th>
                <th className={`${th} w-[12%]`}>Iном., А</th>
                <th className={`${th} w-[18%]`}>Iном. выкл., А</th>
                <th className={`${th} w-[25%]`}>Диапазон теплового реле, А</th>
                <th className={`${th} w-[16%]`}>U упр. цепи, В</th>
              </tr>
            </thead>
            <tbody>
              {lightingControlBoxTableData.map(({ name, nomA, nomAOff, range, chains }, index, array) => (
                <tr className="flex" key={index}>
                  <td className={`${td} w-[29%] font-normal text-primary-dark`}>{name}</td>
                  <td className={`${td} w-[12%]`}>{nomA}</td>
                  <td className={`${td} w-[18%]`}>{nomAOff}</td>
                  <td className={`${td} w-[25%]`}>{range}</td>
                  <td
                    className={`${
                      index === 8 || index === array.length - 1 ? "border-b-[1px] border-gray-100" : ""
                    } flex w-[16%] items-center justify-center text-sm`}
                  >
                    {chains && chains}
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
