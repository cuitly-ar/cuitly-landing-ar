/**
 * Página de Contacto
 * Formulario de contacto y opciones de soporte
 */

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaWhatsapp, FaHeadset, FaUserFriends, FaRocket } from 'react-icons/fa'
import { useState } from 'react'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    tipo: '',
    mensaje: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: `¡Mensaje enviado exitosamente! Número de ticket: ${data.ticketNumber}. Te responderemos pronto.`
        })
        // Limpiar formulario
        setFormData({
          nombre: '',
          correo: '',
          tipo: '',
          mensaje: ''
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Error de conexión. Por favor, verifica tu internet e intenta nuevamente.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
      {/* Header Sticky */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-3 text-primary-blue hover:text-primary-dark-blue transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                <FaArrowLeft className="text-xl" />
              </motion.div>
              <span className="font-semibold hidden sm:inline">Volver al inicio</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-dark-blue rounded-xl flex items-center justify-center shadow-md">
                <FaHeadset className="text-white text-lg" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-blue to-primary-dark-blue bg-clip-text text-transparent">
                Cuitly
              </span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Hablá con nuestro equipo,<br />cuando y desde donde quieras
            </h1>
            <p className="text-lg sm:text-xl text-secondary-text max-w-3xl mx-auto">
              Tenés soporte gratis e ilimitado para comunicarte con nuestro equipo especializado 24/7. ¡Contanos cómo podemos ayudarte y te respondemos rápido!
            </p>
          </motion.div>

          {/* Cards de soporte */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Card WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-8 border border-green-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-accent-green rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <FaWhatsapp className="text-white text-3xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Ya usás Cuitly y necesitás ayuda?
              </h2>
              <p className="text-secondary-text mb-6 leading-relaxed">
                Solucioná tus dudas en segundos con nuestro soporte especializado.
              </p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-green text-white font-semibold rounded-xl hover:bg-accent-green-hover transition-all duration-300 hover:scale-105"
              >
                <FaWhatsapp />
                Contactar a soporte
              </a>
            </motion.div>

            {/* Card Formulario Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 border border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-blue rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <FaHeadset className="text-white text-3xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Preferís escribirnos?
              </h2>
              <p className="text-secondary-text mb-6 leading-relaxed">
                ¡Adelante! Nuestro equipo te responderá lo antes posible, para que sigas facturando sin interrupciones.
              </p>
              <a
                href="#formulario"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-blue text-white font-semibold rounded-xl hover:bg-primary-dark-blue transition-all duration-300 hover:scale-105"
              >
                Completar formulario
              </a>
            </motion.div>
          </div>

          {/* Formulario */}
          <motion.div
            id="formulario"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Formulario de contacto
            </h2>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nombre completo*
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="correo" className="block text-sm font-semibold text-gray-900 mb-2">
                  Correo electrónico*
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="juanperez@gmail.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Tipo */}
              <div>
                <label htmlFor="tipo" className="block text-sm font-semibold text-gray-900 mb-2">
                  ¿En qué podemos ayudarte?*
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 bg-white"
                >
                  <option value="" disabled>Seleccioná una opción</option>
                  <option value="quiero_empezar">No tengo cuenta y quiero empezar a usar Cuitly</option>
                  <option value="soy_contador">Soy contador y quiero usar Cuitly</option>
                  <option value="ya_tengo_cuenta">Ya tengo cuenta y necesito ayuda</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-900 mb-2">
                  Cuéntanos más*
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos un poco más para darte una respuesta rápida..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              {/* Mensaje de estado */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 border border-green-200 text-green-800'
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              {/* Botón Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-accent-green to-accent-green-hover text-white font-bold rounded-xl shadow-lg hover:shadow-glow-green transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </motion.div>

          {/* Beneficios del soporte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-primary-blue via-primary-dark-blue to-purple-900 rounded-3xl p-8 lg:p-12 text-white"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
              Soluciones en segundos
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaHeadset className="text-3xl" />
                </div>
                <h3 className="font-bold text-lg mb-2">Centro de soporte</h3>
                <p className="text-white/80 text-sm">
                  Soporte 24/7 para ayudarte a resolver tus dudas, explorar nuevas funciones y optimizar tu facturación. Disponible para todos los planes de Cuitly.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaUserFriends className="text-3xl" />
                </div>
                <h3 className="font-bold text-lg mb-2">Soporte personalizado</h3>
                <p className="text-white/80 text-sm">
                  Nos adaptamos a tu agenda y te ayudamos cuando lo necesités.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaRocket className="text-3xl" />
                </div>
                <h3 className="font-bold text-lg mb-2">Apoyo impulsado por humanos</h3>
                <p className="text-white/80 text-sm">
                  Tendrás a una persona real que entienda tu caso y te acompañe en cada paso.
                </p>
              </div>
            </div>

            <p className="text-center text-white/90 mt-8 text-sm italic">
              Tus comentarios y necesidades nutren nuestro equipo para mejorar continuamente Cuitly y darte la experiencia que buscás.
            </p>
          </motion.div>

          {/* Footer Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-blue text-white font-bold rounded-xl hover:bg-primary-dark-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaArrowLeft />
              Volver al inicio
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

