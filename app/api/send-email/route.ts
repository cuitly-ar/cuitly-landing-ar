/**
 * API Route para enviar emails del formulario de contacto
 * Usa nodemailer con configuración SMTP segura
 */

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Contador de tickets (en producción usar base de datos)
let ticketCounter = 1000

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, correo, tipo, mensaje } = body

    // Validación básica
    if (!nombre || !correo || !tipo || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Generar número de ticket
    ticketCounter++
    const ticketNumber = `#${ticketCounter}`

    // Configurar transporter de nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: true, // true para 465, false para otros puertos
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Mapear el tipo de consulta a texto legible
    const tipoMap: Record<string, string> = {
      'quiero_empezar': 'No tengo cuenta y quiero empezar a usar Cuitly',
      'soy_contador': 'Soy contador y quiero usar Cuitly',
      'ya_tengo_cuenta': 'Ya tengo cuenta y necesito ayuda'
    }
    const tipoTexto = tipoMap[tipo] || tipo

    // Definir el asunto del email
    const asunto = `Contacto de Formulario | ${tipoTexto} | TICKET ${ticketNumber}`

    // Contenido del email en HTML
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #2196F3 0%, #1769aa 100%);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background: #f9f9f9;
            padding: 20px;
            border: 1px solid #ddd;
            border-top: none;
          }
          .field {
            margin-bottom: 15px;
          }
          .label {
            font-weight: bold;
            color: #2196F3;
          }
          .value {
            margin-top: 5px;
            padding: 10px;
            background: white;
            border-left: 3px solid #2196F3;
          }
          .footer {
            text-align: center;
            padding: 15px;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">📧 Nuevo Contacto - Cuitly</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Ticket: ${ticketNumber}</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Nombre Completo:</div>
              <div class="value">${nombre}</div>
            </div>
            <div class="field">
              <div class="label">📨 Correo Electrónico:</div>
              <div class="value">${correo}</div>
            </div>
            <div class="field">
              <div class="label">🏷️ Tipo de Consulta:</div>
              <div class="value">${tipoTexto}</div>
            </div>
            <div class="field">
              <div class="label">💬 Mensaje:</div>
              <div class="value">${mensaje.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>Este mensaje fue enviado desde el formulario de contacto de Cuitly</p>
            <p>Fecha: ${new Date().toLocaleString('es-AR')}</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Enviar email
    await transporter.sendMail({
      from: `"Cuitly Contacto" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: asunto,
      html: htmlContent,
      replyTo: correo, // Permite responder directamente al usuario
    })

    return NextResponse.json(
      { 
        message: 'Email enviado exitosamente',
        ticketNumber 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error al enviar email:', error)
    return NextResponse.json(
      { error: 'Error al enviar el email. Por favor, intenta nuevamente.' },
      { status: 500 }
    )
  }
}

