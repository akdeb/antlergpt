import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AntlerGPT',
  description: 'pitch your wedge and sandbox',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <meta property="og:image" content="/tyler.png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
      <body className={inter.className}><Theme appearance="light" accentColor="red" panelBackground="solid" radius="small">{children}</Theme></body>
    </html>
  )
}
