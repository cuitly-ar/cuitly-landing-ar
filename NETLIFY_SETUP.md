# 🚀 Configuración de Variables de Entorno en Netlify

## Variables Requeridas

El proyecto necesita las siguientes variables de entorno para el sistema de envío de emails:

- `EMAIL_HOST`
- `EMAIL_PORT`
- `EMAIL_USER`
- `EMAIL_PASS`
- `EMAIL_FROM`
- `EMAIL_TO`

## 📝 Cómo Configurar en Netlify

1. Ve a tu sitio en Netlify
2. Navega a: **Site settings → Environment variables**
3. Haz clic en **"Add a variable"** o **"Import from .env"**
4. Pega el contenido de tus variables de entorno
5. Configura:
   - **Scopes:** All scopes (o Functions si prefieres)
   - **Deploy contexts:** All deploy contexts
   - Marca como **Secret** las variables sensibles

## ✅ Deploy

Una vez configuradas las variables, haz deploy normalmente:
```bash
git push
```

Netlify detectará las variables automáticamente y las inyectará en tu aplicación.

## 🔒 Seguridad

- ✅ Las variables de entorno **NO** se exponen en el frontend
- ✅ Solo las API routes (backend) tienen acceso
- ✅ Los archivos `.env*` están en `.gitignore`
- ✅ Las credenciales nunca se suben a GitHub

---

**Nota:** No necesitas crear archivos `.env` locales. Las variables se configuran directamente en Netlify.

