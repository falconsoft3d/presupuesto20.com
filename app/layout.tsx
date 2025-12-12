import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Presupuesto20 - Software de Presupuestos de Código Abierto',
  description: 'Software moderno y gratuito para gestionar presupuestos. Open source, potente y fácil de usar.',
  keywords: 'presupuestos, software, open source, código abierto, gestión',
  authors: [{ name: 'Presupuesto20', email: 'mfalconsoft@gmail.com' }],
  openGraph: {
    title: 'Presupuesto20 - Software de Presupuestos Open Source',
    description: 'Software moderno y gratuito para gestionar presupuestos',
    url: 'https://www.presupuesto20.com',
    siteName: 'Presupuesto20',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
