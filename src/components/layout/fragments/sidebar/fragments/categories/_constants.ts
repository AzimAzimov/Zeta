type Categories = {
  category: string
  links: {
    title: string
    url?: string
    nestedLinks?: {
      title: string
      url: string
    }[]
  }[]
}
export const categories: Categories[] = [
  {
    category: "Шкафы управления и распределения",
    links: [
      {
        title: "Системы оперативного постоянного тока (СОПТ)",
        nestedLinks: [
          {
            url: "/shkafy-upravleniya-raspredeleniya/sopt/nizkovoltnye-komplektnye-ustroystva",
            title: "Низковольтные комплектные устройства (НКУ)",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/sopt/obr",
            title: "Шкафы питания цепей оперативной блокировки разъединителей (ОБР)",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/sopt/shkafy-raspredeleniya-operativnogo-toka",
            title: "Шкафы распределения оперативного тока (ШРОТ)",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/sopt/shkafy-vvoda-ab-zu",
            title: "Шкафы ввода АБ и ЗУ",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/sopt/shkafy-vvoda-sektsionirovania",
            title: "Шкафы ввода и секционирования",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/sopt/shchity-postoyannogo-toka",
            title: "Щиты постоянного тока (ЩПТ)",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/sopt/shkafy-otkhodyashchikh-liniy",
            title: "Шкафы отходящих линий",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/sopt/shkafy-operativnogo-toka",
            title: "Шкафы оперативного тока (гарантированного питания) ШОТ",
          },
        ],
      },
      {
        title: "Щиты переменного тока",
        nestedLinks: [
          {
            url: "/shkafy-upravleniya-raspredeleniya/shchity-peremennogo-toka/shkafy-pitaniya-i-upravleniya-electrodvigatelyami",
            title: "Шкафы для питания и управления электродвигателями",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/shchity-peremennogo-toka/shchity-sobstvennykh-nuzhd",
            title: "Щиты собственных нужд (ЩСН–0,4 кВ)",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/shchity-peremennogo-toka/shkafy-raspredelitelnye-nizkogo-napryazheniya",
            title: "Шкафы распределительные низкого напряжения ШРНН",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/shchity-peremennogo-toka/glavnye-raspredelitelnye-shchity",
            title: "Главные распределительные щиты ГРЩ, ГРЩД",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/shchity-peremennogo-toka/raspredelitelnye-shchity-SHCHO-70",
            title: "Распределительные щиты ЩО-70",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/shchity-peremennogo-toka/RT30-88M",
            title: "РТЗО-88М",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/shchity-peremennogo-toka/RT30-88",
            title: "РТЗО-88",
          },
        ],
      },
      {
        title: "Шкафы вторичной коммутации наружной установки",
        nestedLinks: [
          {
            url: "/shkafy-upravleniya-raspredeleniya/shkafy-vtorichnoy-komutatsii-naruzhnoy-ustanovki/shkafy-kleemnykh-zazhimov",
            title: "Шкафы клеммных зажимов",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/shkafy-vtorichnoy-komutatsii-naruzhnoy-ustanovki/shkafy-obogreva-vyklyuchateley",
            title: "Шкафы обогрева выключателей (ШОВ)",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/shkafy-vtorichnoy-komutatsii-naruzhnoy-ustanovki/shkafy_zazhimov_zashchity_shin",
            title: "Шкафы зажимов защиты шин (ШЗШ)",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/shkafy-vtorichnoy-komutatsii-naruzhnoy-ustanovki/shkafy-zazhimov-transformatorov",
            title: "Шкафы зажимов трансформаторов напряжения (ШЗН)",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/shkafy-vtorichnoy-komutatsii-naruzhnoy-ustanovki/shkafy-promezhutochnykh-zazhimov",
            title: "Шкафы промежуточных зажимов (ШЗВ)",
          },
        ],
      },
      {
        title: "Шкафы общего назначения",
        nestedLinks: [
          {
            url: "/shkafy-upravleniya-raspredeleniya/shkafy-obshego-naznacheniya/yashchiki-silovye-YAR",
            title: "Ящики силовые серии ЯР (П)",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/shkafy-obshego-naznacheniya/yashchiki-upravleniya-YA5000-RUSM5000",
            title: "Ящики управления Я5000, РУСМ5000",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/shkafy-obshego-naznacheniya/yashchiki-upravleniya-osvesheniem",
            title: "Ящики управления освещением ЯУО-9601, ЯУО-9602",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/shkafy-obshego-naznacheniya/shkafy-vvoda-ABP",
            title: "Шкафы ввода с АВР серии ШУ (ЯУ) 8250, 8350",
          },
        ],
      },
      {
        title: "НКУ для распределения и учета электрической энергии",
        nestedLinks: [
          {
            url: "/shkafy-upravleniya-raspredeleniya/uchet-i-raspredeleneie-electroenergii/vvodno-raspredelitelnye-ustroystva-VRU-1",
            title: "Вводно-распределительные устройства ВРУ-1",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/uchet-i-raspredeleneie-electroenergii/vvodno-raspredelitelnye-ustroystva-VRU-3",
            title: "Вводно-распределительные устройства ВРУ-3",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/uchet-i-raspredeleneie-electroenergii/vvodno-raspredelitelnye-ustroystva-VRU-8",
            title: "Вводно-распределительные устройства ВРУ-8",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/uchet-i-raspredeleneie-electroenergii/shkafy-raspredelitelnye-silovye-SHRS",
            title: "Шкафы распределительные силовые ШРС, ШР",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/uchet-i-raspredeleneie-electroenergii/punkty-raspredelitelnye-PR",
            title: "Пункты распределительные ПР",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/uchet-i-raspredeleneie-electroenergii/shchity-ucheta-raspredelitelniya-electroenergii",
            title: "Щиты учета и распределения электрической энергии ЩУР",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/uchet-i-raspredeleneie-electroenergii/shchitki-etazhnye-SHCHE",
            title: "Щитки этажные ЩЭ",
          },
        ],
      },
      {
        title: "НКУ для управления и автоматизации",
        nestedLinks: [
          {
            url: "/shkafy-upravleniya-raspredeleniya/nku-dlya-avtomatizatsii/shkafy-avariynogo-osveshcheniya",
            title: "Шкафы аварийного освещения ШАО",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/nku-dlya-avtomatizatsii/shchity-stantsii-upravleniya",
            title: "Щиты станции управления ЩСУ",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/nku-dlya-avtomatizatsii/pulty-upravleniya-PRP",
            title: "Пульты управления ПРП",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/nku-dlya-avtomatizatsii/pulty-upravleniya-electroprivoda-zadvizhek",
            title: "Пульты управления электропривода задвижек БЭЗ",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/nku-dlya-avtomatizatsii/shchitki-osvetitelnye",
            title: "Щитки осветительные ОЩ, ОЩВ",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/nku-dlya-avtomatizatsii/ustroystva-avtomaticheskogo-vklyucheniya-rezerva",
            title: "Устройства автоматического включения резерва АВР",
          },
        ],
      },
      {
        title: "Шкафы собственных нужд",
        nestedLinks: [
          {
            url: "/shkafy-upravleniya-raspredeleniya/shkafy-sobstvennykh-nuzhd/shkafy-upravleniya-razedinitelyami",
            title: "Шкафы управления разъединителями (ШУР)",
          },
          {
            url: "/shkafy-upravleniya-raspredeleniya/shkafy-sobstvennykh-nuzhd/shkafy-pitaniya-solenoidov",
            title: "Шкафы питания соленоидов (ШПВ)",
          },
        ],
      },
    ],
  },
  {
    category: "Изготовление пластиковых корпусов и деталей",
    links: [
      {
        url: "/izgotovlenie-plastikovykh-korpusov-i-detaley",
        title: "Изготовление пластиковых корпусов и деталей",
      },
      {
        url: "/izgotovlenie-plastikovykh-korpusov-i-detaley/dizayn-i-razrabotka-konstruktsii",
        title: "Дизайн и разработка конструкции",
      },
      {
        url: "/izgotovlenie-plastikovykh-korpusov-i-detaley/prototipirovanie-i-lite-v-siliconovye-formy",
        title: "Прототипирование и литье в силиконовые формы",
      },
      {
        url: "/izgotovlenie-plastikovykh-korpusov-i-detaley/vakuumnoe-formovanie-listovykh-materialov",
        title: "Вакуумное формование листовых материалов",
      },
      {
        url: "/izgotovlenie-plastikovykh-korpusov-i-detaley/lite-plastmass-pod-davleniem",
        title: "Литье пластмасс под давлением",
      },
      {
        url: "/izgotovlenie-plastikovykh-korpusov-i-detaley/sborka-i-pokraska-gotovykh-izdeliy",
        title: "Сборка и покраска готовых изделий",
      },
    ],
  },
  {
    category: "Акустический контроль",
    links: [
      {
        url: "/akusticheskiy-kontrol/sistema-akusticheskogo-kontrolya-echo",
        title: "Система акустического контроля Echo",
      },
      {
        url: "/akusticheskiy-kontrol/izmeritelnyy-komplekt-v1",
        title: "Измерительный комплект V1.0",
      },
      {
        url: "/akusticheskiy-kontrol/izmeritelnyy-komplekt-v2",
        title: "Измерительный комплект V2.0",
      },
    ],
  },
  {
    category: "Блоки питания",
    links: [
      {
        url: "/bloki-pitaniya/istochnik-pitaniya-AC-DC",
        title: "Источник питания AC/DC 125Вт",
      },
    ],
  },
]
