/**
 * Página de Política de Privacidad
 * Diseño moderno, responsive y coherente con la landing
 */

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaShieldAlt, FaCheckCircle, FaEnvelope } from 'react-icons/fa'

export default function PrivacidadPage() {
  // Configuración de animaciones
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // Secciones del documento
  const sections = [
    {
      number: 1,
      title: "Datos que recopilamos",
      content: [
        "Cuitly podrá recopilar los siguientes tipos de datos personales:"
      ],
      list: [
        "Datos de identificación: nombre, apellido, CUIT/CUIL, tipo de monotributo, razón social, y número de documento.",
        "Datos de contacto: correo electrónico, teléfono, y dirección fiscal o comercial.",
        "Datos fiscales y de facturación: puntos de venta, comprobantes emitidos, información de ARCA (ex AFIP), ingresos y tipo de actividad.",
        "Datos de uso y conexión: información sobre la interacción con el bot de WhatsApp, la WebApp y el sitio web (fecha, hora, IP, tipo de dispositivo, navegador, sistema operativo).",
        "Datos de pago: información necesaria para procesar pagos a través de Mercado Pago, Dlocal, ONE u otros proveedores externos, sin que Cuitly almacene datos de tarjetas o contraseñas bancarias.",
        "Datos de soporte: mensajes o consultas realizadas por los canales de contacto o atención al cliente."
      ]
    },
    {
      number: 2,
      title: "Finalidad del tratamiento",
      content: [
        "Los datos personales son utilizados por Cuitly para las siguientes finalidades:"
      ],
      list: [
        "Prestación del servicio: habilitar y mantener la cuenta del Usuario, emitir facturas electrónicas, generar reportes y permitir el uso de las funcionalidades de la Plataforma.",
        "Facturación y pagos: gestionar cobros, emitir comprobantes, y mantener registros contables y fiscales.",
        "Atención y soporte: responder consultas, brindar asistencia técnica o administrativa.",
        "Seguridad: prevenir fraudes, accesos no autorizados y garantizar el correcto funcionamiento del sistema.",
        "Comunicación y novedades: enviar notificaciones operativas, actualizaciones o información relevante sobre el servicio.",
        "Marketing y analítica: medir el tráfico y la interacción en la landing y la WebApp mediante herramientas como Google Analytics, Meta Pixel u otras similares (ver sección Cookies)."
      ],
      footer: "Los datos se tratarán únicamente durante el tiempo necesario para cumplir con las finalidades mencionadas o con las obligaciones legales correspondientes."
    },
    {
      number: 3,
      title: "Base legal y consentimiento",
      content: [
        "El tratamiento de los datos personales se realiza con base en:"
      ],
      list: [
        "El consentimiento libre, expreso e informado del Usuario.",
        "La relación contractual derivada del uso del servicio.",
        "Las obligaciones legales aplicables (por ejemplo, normas fiscales y de prevención de fraude)."
      ],
      footer: "El Usuario podrá revocar su consentimiento en cualquier momento, sin efectos retroactivos, mediante comunicación escrita a legales@clientes.cuitly.ar."
    },
    {
      number: 4,
      title: "Comunicación y transferencia de datos",
      content: [
        "Cuitly podrá compartir datos personales únicamente con:"
      ],
      list: [
        "Proveedores tecnológicos y de pago (Mercado Pago, Dlocal, ONE u otros equivalentes) para la gestión operativa del servicio.",
        "Autoridades fiscales (ARCA (ex AFIP)) cuando sea necesario para la emisión de comprobantes o cumplimiento de obligaciones legales.",
        "Socios o prestadores de servicios que colaboren con tareas de hosting, seguridad o soporte técnico, bajo acuerdos de confidencialidad y protección de datos."
      ],
      footer: "Cuitly no vende ni comercializa información personal a terceros. En caso de transferencias internacionales de datos, se garantizará el cumplimiento de las disposiciones de la Ley 25.326 y de la Resolución AAIP N.º 47/2018 sobre países con nivel adecuado de protección."
    },
    {
      number: 5,
      title: "Conservación de los datos",
      content: [
        "Los datos serán conservados durante el tiempo necesario para cumplir con los fines para los que fueron recolectados y con las obligaciones legales y fiscales derivadas de la relación con el Usuario.",
        "Una vez finalizado dicho período, los datos serán eliminados o anonimizados de forma segura."
      ]
    },
    {
      number: 6,
      title: "Derechos de los Usuarios",
      content: [
        "El Usuario podrá ejercer los derechos de acceso, rectificación, actualización y supresión de sus datos personales (conocidos como derechos ARCO), así como solicitar la revocación del consentimiento."
      ],
      listTitle: "Para ejercer estos derechos, enviar solicitud a:",
      list: [
        "📩 legales@clientes.cuitly.ar",
        "📩 contacto@clientes.cuitly.ar"
      ],
      footer: "La solicitud deberá contener nombre completo, correo registrado, CUIT/CUIL y descripción del pedido. La Agencia de Acceso a la Información Pública (AAIP), órgano de control de la Ley N.º 25.326, tiene la facultad de atender denuncias y reclamos relacionados con el tratamiento de datos personales (https://www.argentina.gob.ar/aaip)."
    },
    {
      number: 7,
      title: "Seguridad de la información",
      content: [
        "Cuitly adopta medidas técnicas, administrativas y organizativas adecuadas para proteger los datos personales contra pérdida, acceso no autorizado, alteración o divulgación indebida, conforme a los estándares del sector y a la legislación vigente.",
        "No obstante, el Usuario reconoce que ningún sistema de transmisión o almacenamiento de datos en Internet es completamente seguro, y exime a Cuitly de responsabilidad por hechos que escapen a su control razonable."
      ]
    },
    {
      number: 8,
      title: "Uso de Cookies y tecnologías similares",
      content: [
        "El sitio web de Cuitly utiliza cookies y tecnologías equivalentes (como local storage o píxeles de seguimiento) para mejorar la experiencia del Usuario y analizar el tráfico del sitio.",
        "Las cookies pueden clasificarse en:"
      ],
      list: [
        "Cookies necesarias: esenciales para el funcionamiento del sitio (por ejemplo, autenticación y seguridad).",
        "Cookies de preferencias: recuerdan configuraciones o elecciones del Usuario.",
        "Cookies analíticas: recopilan información sobre el uso del sitio para fines estadísticos (por ejemplo, Google Analytics).",
        "Cookies de marketing: utilizadas para medir campañas publicitarias o mostrar anuncios relevantes."
      ],
      footer: "El Usuario puede configurar su navegador para bloquear o eliminar cookies en cualquier momento. Sin embargo, algunas funciones del sitio pueden verse afectadas. El uso continuado del sitio sin modificar las configuraciones del navegador implica la aceptación del uso de cookies conforme a esta Política."
    },
    {
      number: 9,
      title: "Enlaces externos",
      content: [
        "La landing o WebApp de Cuitly puede contener enlaces a sitios de terceros (por ejemplo, ARCA (ex AFIP), procesadores de pago o redes sociales).",
        "Cuitly no se responsabiliza por las prácticas de privacidad ni por el contenido de dichos sitios. Se recomienda revisar sus políticas de privacidad antes de interactuar con ellos."
      ]
    },
    {
      number: 10,
      title: "Modificaciones a la Política",
      content: [
        "Cuitly podrá actualizar esta Política en cualquier momento. Las modificaciones serán publicadas en el sitio web y entrarán en vigencia a partir de los 5 (cinco) días hábiles siguientes a su publicación.",
        "El uso continuado de los servicios tras dichos cambios implicará la aceptación de la nueva versión."
      ]
    }
  ]

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
                <FaShieldAlt className="text-white text-lg" />
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
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-light-blue text-primary-blue px-6 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <FaShieldAlt />
              Legal
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Política de Privacidad y Cookies
            </h1>
            <p className="text-lg sm:text-xl text-secondary-text mb-2">
              Última actualización: octubre de 2025
            </p>
            <p className="text-sm text-secondary-text max-w-2xl mx-auto">
              La presente Política de Privacidad y Cookies describe cómo CRISTIAN AGUSTIN CARANDINO, CUIT N.º 20-37617763-8 (en adelante, &quot;Cuitly&quot; o &quot;nosotros&quot;), recopila, utiliza, almacena y protege los datos personales de los usuarios que acceden y utilizan la plataforma Cuitly.
            </p>
            <p className="text-sm text-secondary-text max-w-2xl mx-auto mt-4">
              El uso de los servicios de Cuitly implica la aceptación expresa de la presente Política. Si el Usuario no está de acuerdo, deberá abstenerse de utilizar los servicios.
            </p>
          </motion.div>

          {/* Content Card */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            {/* Table of Contents */}
            <div className="bg-gradient-to-r from-primary-blue to-primary-dark-blue p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaShieldAlt />
                Índice de contenidos
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sections.map((section) => (
                  <a
                    key={section.number}
                    href={`#seccion-${section.number}`}
                    className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="font-semibold">{section.number}.</span>
                    <span className="group-hover:underline">{section.title}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Sections */}
            <div className="p-6 sm:p-10 lg:p-16">
              {sections.map((section, index) => (
                <motion.section
                  key={section.number}
                  id={`seccion-${section.number}`}
                  variants={fadeInUp}
                  className={`${index !== 0 ? 'mt-12 pt-12 border-t border-gray-200' : ''}`}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 bg-primary-light-blue text-primary-blue rounded-xl font-bold text-lg">
                      {section.number}
                    </span>
                    {section.title}
                  </h2>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    {section.content?.map((paragraph, idx) => (
                      <p key={idx} className="text-base sm:text-lg">
                        {paragraph}
                      </p>
                    ))}
                    
                    {section.listTitle && (
                      <p className="font-semibold text-gray-900 mt-4 text-base sm:text-lg">
                        {section.listTitle}
                      </p>
                    )}
                    
                    {section.list && (
                      <ul className="space-y-3 ml-4">
                        {section.list.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <FaCheckCircle className="text-accent-green mt-1 flex-shrink-0" />
                            <span className="text-base sm:text-lg">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {section.footer && (
                      <p className="text-base sm:text-lg mt-4 p-4 bg-blue-50 rounded-xl border-l-4 border-primary-blue">
                        {section.footer}
                      </p>
                    )}
                  </div>
                </motion.section>
              ))}

              {/* Contacto Section */}
              <motion.section
                id="seccion-11"
                variants={fadeInUp}
                className="mt-12 pt-12 border-t border-gray-200"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 bg-primary-light-blue text-primary-blue rounded-xl font-bold text-lg">
                    11
                  </span>
                  Contacto
                </h2>
                
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                  Para consultas, solicitudes o ejercicio de derechos sobre datos personales, los Usuarios pueden comunicarse con:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 border border-purple-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaEnvelope className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Legal</p>
                        <a 
                          href="mailto:legales@clientes.cuitly.ar" 
                          className="text-purple-600 hover:text-purple-700 font-medium transition-colors break-all"
                        >
                          legales@clientes.cuitly.ar
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 border border-green-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent-green rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaEnvelope className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Contacto General</p>
                        <a 
                          href="mailto:contacto@clientes.cuitly.ar" 
                          className="text-accent-green hover:text-accent-green-hover font-medium transition-colors break-all"
                        >
                          contacto@clientes.cuitly.ar
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="mt-6 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-6 border border-gray-200"
                >
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Información del Titular</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Titular:</strong> CRISTIAN AGUSTIN CARANDINO<br />
                    <strong>CUIT:</strong> 20-37617763-8
                  </p>
                </motion.div>
              </motion.section>

              {/* Footer Action */}
              <motion.div
                variants={fadeInUp}
                className="mt-16 text-center"
              >
                <div className="bg-gradient-to-r from-primary-light-blue to-blue-100 rounded-2xl p-8 mb-6">
                  <p className="text-gray-900 font-medium mb-4">
                    Al utilizar los servicios de Cuitly, aceptás esta Política de Privacidad y Cookies.
                  </p>
                  <Link 
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary-blue text-white font-bold rounded-xl hover:bg-primary-dark-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <FaArrowLeft />
                    Volver al inicio
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

