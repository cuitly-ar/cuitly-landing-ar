/**
 * Página de Términos y Condiciones
 * Diseño moderno, responsive y coherente con la landing
 */

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaFileContract, FaEnvelope, FaShieldAlt, FaCheckCircle } from 'react-icons/fa'

export default function TerminosPage() {
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
      title: "Objeto",
      content: [
        "El presente documento establece los Términos y Condiciones Generales de Servicio (en adelante, los \"Términos\") que rigen el acceso, uso y relación contractual entre Cuitly (en adelante, \"Cuitly\", \"la Plataforma\" o \"nosotros\"), y toda persona física o jurídica que utilice los servicios ofrecidos (en adelante, \"el Usuario\" o \"los Usuarios\").",
        "El acceso, registro y/o uso de los servicios de Cuitly implica la plena aceptación de los presentes Términos. Quien no esté de acuerdo con ellos deberá abstenerse de utilizar la Plataforma."
      ]
    },
    {
      number: 2,
      title: "Descripción del Servicio",
      content: [
        "Cuitly es una plataforma digital de automatización y gestión administrativa que permite a los monotributistas y otros contribuyentes emitir facturas electrónicas ante la AFIP (actual ARCA), así como administrar información contable y comercial básica a través de distintos canales, principalmente:"
      ],
      list: [
        "Bot de WhatsApp, mediante el cual los Usuarios pueden emitir facturas electrónicas y realizar consultas.",
        "WebApp, donde los Usuarios pueden gestionar sus datos, emitir facturas masivas mediante carga de archivos Excel, consultar historial de operaciones, realizar pagos, descargar comprobantes y administrar su cuenta."
      ],
      footer: "Cuitly no reemplaza a la AFIP/ARCA ni actúa como intermediario fiscal o contable, sino que provee herramientas tecnológicas que facilitan la interacción del Usuario con dichos organismos y procesos."
    },
    {
      number: 3,
      title: "Registro y Cuenta de Usuario",
      content: [
        "Para utilizar los servicios de Cuitly, el Usuario deberá crear una cuenta mediante los canales habilitados, aportando información veraz, completa y actualizada. El Usuario es responsable de mantener la confidencialidad de sus credenciales, ya sea en la WebApp o en el canal de WhatsApp.",
        "Cuitly podrá requerir verificación de identidad o información adicional cuando lo considere necesario para cumplir con normativas fiscales o de prevención de fraude.",
        "El Usuario se compromete a no compartir sus credenciales ni permitir el acceso de terceros no autorizados a su cuenta."
      ]
    },
    {
      number: 4,
      title: "Planes, Suscripciones y Pagos",
      content: [
        "Cuitly ofrece servicios bajo la modalidad de suscripción mensual o anual, pudiendo incluir períodos de prueba gratuitos. Los precios, características y condiciones comerciales serán informados al Usuario antes de la contratación y podrán ser actualizados en cualquier momento, previa notificación en la Plataforma o por medios electrónicos.",
        "Los pagos podrán realizarse a través de los siguientes procesadores de pago autorizados: Mercado Pago, Dlocal, ONE, o cualquier otro proveedor de servicios de pago externo que Cuitly determine en el futuro.",
        "Toda transacción se regirá por las políticas de dichos proveedores y por las normas vigentes en materia de medios de pago electrónicos. Cuitly no almacena datos de tarjetas ni información bancaria de los Usuarios.",
        "En caso de impago, Cuitly podrá suspender o cancelar el servicio hasta que se regularice la situación."
      ]
    },
    {
      number: 5,
      title: "Uso del Servicio y Responsabilidad del Usuario",
      content: [
        "El Usuario se compromete a utilizar los servicios de Cuitly únicamente con fines lícitos y personales o comerciales legítimos, respetando las normas fiscales, contables y legales vigentes."
      ],
      listTitle: "Está prohibido:",
      list: [
        "Utilizar la Plataforma para fines fraudulentos o ilícitos.",
        "Suplantar identidades o manipular información fiscal.",
        "Alterar, descompilar o intentar acceder sin autorización a los sistemas de Cuitly.",
        "Distribuir o almacenar información obtenida de manera no permitida."
      ],
      footer: "El Usuario reconoce que es el único responsable por la veracidad y exactitud de los datos ingresados, y que cualquier error o falsedad en la información suministrada será de su exclusiva responsabilidad."
    },
    {
      number: 6,
      title: "Emisión de Facturas y Relación con AFIP/ARCA",
      content: [
        "Cuitly facilita la interacción con los servicios web oficiales de AFIP/ARCA, automatizando el proceso de emisión de comprobantes electrónicos. El Usuario autoriza expresamente a Cuitly a operar en su nombre, bajo su propia Clave Fiscal o credenciales habilitadas, para efectuar dichas gestiones.",
        "Cuitly no interviene en la validación ni en la aprobación final de las facturas, ya que esta responsabilidad corresponde exclusivamente a AFIP/ARCA. El Usuario será el único responsable por las operaciones generadas desde su cuenta."
      ]
    },
    {
      number: 7,
      title: "Propiedad Intelectual",
      content: [
        "Todos los contenidos, desarrollos, logotipos, marcas, interfaces, códigos y diseños presentes en la Plataforma son propiedad exclusiva de Cuitly, o de sus respectivos licenciantes, y se encuentran protegidos por la legislación vigente en materia de propiedad intelectual e industrial.",
        "El uso del servicio no otorga al Usuario ningún derecho sobre dichos activos, salvo el uso limitado del servicio conforme a estos Términos."
      ]
    },
    {
      number: 8,
      title: "Privacidad y Protección de Datos",
      content: [
        "Cuitly tratará los datos personales del Usuario conforme a su Política de Privacidad, disponible en https://www.cuitly.com.ar/privacidad, en cumplimiento de la Ley N.º 25.326 de Protección de Datos Personales.",
        "Los datos son utilizados exclusivamente para brindar el servicio, mejorar la experiencia del Usuario y cumplir con las obligaciones legales y fiscales correspondientes. El Usuario podrá ejercer en cualquier momento sus derechos de acceso, rectificación, actualización o supresión enviando un correo electrónico a legales@cuitly.com.ar."
      ]
    },
    {
      number: 9,
      title: "Comunicaciones y Notificaciones",
      listTitle: "Cuitly podrá comunicarse con el Usuario mediante:",
      list: [
        "Mensajes dentro del bot de WhatsApp",
        "Correos electrónicos enviados a la dirección registrada",
        "Notificaciones dentro de la WebApp",
        "O cualquier otro canal digital habilitado"
      ],
      footer: "Las comunicaciones que se envíen por estos medios se considerarán válidas y plenamente eficaces."
    },
    {
      number: 10,
      title: "Limitación de Responsabilidad",
      listTitle: "Cuitly no será responsable por:",
      list: [
        "Fallas o interrupciones del servicio por causas de fuerza mayor, mantenimiento o terceros ajenos a la empresa.",
        "Errores derivados de información incorrecta provista por el Usuario.",
        "Daños directos o indirectos derivados del uso indebido de la Plataforma.",
        "Cambios en las normativas fiscales o errores provenientes de los sistemas de AFIP/ARCA."
      ],
      footer: "En ningún caso Cuitly responderá por pérdidas económicas, lucro cesante o daños emergentes derivados del uso de los servicios."
    },
    {
      number: 11,
      title: "Suspensión o Terminación del Servicio",
      content: [
        "Cuitly podrá suspender temporal o definitivamente la cuenta de un Usuario si detecta incumplimientos a estos Términos, uso indebido, mora en los pagos o sospecha de fraude.",
        "El Usuario podrá solicitar la baja voluntaria de su cuenta en cualquier momento, mediante los canales habilitados.",
        "La terminación del servicio no exime al Usuario de las obligaciones de pago pendientes."
      ]
    },
    {
      number: 12,
      title: "Modificaciones de los Términos",
      content: [
        "Cuitly podrá modificar los presentes Términos en cualquier momento, notificando a los Usuarios mediante los canales oficiales. Las modificaciones entrarán en vigor a los 5 (cinco) días hábiles de su publicación, salvo que se indique lo contrario.",
        "El uso continuado del servicio después de dicha fecha implicará la aceptación de los nuevos Términos."
      ]
    },
    {
      number: 13,
      title: "Legislación Aplicable y Jurisdicción",
      content: [
        "Los presentes Términos se interpretarán de conformidad con las leyes de la República Argentina. Cualquier controversia que pudiera surgir será sometida a la jurisdicción de los Tribunales Ordinarios de la Ciudad de Córdoba, Provincia de Córdoba, República Argentina, con renuncia expresa a cualquier otro fuero o jurisdicción."
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
                <FaFileContract className="text-white text-lg" />
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
              Términos y Condiciones
            </h1>
            <p className="text-lg sm:text-xl text-secondary-text mb-2">
              Última actualización: octubre de 2025
            </p>
            <p className="text-sm text-secondary-text max-w-2xl mx-auto">
              Lee atentamente estos términos antes de utilizar nuestros servicios
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
                <FaFileContract />
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
                id="seccion-14"
                variants={fadeInUp}
                className="mt-12 pt-12 border-t border-gray-200"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 bg-primary-light-blue text-primary-blue rounded-xl font-bold text-lg">
                    14
                  </span>
                  Contacto
                </h2>
                
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                  Para consultas, reclamos o notificaciones formales, los Usuarios podrán comunicarse con Cuitly a través de:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-blue rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaEnvelope className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Soporte</p>
                        <a 
                          href="mailto:soporte@cuitly.com.ar" 
                          className="text-primary-blue hover:text-primary-dark-blue font-medium transition-colors break-all"
                        >
                          soporte@cuitly.com.ar
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 border border-purple-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaEnvelope className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Legal y Privacidad</p>
                        <a 
                          href="mailto:legales@cuitly.com.ar" 
                          className="text-purple-600 hover:text-purple-700 font-medium transition-colors break-all"
                        >
                          legales@cuitly.com.ar
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>

              </motion.section>

              {/* Footer Action */}
              <motion.div
                variants={fadeInUp}
                className="mt-16 text-center"
              >
                <div className="bg-gradient-to-r from-primary-light-blue to-blue-100 rounded-2xl p-8 mb-6">
                  <p className="text-gray-900 font-medium mb-4">
                    Al utilizar los servicios de Cuitly, aceptás estos Términos y Condiciones.
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
