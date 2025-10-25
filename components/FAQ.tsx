/**
 * Componente FAQ
 * Sección de preguntas frecuentes con acordeón interactivo
 * Incluye ventajas adicionales de usar Cuitly y Schema.org FAQPage
 */

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { FaChevronDown, FaChevronUp, FaBolt, FaRocket, FaShieldAlt, FaCogs } from 'react-icons/fa'
import Script from 'next/script'

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Estado para controlar qué pregunta está abierta
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Preguntas frecuentes
  const faqs = [
    {
      question: '¿Qué es Cuitly?',
      answer: 'Cuitly es un asistente virtual que te permite generar facturas oficiales de ARCA (ex AFIP) directamente desde WhatsApp. Ideal para monotributistas y profesionales independientes que buscan simplificar su día a día.',
    },
    {
      question: '¿Por qué usar Cuitly?',
      answer: 'Porque te ahorra tiempo, evita errores y elimina la necesidad de ingresar a ARCA cada vez que facturás. Todo el proceso se hace desde tu chat de WhatsApp, de manera automática y segura.',
    },
    {
      question: '¿Qué pasa si ARCA está caído?',
      answer: 'Cuitly guarda tu comprobante y lo envía automáticamente cuando el servicio de ARCA vuelve a funcionar. No perdés ninguna factura.',
    },
    {
      question: '¿Cuánto cuesta?',
      answer: 'Podés usar Cuitly gratis durante 7 días y luego elegir el plan que mejor se adapte a vos. Ambos planes incluyen comprobantes ilimitados.',
    },
    {
      question: '¿Es seguro dar mis credenciales?',
      answer: 'Sí, completamente. Solo necesitás ingresar tus credenciales de ARCA una única vez para autorizar el servicio. Cuitly no almacena tu clave fiscal y podés cambiarla cuando quieras sin afectar la delegación.',
    },
    {
      question: '¿Puedo usar Cuitly si soy Responsable Inscripto?',
      answer: 'Por ahora, solo para monotributistas. La versión para Responsables Inscriptos estará disponible pronto.',
    },
    {
      question: '¿Puedo emitir facturas desde varios dispositivos?',
      answer: 'Sí, con el Plan Profesional podés hacerlo desde WhatsApp o desde la web.',
    },
  ]

  // Ventajas adicionales
  const advantages = [
    {
      icon: FaBolt,
      text: 'Cero fricción: no necesitás entrar a ARCA',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: FaRocket,
      text: 'Proceso rápido: solo se configura una vez',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: FaShieldAlt,
      text: 'Seguridad: tu clave fiscal no se almacena',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: FaCogs,
      text: 'Control completo: podés cambiar tu clave en cualquier momento',
      color: 'from-green-400 to-emerald-500',
    },
  ]

  // Schema.org FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section id="faq" className="py-20 lg:py-32 bg-secondary-gray">
      {/* Schema.org FAQPage JSON-LD */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
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
            Preguntas frecuentes
          </h2>
          <p className="text-lg sm:text-xl text-secondary-text">
            Todo lo que necesitás saber sobre Cuitly
          </p>
        </motion.div>

        {/* Acordeón de preguntas */}
        <div className="max-w-4xl mx-auto mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Pregunta */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary-light-blue/20 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-primary-blue pr-4">
                  {faq.question}
                </span>
                <span className="text-primary-blue text-xl flex-shrink-0">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              {/* Respuesta con animación */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-secondary-text leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Ventajas adicionales */}
        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-blue mb-8 text-center">
            Ventajas para vos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-secondary-gray to-white hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${advantage.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <advantage.icon className="text-white text-xl" />
                </div>
                <p className="text-secondary-text leading-relaxed pt-2">
                  {advantage.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA adicional */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-lg text-secondary-text mb-6">
            ¿Tenés más preguntas? Estamos acá para ayudarte
          </p>
          <a
            href="#footer"
            className="inline-block px-8 py-4 bg-primary-blue text-white font-semibold rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Contactar a Soporte
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ

