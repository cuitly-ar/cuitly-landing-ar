/**
 * Página principal (Home) de la landing de Cuitly
 * Orquesta todos los componentes de las diferentes secciones
 */

'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyChoose from '@/components/WhyChoose'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Benefits from '@/components/Benefits'
import WhatMakesDifferent from '@/components/WhatMakesDifferent'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header fijo con navegación */}
      <Header />
      
      {/* Sección Hero principal */}
      <Hero />
      
      {/* Por qué elegir Cuitly */}
      <WhyChoose />
      
      {/* Sección Cómo funciona */}
      <HowItWorks />
      
      {/* Sección de características sin fricción */}
      <Features />
      
      {/* Sección de beneficios */}
      <Benefits />
      
      {/* Lo que hace diferente a Cuitly */}
      <WhatMakesDifferent />
      
      {/* Sección de planes y precios */}
      <Pricing />
      
      {/* Sección de preguntas frecuentes */}
      <FAQ />
      
      {/* Call to Action final */}
      <CTA />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}




