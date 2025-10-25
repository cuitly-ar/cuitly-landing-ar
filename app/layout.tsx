/**
 * Layout principal de la aplicación Cuitly
 * Este componente envuelve todas las páginas y define la estructura HTML base
 */

import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Configuración de la fuente Inter de Google Fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Metadata de SEO para la landing page
export const metadata: Metadata = {
  title: 'Cuitly - Facturá en ARCA desde WhatsApp',
  description: 'Automatizá tu facturación y olvidate del portal de ARCA. Con Cuitly, emití tus comprobantes oficiales desde WhatsApp en segundos, sin complicaciones ni errores.',
  keywords: ['facturación', 'ARCA', 'AFIP', 'WhatsApp', 'monotributo', 'Argentina', 'factura electrónica'],
  authors: [{ name: 'Cuitly' }],
  openGraph: {
    type: 'website',
    title: 'Cuitly - Facturá en ARCA desde WhatsApp',
    description: 'La forma más simple de facturar en Argentina',
    siteName: 'Cuitly',
  },
}

// Configuración de viewport (separado en Next.js 14+)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2196F3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}




