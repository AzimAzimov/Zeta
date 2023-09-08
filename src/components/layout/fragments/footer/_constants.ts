type FooterNav = {
  title: string
  url?: string
}

const contacts: FooterNav[] = [
  {
    title: 'ООО "ЗЭТА"',
  },
  {
    title: "E-mail: zeta21@bk.ru",
    url: "mailto:zeta21@bk.ru",
  },
  {
    title: "+7 835 227 08 36",
    url: "tel:+78352270836",
  },
  {
    title: "+7 495 532 61 19",
    url: "tel:+74955326119",
  },
]

const navigations: FooterNav[] = [
  {
    title: "О нас",
  },
  {
    title: "Новости",
    url: "/news",
  },
  {
    title: "Сертификат",
    url: "/certificate",
  },
  {
    title: "Фотогалерея",
    url: "/gallery",
  },
  {
    title: "Каталог",
    url: "/catalogue",
  },
  {
    title: "Контакты",
    url: "/contacts",
  },
]

export { contacts, navigations }
