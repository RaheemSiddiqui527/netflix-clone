import type { Metadata } from 'next'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AuthProvider } from '@/context/AuthContext'
import { WatchlistProvider } from '@/context/WatchlistContext'

export const metadata: Metadata = {
  title: 'Netflix Clone',
  description: 'A Netflix clone built with Next.js and Tailwind CSS',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-netflix-black text-white">
        <AuthProvider>
          <WatchlistProvider>
            {children}
          </WatchlistProvider>
        </AuthProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}