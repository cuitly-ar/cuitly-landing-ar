/**
 * Componente WhyChoose
 * Muestra las razones por las que elegir Cuitly
 * Va justo después del Hero, antes de "Cómo funciona"
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { FaCloud, FaUserGraduate, FaHeadset, FaClock } from 'react-icons/fa'

const WhyChoose = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const reasons = [
    {
      icon: FaCloud,
      title: 'Sin descargas',
      description: 'Accedé desde cualquier dispositivo con Internet. Todo se guarda de forma segura en la nube #1 del mundo.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: FaUserGraduate,
      title: 'El más fácil de usar',
      description: 'Aprendés a usarlo en minutos, sin necesidad de conocimientos contables o técnicos.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: FaHeadset,
      title: 'Soporte humano y gratuito',
      description: 'Recibí ayuda por chat o email siempre que lo necesites. Sin límites, sin costos ocultos.',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: FaClock,
      title: 'Siempre disponible',
      description: 'Facturá incluso si ARCA (ex AFIP) está caída: Cuitly guarda y sincroniza tus comprobantes automáticamente.',
      color: 'from-orange-400 to-orange-600',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
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
            Por qué elegir Cuitly
          </h2>
          <p className="text-lg sm:text-xl text-secondary-text">
            La solución más confiable para tu facturación
          </p>
        </motion.div>

        {/* Grid de razones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                {/* Ícono con gradiente */}
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="text-white text-3xl" />
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold text-primary-blue mb-3">
                  {reason.title}
                </h3>

                {/* Descripción */}
                <p className="text-secondary-text text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose

