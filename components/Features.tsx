/**
 * Componente Features
 * Muestra las características principales "sin fricción" de Cuitly
 * Con tarjetas animadas y diseño moderno
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { FaBolt, FaShieldAlt, FaFileExcel } from 'react-icons/fa'

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Características principales
  const features = [
    {
      icon: FaBolt,
      title: 'Emití facturas en segundos',
      description: 'Emití facturas por WhatsApp en segundos, sin ingresar a ARCA ni usar sistemas complicados.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: FaShieldAlt,
      title: 'Sin interrupciones',
      description: 'Si ARCA está caído, Cuitly guarda tu factura y la sube automáticamente cuando el servicio vuelve.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: FaFileExcel,
      title: 'Carga masiva opcional',
      description: 'Subí tus ventas desde un Excel y facturá todo junto, sin hacerlo uno por uno.',
      color: 'from-green-400 to-emerald-600',
    },
  ]

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
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
            Facturá sin fricción
          </h2>
          <p className="text-lg sm:text-xl text-secondary-text">
            Desde tu celular, estés donde estés
          </p>
        </motion.div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-white to-secondary-gray rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Ícono con gradiente */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white text-3xl" />
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-primary-blue mb-4">
                {feature.title}
              </h3>

              {/* Descripción */}
              <p className="text-secondary-text leading-relaxed">
                {feature.description}
              </p>

              {/* Efecto decorativo en hover */}
              <div className={`absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-br ${feature.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Sección adicional de valor */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-primary-blue via-primary-dark-blue to-primary-blue rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-green/10 rounded-full blur-3xl" />
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Todo lo que necesitás, en un solo lugar
            </h3>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              Cuitly se integra perfectamente con ARCA para que no tengas que preocuparte por nada técnico. Solo enviá un mensaje y listo.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="px-4 py-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="font-semibold mb-1">Comprobantes ilimitados</div>
              </div>
              <div className="px-4 py-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="font-semibold mb-1">Envío automático</div>
              </div>
              <div className="px-4 py-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="font-semibold mb-1">Historial completo</div>
              </div>
              <div className="px-4 py-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="font-semibold mb-1">Soporte dedicado</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features

