import React, { FC } from "react"

import { ModalForm } from "@components"
import { useToggle } from "@utils"

export const OrderButtons: FC = () => {
  const [isOpenOrderForm, toggleOpenOrderForm] = useToggle(false)
  const [isOpenCallOrderForm, toggleOpenCallOrderForm] = useToggle(false)

  return (
    <div className="fixed bottom-10 z-10 mx-auto flex w-auto max-w-[1240px] xl:right-0 xl:bottom-6 xl:px-6 md:bottom-4 sm:gap-2 sm:px-[15px]">
      <button
        onClick={toggleOpenOrderForm}
        className="hidden h-[50px] w-[130px] items-center justify-center gap-2 rounded-full border-2 border-white bg-primary-main sm:flex"
        aria-label="Заказать товар"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M14.7916 5.83334L11.6666 2.70834L3.33331 11.0417V14.1667H6.45831L14.7916 5.83334ZM17.2583 3.36668C17.5833 3.04168 17.5833 2.51668 17.2583 2.19168L15.3083 0.241675C14.9833 -0.0833252 14.4583 -0.0833252 14.1333 0.241675L12.5 1.87501L15.625 5.00001L17.2583 3.36668Z"
            fill="#FCFAFA"
          />
          <path opacity="0.5" d="M0 16.6667H20V20H0V16.6667Z" fill="#E8FCB7" />
          <defs>
            <clipPath id="clip0_900_6614">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="text-base-500 text-secondary-main">Заказать</span>
      </button>
      <button
        onClick={toggleOpenCallOrderForm}
        className="group flex h-[60px] w-[60px] items-center gap-4 overflow-hidden rounded-full bg-primary-main shadow-md transition-all duration-300 hover:w-[250px] md:h-[50px] md:w-[50px] md:hover:w-[50px]"
        aria-label="Заказать звонок"
      >
        <span className="flex h-full w-[60px] flex-none items-center justify-center rounded-full border-[3px] border-white md:flex-auto md:border-2">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            className="absolute animate-ping opacity-75 sm:h-5 sm:w-5"
          >
            <path
              d="M23.5001 16.6667C21.7814 16.6667 20.1314 16.4 18.5914 15.9067C18.1101 15.76 17.5739 15.8667 17.1889 16.2267L14.1639 19.16C10.2726 17.24 7.08262 14.16 5.10262 10.3733L8.12762 7.42667C8.51262 7.08 8.62262 6.56 8.47137 6.09333C7.96262 4.6 7.68762 3 7.68762 1.33333C7.68762 0.6 7.06887 0 6.31262 0H1.50012C0.743872 0 0.125122 0.6 0.125122 1.33333C0.125122 13.8533 10.5889 24 23.5001 24C24.2564 24 24.8751 23.4 24.8751 22.6667V18C24.8751 17.2667 24.2564 16.6667 23.5001 16.6667ZM22.1251 12H24.8751C24.8751 5.37333 19.3339 0 12.5001 0V2.66667C17.8214 2.66667 22.1251 6.84 22.1251 12ZM16.6251 12H19.3751C19.3751 8.32 16.2951 5.33333 12.5001 5.33333V8C14.7826 8 16.6251 9.78666 16.6251 12Z"
              fill="#FCFAFA"
            />
          </svg>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" className="sm:h-6 sm:w-6">
            <path
              d="M23.5001 16.6667C21.7814 16.6667 20.1314 16.4 18.5914 15.9067C18.1101 15.76 17.5739 15.8667 17.1889 16.2267L14.1639 19.16C10.2726 17.24 7.08262 14.16 5.10262 10.3733L8.12762 7.42667C8.51262 7.08 8.62262 6.56 8.47137 6.09333C7.96262 4.6 7.68762 3 7.68762 1.33333C7.68762 0.6 7.06887 0 6.31262 0H1.50012C0.743872 0 0.125122 0.6 0.125122 1.33333C0.125122 13.8533 10.5889 24 23.5001 24C24.2564 24 24.8751 23.4 24.8751 22.6667V18C24.8751 17.2667 24.2564 16.6667 23.5001 16.6667ZM22.1251 12H24.8751C24.8751 5.37333 19.3339 0 12.5001 0V2.66667C17.8214 2.66667 22.1251 6.84 22.1251 12ZM16.6251 12H19.3751C19.3751 8.32 16.2951 5.33333 12.5001 5.33333V8C14.7826 8 16.6251 9.78666 16.6251 12Z"
              fill="#FCFAFA"
            />
          </svg>
        </span>
        <span className="hidden text-ellipsis whitespace-nowrap text-xl text-white group-hover:block md:hidden md:group-hover:hidden">
          Заказать звонок
        </span>
      </button>
      <ModalForm isOpenModal={isOpenOrderForm} toggleOpenModal={toggleOpenOrderForm} />
      <ModalForm isOpenModal={isOpenCallOrderForm} toggleOpenModal={toggleOpenCallOrderForm} isCallOrder />
    </div>
  )
}
