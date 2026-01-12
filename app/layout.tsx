import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React


const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-quaternary text-primary`}>{children}</body>
    </html>
  )
}
