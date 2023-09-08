import React, { Fragment } from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"
import {
  ownNeedsCabinetsAnalogues,
  ownNeedsCabinetsComposition,
  ownNeedsCabinetsFunctionalities,
  ownNeedsCabinetsPurposes,
} from "@constants"

export default function OwnNeedsCabinets() {
  const header = "flex h-[48px] w-full items-center bg-primary-main pl-5 text-lg text-secondary-main md:text-base-500"
  const list = "flex items-center justify-between gap-5 py-2 border-t-[1px] border-gray-100"
  const listItem1 = "text-base md:text-sm"
  const listItem2 = "max-w-[70px] flex-none text-base-500 text-primary-dark"
  const markerOutlined =
    "marker-rounded-fill ml-7 pl-[18px] before:h-2 before:w-2 before:border-[1px] before:border-primary-main before:bg-secondary-main md:ml-6"
  const markerFilled =
    "marker-rounded-fill ml-[48px] pl-[14px] text-sm before:h-1 before:w-1 before:bg-secondary-dark md:ml-[44px] md:text-xs"

  return (
    <>
      <Seo
        title="Щиты собственных нужд (ЩСН–0,4 кВ)"
        description="Используются для питания оборудования энергией в системах собственных нужд (освещение, обогрев, приводы выключателей, насосы и др.) переменным током напряжением 0,4 кВ"
        image="/shchity-sobstvennykh-nuzhd.jpg"
      />
      <Breadcrumbs
        items={[{ label: "Шкафы управления и распределения" }, { label: "Щиты собственных нужд (ЩСН–0,4 кВ)" }]}
      />
      <PageHeader bgSecondary title="Щиты собственных нужд (ЩСН–0,4 кВ)" />
      <Template
        equipmentImage={
          <Image
            src="/shchity-sobstvennykh-nuzhd.jpg"
            width={243}
            height={351}
            alt="Щит собственных нужд (ЩСН–0,4 кВ)"
          />
        }
        imageChildren={
          <>
            <p className={header}>Характеристики</p>
            <ul className="max-w-[420px] px-5 pb-4 pt-2">
              <li className={`${list} border-none`}>
                <p className={listItem1}>Номинальное напряжение главных цепей, В</p>
                <span className={listItem2}>не более 660, 50 Гц</span>
              </li>
              <li className={list}>
                <div className={`block w-full space-y-2 ${listItem1}`}>
                  Номинальное напряжение вспомогательных цепей:
                  <div className="mt-2 flex items-center justify-between">
                    <span className="marker-rounded-fill pl-3 before:h-1 before:w-1">переменного тока, В</span>
                    <span className={listItem2}>220, 50 Гц</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="marker-rounded-fill pl-3 before:h-1 before:w-1">постоянного тока, В</span>
                    <span className={listItem2}>220</span>
                  </div>
                </div>
              </li>
              <li className={list}>
                <p className={listItem1}>Электродинамическая стойкость сборных шин, кА</p>
                <span className={listItem2}>до 40</span>
              </li>
              <li className={list}>
                <p className={listItem1}>Степень защиты</p>
                <span className={listItem2}>IP31*</span>
              </li>
              <li className={`${list} border-none pt-0`}>
                <p className="text-sm text-secondary-dark md:text-xs md:font-light">
                  * по согласованию между заказчиком и изготовителем шкафы могут изготавливаться в других климатических
                  исполнениях по ГОСТ 15150-69.
                </p>
              </li>
            </ul>
            <p className={header}>Аналоги</p>
            <ul className="max-w-[450px] px-5 pb-4 pt-2">
              {ownNeedsCabinetsAnalogues.map((analog, index) => (
                <li key={analog + index} className={`py-2 ${index !== 0 ? "border-t-[1px] border-gray-100" : ""}`}>
                  <p className="text-base md:text-sm">{analog}</p>
                </li>
              ))}
            </ul>
          </>
        }
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container">
          {ownNeedsCabinetsPurposes.map(({ variant, marker, text }, index) => (
            <Fragment key={text}>
              <Paragraph variant={variant} marker={marker} children={text} />
              {index === 11 && (
                <Paragraph variant="bold">
                  Обслуживание шкафов: одно- или двухстороннее;
                  <br /> Цепи вторичной коммутации проложены в кабельных коробах;
                  <br /> Зажимы проходные и измерительные фирмы Weidmuller.
                </Paragraph>
              )}
            </Fragment>
          ))}
          <p className="text-sm text-gray-300 md:text-xs">
            Щиты ЩСН–0,4 кВ изготавливаются в соответствии с требованиями нормативных документов ГОСТ Р 51321.1-2000
            (МЭК 60439-1-92), ТУ 3430?022?20572135?2006, СО 153?34.20.122?2006 «Нормы технологического проектирования
            подстанций переменного тока с высшим напряжением 35–750 кВ».
          </p>
        </div>
        <HeadingText tag="h3">Функциональные возможности</HeadingText>
        <div className="template-container">
          {ownNeedsCabinetsFunctionalities.map((item) => (
            <Paragraph key={item} children={item} />
          ))}
        </div>
        <HeadingText tag="h4">Состав ЩСН</HeadingText>
        <div className="template-container">
          {ownNeedsCabinetsComposition.map((item, index) => (
            <Paragraph key={item} marker={index < 4} children={item} />
          ))}
        </div>
        <HeadingText tag="h5">Дополнительные устройства</HeadingText>
        <div className="template-container">
          <Paragraph>
            Возможна установка локального устройства регистрации аналоговых и дискретных сигналов в нормальном и
            аварийном режиме работы ЩСН.
          </Paragraph>
        </div>
        <HeadingText tag="h6">Комплектация ЩСН</HeadingText>
        <div className="template-container border-none">
          <Paragraph variant="bold" marker={true}>
            Автоматические выключатели:
          </Paragraph>
          <Paragraph className={markerOutlined}>Вводные и секционные</Paragraph>
          <p className={markerFilled}>
            <span className="font-normal text-primary-dark">исполнение:</span> выкатное
          </p>
          <p className={markerFilled}>
            <span className="font-normal text-primary-dark">тип:</span> Schneider Electric, Moeller, ABB, Siemens и др.
          </p>
          <p className={markerFilled}>
            <span className="font-normal text-primary-dark">наличие АВР</span>
          </p>
          <p className={markerFilled}>
            <span className="font-normal text-primary-dark">вид управления:</span> местное, дистанционное,
            телеуправление
          </p>
          <Paragraph className={markerOutlined}>Фидерные</Paragraph>
          <p className={markerFilled}>
            <span className="font-normal text-primary-dark">исполнение:</span> втычное и фиксированное
          </p>
          <p className={markerFilled}>
            <span className="font-normal text-primary-dark">тип:</span> Schneider Electric, Moeller, ABB, Siemens
          </p>
          <p className={markerFilled}>
            <span className="font-normal text-primary-dark">наличие АВР</span>
          </p>
          <p className={markerFilled}>
            <span className="font-normal text-primary-dark">вид управления:</span> местное, возможно дистанционное
          </p>
          <Paragraph variant="bold" marker={true}>
            Электронные счетчики различных фирм-производителей, которые устанавливаются на вводах;
          </Paragraph>
          <Paragraph variant="bold" marker={true}>
            Аппаратура цепей вторичной коммутации и КИП.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
