/**
 * Layout principal de la aplicación Cuitly
 * Este componente envuelve todas las páginas y define la estructura HTML base
 */

import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

// Configuración de la fuente Inter de Google Fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Metadata de SEO para la landing page
export const metadata: Metadata = {
  title: 'Cuitly - Tu facturación, más simple que nunca | Facturá desde WhatsApp',
  description: 'Emití facturas electrónicas oficiales de ARCA (ex AFIP) directamente desde WhatsApp. Automatizá tu facturación para monotributo sin entrar al portal. Sin complicaciones, sin errores.',
  keywords: [
    'facturar desde whatsapp',
    'app de facturación afip',
    'facturación monotributo',
    'automatizar facturación',
    'facturas electrónicas argentina',
    'facturación arca',
    'facturación whatsapp argentina',
    'monotributo factura',
    'cuitly',
    'bot facturación'
  ],
  authors: [{ name: 'Cuitly', url: 'https://www.cuitly.ar' }],
  creator: 'Cuitly',
  publisher: 'Cuitly',
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
  alternates: {
    canonical: 'https://www.cuitly.ar',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.cuitly.ar',
    title: 'Cuitly - Facturá desde WhatsApp | Automatización de Facturación ARCA (ex AFIP)',
    description: 'La forma más simple de facturar en Argentina. Emití facturas oficiales desde WhatsApp en segundos, sin entrar a ARCA.',
    siteName: 'Cuitly',
    images: [
      {
        url: 'https://www.cuitly.ar/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cuitly - Facturación desde WhatsApp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cuitly - Facturá desde WhatsApp',
    description: 'Automatizá tu facturación en ARCA (ex AFIP) desde WhatsApp. Sin complicaciones.',
    images: ['https://www.cuitly.ar/og-image.jpg'],
    creator: '@cuitly',
    site: '@cuitly',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  category: 'business',
}

// Configuración de viewport (separado en Next.js 14+)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2196F3',
}

// Schema.org JSON-LD
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cuitly',
  url: 'https://www.cuitly.ar',
  logo: 'https://www.cuitly.ar/logo.svg',
  description: 'Plataforma de automatización de facturación electrónica desde WhatsApp para Argentina',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '',
    contactType: 'customer service',
    email: 'contacto@cuitly.ar',
    availableLanguage: ['Spanish'],
    areaServed: 'AR',
  },
  sameAs: [
    'https://www.instagram.com/cuitly',
    'https://www.linkedin.com/company/cuitly',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AR',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Cuitly',
  url: 'https://www.cuitly.ar',
  description: 'Facturación electrónica desde WhatsApp',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.cuitly.ar/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Cuitly',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, WhatsApp',
  offers: {
    '@type': 'Offer',
    price: '5499',
    priceCurrency: 'ARS',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '500',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Schema.org JSON-LD */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="software-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
