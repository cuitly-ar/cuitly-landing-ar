# 🚀 Cuitly - Landing Page

Landing page moderna y responsive para Cuitly, construida con **Next.js 14**, **React**, **TypeScript** y **TailwindCSS**.

## ✨ Características

- 🎨 **Diseño Moderno**: UI/UX mejorada con animaciones suaves y diseño atractivo
- 📱 **Totalmente Responsive**: Optimizado para móviles, tablets y desktop
- ⚡ **Rendimiento Óptimo**: Next.js 14 con App Router para carga rápida
- 🎭 **Animaciones**: Framer Motion para transiciones fluidas
- 🎯 **SEO Optimizado**: Metadata completa y estructura semántica
- 🧩 **Componentes Modulares**: Código limpio, organizado y bien comentado
- 🎨 **TailwindCSS**: Estilos utility-first con tema personalizado

## 📁 Estructura del Proyecto

```
landing_principal/
├── app/                      # App Router de Next.js
│   ├── layout.tsx           # Layout principal con metadata
│   ├── page.tsx             # Página home
│   └── globals.css          # Estilos globales y variables CSS
├── components/              # Componentes React
│   ├── Header.tsx          # Barra de navegación con menú responsive
│   ├── Hero.tsx            # Sección hero principal con mockup WhatsApp
│   ├── HowItWorks.tsx      # Cómo funciona (3 pasos)
│   ├── Features.tsx        # Características sin fricción
│   ├── Benefits.tsx        # Beneficios reales
│   ├── Pricing.tsx         # Planes y precios
│   ├── FAQ.tsx             # Preguntas frecuentes con acordeón
│   ├── CTA.tsx             # Call to action final
│   └── Footer.tsx          # Pie de página con enlaces
├── public/                  # Archivos estáticos (agregar logos/imágenes aquí)
├── package.json            # Dependencias del proyecto
├── tailwind.config.js      # Configuración de Tailwind
├── tsconfig.json           # Configuración de TypeScript
├── next.config.js          # Configuración de Next.js
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
# Con npm
npm install

# Con yarn
yarn install

# Con pnpm
pnpm install
```

### 2. Ejecutar el servidor de desarrollo

```bash
# Con npm
npm run dev

# Con yarn
yarn dev

# Con pnpm
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la landing page.

### 3. Build para producción

```bash
# Con npm
npm run build
npm start

# Con yarn
yarn build
yarn start

# Con pnpm
pnpm build
pnpm start
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

### Menú de navegación

El menú se define en `components/Header.tsx`:

```typescript
const navLinks = [
  { name: 'Beneficios', href: '#benefits' },
  { name: 'Planes', href: '#pricing' },
  { name: 'Preguntas', href: '#faq' },
  { name: 'Soporte', href: '#footer' },
]
```

## 📱 Secciones de la Landing

1. **Header**: Navegación fija con logo y menú responsive + botón REGISTRARSE
2. **Hero**: Título principal, descripción y mockup animado de WhatsApp
3. **How It Works**: Explicación en 3 pasos del funcionamiento
4. **Features**: Características principales sin fricción
5. **Benefits**: Beneficios reales con estadísticas
6. **Pricing**: 2 planes (Esencial y Profesional) con precios
7. **FAQ**: Preguntas frecuentes con acordeón interactivo
8. **CTA**: Llamada a la acción final con testimonial
9. **Footer**: Enlaces, contacto y redes sociales

## 🎯 Optimizaciones Implementadas

- ✅ Lazy loading de componentes
- ✅ Animaciones con Intersection Observer
- ✅ Imágenes optimizadas con next/image (cuando se agreguen)
- ✅ SEO metadata completa
- ✅ Accesibilidad mejorada
- ✅ Código TypeScript 100% tipado
- ✅ Componentes reutilizables y modulares

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting con ESLint
```

## 📝 Próximos Pasos Sugeridos

1. **Agregar imágenes**: Coloca el logo y otras imágenes en `public/`
2. **Integrar formulario de registro**: Conectar el botón "REGISTRARSE" con tu backend
3. **Analytics**: Agregar Google Analytics o similar
4. **Testing**: Implementar tests con Jest y React Testing Library
5. **WhatsApp Business API**: Conectar con número real de WhatsApp

## 🤝 Contribuciones

Este proyecto fue diseñado para ser fácilmente extensible. Cada componente está bien comentado y sigue las mejores prácticas de React y Next.js.

## 📄 Licencia

Desarrollado para Cuitly - Todos los derechos reservados © 2025

## 💬 Soporte

¿Necesitás ayuda? Contactanos:
- 📧 Email: hola@cuitly.com
- 💬 WhatsApp: [Agregar número]

---

**¡Tu landing está lista para usar! 🎉**

Para empezar, simplemente ejecutá `npm install` y luego `npm run dev`.




