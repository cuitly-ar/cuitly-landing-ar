/**
 * Componente Footer
 * Pie de página con enlaces, información de contacto y redes sociales
 * Diseño moderno y organizado
 */

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaFileInvoiceDollar, FaWhatsapp, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
        { name: 'Contacto', href: '#' },
        { name: 'Términos y Condiciones', href: '/terminos' },
        { name: 'Política de Privacidad', href: '/privacidad' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { name: 'Centro de Ayuda', href: '#' },
        { name: 'Facturación AFIP', href: '#' },
        { name: 'Normativas', href: '#' },
        { name: 'RG 5007/2023', href: '#' },
        { name: 'Documentación', href: '#' },
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
                    {link.href.startsWith('/') ? (
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

        {/* Información de contacto */}
        <motion.div
          className="border-t border-gray-300 pt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-3 justify-center">
            <FaEnvelope className="text-primary-blue text-xl mt-1 flex-shrink-0" />
            <div className="text-center">
              <h4 className="font-semibold text-primary-blue mb-1">Email</h4>
              <a href="mailto:hola@cuitly.ar" className="text-secondary-text hover:text-primary-blue transition-colors duration-300">
                hola@cuitly.ar
              </a>
            </div>
          </div>
        </motion.div>

        {/* Copyright y enlaces legales */}
        <motion.div
          className="border-t border-gray-300 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

