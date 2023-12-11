import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import React from "react";
import NextAuthProvider from "@/components/providers/NextAuthProvider";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import ReduxCustomProvider from "@/components/providers/ReduxCustomProvider";

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
      <ReduxCustomProvider>
          <ReactQueryProvider>
            <NextAuthProvider>
                {children}
            </NextAuthProvider>
          </ReactQueryProvider>
      </ReduxCustomProvider>
      </body>
    </html>
  )
}
