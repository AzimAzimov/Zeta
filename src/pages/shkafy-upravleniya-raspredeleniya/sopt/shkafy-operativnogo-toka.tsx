import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"
import {
  shotCabinetComponents,
  shotCharacteristics,
  shotFunctionalities,
  shotOperatingConditions,
  shotPurposeFeatures,
  shotStructureData,
  shotTechnicalData,
} from "@constants"

export default function SHOT() {
  return (
    <>
      <Seo
        title="Шкафы оперативного тока (гарантированного питания) ШОТ"
        description="Применяются на трансформаторных подстанциях, распределительных пунктах для питания оперативных цепей схем релейной защиты и автоматики, также у нас вы можете получить подробную консультацию по оборудованию и приобрести по привлекательной цене"
        image="/shkafy-operativnogo-toka.jpg"
      />
      <Breadcrumbs
        items={[
          { label: "Шкафы управления и распределения" },
          { label: "Шкафы оперативного тока (гарантированного питания) ШОТ" },
        ]}
      />
      <PageHeader bgSecondary title="Шкафы оперативного тока (гарантированного питания) ШОТ" />
      <Template
        equipmentImage={
          <Image
            src="/shkafy-operativnogo-toka.jpg"
            width={218}
            height={328}
            alt="Шкаф оперативного тока (гарантированного питания) ШОТ"
          />
        }
        characteristics={shotCharacteristics}
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container">
          <Paragraph>
            Шкафы применяются на трансформаторных подстанциях, распределительных пунктах для питания оперативных цепей
            схем релейной защиты и автоматики.
          </Paragraph>
          <Paragraph>
            После восстановления соединения с основным источником питания шкаф ШОТ обеспечивает автоматический заряд
            батарей с одновременным питанием потребителей.
          </Paragraph>
          <Paragraph variant="bold">
            Шкафы ШОТ по своим характеристикам могут быть применены и в других отраслях промышленности, как правило, на
            предприятиях, использующих непрерывный технологический цикл:
          </Paragraph>
          <ul className="mx-auto flex max-w-[710px] flex-wrap justify-between gap-5 pb-2">
            {shotPurposeFeatures.map(({ icon, label }) => (
              <li key={label} className="flex w-full max-w-[165px] flex-col items-center gap-4 md:max-w-[40vw]">
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-primary-main md:h-[60px] md:w-[60px]">
                  {icon}
                </div>
                <Paragraph className="text-center">{label}</Paragraph>
              </li>
            ))}
          </ul>
          <Paragraph>
            Шкаф ШОТ предназначен для использования в сетях, как однофазного, так и трехфазного переменного тока
            напряжением 220 В и 380 В соответственно, частотой 50 Гц с глухозаземленной нейтралью.
          </Paragraph>
        </div>
        <HeadingText tag="h3">Условия эксплуатации шкафа ШОТ</HeadingText>
        <div className="template-container">
          {shotOperatingConditions.map((item) => (
            <Paragraph key={item} marker={true} children={item} />
          ))}
        </div>
        <HeadingText tag="h4">Шкаф ШОТ обеспечивает в стандартном исполнении выполнение следующих функций</HeadingText>
        <div className="template-container">
          {shotFunctionalities.map((item) => (
            <Paragraph key={item} marker={true} children={item} />
          ))}
        </div>
        <HeadingText tag="h5">Шкаф состоит из следующих основных комплектующих изделий</HeadingText>
        <div className="template-container">
          <div className="flex gap-5 sm:flex-col sm:gap-4">
            {shotCabinetComponents.map(({ items }, index) => (
              <div className="w-[50%] space-y-4 sm:w-full" key={index}>
                {items.map((item) => (
                  <Paragraph key={item} marker={true} children={item} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <HeadingText tag="h6">Технические данные шкафа ШОТ</HeadingText>
        <div className="template-container px-0">
          <table className="w-full">
            <thead>
              <tr className="h-[33px] bg-primary-main text-base-500 text-white">
                <th className="w-[70%] border-r-[1px] border-gray-100">Наименование параметра</th>
                <th className="w-[30%]">Значение</th>
              </tr>
            </thead>
            <tbody>
              {shotTechnicalData.map(({ param, value }) => (
                <tr className="border-b-[1px] border-gray-100" key={param}>
                  <td className="border-r-[1px] border-gray-100 px-5 py-4 text-base md:px-[15px] md:py-2 md:text-sm">
                    {param}
                  </td>
                  <td className="px-5 py-4 text-center text-base-500 text-primary-dark md:px-[15px] md:py-2 md:text-sm-500">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="space-y-4 px-5 md:px-[15px]">
            <Paragraph>* - габаритные размеры могут изменяться в зависимости от модификации изделия.</Paragraph>
            <Paragraph>** - специсполнение с утеплением и обогревом до УХЛ2 без выпадения конденсата.</Paragraph>
            <Paragraph>
              *** - определяется сроком службы герметизированных аккумуляторных батарей, установленных в шкафу ШОТ, в
              соответствии с эксплуатационной документацией предприятия-изготовителя.
            </Paragraph>
          </div>
        </div>
        <HeadingText tag="p">Структура условного обозначения ШОТ</HeadingText>
        <div className="template-container border-none px-0">
          <table className="w-full">
            <thead>
              <tr className="h-[33px] bg-primary-main text-base-500 text-white">
                <th className="w-[60%] border-r-[1px] border-gray-100">Наименование параметра</th>
                <th className="w-[40%]">Значение</th>
              </tr>
            </thead>
            <tbody>
              {shotStructureData.map(({ param, value }) => (
                <tr className="border-b-[1px] border-gray-100" key={param + value}>
                  <td className="border-r-[1px] border-gray-100 px-5 py-4 text-base md:px-[15px] md:py-2 md:text-sm">
                    {param}
                  </td>
                  <td className="px-5 py-4 text-center text-base-500 text-primary-dark md:px-[15px] md:py-2 md:text-sm-500">
                    {value}
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
