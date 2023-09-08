import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"

export default function ABPCabinets() {
  const markerStyles = "ml-5 pl-[14px] before:h-1 before:w-1 before:rounded-full before:bg-secondary-dark md:ml-[15px]"

  return (
    <>
      <Seo
        title="Шкафы ввода с АВР серии ШУ (ЯУ) 8250, 8350"
        description="Предназначены для автоматического переключения на резерв освещения и силового электрооборудования при исчезновении напряжения основного (рабочего) питания в цепях постоянного и переменного тока с фазным напряжением до 220 В"
        image="/shkafy-vvoda-ABP.jpg"
      />
      <Breadcrumbs
        items={[{ label: "Шкафы управления и распределения" }, { label: "Шкафы ввода с АВР серии ШУ (ЯУ) 8250, 8350" }]}
      />
      <PageHeader bgSecondary title="Шкафы ввода с АВР серии ШУ (ЯУ) 8250, 8350" />
      <Template
        equipmentImage={
          <Image
            src="/shkafy-vvoda-ABP.jpg"
            width={228}
            height={271}
            alt="Шкафы ввода с АВР серии ШУ (ЯУ) 8250, 8350"
          />
        }
      >
        <HeadingText>Назначение</HeadingText>
        <div className="template-container">
          <Paragraph>
            Предназначены для автоматического переключения на резерв освещения и силового электрооборудования при
            исчезновении напряжения основного (рабочего) питания в цепях постоянного и переменного тока с фазным
            напряжением до 220 В. Переключение потребителей на основное питание осуществляется автоматически при
            восстановлении напряжения основного питания.
          </Paragraph>
          <Paragraph variant="bold">
            По роду тока цепей нормального и аварийного питания серии включают в себя ящики и шкафы, предусматривающие:
          </Paragraph>
          <Paragraph marker={true}>
            Основное и аварийное питание переменным током - однофазное и трехфазное с нулевым проводом
          </Paragraph>
          <Paragraph marker={true}>
            Основное питание переменным током - однофазное или трехфазное с нулевым проводом, а аварийное - постоянным
            током.
          </Paragraph>
          <Paragraph>
            Возможно изготовление на базе данной серии шкафов ввода с АВР по индивидуальным техническим заданиям
            (согласованным с заказчиком).
          </Paragraph>
        </div>
        <HeadingText tag="h3">Структура условного обозначения</HeadingText>
        <div className="template-container border-none">
          <div className="space-y-1">
            <Paragraph variant="bold">ХУ8ХХХ - Х2А2Х4:</Paragraph>
            <Paragraph>
              <span className="font-normal">Х</span> - конструктивное исполнение: Я - ящик, Ш - шкаф;
            </Paragraph>
            <Paragraph>
              <span className="font-normal">У</span> - унифицированное (нормализованное) НКУ;
            </Paragraph>
          </div>
          <Paragraph>
            <span className="font-normal">8 класс</span>, объединяющий НКУ защиты, ввода, переключения, регулирования и
            контроля систем постоянного и переменного тока;
          </Paragraph>
          <div className="space-y-2">
            <Paragraph>
              <span className="font-normal">Х</span> - группа НКУ в данном классе:
            </Paragraph>
            <Paragraph marker={true} className={markerStyles}>
              2 - НКУ ввода и переключения (в том числе аварийного) переменного тока;
            </Paragraph>
            <Paragraph marker={true} className={markerStyles}>
              3 - НКУ ввода и переключения (в том числе аварийного) постоянного тока;
            </Paragraph>
          </div>
          <Paragraph>
            <span className="font-normal">ХХ</span> - порядковый номер НКУ в данной группе данного класса;
          </Paragraph>
          <div className="space-y-2">
            <Paragraph>
              <span className="font-normal">Х</span> - величина НКУ по току главной цепи, А:
            </Paragraph>
            {["0 - до 25;", "2 - до 100;", "3 - до 160;", "4 - до 250; ", "5 - до 400;", "6 - до 630;"].map((item) => (
              <Paragraph key={item} marker={true} className={markerStyles}>
                {item}
              </Paragraph>
            ))}
          </div>
          <Paragraph>
            2 напряжение основного ввода (фазные) 220 В постоянного или переменного тока А конструктивное исполнение
          </Paragraph>
          <Paragraph>
            2 напряжение резервного ввода (фазные) 220 В постоянного или переменного тока УХЛ4 климатическое исполнение
            и категория размещения по ГОСТ 15150-69
          </Paragraph>
          <Paragraph>Степень защиты шкафов IP31.</Paragraph>
          <Paragraph>
            Конструктивное исполнение напольное или навесное в зависимости от номинального тока. В заказе необходимо
            указать наименование, тип и типовой индекс НКУ.
          </Paragraph>
        </div>
      </Template>
    </>
  )
}
