import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Language Model as a Service',
  description: 'Empower application developers through Language Model as a Service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={'${inter.className}  bg-gray-700 text-white dark:bg-gray-200 dark:text-black'}>{children}</body>
    </html>
  )
}