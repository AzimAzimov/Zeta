import React from "react"
import Image from "next/image"

import { Breadcrumbs, PageHeader, Seo } from "@components"
import { newsContent } from "@constants"

export default function News() {
  return (
    <>
      <Seo
        title="Новости - последние новости о важных событиях предприятии, наших возможностях и сотрудничества"
        description="Завод электротехники и автоматики в течение каждого года анонсирует важные события для предприятии и партнеров, в часности разработка новых оборудований, партнерство с ведущими предприятиями а также система предиктивной аналитики"
      />
      <Breadcrumbs items={[{ label: "Новости" }]} />
      <PageHeader title="Новости" />
      <div className="w-full bg-secondary-main px-10 pb-[120px] pt-5 md:px-[15px] md:pt-7 md:pb-20">
        {newsContent.map(({ image, date, title, text }, index) => (
          <section
            className={`flex items-center gap-5 py-8 md:block md:py-4 ${
              index !== 0 ? "border-t-[1px] border-t-gray-100" : ""
            }`}
            key={title}
          >
            <Image src={image} width={148} height={148} className="h-[148px] w-[148px]" alt={title} />
            <div className="md:mt-5">
              <span className="text-sm-400 text-secondary-dark">{date}</span>
              <h1 className="my-2 text-lg">{title}</h1>
              <p className="text-base text-gray-300">{text}</p>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
