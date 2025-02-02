"use client"

import { type FC, Fragment } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { cn } from "@/shared/lib"

import { motion } from "framer-motion"

import { sidebarMotion } from "../lib/motion"
import { sidebarMenu } from "../model/constants"

export const Sidebar: FC = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("type") || "all"

  const handleClick = (href: string): void => {
    const newSearchParams = new URLSearchParams(searchParams.toString())

    if (href === "all") {
      newSearchParams.delete("type")
    } else {
      newSearchParams.set("type", href)
    }

    router.push(`?${newSearchParams.toString()}`, { scroll: false })
  }

  return (
    <div>
      <motion.nav
        animate="visible"
        className="w-full overflow-hidden rounded-2xl border border-border p-1 md:p-2"
        initial="hidden"
        variants={sidebarMotion.container}
      >
        <ul
          className="flex w-full flex-col items-start justify-start gap-2 text-start"
          role="menu"
        >
          {sidebarMenu.map(({ title, href }, index) => (
            <Fragment key={href}>
              <motion.li
                animate="visible"
                className="w-full"
                initial="hidden"
                variants={sidebarMotion.item(index)}
              >
                <motion.button
                  aria-current={searchQuery === href ? "page" : undefined}
                  role="menuitem"
                  type="button"
                  variants={sidebarMotion.button}
                  whileTap="tap"
                  className={cn(
                    "flex w-full items-center gap-2 rounded-xl px-3 py-2 text-start text-base font-semibold transition-colors",
                    searchQuery === href
                      ? "bg-primary text-white"
                      : "hover:bg-muted",
                  )}
                  onClick={() => handleClick(href)}
                >
                  {title}
                </motion.button>
              </motion.li>
            </Fragment>
          ))}
        </ul>
      </motion.nav>
    </div>
  )
}

Sidebar.displayName = "Sidebar"
