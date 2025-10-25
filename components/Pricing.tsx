/**
 * Componente Pricing
 * Muestra los planes de precios con sus características
 * Incluye toggle para planes mensuales y anuales con descuento
 */

'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { FaCheck } from 'react-icons/fa'
import { useState } from 'react'

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isAnnual, setIsAnnual] = useState(false)

  // Planes de precios
  const plans = [
    {
      name: 'Plan Esencial',
      monthlyPrice: '6.999',
      yearlyPrice: '5.499',
      description: 'Perfecto para emprendedores y freelancers',
      features: [
        'Facturación por WhatsApp',
        'Comprobantes ilimitados',
        'Envío automático de facturas a tus clientes',
        'Soporte por chat',
        'Facturación inmediata en ARCA',
        'Reintento automático si el sistema está caído',
        'Acceso al historial de facturación',
      ],
      highlighted: false,
    },
    {
      name: 'Plan Profesional',
      monthlyPrice: '13.999',
      yearlyPrice: '10.999',
      description: 'Ideal para negocios en crecimiento',
      features: [
        'Todo lo del Plan Esencial, más:',
        'Facturación masiva por Excel',
        'Acceso web con panel de control',
        'Envío automático de facturas a tus clientes',
        'Facturación por nota de voz (WhatsApp)',
        'Soporte prioritario',
      ],
      highlighted: true,
    },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.highlighted ? 'border-4 border-accent-green' : 'border border-gray-200'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Badge de plan recomendado */}
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-accent-green to-accent-green-hover text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm">
                  Más popular
                </div>
              )}

              {/* Header del plan */}
              <div className={`p-8 ${plan.highlighted ? 'bg-gradient-to-br from-primary-blue to-primary-dark-blue' : 'bg-secondary-gray'}`}>
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-primary-blue'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/90' : 'text-secondary-text'}`}>
                  {plan.description}
                </p>
                
                {/* Precios */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-primary-blue'}`}>
                    ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className={`text-lg ${plan.highlighted ? 'text-white/80' : 'text-secondary-text'}`}>
                    /mes
                  </span>
                </div>
                
                {/* Mensaje según el tipo de plan */}
                {isAnnual && (
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                    plan.highlighted 
                      ? 'bg-accent-green text-white' 
                      : 'bg-accent-green/10 text-accent-green'
                  }`}>
                    Ahorro anual: ${(parseFloat(plan.monthlyPrice.replace('.', '')) * 12 - parseFloat(plan.yearlyPrice.replace('.', '')) * 12).toLocaleString('es-AR')}
                  </div>
                )}
                {!isAnnual && (
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                    plan.highlighted 
                      ? 'bg-white/20 text-white' 
                      : 'bg-primary-blue/10 text-primary-blue'
                  }`}>
                    Facturación mensual
                  </div>
                )}
              </div>

              {/* Características del plan */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <FaCheck className="text-accent-green text-xl flex-shrink-0 mt-1" />
                      <span className="text-secondary-text leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#register"
                  className={`block w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 hover:scale-105 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-accent-green to-accent-green-hover text-white shadow-lg hover:shadow-glow-green'
                      : 'bg-primary-blue text-white shadow-lg hover:shadow-glow'
                  }`}
                >
                  {plan.highlighted ? 'Empezar mi prueba gratuita de 7 días' : 'Probar gratis 7 días'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Información adicional */}
        <motion.div
          className="mt-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
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
