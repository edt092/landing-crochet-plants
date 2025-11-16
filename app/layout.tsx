import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Plantas de Crochet - Transforma tu Hobby en un Negocio Rentable',
  description: 'Aprende a crear hermosas plantas de crochet y conviértelas en una fuente de ingresos. Ebook completo con patrones exclusivos, técnicas avanzadas y estrategias de venta.',
  keywords: 'crochet, plantas crochet, amigurumi, ebook crochet, negocio crochet, tejer plantas',
  authors: [{ name: 'Academia Sin Fronteras' }],
  openGraph: {
    title: 'Plantas de Crochet - Ebook Completo',
    description: 'Domina el arte de crear plantas de crochet y monetiza tu talento',
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
      <body>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              iconTheme: {
                primary: '#22c55e',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
