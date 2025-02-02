import { type FC, type PropsWithChildren } from "react"

import { Sidebar } from "@widgets/Sidebar"

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className="container mx-auto flex min-h-screen flex-col gap-4 py-10 sm:flex-row md:gap-6">
    <div className="sm:sticky sm:top-10">
      <Sidebar />
    </div>

    <main className="grow" id="main-content">
      {children}
    </main>
  </div>
)

Layout.displayName = "Layout"
