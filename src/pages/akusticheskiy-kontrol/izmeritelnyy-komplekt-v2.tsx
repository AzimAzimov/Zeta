import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo, Template } from "@components"
import { echoV2Characteristics } from "@constants"

export default function MeasuringSetV2() {
  const leftCell = "w-[40%] border-r-[1px] border-gray-100 py-4 px-5 text-base md:px-[15px] md:py-2 md:text-sm"
  const rightCell = "space-y-[14px] py-4 px-[26px] text-base-500 text-primary-dark md:px-[15px] md:text-sm-500"
  const markedCellText = "marker-rounded-fill pl-[17px] before:h-1.5 before:w-1.5 before:bg-primary-dark"

  return (
    <>
      <Seo
        title="Измерительный комплект V2.0"
        description="Измерительный комплект V2.0 предназначено для акустического контроля энергетического оборудования с помощью использования технологий искусственного интеллекта (ИИ)"
        image="/izmeritelnyy-komplekt-v2.png"
      />
      <Breadcrumbs
        items={[
          {
            path: "/akusticheskiy-kontrol/sistema-akusticheskogo-kontrolya-echo",
            label: "Акустический контроль",
          },
          { label: "Измерительный комплект V2.0" },
        ]}
      />
      <PageHeader className="!bg-[url('/page-header-bg-acoustic-control.jpg')]" title="Измерительный комплект V2.0" />
      <Template
        equipmentImage={
          <Image src="/izmeritelnyy-komplekt-v2.png" width={255} height={282} alt="Измерительный комплект V2.0" />
        }
        characteristics={echoV2Characteristics}
      >
        <HeadingText>Технические характеристики</HeadingText>
        <div className="template-container border-none px-0">
          <Paragraph className="px-5 md:px-[15px]">Технические характеристики комплекта шумодиагностики V2.0</Paragraph>
          <table className="w-full">
            <thead className="h-[34px] bg-primary-main text-left text-base-500 text-secondary-main md:text-sm-500">
              <tr>
                <th className="w-[30%] border-r-[1px] border-gray-100 pl-5 md:px-[15px]">Модуль/характеристика</th>
                <th className="w-[70%] pl-[30px] md:pl-[15px]">Описание/значение</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-b-[1px] border-gray-100">
              <tr>
                <td className={leftCell}>Микрофон</td>
                <td className={rightCell}>
                  <div className={markedCellText}>частотный диапазон 100 Гц – 16 кГц;</div>
                  <div className={markedCellText}>чувствительность - 38dB</div>
                </td>
              </tr>
              <tr>
                <td className={leftCell}>Пьезометрический датчик</td>
                <td className={rightCell}>Резонансная частота 15 кГц</td>
              </tr>
              <tr>
                <td className={leftCell}>Степень защиты</td>
                <td className={rightCell}>IP68</td>
              </tr>
              <tr>
                <td className={leftCell}>Питание</td>
                <td className={rightCell}>
                  <div className={markedCellText}>Внешняя электрическая сеть 220V;</div>
                  <div className={markedCellText}>питания как от кабеля Ethernet (технология PoE);</div>
                  <div className={markedCellText}>внутренний аккумуляторный блок емкостью не менее 10000 мАч</div>
                </td>
              </tr>
              <tr>
                <td className={leftCell}>Внешние интерфейсы связи</td>
                <td className={rightCell}>
                  <div className={markedCellText}>
                    Ethernet подключение по по стандартам IEEE802.3/802.3u (10BASE-T и 100BASE-TX);
                  </div>
                  <div className={markedCellText}>
                    передача данных посредством GSM-модема, обеспечивающего интернет соединение по стандарту не ниже 3G;
                  </div>
                  <div className={markedCellText}>передача данных посредством Wi-Fi</div>
                </td>
              </tr>
              <tr>
                <td className={leftCell}>Разъемы</td>
                <td className={rightCell}>
                  <div className={markedCellText}>разъём питания (DS-210);</div>
                  <div className={markedCellText}>
                    разъём для подключения пьезометрического датчика (RS-234, RCA JACK 2);
                  </div>
                  <div className={markedCellText}>разъём для подключения микрофона (RS-234, RCA JACK 2);</div>
                  <div className={markedCellText}>антенна: разъём SMA;</div>
                  <div className={markedCellText}>Ethernet-разъём (RJ-45) с технологией PoE;</div>
                  <div className={markedCellText}>внутренние разъёмы для micro SD карт (112J-TDAR-R01)</div>
                </td>
              </tr>
              <tr>
                <td className={leftCell}>Память</td>
                <td className={rightCell}>
                  <div className={markedCellText}>загрузочный накопитель: microSD емкостью 8 Гб;</div>
                  <div className={markedCellText}>накопитель: microSD емкостью 32 Гб</div>
                </td>
              </tr>
              <tr>
                <td className={leftCell}>Часы реального времени</td>
                <td className={rightCell}>
                  Точность счёта 1с, интерфейс связи I2C, независимую систему питания (батарейка CR2025)
                </td>
              </tr>
              <tr>
                <td className={leftCell}>Крепление к поверхности</td>
                <td className={rightCell}>
                  Встроенное магнитное крепление, возможность крепления винтами с помощью встроенным проушинам
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Template>
    </>
  )
}
