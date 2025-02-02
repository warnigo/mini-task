import { type FC, type PropsWithChildren } from "react"

import { Sidebar } from "@/widgets/Sidebar"

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className="container mx-auto flex min-h-screen gap-4 py-10 md:gap-6">
    <Sidebar />

    <main className="grow" id="main-content">
      {children}
    </main>
  </div>
)

Layout.displayName = "Layout"
