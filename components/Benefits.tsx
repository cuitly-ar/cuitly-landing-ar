/**
 * Componente Benefits
 * Muestra los beneficios reales de usar Cuitly
 * Con tarjetas interactivas y diseño atractivo
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { FaClock, FaExclamationTriangle, FaMobileAlt, FaLock } from 'react-icons/fa'

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Beneficios principales
  const benefits = [
    {
      icon: FaClock,
      title: 'Ahorro de tiempo real',
      description: 'Reducí hasta un 90% el tiempo que dedicás a facturar cada semana.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: FaExclamationTriangle,
      title: 'Evita errores manuales',
      description: 'El sistema valida los datos antes de generar la factura.',
      color: 'from-orange-400 to-red-500',
    },
    {
      icon: FaMobileAlt,
      title: 'Todo desde tu celular',
      description: 'Sin ingresar portales, sin recordatorios, sin burocracia.',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: FaLock,
      title: 'Transparencia y seguridad total',
      description: 'Tus datos se usan solo para emitir comprobantes oficiales, sin almacenar tu clave fiscal.',
      color: 'from-green-400 to-teal-500',
    },
  ]

  return (
    <section id="benefits" className="py-20 lg:py-32 bg-secondary-gray">
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
            Beneficios reales para vos
          </h2>
          <p className="text-lg sm:text-xl text-secondary-text">
            Más que una herramienta, un cambio en tu forma de trabajar
          </p>
        </motion.div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-4 text-center border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Ícono con gradiente y animación */}
              <motion.div
                className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto group-hover:rotate-12 transition-transform duration-300`}
                whileHover={{ scale: 1.1 }}
              >
                <benefit.icon className="text-white text-3xl" />
              </motion.div>

              {/* Título */}
              <h3 className="text-xl font-bold text-primary-blue mb-4">
                {benefit.title}
              </h3>

              {/* Descripción */}
              <p className="text-secondary-text leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Estadísticas impactantes */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: '90%', label: 'Menos tiempo facturando', color: 'from-blue-500 to-blue-700' },
            { number: '100%', label: 'Facturas sin errores', color: 'from-green-500 to-emerald-700' },
            { number: '24/7', label: 'Disponibilidad total', color: 'from-purple-500 to-indigo-700' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${stat.color} rounded-3xl p-8 text-white text-center shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-105 relative overflow-hidden`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
              <div className="relative z-10">
                <div className="text-6xl font-bold mb-3">{stat.number}</div>
                <div className="text-lg font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-lg text-secondary-text mb-6">
            Más de cientos de monotributistas ya confían en Cuitly
          </p>
          <a
            href="#pricing"
            className="inline-block px-8 py-4 bg-gradient-to-r from-accent-green to-accent-green-hover text-white font-semibold rounded-xl shadow-lg hover:shadow-glow-green transition-all duration-300 hover:scale-105"
          >
            Probá gratis por 30 días
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits

