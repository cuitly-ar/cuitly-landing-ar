/**
 * Componente Pricing
 * Muestra los planes de precios con sus características
 * Incluye toggle para planes mensuales y anuales + tabla de comparación
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isAnnual, setIsAnnual] = useState(true) // Anual por defecto

  // Planes de precios
  const plans = [
    {
      name: 'Plan Esencial',
      subtitle: 'Facturá sin complicaciones',
      monthlyPrice: '6.999',
      yearlyPrice: '5.499',
      yearlyTotal: '65.988',
      description: 'Para monotributistas que quieren emitir facturas desde WhatsApp, fácil y rápido.',
      features: [
        'Facturación por WhatsApp (texto o nota de voz)',
        'Facturas C ilimitadas',
        'Notas de Crédito C ilimitadas',
        'Envío automático de facturas al cliente (WhatsApp o email)',
        'Reintento automático si AFIP/ARCA está caído',
        'Historial completo de facturación',
        'Soporte por email (horario laboral)',
      ],
      highlighted: false,
      comingSoon: false,
    },
    {
      name: 'Plan Profesional',
      subtitle: '',
      monthlyPrice: '13.999',
      yearlyPrice: '10.999',
      yearlyTotal: '131.988',
      description: 'Ideal para negocios que manejan más volumen o varios dispositivos.',
      features: [
        'Todo lo del Plan Esencial, más:',
        'Facturación masiva por Excel o carga múltiple',
        'Emisión desde múltiples dispositivos (WhatsApp + Web)',
        'Personalización de facturas con tu logo',
        'Reportes automáticos de facturación mensual',
        'Programación de facturas recurrentes (automáticas)',
        'Soporte prioritario email o WhatsApp',
      ],
      highlighted: true,
      comingSoon: false,
    },
    {
      name: 'Plan Business',
      subtitle: 'Próximamente',
      monthlyPrice: null,
      yearlyPrice: null,
      yearlyTotal: null,
      description: 'Para empresas o profesionales que integran sistemas y canales de venta.',
      features: [
        'Disponible próximamente',
      ],
      highlighted: false,
      comingSoon: true,
    },
  ]

  // Tabla de comparación
  const comparisonData = [
    { feature: 'Facturación por WhatsApp (texto o voz)', esencial: true, profesional: true, business: true },
    { feature: 'Facturas C ilimitadas', esencial: true, profesional: true, business: true },
    { feature: 'Notas de crédito C ilimitadas', esencial: true, profesional: true, business: true },
    { feature: 'Envío automático al cliente', esencial: true, profesional: true, business: true },
    { feature: 'Reintento automático si AFIP/ARCA está caído', esencial: true, profesional: true, business: true },
    { feature: 'Historial de facturación', esencial: true, profesional: true, business: true },
    { feature: 'Acceso web', esencial: false, profesional: true, business: true },
    { feature: 'Facturación masiva (Excel)', esencial: false, profesional: true, business: true },
    { feature: 'Personalización de facturas (logo)', esencial: false, profesional: true, business: true },
    { feature: 'Facturas recurrentes automáticas', esencial: false, profesional: true, business: true },
    { feature: 'Reportes automáticos mensuales', esencial: false, profesional: true, business: true },
    { feature: 'Integraciones externas', esencial: false, profesional: false, business: true },
    { feature: 'Facturación A y B', esencial: false, profesional: false, business: true },
    { feature: 'Soporte prioritario', esencial: false, profesional: true, business: true },
  ]

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
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
            Planes simples y transparentes
          </h2>
          <p className="text-lg sm:text-xl text-secondary-text mb-8">
            Sin costos ocultos. Sin sorpresas. Cancelá cuando quieras.
          </p>

          {/* Toggle mensual/anual */}
          <div className="inline-flex items-center gap-4 bg-secondary-gray rounded-full p-2">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                !isAnnual
                  ? 'bg-primary-blue text-white shadow-lg'
                  : 'text-secondary-text hover:text-primary-blue'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                isAnnual
                  ? 'bg-accent-green text-white shadow-lg'
                  : 'text-secondary-text hover:text-accent-green'
              }`}
            >
              Anual
              <span className="ml-2 text-xs bg-accent-green text-white px-2 py-1 rounded-full">
                ¡Ahorra!
              </span>
            </button>
          </div>
        </motion.div>

        {/* Grid de planes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.highlighted ? 'border-4 border-accent-green' : 'border border-gray-200'
              } ${plan.comingSoon ? 'opacity-90' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Badge de plan recomendado o próximamente */}
              {plan.highlighted && !plan.comingSoon && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-accent-green to-accent-green-hover text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm">
                  Más popular
                </div>
              )}
              {plan.comingSoon && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm">
                  Próximamente
                </div>
              )}

              {/* Header del plan */}
              <div className={`p-8 ${plan.highlighted ? 'bg-gradient-to-br from-primary-blue to-primary-dark-blue' : plan.comingSoon ? 'bg-gradient-to-br from-purple-600 to-purple-800' : 'bg-secondary-gray'}`}>
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted || plan.comingSoon ? 'text-white' : 'text-primary-blue'}`}>
                  {plan.name}
                </h3>
                {plan.subtitle && (
                  <p className={`text-sm font-semibold mb-4 ${plan.highlighted || plan.comingSoon ? 'text-white/90' : 'text-primary-blue'}`}>
                    {plan.subtitle}
                  </p>
                )}
                <p className={`text-sm mb-6 ${plan.highlighted || plan.comingSoon ? 'text-white/90' : 'text-secondary-text'}`}>
                  {plan.description}
                </p>
                
                {/* Precios o Coming Soon */}
                {!plan.comingSoon ? (
                  <>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-primary-blue'}`}>
                        ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className={`text-lg ${plan.highlighted ? 'text-white/80' : 'text-secondary-text'}`}>
                        /mes
                      </span>
                    </div>
                    
                    {/* Información del tipo de pago */}
                    {isAnnual ? (
                      <div className={`space-y-2`}>
                        <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                          plan.highlighted 
                            ? 'bg-accent-green text-white' 
                            : 'bg-accent-green/10 text-accent-green'
                        }`}>
                          Pago anual: ${plan.yearlyTotal}
                        </div>
                        <p className={`text-xs ${plan.highlighted ? 'text-white/70' : 'text-secondary-text'}`}>
                          Se cobra 1 vez al año
                        </p>
                      </div>
                    ) : (
                      <div className={`space-y-2`}>
                        <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                          plan.highlighted 
                            ? 'bg-white/20 text-white' 
                            : 'bg-primary-blue/10 text-primary-blue'
                        }`}>
                          Pago mensual
                        </div>
                        <p className={`text-xs ${plan.highlighted ? 'text-white/70' : 'text-secondary-text'}`}>
                          Se cobra todos los meses
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-white text-lg font-semibold">Disponible pronto</p>
                  </div>
                )}
              </div>

              {/* Características del plan */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <FaCheck className={`${plan.comingSoon ? 'text-purple-600' : 'text-accent-green'} text-xl flex-shrink-0 mt-1`} />
                      <span className="text-secondary-text leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {!plan.comingSoon ? (
                  <a
                    href="#register"
                    className={`block w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 hover:scale-105 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-accent-green to-accent-green-hover text-white shadow-lg hover:shadow-glow-green'
                        : 'bg-primary-blue text-white shadow-lg hover:shadow-glow'
                    }`}
                  >
                    {plan.highlighted ? 'Empezar prueba gratuita' : 'Probar gratis 7 días'}
                  </a>
                ) : (
                  <button
                    disabled
                    className="block w-full py-4 px-6 rounded-xl font-semibold text-center bg-gray-300 text-gray-500 cursor-not-allowed"
                  >
                    Disponible próximamente
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabla de comparación */}
        <motion.div
          className="max-w-7xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-blue mb-8 text-center">
            Comparación detallada de planes
          </h3>
          
          {/* Tabla responsive */}
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-primary-blue to-primary-dark-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Funcionalidad</th>
                  <th className="px-6 py-4 text-center font-semibold">Esencial</th>
                  <th className="px-6 py-4 text-center font-semibold">Profesional</th>
                  <th className="px-6 py-4 text-center font-semibold">Business</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors duration-200`}>
                    <td className="px-6 py-4 text-gray-800 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.esencial ? (
                        <FaCheck className="text-accent-green text-xl mx-auto" />
                      ) : (
                        <FaTimes className="text-gray-400 text-xl mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.profesional ? (
                        <FaCheck className="text-accent-green text-xl mx-auto" />
                      ) : (
                        <FaTimes className="text-gray-400 text-xl mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.business ? (
                        <FaCheck className="text-purple-600 text-xl mx-auto" />
                      ) : (
                        <FaTimes className="text-gray-400 text-xl mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Información adicional */}
        <motion.div
          className="mt-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary-light-blue to-white rounded-2xl p-8 border border-primary-blue/20">
            <h4 className="text-xl font-bold text-primary-blue mb-4">
              7 días de prueba gratuita
            </h4>
            <p className="text-secondary-text leading-relaxed">
              Probá todas las funcionalidades durante 7 días sin compromiso.
              Si no te convence, simplemente cancelás y listo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
