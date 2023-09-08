import React, { FC, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"

import { Modal } from "@components"
import emailjs from "@emailjs/browser"
import { CheckedIcon } from "@icons"

import { contacts, navigations } from "./_constants"
import { styles } from "./_styles"

export const Footer: FC = () => {
  const { fields } = styles
  const form = useRef<HTMLFormElement | null>(null)
  const [isOpenModal, setOpenModal] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const [loading, setLoading] = useState(false)

  const {
    register,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm()

  const onSubmit = async () => {
    setLoading(true)

    await emailjs.sendForm("service_rh4j4dq", "template_tvvpqn2", form?.current || "", "MdhKd-dr1qWrj3JKL").then(
      () => {
        setLoading(false)
        setOpenModal(true)
        reset()
      },
      (error) => {
        console.log(error.text)
        setLoading(false)
      }
    )
  }

  useEffect(() => {
    let timeOut: NodeJS.Timeout

    if (isOpenModal) {
      timeOut = setTimeout(() => setOpenModal(false), 3000)
    }

    return () => {
      timeOut && clearTimeout(timeOut)
    }
  }, [isOpenModal])

  return (
    <footer className="mx-auto px-6 xl:p-0">
      <div className="mx-auto flex max-w-[1240px] justify-between bg-gray-400 px-[40px] pb-[35px] pt-[24px] xl:px-6 xl:py-7 md:flex-col md:py-[30px] md:px-[15px]">
        <div>
          <Link href="/" className="relative block xl:h-[48px] xl:w-[110px]">
            <Image src="/footer-logo.png" width={116} height={51} alt="Footer logo" />
          </Link>
          <address className="mt-5 font-sans xl:mt-4">
            {contacts.map(({ title, url }) => (
              <p key={title} className="mb-6 text-base-400 text-white xl:mb-4 xl:text-sm-400">
                {url ? <a href={url}>{title}</a> : title}
              </p>
            ))}
          </address>
        </div>
        <ul className="md:hidden">
          {navigations.map(({ title, url }) => (
            <li key={title} className="mb-6 text-lg text-white xl:mb-4 xl:text-base-500">
              {url ? (
                <Link href={url} className="text-base-400 xl:text-sm-400">
                  {title}
                </Link>
              ) : (
                title
              )}
            </li>
          ))}
        </ul>
        <form
          ref={form}
          className="max-w-[420px] md:max-w-full sm:mt-2"
          onSubmit={handleSubmit(onSubmit)}
          noValidate={true}
        >
          <p className="mb-6 text-lg text-white xl:mb-4 xl:text-base-500">Обратная связь</p>
          <div className="flex gap-5 xl:gap-3 md:flex-col sm:gap-2">
            <fieldset className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                placeholder="Имя"
                className={`w-[190px] xl:h-[35px] xl:w-[170px] md:w-full ${fields}`}
              />
              <input
                type="email"
                placeholder="E-mail *"
                className={`w-[190px] xl:h-[35px] xl:w-[170px] md:w-full ${fields}`}
                {...register("email", {
                  required: true,
                  pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                })}
              />
            </fieldset>
            <div>
              <textarea
                placeholder="Задайте вопрос *"
                className={`h-[78px] w-[210px] resize-none md:w-full sm:min-h-[67px] ${fields}`}
                {...register("message", {
                  required: true,
                  minLength: 5,
                })}
              />
            </div>
          </div>
          <div className="mt-5 xl:mt-4">
            <fieldset className="mb-2 flex items-center gap-2">
              <input
                type="checkbox"
                id="checkbox"
                onChange={() => setIsChecked((prevState) => !prevState)}
                checked={isChecked}
                className="absolute h-5 w-5 opacity-0 xl:h-4 xl:w-4"
              />
              <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm bg-secondary-main xl:h-4 xl:w-4">
                <CheckedIcon strokeColor="#292B25" className={isChecked ? "block" : "hidden"} />
              </div>
              <label htmlFor="checkbox" className="select-none text-sm text-secondary-main hover:cursor-pointer">
                Согласен с обработкой персональных данных
              </label>
            </fieldset>
            <span className="text-sm text-secondary-main">
              Нажимая кнопку Отправить, Вы соглашаетесь с условиями{" "}
              <a href="./docs/privacy-zeta.pdf" target="_blank" rel="noopener noreferrer" className="underline">
                Политики обработки персональных данных
              </a>
            </span>
          </div>
          <div className="mt-4 flex w-full justify-end">
            <button
              type="submit"
              disabled={!isChecked || !isValid || loading}
              className="flex h-[30px] w-[142px] items-center justify-center bg-white px-2.5 text-sm font-bold disabled:bg-gray-200 xl:w-[110px] sm:h-[35px] sm:w-full"
            >
              {loading ? (
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
      </div>
      <Modal isOpen={isOpenModal} setOpen={() => setOpenModal}>
        <div
          onClick={(event) => event.stopPropagation()}
          className="w-full max-w-[677px] flex-none bg-white py-10 pl-10 xl:max-w-[600px] xl:pl-6 md:py-6 md:pl-[15px]"
        >
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
        </div>
      </Modal>
    </footer>
  )
}
