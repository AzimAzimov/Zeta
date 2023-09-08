import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function PowerDistributionCabinets() {
  const styles = {
    markedText:
      "marker-rounded-fill ml-[30px] pl-[14px] text-sm before:h-1 before:w-1 before:bg-secondary-dark md:ml-[25px] md:font-light md:text-xs",
    header: "flex h-[48px] w-full items-center bg-primary-main pl-5 text-lg text-secondary-main md:text-base-500",
    list: "flex items-center justify-between gap-5 py-2 border-t-[1px] border-gray-100",
    listItem1: "text-base md:text-sm",
    listItem2: "max-w-[70px] flex-none text-base-500 text-primary-dark",
  }

  const { markedText, header, list, listItem1, listItem2 } = styles

  return (
    <>
      <Seo
        title="Шкафы распределительные силовые ШРС, ШР"
        description="Предназначены для приёма и распределения электрической энергии в промышленных установках напряжением 380/220 В трёхфазного переменного тока частотой 50 Гц в сетях с глухозаземлённой нейтралью, а также для защиты силовых и осветительных линий при перегрузках и коротких замыканиях. Шкафы рассчитаны на номинальные токи 250, 400 А"
        image="/shkafy-raspredelitelnye-silovye-SHRS.jpg"
      />
      <Breadcrumbs
        items={[{ label: "Шкафы управления и распределения" }, { label: "Шкафы распределительные силовые ШРС, ШР" }]}
      />
      <PageHeader bgSecondary title="Шкафы распределительные силовые ШРС, ШР" />
      <Template
        equipmentImage={
          <Image
            src="/shkafy-raspredelitelnye-silovye-SHRS.jpg"
            width={205}
            height={384}
            alt="Шкафы распределительные силовые ШРС, ШР"
          />
        }
        imageChildren={
          <>
            <p className={header}>Характеристики</p>
            <ul className="max-w-[420px] px-5 pb-4 pt-2">
              <li className={`${list} border-none`}>
                <p className="text-sm text-secondary-dark md:text-xs md:font-light">
                  Основные технические данные и типоисполнения шкафов в зависимости от применяемых схем приведены в
                  таблице 1.
                </p>
              </li>
              <li className={`${list} border-none`}>
                <div className={`block w-full space-y-2 ${listItem1}`}>
                  Выдерживаемый ударный ток:
                  <div className="mt-2 flex items-center justify-between">
                    <span className="marker-rounded-fill pl-3 before:h-1 before:w-1">при ном. токе шкафа 250 А</span>
                    <span className={listItem2}>не менее 10 кА</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="marker-rounded-fill pl-3 before:h-1 before:w-1">при ном. токе шкафа 400 А</span>
                    <span className={listItem2}>не менее 25 кА</span>
                  </div>
                </div>
              </li>
              <li className={list}>
                <p className={listItem1}>Степень защиты шкафов</p>
                <span className={listItem2}>IP22, IP54</span>
              </li>
            </ul>
            <p className={header}>Аналоги</p>
            <ul className="max-w-[450px] px-5 pb-4 pt-2">
              {["ВРУ-8503Э", "ВРУ8504Э МУ", "ВРУ-8505Э", "ВРУ8-1Н", "УВРУ-Я-12", "ВРУ8-2Н", "УВРУ-Я-42"].map(
                (analog, index) => (
                  <li key={analog + index} className={`py-2 ${index !== 0 ? "border-t-[1px] border-gray-100" : ""}`}>
                    <p className="text-base md:text-sm">{analog}</p>
                  </li>
                )
              )}
            </ul>
          </>
        }
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container">
          <Paragraph>
            Шкафы распределительные силовые для внутренней установки серий ШРС1 и ШР11 (шкафы) предназначены для приёма
            и распределения электрической энергии в промышленных установках напряжением 380/220 В трёхфазного
            переменного тока частотой 50 Гц в сетях с глухозаземлённой нейтралью, а также для защиты силовых и
            осветительных линий при перегрузках и коротких замыканиях. Шкафы рассчитаны на номинальные токи 250, 400 А.
          </Paragraph>
          <Paragraph>
            Климатическое исполнение и категория размещения шкафов – У2, У3, УХЛ3 по ГОСТ 15150 и ГОСТ 1554
          </Paragraph>
        </div>
        <HeadingText tag="h3">Условия эксплуатации</HeadingText>
        <div className="template-container border-none">
          <Paragraph variant="bold">Шкафы предназначены для работы в следующих условиях:</Paragraph>
          <Paragraph marker={true}>Высота над уровнем моря – не более 1000 м;</Paragraph>
          <div className="space-y-2">
            <Paragraph marker={true}>Температура окружающего воздуха:</Paragraph>
            <p className={markedText}>от минус 45ºС до плюс 40ºС для У2;</p>
            <p className={markedText}>от минус 45ºС до плюс 40ºС для У3;</p>
            <p className={markedText}>от минус 60ºС до плюс 40ºС для УХЛ3.</p>
          </div>
          <Paragraph marker={true}>
            Относительная влажность воздуха – до 98% при температуре 25ºС для У2, У3, УХЛ3;
          </Paragraph>
          <Paragraph marker={true}>
            Окружающая среда – невзрывоопасная, не содержащая токопроводящей пыли, агрессивных газов и паров в
            концентрациях, разрушающих металлы и изоляцию;
          </Paragraph>
          <Paragraph marker={true}>
            Группа условий эксплуатации в части воздействия механических факторов внешней среды – М2 по ГОСТ 17516.1;
          </Paragraph>
          <Paragraph marker={true}>
            Рабочее положение в пространстве – вертикальное, допускается отклонение от рабочего положения до 5° в любую
            сторону
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
