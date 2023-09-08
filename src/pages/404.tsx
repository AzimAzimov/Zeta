import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export default function NotFoundPage() {
  const router = useRouter()
  return (
    <div className="mt-[68px] mb-[10%] flex flex-col items-center justify-center xl:mt-8 xl:px-5 md:mt-6 md:px-[15px]">
      <Image src="/404-page-logo.png" width={120} height={140} alt="Логотип" />
      <h1 className="mt-6 text-center text-[163px] font-medium leading-[192px] text-black md:mt-0 md:text-[120px] md:leading-[150px]">
        404
      </h1>
      <h2 className="text-center text-[32px] font-medium leading-7 text-black md:text-2xl">Страница не найдена</h2>
      <p className="mt-6 max-w-[463px] text-center text-[18px] leading-[140%] text-[#626C77] md:mt-4 md:text-base-500">
        Запрашиваемая страница не найдена. <br /> Неправильно набран адрес или такой страницы не существует.
      </p>
      <div className="mt-[64px] flex items-center gap-5 md:mt-8 md:w-full">
        <button
          aria-label="Предыдущая страница"
          className="h-12 w-[200px] border-[1px] border-[#626C77] text-lg text-[#626C77] md:w-full md:text-base-500"
          onClick={() => router.back()}
        >
          Назад
        </button>
        <Link
          href="/"
          aria-label="Главная страница"
          role="button"
          className="btn-primary flex h-12 w-[200px] items-center justify-center text-lg md:w-full md:text-base-500"
        >
          На Главную
        </Link>
      </div>
    </div>
  )
}
