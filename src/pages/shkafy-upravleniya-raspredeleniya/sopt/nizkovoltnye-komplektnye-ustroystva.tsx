import React from "react"
import Image from "next/image"

import { Breadcrumbs, HeadingText, PageHeader, Paragraph, Seo } from "@components"
import { nkuFeatures, nkuOptions } from "@constants"

export default function NKU() {
  return (
    <>
      <Seo
        title="Низковольтные комплектные устройства (НКУ)"
        description="Сборка низковольтных комплектных устройств под заказ, по индивидуальным схемам заказчика. Наличие производственных мощностей позволяет решать любые задачи в производстве электрощитового оборудования"
        image="/nizkovoltnye_komplektnye_ustroystva-page.jpg"
      />
      <Breadcrumbs
        items={[{ label: "Шкафы управления и распределения" }, { label: "Низковольтные комплектные устройства (НКУ)" }]}
      />
      <PageHeader bgSecondary title="Низковольтные комплектные устройства (НКУ)" />
      <div className="x-paddings w-full bg-secondary-main pb-[48%] pt-8 md:pt-6">
        <div className="flex justify-between gap-5 md:flex-col md:gap-6">
          <div className="relative block h-full min-h-[216px] w-full max-w-[410px] lg:h-auto lg:min-w-[292px] md:max-w-full">
            <Image
              src="/nizkovoltnye_komplektnye_ustroystva-page.jpg"
              alt="Низковольтные комплектные устройства (НКУ)"
              fill
              className="h-full w-full"
              sizes="(max-width: 767px) 100vw,
              (max-width: 1200px) 40vw,
              33vw"
              priority
            />
          </div>
          <div className="space-y-4">
            <HeadingText variant="secondary">Производство, поставки НКУ:</HeadingText>
            {nkuOptions.map((option) => (
              <Paragraph className="marker-rounded-fill" children={option} key={option} />
            ))}
          </div>
        </div>
        <div className="mt-10 space-y-6 md:mt-5">
          {nkuFeatures.map(({ icon, title, subtitle }, index) => (
            <div className="flex items-center gap-5" key={title}>
              <span className="flex h-[72px] w-[72px] flex-none items-center justify-center rounded-full border-2 border-primary-main md:h-[52px] md:w-[52px]">
                {icon}
              </span>
              <div>
                <HeadingText
                  tag={index === 0 ? "h3" : index === 1 ? "h4" : index === 2 ? "h5" : "p"}
                  variant="secondary"
                >
                  {title}
                </HeadingText>
                <Paragraph className="mt-2">{subtitle}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
