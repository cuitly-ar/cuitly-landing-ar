# 🚀 Cuitly - Landing Page

Landing page moderna y responsive para Cuitly, construida con **Next.js 14**, **React**, **TypeScript** y **TailwindCSS**.

## ✨ Características

- 🎨 **Diseño Moderno**: UI/UX mejorada con animaciones suaves y diseño atractivo
- 📱 **Totalmente Responsive**: Optimizado para móviles, tablets y desktop
- ⚡ **Rendimiento Óptimo**: Next.js 14 con App Router y export estático
- 🎭 **Animaciones**: Framer Motion para transiciones fluidas
- 🎯 **SEO Optimizado**: Metadata completa y estructura semántica
- 🧩 **Componentes Modulares**: Código limpio, organizado y bien comentado
- 🎨 **TailwindCSS**: Estilos utility-first con tema personalizado
- 📄 **Páginas Legales**: Términos y Condiciones + Política de Privacidad

## 📁 Estructura del Proyecto

```
cuitly_landing/
├── app/                      # App Router de Next.js
│   ├── layout.tsx           # Layout principal con metadata
│   ├── page.tsx             # Página home
│   ├── globals.css          # Estilos globales y variables CSS
│   ├── terminos/            # Página de Términos y Condiciones
│   │   └── page.tsx
│   └── privacidad/          # Página de Política de Privacidad
│       └── page.tsx
├── components/              # Componentes React
│   ├── Header.tsx          # Barra de navegación con menú responsive
│   ├── Hero.tsx            # Sección hero principal con mockup WhatsApp
│   ├── HowItWorks.tsx      # Cómo funciona (3 pasos)
│   ├── Features.tsx        # Características sin fricción
│   ├── Benefits.tsx        # Beneficios reales
│   ├── Pricing.tsx         # Planes y precios (mensual/anual)
│   ├── FAQ.tsx             # Preguntas frecuentes con acordeón
│   ├── CTA.tsx             # Call to action final
│   └── Footer.tsx          # Pie de página con enlaces
├── public/                  # Archivos estáticos
│   ├── logo.svg
│   └── logo-simple.svg
├── hooks/                   # Custom hooks
│   └── useInView.ts
├── package.json            # Dependencias del proyecto
├── tailwind.config.js      # Configuración de Tailwind
├── tsconfig.json           # Configuración de TypeScript
├── next.config.js          # Configuración de Next.js (static export)
├── netlify.toml            # Configuración de Netlify
├── .gitignore              # Archivos ignorados por git
└── README.md               # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework React con App Router
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **TailwindCSS** - Framework CSS utility-first
- **Framer Motion** - Animaciones fluidas
- **React Icons** - Iconos SVG optimizados

## 📋 Requisitos Previos

- Node.js 18.x o superior
- npm, yarn, pnpm o bun

## 🚀 Instalación y Desarrollo

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la landing page.

### 3. Build para producción

```bash
npm run build
```

Esto generará el sitio estático en la carpeta `out/`.

### 4. Servidor de producción local

```bash
npm start
```

## 🎨 Personalización

### Colores

Los colores se definen en `tailwind.config.js` y `app/globals.css`:

```css
--primary-blue: #2196F3
--dark-blue: #1976D2
--light-blue: #E3F2FD
--accent-green: #00C853
--accent-green-hover: #00B34A
--secondary-text: #607D8B
--light-gray: #F5F7FA
```

### Contenido

Cada componente está bien documentado y es fácil de modificar:

- **Textos**: Edita directamente en cada componente
- **Imágenes**: Agrega tus imágenes en la carpeta `public/`
- **Enlaces**: Actualiza los `href` en cada sección

## 📱 Secciones de la Landing

1. **Header**: Navegación fija con logo y menú responsive + botón REGISTRARSE
2. **Hero**: Título principal, descripción y mockup animado de WhatsApp
3. **How It Works**: Explicación en 3 pasos del funcionamiento
4. **Features**: Características principales sin fricción
5. **Benefits**: Beneficios reales con estadísticas
6. **Pricing**: 2 planes (Esencial y Profesional) con toggle mensual/anual
7. **FAQ**: Preguntas frecuentes con acordeón interactivo
8. **CTA**: Llamada a la acción final con testimonial
9. **Footer**: Enlaces, contacto y redes sociales
10. **Términos y Condiciones**: Página legal completa
11. **Política de Privacidad**: Página de privacidad y cookies

## 🎯 Optimizaciones Implementadas

- ✅ Export estático para mejor rendimiento
- ✅ Lazy loading de componentes
- ✅ Animaciones con Intersection Observer
- ✅ SEO metadata completa
- ✅ Accesibilidad mejorada
- ✅ Código TypeScript 100% tipado
- ✅ Componentes reutilizables y modulares

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción (genera carpeta out/)
npm run start    # Servidor de producción
npm run lint     # Linting con ESLint
```

## 🌐 Deploy en Netlify

El proyecto está configurado para deploy automático en Netlify:

1. Conecta tu repositorio de GitHub a Netlify
2. La configuración se detecta automáticamente desde `netlify.toml`
3. Build command: `npm run build`
4. Publish directory: `out`

**Configuración automática:**
- El archivo `netlify.toml` incluye redirects para SPA
- El `next.config.js` está configurado con `output: 'export'`


## 💬 Soporte

¿Necesitás ayuda? Contactanos:
- 📧 Email: contacto@clientes.cuitly.ar
- 📧 Soporte: soporte@clientes.cuitly.ar
- 📧 Legal: legales@clientes.cuitly.ar

---

Desarrollado para Cuitly - Todos los derechos reservados © 2025
