import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/context/AuthContext'
import { WatchlistProvider } from '@/context/WatchlistContext'

export const metadata: Metadata = {
  title: 'Netflix Clone',
  description: 'A Netflix clone built with Next.js and Tailwind CSS',
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
      </body>
    </html>
  )
}