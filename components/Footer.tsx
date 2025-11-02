/**
 * Componente Footer
 * Pie de página con enlaces, información de contacto y redes sociales
 * Diseño moderno y organizado
 */

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaFileInvoiceDollar, FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { useState } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [showArrepentimientoModal, setShowArrepentimientoModal] = useState(false)
  const [isSubmittingArrepentimiento, setIsSubmittingArrepentimiento] = useState(false)
  const [submitStatusArrepentimiento, setSubmitStatusArrepentimiento] = useState<{type: 'success' | 'error', message: string} | null>(null)
  const [arrepentimientoForm, setArrepentimientoForm] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    cuit: '',
    movil: '',
    motivo: ''
  })

  const handleArrepentimientoSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingArrepentimiento(true)
    setSubmitStatusArrepentimiento(null)

    try {
      const response = await fetch('/api/send-arrepentimiento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(arrepentimientoForm),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatusArrepentimiento({
          type: 'success',
          message: `Solicitud enviada exitosamente. Ticket: ${data.ticketNumber}. Recibirás una respuesta pronto.`
        })
        // Limpiar formulario y cerrar modal después de 3 segundos
        setTimeout(() => {
          setShowArrepentimientoModal(false)
          setArrepentimientoForm({
            nombre: '',
            apellidos: '',
            correo: '',
            cuit: '',
            movil: '',
            motivo: ''
          })
          setSubmitStatusArrepentimiento(null)
        }, 3000)
      } else {
        setSubmitStatusArrepentimiento({
          type: 'error',
          message: data.error || 'Error al enviar la solicitud. Por favor, intenta nuevamente.'
        })
      }
    } catch (error) {
      setSubmitStatusArrepentimiento({
        type: 'error',
        message: 'Error de conexión. Por favor, verifica tu internet e intenta nuevamente.'
      })
    } finally {
      setIsSubmittingArrepentimiento(false)
    }
  }

  // Secciones del footer
  const footerSections = [
    {
      title: 'Producto',
      links: [
        { name: 'Cómo funciona', href: '#how-it-works' },
        { name: 'Características', href: '#features' },
        { name: 'Beneficios', href: '#benefits' },
        { name: 'Precios', href: '#pricing' },
        { name: 'FAQs', href: '#faq' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Nosotros', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contacto', href: '/contacto' },
        { name: 'Términos y Condiciones', href: '/terminos' },
        { name: 'Política de Privacidad', href: '/privacidad' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { name: 'Centro de Ayuda', href: '#' },
        { name: 'Facturación ARCA (ex AFIP)', href: '#' },
        { name: 'Normativas', href: '#' },
        { name: 'Documentación', href: '#' },
        { name: 'Botón de Arrepentimiento', href: '#arrepentimiento', onClick: true },
      ],
    },
  ]

  // Redes sociales
  const socialLinks = [
    { icon: FaWhatsapp, href: 'https://wa.me/1234567890', color: 'hover:bg-accent-green' },
    { icon: FaInstagram, href: '#', color: 'hover:bg-pink-500' },
    { icon: FaLinkedinIn, href: '#', color: 'hover:bg-blue-600' },
  ]

  return (
    <footer id="footer" className="bg-secondary-gray pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <a href="#" className="flex items-center gap-3 mb-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-dark-blue rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                  <FaFileInvoiceDollar className="text-white text-2xl" />
                </div>
                <span className="text-2xl font-bold text-primary-blue">Cuitly</span>
              </a>
              <p className="text-secondary-text mb-6 leading-relaxed">
                La forma más simple de facturar en Argentina. Automatizá tu facturación desde WhatsApp.
              </p>
              
              {/* Redes sociales */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-blue shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 ${social.color} hover:text-white`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Columnas de enlaces */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-primary-blue mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.onClick ? (
                      <button
                        onClick={() => setShowArrepentimientoModal(true)}
                        className="text-secondary-text hover:text-primary-blue transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </button>
                    ) : link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="text-secondary-text hover:text-primary-blue transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-secondary-text hover:text-primary-blue transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Copyright y enlaces legales */}
        <motion.div
          className="border-t border-gray-300 pt-8 flex flex-col gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Texto institucional */}
          <div className="text-center">
            <p className="text-sm text-secondary-text max-w-4xl mx-auto leading-relaxed mb-4">
              <strong>Cuitly</strong> es una plataforma independiente y no está afiliada ni representa oficialmente a <strong>ARCA (ex AFIP)</strong>. Todos los comprobantes son emitidos y válidos bajo normativa vigente.
            </p>
            <p className="text-xs text-secondary-text max-w-3xl mx-auto leading-relaxed">
              <strong>Sin descargas, sin instalaciones.</strong> Cuitly funciona 100% online con infraestructura en Google Cloud, la nube más confiable del mundo.
            </p>
          </div>

          {/* Copyright y enlaces */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200">
            <p className="text-secondary-text text-sm text-center md:text-left">
              &copy; {currentYear} Cuitly. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/terminos" className="text-secondary-text hover:text-primary-blue transition-colors duration-300">
                Términos de Servicio
              </Link>
              <a href="/privacidad" className="text-secondary-text hover:text-primary-blue transition-colors duration-300">
                Política de Privacidad
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal Botón de Arrepentimiento */}
      {showArrepentimientoModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setShowArrepentimientoModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Botón de Arrepentimiento</h2>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              Ud, tiene derecho a revocar la aceptación dentro del plazo de <strong>10 días corridos</strong> contados a partir de la fecha en que se entregue el bien o se celebre el contrato, lo último que ocurra, sin responsabilidad alguna, conforme <strong>Art. 34 de la Ley 24.240</strong>.
            </p>

            <form onSubmit={handleArrepentimientoSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre*
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  value={arrepentimientoForm.nombre}
                  onChange={(e) => setArrepentimientoForm({...arrepentimientoForm, nombre: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700 mb-1">
                  Apellidos*
                </label>
                <input
                  type="text"
                  id="apellidos"
                  required
                  value={arrepentimientoForm.apellidos}
                  onChange={(e) => setArrepentimientoForm({...arrepentimientoForm, apellidos: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo*
                </label>
                <input
                  type="email"
                  id="correo"
                  required
                  value={arrepentimientoForm.correo}
                  onChange={(e) => setArrepentimientoForm({...arrepentimientoForm, correo: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="cuit" className="block text-sm font-medium text-gray-700 mb-1">
                  CUIT*
                </label>
                <input
                  type="text"
                  id="cuit"
                  required
                  value={arrepentimientoForm.cuit}
                  onChange={(e) => setArrepentimientoForm({...arrepentimientoForm, cuit: e.target.value})}
                  placeholder="20-12345678-9"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="movil" className="block text-sm font-medium text-gray-700 mb-1">
                  Número de Móvil*
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50">
                    <span>🇦🇷</span>
                    <span className="text-sm text-gray-600">+54</span>
                  </div>
                  <input
                    type="tel"
                    id="movil"
                    required
                    value={arrepentimientoForm.movil}
                    onChange={(e) => setArrepentimientoForm({...arrepentimientoForm, movil: e.target.value})}
                    placeholder="11 1234 5678"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="motivo" className="block text-sm font-medium text-gray-700 mb-1">
                  Motivo*
                </label>
                <textarea
                  id="motivo"
                  required
                  rows={3}
                  value={arrepentimientoForm.motivo}
                  onChange={(e) => setArrepentimientoForm({...arrepentimientoForm, motivo: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none resize-none"
                />
              </div>

              {/* Mensaje de estado */}
              {submitStatusArrepentimiento && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    submitStatusArrepentimiento.type === 'success'
                      ? 'bg-green-50 border border-green-200 text-green-800'
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}
                >
                  {submitStatusArrepentimiento.message}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmittingArrepentimiento}
                className="w-full px-6 py-3 bg-primary-blue text-white font-bold rounded-lg hover:bg-primary-dark-blue transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary-blue"
              >
                {isSubmittingArrepentimiento ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </footer>
  )
}

export default Footer

