import React, { FC } from "react"
import Link from "next/link"
import { Autoplay, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { newsSliderContent } from "@constants"
import { DirectionRightIcon } from "@icons"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"

export const SidebarSlider: FC = () => (
  <section className="border-t-[24px] border-t-background bg-white pb-[20px] md:border-none">
    <h1 className="py-[24px] text-center text-xl text-black">Новости</h1>
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      className="news-slider"
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={true}
    >
      {newsSliderContent.map(({ title, subtitle }) => (
        <SwiperSlide key={title}>
          <div className="md:px-[15px]">
            <div className="h-[415px] w-full bg-black bg-news-slider bg-cover bg-center bg-no-repeat px-[16px] pt-[197px]">
              <p className="text-xl text-secondary-main">{title}</p>
              <p className="mt-[12px] text-base text-secondary-main">{subtitle}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <Link
      href="/news"
      role="button"
      aria-label="Подробнее о новостях"
      className="btn-outlined mx-auto mt-[24px] h-[50px] w-[230px] gap-[14px]"
    >
      <DirectionRightIcon className="fill-black" />
      <span>Подробнее</span>
    </Link>
  </section>
)
