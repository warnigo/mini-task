import { type FC, type PropsWithChildren } from "react"

import { Layout } from "@/app/layouts"

import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import "@shared/assets/css/tailwind.css"
import "./styles/globals.css"

export { metadata, viewport } from "./config"

const RootLayout: FC<PropsWithChildren> = async ({ children }) => (
  <html
    suppressHydrationWarning
    className={`${GeistSans.variable} ${GeistMono.variable}`}
    lang="en"
  >
    <body className="antialiased">
      <Layout>{children}</Layout>
    </body>
  </html>
)

RootLayout.displayName = "RootLayout"
export default RootLayout
