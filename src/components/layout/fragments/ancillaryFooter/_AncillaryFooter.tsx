import React from "react"

export const AncillaryFooter = () => {
  return (
    <section className="mt-6 mb-9 w-full bg-secondary-main p-10 md:px-[15px] md:pt-8 md:pb-10">
      <h1 className="text-center text-2xl xl:text-xl">Нужна помощь?</h1>
      <p className="my-4 mx-auto max-w-[627px] text-center text-base lg:text-sm md:my-2">
        Если у вас остались вопросы или вам нужна наша помощь, напишите нам и мы вам ответим в ближайшее время
      </p>
      <a href="https://t.me/sales_zeta" className="mx-auto flex w-[211px] items-center gap-4 text-lg" target="_blank">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 0C5.37253 0 0 5.37253 0 12C0 18.6275 5.37253 24 12 24C18.6275 24 24 18.6275 24 12C24 5.37253 18.6275 0 12 0Z"
            fill="#40B3E0"
          />
          <path
            d="M17.8391 6.9029L15.6957 17.7094C15.6957 17.7094 15.396 18.4588 14.5716 18.0991L9.62557 14.3071L7.82707 13.4378L4.79951 12.4186C4.79951 12.4186 4.33489 12.2538 4.28989 11.8941C4.24489 11.5343 4.81451 11.3395 4.81451 11.3395L16.8498 6.61827C16.8498 6.61827 17.839 6.18365 17.839 6.90309"
            fill="white"
          />
          <path
            d="M9.24534 17.5878C9.24534 17.5878 9.10097 17.5743 8.92097 17.0047C8.74125 16.4352 7.8269 13.4376 7.8269 13.4376L15.0961 8.82138C15.0961 8.82138 15.5158 8.56657 15.5008 8.82138C15.5008 8.82138 15.5757 8.86638 15.3508 9.07619C15.1261 9.2861 9.6405 14.2171 9.6405 14.2171"
            fill="#D2E5F1"
          />
          <path
            d="M11.522 15.7608L9.56573 17.5445C9.56573 17.5445 9.41273 17.6605 9.24548 17.5878L9.62011 14.2747"
            fill="#B5CFE4"
          />
          <defs>
            <clipPath id="clip0_3532_3722">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        https://t.me/ZetaOlesya
      </a>
    </section>
  )
}
