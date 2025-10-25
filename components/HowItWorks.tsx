/**
 * Componente HowItWorks
 * Explica en 3 pasos simples cómo funciona Cuitly
 * Con animaciones al hacer scroll
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Pasos del proceso
  const steps = [
    {
      number: '1',
      title: 'Hablá con Cuitly por WhatsApp',
      description: 'Enviá los datos de tu venta o nota de crédito por chat.',
    },
    {
      number: '2',
      title: 'Cuitly genera tu factura oficial',
      description: 'El sistema se conecta con ARCA (ex AFIP) y crea el comprobante por vos.',
    },
    {
      number: '3',
      title: 'Recibí la factura en segundos',
      description: 'Te llega al chat lista para reenviar a tu cliente o descargarla.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-secondary-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-blue mb-4">
            Cómo funciona
          </h2>
          <p className="text-lg sm:text-xl text-secondary-text">
            Tu facturación, más simple que nunca
          </p>
        </motion.div>

        {/* Grid de pasos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Línea conectora entre pasos (solo en desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-6 w-12 h-0.5 bg-gradient-to-r from-primary-blue to-transparent" />
              )}

              {/* Número del paso con diseño circular */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-primary-dark-blue text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-lg mx-auto">
                {step.number}
              </div>

              {/* Título y descripción */}
              <h3 className="text-xl font-bold text-primary-blue mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-secondary-text text-center leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA adicional */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-secondary-text mb-6">
            ¿Listo para simplificar tu facturación?
          </p>
          <a
            href="#pricing"
            className="inline-block px-8 py-4 bg-primary-blue text-white font-semibold rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Ver planes disponibles
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks

