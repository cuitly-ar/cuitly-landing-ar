/**
 * API Route para enviar emails del formulario de arrepentimiento
 * Usa nodemailer con configuración SMTP segura
 */

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Contador de tickets (en producción usar base de datos)
let ticketCounter = 2000

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, apellidos, correo, cuit, movil, motivo } = body

    // Validación básica
    if (!nombre || !apellidos || !correo || !cuit || !movil || !motivo) {
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

    // Definir el asunto del email
    const asunto = `Solicitud de Arrepentimiento | TICKET ${ticketNumber}`

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
            background: linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%);
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
            color: #9C27B0;
          }
          .value {
            margin-top: 5px;
            padding: 10px;
            background: white;
            border-left: 3px solid #9C27B0;
          }
          .alert {
            background: #fff3cd;
            border: 1px solid #ffc107;
            border-radius: 4px;
            padding: 15px;
            margin: 15px 0;
            color: #856404;
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
            <h2 style="margin: 0;">⚠️ Solicitud de Arrepentimiento</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Ticket: ${ticketNumber}</p>
          </div>
          <div class="content">
            <div class="alert">
              <strong>⏰ URGENTE:</strong> Esta es una solicitud de arrepentimiento conforme a la Ley 24.240 de Defensa del Consumidor. Debe procesarse dentro de los plazos legales establecidos.
            </div>
            
            <div class="field">
              <div class="label">👤 Nombre:</div>
              <div class="value">${nombre}</div>
            </div>
            <div class="field">
              <div class="label">👤 Apellidos:</div>
              <div class="value">${apellidos}</div>
            </div>
            <div class="field">
              <div class="label">📨 Correo Electrónico:</div>
              <div class="value">${correo}</div>
            </div>
            <div class="field">
              <div class="label">🔢 CUIT/CUIL:</div>
              <div class="value">${cuit}</div>
            </div>
            <div class="field">
              <div class="label">📱 Teléfono Móvil:</div>
              <div class="value">${movil}</div>
            </div>
            <div class="field">
              <div class="label">💬 Motivo del Arrepentimiento:</div>
              <div class="value">${motivo.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>Este mensaje fue enviado desde el formulario de arrepentimiento de Cuitly</p>
            <p>Fecha de recepción: ${new Date().toLocaleString('es-AR')}</p>
            <p><strong>Procesar según Ley 24.240 - Artículo 34</strong></p>
          </div>
        </div>
      </body>
      </html>
    `

    // Enviar email
    await transporter.sendMail({
      from: `"Cuitly Arrepentimiento" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: asunto,
      html: htmlContent,
      replyTo: correo, // Permite responder directamente al usuario
      priority: 'high', // Marca el email como alta prioridad
    })

    return NextResponse.json(
      { 
        message: 'Solicitud de arrepentimiento enviada exitosamente',
        ticketNumber 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error al enviar email de arrepentimiento:', error)
    return NextResponse.json(
      { error: 'Error al enviar la solicitud. Por favor, intenta nuevamente.' },
      { status: 500 }
    )
  }
}

