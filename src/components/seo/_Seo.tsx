import React, { FC } from "react"
import Head from "next/head"

interface ISeo {
  title: string
  description: string
  image?: string
  keywords?: string
  children?: JSX.Element
}

export const Seo: FC<ISeo> = ({ title, description, keywords, image = "/header-logo.png", children }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="robots" content="all" />
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta property="og:locale" content="ru" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content="ЗЭТА - Завод электротехники и автоматики" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    <meta itemProp="name" content="ЗЭТА - Завод электротехники и автоматики" />
    <meta itemProp="description" content={description} />
    <meta itemProp="image" content={image} />
    {children}
  </Head>
)
