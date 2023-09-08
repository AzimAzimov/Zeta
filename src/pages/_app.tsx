import { useEffect, useState } from "react"
import type { AppProps } from "next/app"
import { Roboto } from "next/font/google"
import { useRouter } from "next/router"

import { Layout, Preloader } from "@components"

import "../styles/globals.css"

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-roboto",
})

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true)
    })

    router.events.on("routeChangeComplete", () => {
      setLoading(false)
    })
  })

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      {loading && <Preloader />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
