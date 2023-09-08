import { StaticImageData } from "next/image"

import sliderImage1 from "../../../../../public/index-page-slide_1-bg.jpg"
import sliderImage2 from "../../../../../public/index-page-slide_2-bg.jpg"

type SlideItems = {
  imgUrl: StaticImageData
  title: string
  subtitle: string
  features: { icon: string; text: string }[]
}

export const slideItems: SlideItems[] = [
  {
    imgUrl: sliderImage1,
    title: "Профили деятельности компании",
    subtitle:
      "Реализация комплексных электротехнических проектов, а также широкий спектр услуг по изготовлению пластиковых изделий и деталей.",
    features: [
      {
        icon: "/index-page-slide_1-icon_1.png",
        text: "Наличие собственного производства",
      },
      {
        icon: "/index-page-slide_1-icon_2.png",
        text: "Низкие сроки поставки",
      },
      {
        icon: "/index-page-slide_1-icon_3.png",
        text: "Низкие цены",
      },
    ],
  },
  {
    imgUrl: sliderImage2,
    title: "Наши партнёры",
    subtitle:
      "Наша компания установила и поддерживает устойчивые партнерские и дилерские отношения более чем с двадцатью заводами-производителями и свыше чем с 300 предприятиями-потребителями России.",
    features: [
      {
        icon: "/index-page-slide_2-icon.svg",
        text: "Предприятия строительства",
      },
      {
        icon: "/index-page-slide_2-icon.svg",
        text: "Электроэнергетики",
      },
      {
        icon: "/index-page-slide_2-icon.svg",
        text: "Нефтегазовый и горнодобывающий комплексы",
      },
      {
        icon: "/index-page-slide_2-icon.svg",
        text: "Черная и цветная металлургия",
      },
      {
        icon: "/index-page-slide_2-icon.svg",
        text: "Сырьевая и химическая промышленности",
      },
      {
        icon: "/index-page-slide_2-icon.svg",
        text: "Машиностроения",
      },
      {
        icon: "/index-page-slide_2-icon.svg",
        text: "Сельское хозяйство и коммунальные сферы",
      },
      {
        icon: "/index-page-slide_2-icon.svg",
        text: "IT-компании",
      },
    ],
  },
  {
    imgUrl: sliderImage2,
    title: "Наши возможности",
    subtitle:
      "Широчайший ассортимент оборудования НКУ с комплектующими отечественного и импортного производства, включающий более 3 000 наименований, по конкурентоспособным ценам.",
    features: [
      {
        icon: "/index-page-slide_3-icon-1.png",
        text: "Комплексные поставки оборудования",
      },
      {
        icon: "/index-page-slide_3-icon-2.png",
        text: "Опыт в разработке и наладке",
      },
      {
        icon: "/index-page-slide_3-icon-3.png",
        text: "Изготовление изделий из пластика",
      },
    ],
  },
]
