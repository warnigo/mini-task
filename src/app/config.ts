import { type Metadata, type Viewport } from "next"
import { Nunito } from "next/font/google"

export const metadata = {
  title: {
    template: "%s | Abubakir Shavkatov",
    default: "Abubakir Shavkatov | Software Engineer & Web Developer",
  },
  description:
    "Welcome to the digital realm of Abubakir Shavkatov, also known as Warnigo. Professional software engineer and creative developer combining technical expertise with artistic vision. Explore my innovative projects, creative works, and technical achievements.",
  icons: "https://warnigo.uz/avatar.webp",
  creator: "Abubakir Shavkatov (Warnigo)",
} satisfies Metadata

export const viewport = {
  initialScale: 1,
  userScalable: false,
  width: "device-width",
} satisfies Viewport

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})
