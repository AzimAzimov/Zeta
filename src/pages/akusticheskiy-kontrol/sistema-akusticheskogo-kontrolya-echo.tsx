import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo } from "@components"

export default function AcousticControlSystem() {
  return (
    <>
      <Seo
        title="Система акустического контроля Echo"
        description="Система Echo - это решение, предназначенное для акустического контроля энергетического оборудования с помощью использования технологий искусственного интеллекта (ИИ). Echo нацелено на предотвращение аварийных остановок оборудования, своевременную диагностику неисправностей промышленного оборудования, планирование профилактического обслуживания и ремонта, выявление конкретных повреждений, поломок"
        image="/sistema-akusticheskogo-kontrolya-echo.jpg"
      />
      <Breadcrumbs items={[{ label: "Акустический контроль" }, { label: "Система акустического контроля Echo" }]} />
      <PageHeader
        className="!bg-[url('/page-header-bg-acoustic-control.jpg')]"
        title="Система акустического контроля Echo"
      />
      <div className="x-paddings w-full bg-secondary-main pt-8 pb-[48%] md:pt-6">
        <div className="flex justify-between gap-5 md:flex-col md:gap-6">
          <div className="relative block min-h-full w-full max-w-[411px] lg:h-auto lg:min-w-[292px] md:min-h-[240px] md:max-w-full">
            <Image
              src="/sistema-akusticheskogo-kontrolya-echo.jpg"
              alt="Система акустического контроля Echo"
              fill
              className="h-full w-full"
              sizes="(max-width: 767px) 100vw,
              (max-width: 1200px) 40vw,
              33vw"
              priority
            />
          </div>
          <div className="w-full space-y-4">
            <HeadingText className="-ml-5 md:-ml-[15px]">Назначение</HeadingText>
            <Paragraph>
              Система Echo - это решение, предназначенное для акустического контроля энергетического оборудования с
              помощью использования технологий искусственного интеллекта (ИИ). Echo нацелено на предотвращение аварийных
              остановок оборудования, своевременную диагностику неисправностей промышленного оборудования, планирование
              профилактического обслуживания и ремонта, выявление конкретных повреждений, поломок.
            </Paragraph>
            <Paragraph>
              Используя методики обработки данных для обучения искусственного интеллекта, Echo позволяет в кратчайшие
              сроки получить максимальный объем данных для обучения модели искусственного интеллекта и добиться
              высокоточных результатов по диагностике.
            </Paragraph>
          </div>
        </div>
        <div className="mt-8 space-y-4 md:mt-6">
          <Paragraph variant="bold">Результат работы системы также достигается с помощью:</Paragraph>
          <Paragraph marker={true}>
            получения акустических данных для анализа бесконтактным способом с помощью микрофонов и пьезометрических
            датчиков;
          </Paragraph>
          <Paragraph marker={true}>
            использования специальных алгоритмов аугментации шумовой картины и разметки данных;
          </Paragraph>
          <Paragraph marker={true}>
            применения алгоритмов экстракции репрезентативных признаков с помощью автоэнкодеров;
          </Paragraph>
          <Paragraph marker={true}>формирования модели прогнозирования аварий.</Paragraph>
        </div>
        <div className="mt-6 space-y-4">
          <Paragraph variant="bold">Внедрение системы позволит:</Paragraph>
          <Paragraph marker={true}>своевременно обнаруживать текущие проблемы при работе оборудования;</Paragraph>
          <Paragraph marker={true}>осуществлять раннюю диагностику развивающихся дефектов;</Paragraph>
          <Paragraph marker={true}>оценивать вероятность выхода тех или иных узлов агрегата из строя;</Paragraph>
          <Paragraph marker={true}>
            осуществлять сбор данных для планирования технического обслуживания и ремонта;
          </Paragraph>
          <Paragraph marker={true}>
            создать систему круглосуточного мониторинга оборудования на уровне всего предприятия с управлением из
            единого центра.
          </Paragraph>
        </div>
        <Paragraph className="mt-6">
          Система акустического контроля Echo состоит из сервера Echo и измерительных комплектов Echo V1.0 или V2.0 на
          выбор.
        </Paragraph>
      </div>
    </>
  )
}
