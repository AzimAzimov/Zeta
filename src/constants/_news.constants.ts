type NewsSliderItem = { title: string; subtitle: string }

type NewsContentItem = {
  image: string
  date: string
  title: string
  text: string
}
const newsSliderContent: NewsSliderItem[] = [
  {
    title: "Увеличение производительности",
    subtitle:
      "Во втором квартале заводу удалось сохранить отпускные цены на продукцию для клиентов и увеличить количество отгруженных единиц продукции на 22%.",
  },
  {
    title: "Новая платформа мониторинга",
    subtitle: "Между ООО ЗЭТА и ТП КБПЭ проведены переговоры по созданию платформы мониторинга для промышленности.",
  },
  {
    title: "Партнерство со Сколково",
    subtitle: "Наша компания заключила соглашение о партнёрстве с резидентом парка Сколково.",
  },
  {
    title: "Успешная имплементация",
    subtitle: "Произведена отгрузка 46 единиц оборудования для клиентов.",
  },
  {
    title: "Поставка оборудования на Дальний Восток",
    subtitle: "Произведена отгрузка более 80 единиц оборудования для нужд энергетики Дальнего Востока.",
  },
]

const newsContent: NewsContentItem[] = [
  {
    image: "/news-1-image.jpg",
    date: "Август 2021.",
    title: "Система предиктивной аналитики",
    text: "Завод продолжает работу по созданию системы предиктивной аналитики для промышленного оборудования.",
  },
  {
    image: "/news-2-image.jpg",
    date: "Июль 2021.",
    title: "Увеличение производительности",
    text: "Во втором квартале заводу удалось сохранить отпускные цены на продукцию для клиентов и увеличить количество отгруженных единиц продукции на 22%.",
  },
  {
    image: "/news-3-image.jpg",
    date: "Декабрь 2020.",
    title: "Новая платформа мониторинга",
    text: "Между ООО ЗЭТА и ТП КБПЭ проведены переговоры по созданию платформы мониторинга для промышленности.",
  },
  {
    image: "/news-4-image.jpg",
    date: "Октябрь 2020.",
    title: "Партнерство со Сколково",
    text: "Наша компания заключила соглашение о партнёрстве с резидентом парка Сколково.",
  },
  {
    image: "/news-5-image.jpg",
    date: "Сентябрь 2020.",
    title: "Успешная имплементация",
    text: "Произведена отгрузка 46 единиц оборудования для клиентов.",
  },
  {
    image: "/news-6-image.jpg",
    date: "Август 2020.",
    title: "Поставка оборудования на Дальний Восток",
    text: "Произведена отгрузка более 80 единиц оборудования для нужд энергетики Дальнего Востока.",
  },
  {
    image: "/news-7-image.jpg",
    date: "Июль 2020.",
    title: "Оборудование для НПЗ",
    text: "Осуществлена отгрузка оборудования для предприятия нефтегазового сектора.",
  },
  {
    image: "/news-8-image.jpg",
    date: "Июль 2020.",
    title: "Разработка нового оборудования",
    text: "Конструкторский отдел приступил к разработке новых единиц оборудования для нужд медицинской отрасли.",
  },
]

export { newsContent, newsSliderContent }