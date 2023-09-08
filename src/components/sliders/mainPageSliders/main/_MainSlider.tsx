import React from "react"
import Image from "next/image"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { ModalForm } from "@components"
import { useToggle } from "@utils"

import { slideItems } from "./_constants"

import "swiper/css/navigation"

export const MainSlider = () => {
  const [isOpenModal, toggleOpenModal] = useToggle(false)

  return (
    <section>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        className="main-page-slider max-w-[925px] px-6 xl:max-w-full md:px-0"
        spaceBetween={25}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
          el: ".main-page-swiper-custom-pagination",
        }}
        autoplay={true}
      >
        {slideItems.map(({ imgUrl, title, subtitle, features }, index) => (
          <SwiperSlide key={title}>
            <div className="mx-auto flex h-[485px] xl:h-[372px] md:h-[677px] md:flex-col">
              <div className="relative flex h-full w-full max-w-[55%] items-center overflow-hidden pl-[50px] pr-[80px] xl:pl-[45px] xl:pr-[52px] md:max-h-[330px] md:max-w-full md:items-end md:px-[18px] md:pb-8">
                <Image
                  src={imgUrl}
                  alt={title}
                  fill={true}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="absolute inset-0 -z-10 h-auto w-auto object-cover"
                  placeholder="blur"
                />
                <div>
                  {index === 0 ? (
                    <h1 className="text-2xl text-white xl:text-xl">{title}</h1>
                  ) : index === 1 ? (
                    <h2 className="text-2xl text-white xl:text-xl">{title}</h2>
                  ) : (
                    <h3 className="text-2xl text-white xl:text-xl">{title}</h3>
                  )}
                  <p className="my-4 text-lg font-light text-secondary-main xl:text-base">{subtitle}</p>
                  <button
                    onClick={toggleOpenModal}
                    className="btn-primary h-10 w-[190px] xl:w-[164px] md:mt-2"
                    aria-label="Заказать"
                  >
                    Сделать заказ
                  </button>
                </div>
              </div>
              <div className="flex w-full max-w-[45%] items-center bg-primary-main pr-8 md:h-full md:max-w-full md:px-[15px]">
                <ul
                  className={`${
                    index === 1 ? "ml-[23px] gap-7 xl:ml-4 xl:gap-4 md:ml-0" : "-ml-10 gap-8 xl:-ml-8 md:ml-0"
                  } flex flex-col`}
                >
                  {features.map(({ icon, text }) => (
                    <li className="flex items-center gap-6 xl:gap-4" key={text}>
                      <span
                        className={
                          index === 1
                            ? "h-[14px] w-[18px] flex-none"
                            : "flex h-[80px] w-[80px] flex-none items-center justify-center rounded-full border-2 border-primary-main bg-secondary-main xl:h-[64px] xl:w-[64px]"
                        }
                      >
                        <Image
                          src={icon}
                          className={index === 1 ? "flex h-auto w-auto flex-none" : "h-[45px] w-[45px] xl:h-9 xl:w-9"}
                          width={index === 1 ? 18 : 45}
                          height={index === 1 ? 14 : 45}
                          alt={text}
                        />
                      </span>
                      <p className="text-lg text-white xl:text-base-500">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="main-page-swiper-custom-pagination flex" />
      <ModalForm isOpenModal={isOpenModal} toggleOpenModal={toggleOpenModal} />
    </section>
  )
}
