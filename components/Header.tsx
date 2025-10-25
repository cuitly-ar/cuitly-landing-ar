/**
 * Componente Header
 * Barra de navegación fija con menú responsive
 * Incluye logo de Cuitly y enlaces a las secciones principales
 */

'use client'

import { useState, useEffect } from 'react'
import { FaFileInvoiceDollar, FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  // Estado para controlar el menú móvil
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Estado para controlar el scroll y aplicar sombra al header
  const [scrolled, setScrolled] = useState(false)

  // Efecto para detectar scroll y agregar sombra al header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Enlaces de navegación con sus respectivos IDs de sección
  const navLinks = [
    { name: 'Beneficios', href: '#benefits' },
    { name: 'Planes', href: '#pricing' },
    { name: 'Preguntas', href: '#faq' },
    { name: 'Soporte', href: '#footer' },
  ]

  // Función para cerrar el menú móvil al hacer clic en un enlace
  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo de Cuitly */}
          <motion.a 
            href="#"
            className="flex items-center gap-3 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-dark-blue rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
              <FaFileInvoiceDollar className="text-white text-2xl" />
            </div>
            <span className="text-2xl font-bold text-primary-blue">
              Cuitly
            </span>
          </motion.a>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-secondary-text font-medium hover:text-primary-blue transition-colors duration-300 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            
            {/* Botón de Registrarse destacado */}
            <motion.a
              href="#register"
              className="px-6 py-3 bg-gradient-to-r from-accent-green to-accent-green-hover text-white font-bold rounded-lg shadow-lg hover:shadow-glow-green transition-all duration-300 hover:scale-105 flex items-center gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -2 }}
            >
              <span>REGISTRARSE</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </nav>

          {/* Botón menú móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-primary-blue text-3xl focus:outline-none hover:scale-110 transition-transform duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menú móvil con animación */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-secondary-text font-medium hover:text-primary-blue transition-colors duration-300 py-3 px-4 hover:bg-primary-light-blue rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
              
              {/* Botón de Registrarse en móvil */}
              <motion.a
                href="#register"
                onClick={handleLinkClick}
                className="px-6 py-4 bg-gradient-to-r from-accent-green to-accent-green-hover text-white font-bold rounded-lg shadow-lg text-center hover:shadow-glow-green transition-all duration-300 flex items-center justify-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <span>REGISTRARSE</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

