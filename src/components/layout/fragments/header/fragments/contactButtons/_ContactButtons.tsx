import React, { FC, useEffect, useState } from "react"

import { EmailIcon, PhoneIcon } from "@icons"

import { styles } from "./_styles"

export const ContactButtons: FC = () => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let timeOut: NodeJS.Timeout

    if (copied) {
      timeOut = setTimeout(() => {
        setCopied(false)
      }, 2000)
    }

    return () => {
      timeOut && clearTimeout(timeOut)
    }
  }, [copied])

  return (
    <ul className="flex gap-[16px]">
      <li className="group sm:hidden">
        <a href="mailto:zeta21@bk.ru" role="button" className="header-btn" aria-label="E-mail">
          <EmailIcon className={styles.icon} />
          <span className={styles.text}>Отправить письмо</span>
        </a>
      </li>
      <li className="group xl:hidden">
        <button
          className="header-btn"
          aria-label="Кнопка скопировать"
          onClick={() => {
            navigator.clipboard.writeText("zeta21@bk.ru")
            setCopied(true)
          }}
        >
          <EmailIcon className={styles.icon} />
          <span className={styles.text}>{copied ? "Скопировано!" : "zeta21@bk.ru"}</span>
        </button>
      </li>
      <li className="group">
        <a href="tel:+79276680840" className="header-btn" role="button" aria-label="Телефон">
          <PhoneIcon className={styles.icon} />
          <span className={styles.text}>+7 (927) 668-08-40</span>
        </a>
      </li>
    </ul>
  )
}
