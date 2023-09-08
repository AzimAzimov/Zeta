import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Seo } from "@components"

import certificate1 from "../../public/certificate-page-cert-1.jpg"
import certificate2 from "../../public/certificate-page-cert-2.jpg"

export default function Certificate() {
  return (
    <>
      <Seo
        title="Сертификаты соответствия"
        description="Завод электротехники и автоматики имеет сертификаты соответствия Евразийского Экономического Союза а также государственную сертификацию Минпромторга"
      />
      <Breadcrumbs items={[{ label: "Сертификаты" }]} />
      <PageHeader title="Сертификаты" />
      <div className="w-full bg-secondary-main pl-5 pb-[130px] pt-8 md:pb-[100px] md:pl-0">
        <HeadingText tag="h2" className="text-xl">
          Сертификат соответствия
        </HeadingText>
        <div className="mt-6 flex pl-5 pr-10 lg:flex-col lg:pl-0 lg:pr-5 md:px-[15px]">
          <div>
            <Image src={certificate1} alt="Сертификат соответствия" priority placeholder="blur" />
          </div>
          <div className="mx-[10px] w-[1px] bg-gray-100 lg:mx-0 lg:my-[10px] lg:h-[1px] lg:w-full" />
          <div>
            <Image src={certificate2} alt="Сертификат соответствия" priority placeholder="blur" />
          </div>
        </div>
      </div>
    </>
  )
}
