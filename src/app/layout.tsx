import { type FC, type PropsWithChildren } from "react"

import { cn } from "@shared/lib"

import { nunito } from "./config"
import { Layout } from "./layouts"

import "@shared/assets/css/tailwind.css"
import "./styles/globals.css"

export { metadata, viewport } from "./config"

const RootLayout: FC<PropsWithChildren> = async ({ children }) => (
  <html suppressHydrationWarning className={cn(nunito.className)} lang="en">
    <body className="antialiased">
      <Layout>{children}</Layout>
    </body>
  </html>
)

RootLayout.displayName = "RootLayout"
export default RootLayout
