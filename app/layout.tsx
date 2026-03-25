import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import { StoreProvider } from '@/lib/store'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Easy Storage | Student Storage Made Easy',
  description:
    'Affordable summer storage for University at Buffalo students. We pick up, store, and deliver your belongings. Starting at $14.99/box.',
  keywords: ['Easy Storage', 'Buffalo student storage', 'summer storage', 'college storage'],
  icons: {
    icon: '/images/easy-storage-logo.png',
    shortcut: '/images/easy-storage-logo.png',
    apple: '/images/easy-storage-logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <StoreProvider>
          {children}
          <Toaster position="top-center" />
        </StoreProvider>
        <Analytics />
      </body>
    </html>
  )
}
