import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React
import { useEffect, useState } from "react"


const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body className="bg-primarySolid">{children}</body>
    </html>
  )
}
