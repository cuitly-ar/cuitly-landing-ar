/**
 * Componente WhatMakesDifferent
 * Bloque de refuerzo antes del pricing
 * Cierra con razones concretas antes de los planes
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { FaCheckCircle } from 'react-icons/fa'

const WhatMakesDifferent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    'Sin instalaciones ni descargas',
    '100% en la nube (seguridad nivel empresa)',
    'Soporte gratuito 24/7 en español',
    'Emisión de comprobantes ilimitados',
    'Reintento automático si ARCA está caída',
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-blue via-primary-dark-blue to-purple-900 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-green/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Lo que hace diferente a Cuitly
          </h2>

          {/* Lista de características */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 text-left bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FaCheckCircle className="text-accent-green text-2xl flex-shrink-0" />
                <span className="text-white font-medium text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            className="text-xl sm:text-2xl text-white/90 italic font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            "Más que una app, un asistente que trabaja por vos."
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatMakesDifferent

