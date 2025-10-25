/**
 * Componente Hero
 * Sección principal de la landing con título, descripción y mockup de WhatsApp
 * Incluye animaciones y diseño responsive
 */

'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const Hero = () => {
  // Mensajes del chat de WhatsApp simulado
  const chatMessages = [
    { type: 'received', text: '¡Hola! ¿Qué factura necesitás generar hoy?' },
    { type: 'sent', text: 'Factura A por $15.000' },
    { type: 'received', text: 'Perfecto, ya generé tu factura. ¿La envío por email?' },
    { type: 'sent', text: 'Sí, por favor' },
    { type: 'received', text: '¡Listo! Factura enviada. ¿Algo más?' },
  ]

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-white via-primary-light-blue/30 to-white">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-blue rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent-green rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Contenido de texto */}
          <motion.div
            className="flex-1 max-w-2xl text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-primary-blue">Tu facturación,</span>
              <br />
              <span className="text-gradient bg-gradient-to-r from-primary-blue to-accent-green bg-clip-text text-transparent">
              más simple
              </span>
              <br />
              <span className="text-primary-blue">que nunca</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-secondary-text mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              La app de facturación más simple para monotributistas. Emití facturas electrónicas oficiales en ARCA desde WhatsApp en segundos. Sin entrar al portal, sin errores.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#pricing"
                className="group relative px-8 py-4 bg-gradient-to-r from-accent-green to-accent-green-hover text-white font-bold rounded-xl shadow-xl hover:shadow-glow-green transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Facturar ahora - 7 días gratis</span>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </motion.div>

            {/* Badges de confianza */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 text-sm text-secondary-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Cancela cuando quieras</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Mockup de WhatsApp */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Efecto de brillo detrás del mockup */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-green/20 to-primary-blue/20 rounded-3xl blur-2xl" />
              
              {/* Mockup del chat de WhatsApp */}
              <div className="relative w-80 sm:w-96 bg-white rounded-3xl shadow-2xl overflow-hidden animate-float">
                {/* Header de WhatsApp */}
                <div className="bg-accent-green text-white px-6 py-4 flex items-center gap-3">
                  <FaWhatsapp className="text-3xl" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">Cuitly Bot</h3>
                      {/* Tilde de verificado */}
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="white"/>
                        <path d="M9 12l2 2 4-4" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-xs opacity-90">en línea</p>
                  </div>
                </div>

                {/* Chat de mensajes */}
                <div className="p-6 space-y-3 h-96 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
                  {chatMessages.map((message, index) => (
                    <motion.div
                      key={index}
                      className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.5 }}
                    >
                      <div
                        className={`max-w-xs px-4 py-3 rounded-2xl shadow-md ${
                          message.type === 'sent'
                            ? 'bg-accent-green text-white rounded-br-sm'
                            : 'bg-white text-gray-800 rounded-bl-sm'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

