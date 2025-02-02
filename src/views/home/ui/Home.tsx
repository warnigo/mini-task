"use client"

import { type FC } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

import { Card, CardContent, CardHeader } from "@shared/ui"
import { cardMotion } from "@views/home/lib/motion"
import { mockData } from "@views/home/model/constants"
import { type Categories } from "@widgets/Sidebar/model/types"
import { motion } from "framer-motion"

const Home: FC = () => {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("type")

  const filteredData = searchQuery
    ? mockData.filter((card) => card.type.includes(searchQuery as Categories))
    : mockData

  return (
    <section>
      <div className="grid grid-cols-2 gap-5 md:gap-6 lg:grid-cols-3">
        {filteredData.map((card, index) => (
          <motion.div
            key={index}
            animate="visible"
            exit="hidden"
            initial="hidden"
            variants={cardMotion.container}
          >
            <Card className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl">
              <CardHeader className="p-0">
                <Image
                  alt={card.title}
                  className="size-full object-cover object-center sm:max-h-[162px] md:max-h-[200px]"
                  height={100}
                  src={card.img}
                  width={100}
                />
              </CardHeader>

              <CardContent className="px-4 py-2">
                <motion.p
                  animate="visible"
                  className="line-clamp-1 font-extrabold"
                  initial="hidden"
                  variants={cardMotion.item}
                >
                  {card.title}
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

Home.displayName = "Home"
export default Home
