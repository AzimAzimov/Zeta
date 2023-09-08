import React, { FC, Fragment, memo, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import { useWindowWidth } from "@utils"

import { categories } from "./_constants"
import { styles } from "./_styles"

type CategorySelection = {
  parent: string
  category: string
  subcategory: string
}

export const Categories: FC = memo(() => {
  const [selectedCategory, setSelectedCategory] = useState<CategorySelection>({
    parent: "",
    category: "",
    subcategory: "",
  })

  const { route } = useRouter()

  const windowWidth = useWindowWidth()

  const { categoryIconLines, categoriesHeader, categoriesBtn } = styles

  function handleSelection(context: keyof CategorySelection, value: string): void {
    setSelectedCategory((prevState) => {
      const isSameValue = prevState[context] === value

      switch (context) {
        case isSameValue && "parent": {
          return { parent: "", category: "", subcategory: "" }
        }
        case isSameValue && "category": {
          return { ...prevState, category: "", subcategory: "" }
        }
        case isSameValue && "subcategory": {
          return { ...prevState, subcategory: "" }
        }
        default:
          return { ...prevState, [context]: value }
      }
    })
  }

  return (
    <section>
      <header
        className={`${categoriesHeader} ${
          selectedCategory.parent === "parent" ? "xl:bg-white xl:text-primary-dark" : "xl:bg-primary-main xl:text-white"
        }`}
        onClick={() => handleSelection("parent", "parent")}
      >
        <div className="flex h-[51px] w-[74px] items-center justify-center bg-secondary-main drop-shadow-sm xl:hidden">
          <span className={categoryIconLines} />
        </div>
        <h1 className="select-none">Категории</h1>
      </header>
      <nav
        className={`max-h-max duration-200 ease-in-out ${
          windowWidth < 1280 && selectedCategory.parent !== "parent" ? "h-0 overflow-hidden" : ""
        }`}
      >
        <ol>
          {categories.map(({ category, links }, index) => (
            <li
              className={`h-[74px] overflow-hidden transition-all duration-100 ${
                selectedCategory.category === category ? "h-full overflow-visible" : ""
              } ${index === 0 ? "border-none" : "border-t-[1px] border-t-secondary-main"}`}
              key={category}
            >
              <button
                className="flex h-[74px] w-full items-center justify-between bg-primary-main pl-[16px] pr-[26px] text-left text-lg uppercase text-white"
                onClick={() => handleSelection("category", category)}
                aria-label={category}
              >
                {category}
                <svg
                  width="9"
                  height="15"
                  fill="none"
                  className={`ml-[23px] flex-none transition-all duration-100
                      ${selectedCategory.category === category ? "rotate-[90deg]" : "rotate-[0deg]"}
                    `}
                >
                  <path
                    d="M2.50005 0.5L0.737549 2.2625L6.46255 8L0.737549 13.7375L2.50005 15.5L10 8L2.50005 0.5Z"
                    fill="white"
                  />
                </svg>
              </button>
              <ol className="z-10 drop-shadow-md">
                {links.map(({ title, url, nestedLinks }, index, array) => (
                  <li key={title} className="group relative flex w-full bg-white px-[16px]">
                    <div
                      className={`w-full ${
                        index === array.length - 1 ? "border-none" : "border-b-[1px] border-gray-50"
                      }`}
                    >
                      {url ? (
                        <Link
                          href={url}
                          onClick={() => windowWidth < 1280 && handleSelection("parent", "parent")}
                          className={`${categoriesBtn} ${
                            url == route ? "text-base-500 text-black" : "text-secondary-dark"
                          } pr-[23px] hover:text-black`}
                        >
                          {title}
                        </Link>
                      ) : (
                        <Fragment>
                          <button
                            className={`${categoriesBtn} pr-[6px] group-hover:text-black ${
                              (windowWidth < 1280 && selectedCategory.subcategory === title) ||
                              nestedLinks?.find(({ url }) => url === route)
                                ? "text-base-500 text-black"
                                : "text-secondary-dark"
                            }`}
                            onClick={() => handleSelection("subcategory", title)}
                          >
                            {title}
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              className={`ml-[23px] flex-none transition-all duration-100 group-hover:fill-black ${
                                windowWidth < 1280 && selectedCategory.subcategory === title ? "rotate-90" : "rotate-0"
                              } ${
                                nestedLinks?.find(({ url }) => url === route) ? "fill-black" : "fill-secondary-light"
                              }`}
                            >
                              <path d="M1.33345 0L0.158447 1.175L3.97511 5L0.158447 8.825L1.33345 10L6.33345 5L1.33345 0Z" />
                            </svg>
                          </button>
                          <ul
                            className={`px-4 transition-all duration-100 ${
                              windowWidth < 1280
                                ? "overflow-hidden"
                                : "absolute right-[-295px] top-0 z-10 hidden h-auto max-w-[295px] flex-col bg-white px-4 drop-shadow-md group-hover:block"
                            } ${windowWidth < 1280 && selectedCategory.subcategory === title ? "h-full" : "h-0"}`}
                          >
                            {nestedLinks?.map(({ title, url }, index, array) => (
                              <li key={url}>
                                <Link
                                  href={url}
                                  onClick={() => windowWidth < 1280 && handleSelection("parent", "parent")}
                                  className={`flex h-[68px] w-full items-center border-b-[1px] border-gray-50 bg-white pr-[26px] text-base-400 hover:text-black ${
                                    url == route ? "text-base-500 text-black" : "text-secondary-dark"
                                  } ${index === array.length - 1 ? "border-b-0" : ""}`}
                                >
                                  {title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Fragment>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  )
})

Categories.displayName = "Categories"
