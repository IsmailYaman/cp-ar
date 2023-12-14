import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './globals.css'

const inter = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CP-AR',
  description: 'An app to learn about CPR.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="mytheme" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
