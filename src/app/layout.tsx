import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import React from "react";
import MenuWrapper from "@/components/wrappers/MenuWrapper";

const raleway = Raleway({ subsets: ['cyrillic-ext'] })

export const metadata: Metadata = {
  title: 'MineLab',
  description: 'Minecraft mods and more!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={raleway.className}>
        <MenuWrapper/>
        {children}
      </body>
    </html>
  )
}
