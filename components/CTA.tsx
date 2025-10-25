/**
 * Componente CTA (Call To Action)
 * Sección final que invita al usuario a registrarse
 * Incluye trust badges y estadísticas
 */

'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaCheckCircle, FaChartLine } from 'react-icons/fa'

const CTA = () => {
  // Stats/Trust Badges
  const stats = [
    { value: '10,000+', label: 'Facturas emitidas' },
    { value: '500+', label: 'Usuarios activos' },
    { value: '99.9%', label: 'Uptime garantizado' },
  ]

  const benefits = [
    'Empezá gratis por 7 días',
    'Cancela cuando quieras, sin compromiso',
    'Soporte en español las 24/7',
    'Configuración en menos de 5 minutos',
  ]

  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-primary-blue via-primary-dark-blue to-purple-900 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-green/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contenido Principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white text-sm font-semibold mb-8 border border-white/20"
          >
            <FaRocket className="text-accent-green" />
            Empezá hoy mismo
          </motion.div>

          {/* Título Principal */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ¿Listo para simplificar tu{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-accent-green bg-clip-text text-transparent">
              facturación
            </span>
            ?
          </h2>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Unite a cientos de monotributistas que ya automatizaron su facturación con Cuitly
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-white text-primary-blue font-bold rounded-xl text-lg shadow-2xl hover:shadow-glow transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              Comenzar Gratis
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.a>

            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 w-full sm:w-auto justify-center flex items-center gap-2"
            >
              Ver Planes
            </motion.a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 justify-center text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-accent-green" />
              <span>Cancela cuando quieras</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-accent-green" />
              <span>Soporte en español</span>
            </div>
          </div>
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lista de Beneficios */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20"
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <FaChartLine className="text-accent-green text-3xl" />
            <h3 className="text-2xl font-bold text-white">¿Por qué elegir Cuitly?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-white"
              >
                <div className="w-6 h-6 rounded-full bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="text-accent-green text-sm" />
                </div>
                <span className="text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nota final */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white/60 text-sm mt-12"
        >
          Al registrarte, aceptás nuestros{' '}
          <a href="/terminos" className="text-white hover:text-accent-green transition-colors underline">
            Términos y Condiciones
          </a>
          {' '}y{' '}
          <a href="/privacidad" className="text-white hover:text-accent-green transition-colors underline">
            Política de Privacidad
          </a>
        </motion.p>
      </div>
    </section>
  )
}

export default CTA


