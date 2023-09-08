import React, { useMemo, useState } from "react"
import Image from "next/image"

import { Breadcrumbs, Fancybox, PageHeader, Pagination, Seo } from "@components"
import { galleryTab1Images, galleryTab2Images } from "@constants"

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<number>(1)

  const getActiveTabStyles = (tabNumber: number) =>
    activeTab === tabNumber
      ? "bg-primary-main text-white"
      : "bg-background text-secondary-light hover:bg-white hover:text-black"

  const tabButtonStyles =
    "flex w-full h-[48px] px-[10px] items-center justify-center text-lg hover:drop-shadow-md lg:text-base-500"

  function TabContent({ tabNumber }: { tabNumber: number }) {
    const [pageSize, setPageSize] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    const instanceArray = useMemo(() => (tabNumber === 2 ? galleryTab2Images : galleryTab1Images), [tabNumber])

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * pageSize
      const lastPageIndex = firstPageIndex + pageSize
      return instanceArray.slice(firstPageIndex, lastPageIndex)
    }, [instanceArray, currentPage, pageSize])

    return (
      <>
        <Seo
          title="Ассортимент низковольтных комплектных устройств и изготовление пластиковых деталей"
          description="Широчайший ассортимент низковольтных комплектных устройств и изготовление пластиковых деталей представлены в галерее для визуального ознакомления"
        />
        <ul className="flex flex-wrap justify-evenly gap-5 md:gap-2">
          {currentTableData.map(({ image, poster }, index) => (
            <li className="relative" key={index}>
              <Fancybox options={{ dragToClose: false }}>
                <a
                  data-fancybox="gallery"
                  className="hover:before:absolute hover:before:inset-0 hover:before:bg-black/40 hover:before:bg-[url('/gallery-image-hover-bg.png')] hover:before:bg-center hover:before:bg-no-repeat"
                  href={image}
                >
                  <Image
                    className="xl:h-[210px] xl:w-[210px] md:h-[44vw] md:w-[44vw]"
                    src={poster}
                    width={196}
                    height={196}
                    priority
                    alt={`${
                      tabNumber === 1
                        ? "Шкаф управления и распределения"
                        : "Изготовление пластиковых корпусов и деталей"
                    } ${index + 1}`}
                  />
                </a>
              </Fancybox>
            </li>
          ))}
        </ul>
        {instanceArray.length > 10 && (
          <div className="relative mt-8 flex items-center lg:items-start lg:gap-[7%] md:flex-col md:gap-3">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">Показывать по:</p>
              <ul className="flex gap-2">
                {[10, 20, 40].map((item) => (
                  <li
                    className={`flex h-8 w-8 items-center justify-center text-sm font-medium ${
                      item === pageSize
                        ? "border-[1px] border-primary-main text-primary-main"
                        : "cursor-pointer hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setPageSize(item)
                      setCurrentPage(1)
                    }}
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute left-[50%] -translate-x-[50%] lg:static lg:translate-x-0">
              <Pagination
                currentPage={currentPage}
                totalCount={instanceArray.length}
                pageSize={pageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
        )}
      </>
    )
  }

  return (
    <>
      <Breadcrumbs items={[{ label: "Фотогалерея" }]} />
      <PageHeader title="Фотогалерея" />
      <div className="x-paddings flex justify-center gap-5 bg-secondary-main pt-8 md:flex-col md:gap-4">
        <h2 className="w-full max-w-[412px] md:mx-auto">
          <button
            aria-label="Шкафы управления и распределения"
            onClick={() => setActiveTab(1)}
            className={`${tabButtonStyles} ${getActiveTabStyles(1)} `}
          >
            Шкафы управления и распределения
          </button>
        </h2>
        <h3 className="w-full max-w-[412px] md:mx-auto">
          <button
            aria-label="Изготовление пластиковых корпусов и деталей"
            onClick={() => setActiveTab(2)}
            className={`${tabButtonStyles} ${getActiveTabStyles(2)} `}
          >
            Изготовление пластиковых корпусов и деталей
          </button>
        </h3>
      </div>
      <div className="w-full bg-secondary-main px-10 pt-10 pb-20 lg:px-6 lg:pt-9 md:px-[15px] md:pt-6 md:pb-9">
        {activeTab === 2 ? <TabContent tabNumber={2} /> : <TabContent tabNumber={1} />}
      </div>
    </>
  )
}
