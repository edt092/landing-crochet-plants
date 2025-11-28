import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import StructuredData from '@/components/StructuredData'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  title: 'Curso de Crochet: Aprende a Crear Plantas de Crochet Paso a Paso | +500 Patrones',
  description: 'Mejor curso de crochet online para aprender plantas de crochet desde cero. 500+ patrones profesionales, técnicas avanzadas y estrategias de venta. Acceso inmediato. ⭐4.9/5',
  keywords: 'curso de crochet, planta de crochet paso a paso, amigurumi plantas tutorial, crochet plantas patrones gratis, mejor curso de crochet online, aprender crochet desde cero, curso de crochet opiniones, patrones de crochet pdf gratis, ebook crochet, plantas tejidas, cactus crochet',
  authors: [{ name: 'Academia Sin Fronteras' }],
  creator: 'Academia Sin Fronteras',
  publisher: 'Academia Sin Fronteras',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8b5cf6' },
    { media: '(prefers-color-scheme: dark)', color: '#8b5cf6' },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Curso de Crochet: +500 Patrones de Plantas | Aprende Paso a Paso',
    description: '⭐ Mejor curso de crochet online. Aprende a crear plantas de crochet desde cero y genera ingresos. 500+ patrones profesionales incluidos.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Plantas de Crochet - Academia Sin Fronteras',
    url: 'https://tudominio.com',
    images: [
      {
        url: 'https://tudominio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Curso de Crochet - Plantas de Crochet Paso a Paso',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curso de Crochet: +500 Patrones de Plantas',
    description: 'Aprende a crear plantas de crochet paso a paso. Mejor curso online con 500+ patrones profesionales.',
    images: ['https://tudominio.com/og-image.jpg'],
    creator: '@sinfronterasacademia',
  },
  alternates: {
    canonical: 'https://tudominio.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'tu-codigo-de-verificacion-google', // TODO: Agregar código de Google Search Console
    yandex: 'tu-codigo-de-verificacion-yandex',
  },
  category: 'Education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <StructuredData />
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://sp-ao.shortpixel.ai" />
        <link rel="dns-prefetch" href="https://sinfronterasacademia.info" />
      </head>
      <body>
        {/* Analytics - Actualiza los IDs cuando los configures */}
        <Analytics
          gaId={process.env.NEXT_PUBLIC_GA_ID}
          gtmId={process.env.NEXT_PUBLIC_GTM_ID}
          fbPixelId={process.env.NEXT_PUBLIC_FB_PIXEL_ID}
        />

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
