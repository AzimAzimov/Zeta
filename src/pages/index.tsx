import React from "react"
import Image from "next/image"

import { MainSlider, ModalForm, NewsSlider, Seo } from "@components"
import { headingFeatures, serviceFeatures } from "@constants"
import { DirectionRightIcon } from "@icons"
import { useToggle } from "@utils"

export default function Home() {
  const [isOpenModal, toggleOpenModal] = useToggle(false)

  return (
    <>
      <Seo
        title="Завод электротехники и автоматики - производство оборудования для автоматизации предприятий"
        keywords="Заказать элетрооборудование для предприятия, щиты переменного и постоянного тока, изготовление пластиковых деталей под заказ"
        description="Завод электротехники и автоматики реализует комплексные электротехнические проекты, а также предоставляет широкий спектр услуг по изготовлению пластиковых изделий и деталей. Широчайший ассортимент оборудования НКУ с комплектующими отечественного и импортного производства, включающий более 3 000 наименований, по конкурентоспособным ценам"
        children={
          <>
            <link rel="icon" href="/favicon.ico" />
          </>
        }
      />
      <main>
        <section className="mt-[67px] mb-6 flex justify-between xl:mt-6 md:flex-col md:gap-[14px] md:px-[15px]">
          {headingFeatures.map(({ title, subtitle }, index) => (
            <div key={title} className="heading-advantages-box">
              <span className="heading-advantages-box-number">0{index + 1}</span>
              <div>
                {index === 0 ? (
                  <h1 className="text-xl lg:text-base-500">{title}</h1>
                ) : index === 1 ? (
                  <h2 className="text-xl lg:text-base-500">{title}</h2>
                ) : (
                  <h3 className="text-xl lg:text-base-500">{title}</h3>
                )}
                <p className="lg:mt1 mt-2 max-w-[146px] text-base-400 lg:text-sm-400 md:max-w-full">{subtitle}</p>
              </div>
            </div>
          ))}
        </section>
        <MainSlider />
        <NewsSlider />
        <section className="mt-6 w-full bg-secondary-main px-[50px] py-10 md:px-[15px] md:pt-8 md:pb-[27px]">
          <h1 className="text-center text-2xl xl:text-xl md:text-lg">Не нашли нужное оборудование?</h1>
          <p className="mx-auto mt-4 max-w-[620px] text-center text-base lg:mt-2 lg:text-sm">
            Если оборудование отсутствует в каталоге или не подходит вам по стандартным критериям, мы можем произвести
            любое оборудование по вашему заказу. <br /> При этом учтем все ваши пожелания!
          </p>
          <ul className="mx-auto mt-8 flex flex-wrap justify-between xl:max-w-[938px] lg:mx-auto lg:max-w-[615px]">
            {serviceFeatures.map(({ icon, description }) => (
              <li
                className="mb-8 flex w-full max-w-[188px] flex-col items-center gap-4 px-5 lg:max-w-[124px] lg:px-0 md:mb-[38px] md:max-w-[145px]"
                key={description}
              >
                <span className="relative flex h-[77px] w-[77px] items-center justify-center rounded-full border-2 border-primary-main lg:h-[60px] lg:w-[60px]">
                  <span className="relative block h-[45px] w-[45px] lg:h-[35px] lg:w-[35px]">
                    <Image src={icon} alt={description} width="0" height="0" sizes="100vw" className="h-auto w-full" />
                  </span>
                </span>
                <p className="text-center text-base-400 lg:text-sm-400">{description}</p>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleOpenModal}
            className="group mx-auto flex items-center gap-5 bg-gray-50 py-[10.3px] px-4 hover:bg-primary-main lg:mt-3 md:mt-0 md:w-full"
            aria-label="Отправить заявку"
          >
            <DirectionRightIcon className="fill-primary-dark group-hover:fill-white" />
            <span className="text-left text-lg text-primary-dark group-hover:text-white lg:text-base-500 md:w-full md:justify-center">
              Оставьте заявку и мы произведем оборудование по вашим требованиям
            </span>
          </button>
          <ModalForm isOpenModal={isOpenModal} toggleOpenModal={toggleOpenModal} />
        </section>
      </main>
    </>
  )
}
