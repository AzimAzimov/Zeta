import React, { FC } from "react"
import Link from "next/link"
import { Autoplay, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { newsSliderContent } from "@constants"
import { DirectionRightIcon } from "@icons"
import { useWindowWidth } from "@utils"

import { SidebarSlider } from "../../sidebarSlider"

export const NewsSlider: FC = () => {
  const windowWidth = useWindowWidth()

  if (windowWidth > 1279) return null

  if (windowWidth < 768)
    return (
      <div className="mt-6 hidden md:block">
        <SidebarSlider />
      </div>
    )

  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        className="main-page-news-slider mt-6 hidden w-full xl:block md:hidden"
        loop={true}
        pagination={{
          clickable: true,
          el: ".main-page-news-swiper-custom-pagination",
        }}
        autoplay={true}
      >
        {newsSliderContent.map(({ title, subtitle }) => (
          <SwiperSlide key={title}>
            <div className="flex h-[173px] gap-[57px] bg-secondary-main">
              <div className="w-full max-w-[35%] bg-[url('/index-page-news-slider-bg.jpg')] bg-cover p-5">
                <p className="text-lg text-white">Новости</p>
              </div>
              <div className="relative flex flex-col py-6 pr-[50px]">
                <p className="text-base-500">{title}</p>
                <p className="my-2 text-sm">{subtitle}</p>
                <Link
                  href="/news"
                  role="button"
                  aria-label="К новостям"
                  className="btn-outlined absolute left-0 bottom-5 h-[36px] w-[144px] gap-[14px] text-base-500"
                >
                  <DirectionRightIcon className="fill-black" />
                  <span>Подробнее</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="main-page-news-swiper-custom-pagination hidden xl:flex md:hidden" />
    </>
  )
}
