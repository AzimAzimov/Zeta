import React, { FC, useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import InputMask from "react-input-mask"

import { InputPhone, Modal } from "@components"
import emailjs from "@emailjs/browser"
import { CheckedIcon } from "@icons"

import { styles } from "./_styles"

interface IModalForm {
  isOpenModal: boolean
  toggleOpenModal: () => void
  isCallOrder?: boolean
}

export const ModalForm: FC<IModalForm> = ({ isOpenModal, toggleOpenModal, isCallOrder = false }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const form = useRef<HTMLFormElement | null>(null)

  const { textFields } = styles

  const {
    register,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "onChange" })

  const onSubmit = async () => {
    setIsLoading(true)
    await emailjs
      .sendForm(
        "service_rh4j4dq",
        isCallOrder ? "template_xvhtuf9" : "template_tvvpqn2",
        form?.current || "",
        "MdhKd-dr1qWrj3JKL"
      )
      .then(
        () => {
          setIsSent(true)
          reset()
          setIsLoading(false)
        },
        (error) => {
          console.log(error.text)
          setIsLoading(false)
        }
      )
  }

  useEffect(() => {
    let timeOut: NodeJS.Timeout

    if (isSent) {
      timeOut = setTimeout(() => {
        setIsSent(false)
        toggleOpenModal()
      }, 4000)
    }

    return () => {
      timeOut && clearTimeout(timeOut)
    }
  }, [isSent])

  return (
    <Modal isOpen={isOpenModal} setOpen={toggleOpenModal}>
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-[677px] flex-none bg-white py-10 pl-10 xl:max-w-[600px] xl:pl-6 md:py-6 md:pl-[15px]"
      >
        {isSent ? (
          <div className="py-[5%]">
            <svg className="mx-auto w-[100px] md:w-[60px]" viewBox="0 0 130.2 130.2">
              <circle
                className="stroke-primary-main"
                fill="none"
                style={{
                  strokeDasharray: 1000,
                  strokeDashoffset: 0,
                  animation: "dash .9s ease-in-out",
                }}
                strokeWidth="6"
                strokeMiterlimit="10"
                cx="65.1"
                cy="65.1"
                r="62.1"
              />
              <polyline
                className="path check stroke-primary-main"
                style={{
                  strokeDasharray: 1000,
                  strokeDashoffset: -100,
                  animation: "dash-check .9s .35s ease-in-out forwards",
                }}
                fill="none"
                strokeWidth="6"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="100.2,40.2 51.5,88.8 29.8,67.5 "
              />
            </svg>
            <p className="my-[4%] text-center text-2xl text-primary-main md:text-lg">Спасибо за заявку!</p>
            <p className="text-center text-base md:text-sm">Мы с Вами свяжемся в ближайшее время</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <p className="mr-4 text-2xl xl:text-lg">Заказать</p>
              <div className="h-[3px] w-full bg-primary-main" />
            </div>
            <form
              ref={form}
              className="mt-6 flex flex-col gap-6 pr-10 xl:mt-5 xl:pr-6 md:mt-4 md:pr-[15px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <p className="text-base text-gray-300 md:text-sm">
                Оставьте Ваши данные , чтобы мы могли с Вами связаться
              </p>
              <input type="text" placeholder="Ваше имя" name="name" className={`${textFields} h-[45px] md:h-10`} />
              <InputPhone
                type="tel"
                placeholder="Телефон *"
                className={`${textFields} h-[45px] md:h-10`}
                {...register("phoneNumber", {
                  required: true,
                  validate: (value) =>
                    (value.includes("(") && value.length > 17) || (!value.includes("(") && value.length > 12),
                })}
              />
              <input
                type="email"
                placeholder="Email *"
                className={`${textFields} h-[45px] md:h-10`}
                {...register("email", {
                  required: true,
                  pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                })}
              />
              {isCallOrder ? (
                <div>
                  <label className="mb-3 text-lg">Удобное время для звонка</label>
                  <fieldset className="flex w-full items-center">
                    <InputMask
                      mask="99:99"
                      placeholder="Начало"
                      name="call-from"
                      className={`${textFields} h-[45px] w-full md:h-10`}
                    />
                    <div className="mx-[26px] h-1 w-5 bg-background xl:mx-5 md:mx-3" />
                    <InputMask
                      mask="99:99"
                      placeholder="Конец"
                      name="call-to"
                      className={`${textFields} h-[45px] w-full md:h-10`}
                    />
                  </fieldset>
                </div>
              ) : (
                <textarea
                  placeholder="Наименование, количество, характеристики необходимого оборудования"
                  name="message"
                  className={`${textFields} h-[158px] resize-none md:h-[140px]`}
                />
              )}
              <div>
                <fieldset className="mb-2 flex items-center gap-4 md:gap-2">
                  <input
                    type="checkbox"
                    id="check"
                    className="absolute h-6 w-6 opacity-0"
                    onChange={() => setIsChecked((prevState) => !prevState)}
                    checked={isChecked}
                  />
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-sm bg-secondary-main shadow-inset md:h-5 md:w-5">
                    <CheckedIcon strokeColor="#93C01F" className={isChecked ? "block" : "hidden"} />
                  </div>
                  <label htmlFor="check" className="select-none text-base-400 hover:cursor-pointer md:text-sm">
                    Согласен с обработкой персональных данных *
                  </label>
                </fieldset>
                <span className="text-sm">
                  Нажимая кнопку Отправить, Вы соглашаетесь с условиями{" "}
                  <a href="./docs/privacy-zeta.pdf" target="_blank" rel="noopener noreferrer" className="underline">
                    Политики обработки персональных данных
                  </a>
                </span>
              </div>
              <div className="flex w-full justify-between gap-5">
                <button
                  className="btn-secondary h-[45px] md:h-10"
                  type="reset"
                  aria-label="Отменить отправку"
                  onClick={() => {
                    toggleOpenModal()
                    reset()
                  }}
                >
                  Отмена
                </button>
                <button
                  className="btn-primary h-[45px] md:h-10"
                  type="submit"
                  aria-label="Отправить"
                  disabled={!isChecked || !isValid || isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="mr-3 inline h-5 w-5 animate-spin text-white"
                        viewBox="0 0 100 101"
                        fill="none"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      Отправляется...
                    </>
                  ) : (
                    "Отправить"
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </Modal>
  )
}
