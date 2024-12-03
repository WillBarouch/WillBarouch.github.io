import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Analytics} from '@vercel/analytics/react';
import React from "react";
import {SpeedInsights} from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Will Barouch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
    <head>
      <link rel="preconnect" href="https://rsms.me/" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <title>Will Barouch</title>
    </head>
      <body className={"bg-background dark:bg-dark-background min-h-full"}>
          {children}
          <SpeedInsights />
          <Analytics />
      </body>
    </html>
  )
}
