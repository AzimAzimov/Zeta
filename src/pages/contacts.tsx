import { Breadcrumbs, PageHeader, Seo } from "@components"
import { requisites } from "@constants"
import { ApartmentIcon, EmailIcon, PhoneIcon } from "@icons"

export default function Contacts() {
  return (
    <>
      <Seo
        title="Контакты | Завод электротехники и автоматики"
        description="Предприятие находится в Чувашской Республики, также имеется склад в городе Москве и возможности для сотрудничества безграничны. Для консультации по всем вопросам обращайтесь по телефону +79276680840"
      />
      <Breadcrumbs items={[{ label: "Контакты" }]} />
      <PageHeader title="Контакты" />
      <address className="x-paddings bg-secondary-main pt-[34px] pb-[60px] md:pb-10">
        <div className="mb-10 flex justify-between lg:flex-col lg:gap-5">
          <div className="flex max-w-[340px] flex-col gap-5 lg:max-w-full">
            <p className="text-base-400">Адрес предприятия:</p>
            <a href="https://yandex.ru/maps/-/CCUi6AV6sD" target="_blank" className="flex gap-5">
              <ApartmentIcon className="flex-none" />
              <span className="text-base">
                428903 Чувашская Республика, г. Чебоксары, Лапсарский проезд, дом 2 литер В пом.48
              </span>
            </a>
            <a className="flex items-center gap-5" href="tel:+79276680840">
              <PhoneIcon className="h-5 w-5 flex-none fill-primary-main" />
              <span className="text-base">+7 (927) 668-08-40</span>
            </a>
            <a className="flex items-center gap-5" href="tel:+78352380840">
              <PhoneIcon className="h-5 w-5 flex-none fill-primary-main" />
              <span className="text-base">+7 (835) 238-08-40</span>
            </a>
            <a className="flex items-center gap-5" href="mailto:zeta21@bk.ru">
              <EmailIcon className="h-5 w-5 flex-none fill-primary-main" />
              <span className="text-base">zeta21@bk.ru</span>
            </a>
          </div>
          <div className="relative h-[200px] w-[450px] lg:h-[300px] lg:w-full">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Abb20e6f07181201cfbd2a5efb772465c4067e184b08d12ed974af3ce5498136b&amp;source=constructor"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="mb-10 flex justify-between lg:flex-col lg:gap-5">
          <div className="max-w-[340px] lg:max-w-full">
            <p className="text-base-400">Склад в городе Москва:</p>
            <a className="mt-5 flex gap-5" href="https://yandex.ru/maps/-/CCUMeHUA8A">
              <ApartmentIcon className="flex-none" />
              <span className="text-base">111524, Москва, Ул, Электродная, дом 2 строение 28</span>
            </a>
          </div>
          <div className="relative h-[200px] w-[450px] lg:h-[300px] lg:w-full">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A646977b26bdf10bbe35919fc94dfe0eca020e4f20201b5089e9be05d5b28a18e&amp;source=constructor"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div>
          <p className="mb-6 text-xl lg:text-lg">Реквизиты компании:</p>
          {requisites.map((requisite, index) => (
            <p className={`mt-4 ${index === 0 ? "text-base-400" : "text-base"}`} key={requisite}>
              {requisite}
            </p>
          ))}
        </div>
      </address>
    </>
  )
}
