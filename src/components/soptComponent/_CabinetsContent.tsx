import React, { FC, Fragment } from "react"
import Image from "next/image"

import { HeadingText, Paragraph } from "@components"

import SHOTSchema from "../../../public/blocks-in-SHOT.jpg"
import SHVSSchema from "../../../public/SHVS-schema.jpg"

import { functionalBlocks, properties, purposes, stationaryBlocks, tableData } from "./_constants"

interface ICabinetsContent {
  isDefaultVariant?: boolean
}

export const CabinetsContent: FC<ICabinetsContent> = ({ isDefaultVariant = true }) => {
  return (
    <>
      <HeadingText>Назначение</HeadingText>
      <div className="template-container">
        {purposes.map((item, index) => (
          <Fragment key={item}>
            {index > 1 && index < 5 ? (
              <div className="flex items-center gap-5 md:gap-4">
                <span className="flex h-[33px] w-[33px] flex-none items-center justify-center rounded-full border-[1px] border-primary-main pt-[3px] text-base-400">
                  {index - 1}
                </span>
                <Paragraph children={item} />
              </div>
            ) : (
              <>
                {isDefaultVariant && index === 1 ? (
                  <Paragraph>В 2013 году нами переработана технология проектирования ЩПТ.</Paragraph>
                ) : null}
                <Paragraph variant={index === 1 ? "bold" : "normal"} children={item} />
              </>
            )}
          </Fragment>
        ))}
        {!isDefaultVariant && (
          <>
            <Paragraph>
              Зона функциональной контрольно-измерительной и защитно-коммутационной аппаратуры является наиболее сложной
              конструктивной частью шкафа, обеспечивающей установку блоков с аппаратурой.
            </Paragraph>
            <Paragraph>
              Для удобства проектирования и изготовления, зона функциональной контрольно-измерительной и
              защитно-коммутационной аппаратуры условно разделена на 73 модуля.
            </Paragraph>
          </>
        )}
      </div>
      <HeadingText tag="h3">Основными особенностями ЩПТ</HeadingText>
      <div className="template-container">
        {properties.map((property, index) => (
          <Paragraph
            marker={true}
            key={index}
            className={
              index > 1 && index < 4
                ? "pl-[48px] text-sm before:left-[28px] before:h-1 before:w-1 before:rounded-full before:bg-secondary-dark md:pl-[40px] md:before:left-[24px]"
                : ""
            }
            children={property}
          />
        ))}
      </div>
      <HeadingText tag="h4">Стационарные блоки по назначению разделены на</HeadingText>
      <div className="template-container">
        {stationaryBlocks.map((block, index) => (
          <Paragraph
            marker={index < 3}
            key={index}
            className={index === 3 ? "text-sm text-secondary-dark" : ""}
            children={block}
          />
        ))}
      </div>
      <HeadingText tag="h5">Перечень типовых функциональных блоков</HeadingText>
      <div className="template-container mb-0 border-none px-0">
        <div className="w-full">
          <table className="w-full border-b-[1px] border-gray-100">
            <thead className="h-[33px] bg-primary-main text-base-500 text-white">
              <tr>
                <th className="w-[30%] border-r-[1px] border-gray-100">Тип блока</th>
                <th className="w-[70%] pl-5 text-left md:pl-[15px]">Описание блока</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(({ blockType, value }) => (
                <tr key={blockType + value} className={blockType ? "" : "h-[33px] bg-gray-50"}>
                  <td className="border-r-[1px] border-gray-100 text-center text-base-400 text-primary-dark md:text-sm-400">
                    {blockType && blockType}
                  </td>
                  <td className={`py-2 pl-5 md:px-[15px] ${blockType ? "text-base md:text-sm" : "text-sm-400"}`}>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="template-container border-none pt-0">
        <div className="flex w-full gap-5 md:flex-col">
          <div className="flex h-[325px] w-[50.4%] flex-col items-center gap-3 border-2 border-primary-main pb-2 pt-6 lg:gap-2 lg:py-4 md:w-full">
            <p className="text-center text-base-500">Общий вид шкафа ШВС</p>
            <Image src={SHVSSchema} alt="Общий вид шкафа ШВС" width={173} height={253} />
          </div>
          <div className="flex h-[325px] w-[50%] flex-col items-center gap-2 border-2 border-primary-main px-9 py-4 md:w-full md:px-[15px]">
            <p className="text-center text-base-500">Условная компоновка блоков в шкафах отходящих линий</p>
            <Image
              src={SHOTSchema}
              alt="Условная компоновка блоков в шкафах отходящих линий"
              width={200}
              height={242}
            />
          </div>
        </div>
        {functionalBlocks.map((block) => (
          <Paragraph key={block} children={block} />
        ))}
      </div>
    </>
  )
}
