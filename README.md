# VIDISA Transportes y Servicios — Sitio Web

Sitio web institucional de **VIDISA Transportes y Servicios Ltda.** — empresa familiar de transporte de contenedores en la Región del Biobío, Chile.

> **Tres generaciones moviendo el Biobío.**

---

## 📂 Estructura del proyecto

```
vidisa-web/
├── index.html           ← Página principal (single-page)
├── css/
│   └── styles.css       ← Estilos completos del sitio
├── js/
│   └── main.js          ← Smooth scroll, sticky header, mobile nav, scroll reveals
├── assets/
│   ├── logos/
│   │   ├── vidisa-logo-horizontal.png  ← Logo principal (header y footer)
│   │   ├── vidisa-isotipo.png          ← Isotipo (hero, favicon)
│   │   └── vidisa-truck-only.png       ← Solo el camión (decorativo)
│   └── images/                          ← (Para fotos reales del camión a futuro)
├── BRIEF.md             ← Brief estratégico completo (contexto para Claude Code)
└── README.md            ← Este archivo
```

---

## 🚀 Cómo verlo localmente

Como es un sitio estático, basta con abrir `index.html` en un navegador:

```bash
# Opción 1: Doble click en index.html (Windows/Mac)

# Opción 2: Servidor local con Python (mejor — fuentes y links funcionan mejor)
python3 -m http.server 8000
# Luego abrir: http://localhost:8000

# Opción 3: Servidor con Node (si lo tienes instalado)
npx serve
```

---

## 🔧 Workflow con Claude Code

Este sitio fue diseñado para iterarse con Claude Code. Workflow recomendado:

### 1. Iniciar sesión
```bash
cd vidisa-web
claude
```

### 2. Primer prompt sugerido
```
Lee BRIEF.md para entender el contexto completo del proyecto.
Revisa también index.html, css/styles.css y js/main.js para
entender el estado actual del sitio.

Te voy a pedir cambios específicos por sección.
```

### 3. Iteraciones por sección
En vez de pedir todo de una, ve sección por sección:

> *"Mejora la sección Hero — quiero probar otra propuesta visual del título manteniendo el tagline."*

> *"En la sección Valores, agrégale un detalle visual más fuerte que contraste con el fondo negro."*

> *"Optimiza las imágenes para producción (convertir a WebP cuando sea posible)."*

---

## 🎨 Sistema de diseño

### Colores
- **Rojo VIDISA:** `#a60d28` (primario)
- **Negro profundo:** `#0f0d0c` (sección oscura, footer)
- **Blanco hueso:** `#faf8f4` (fondos principales)
- **Crema:** `#f5efe5` (fondos alternados)

### Tipografía
- **Display:** [Fraunces](https://fonts.google.com/specimen/Fraunces) — serif editorial con carácter, evoca tradición
- **Cuerpo:** [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) — técnica, industrial
- **Mono:** [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) — para detalles técnicos

### Aproximación estética
**Editorial / Industrial Heritage** — secciones numeradas (01, 02, 03...), tipografía editorial, paleta cálida, contraste con sección oscura para los valores.

---

## 📝 Secciones del sitio

| # | Sección | Propósito |
|---|---------|-----------|
| — | Header | Navegación sticky + CTA WhatsApp |
| — | Hero | Tagline principal + propuesta de valor + CTAs |
| 01 | Nosotros | Historia familiar de las tres generaciones + misión |
| 02 | Servicios | 4 tarjetas con los servicios principales |
| 03 | Valores | Sección oscura con los 5 valores innegociables |
| 04 | Cobertura | Zona de operación: puertos del Biobío |
| 05 | Contacto | WhatsApp + Teléfono + Email + datos del fundador |
| — | Footer | Branding + navegación + contacto resumido |
| — | WhatsApp Float | Botón flotante persistente |

---

## 🌐 Despliegue en GitHub Pages

### Setup inicial
1. Crea un repositorio en GitHub (público o privado).
2. Sube todos estos archivos al repo:
   ```bash
   git init
   git add .
   git commit -m "feat: initial VIDISA website"
   git branch -M main
   git remote add origin https://github.com/[tu-usuario]/vidisa-web.git
   git push -u origin main
   ```
3. En el repo de GitHub: **Settings → Pages → Source → Deploy from a branch → main / (root) → Save.**
4. En unos minutos el sitio estará en `https://[tu-usuario].github.io/vidisa-web/`.

### Cuando compres dominio (`vidisa.cl`)
1. Crea un archivo `CNAME` en la raíz con: `vidisa.cl`
2. En tu proveedor del dominio (NIC Chile), apunta los DNS a GitHub Pages:
   - `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` para `www`: `[tu-usuario].github.io`
3. Activa HTTPS en Settings → Pages → Enforce HTTPS.

---

## ✅ Checklist antes de salir a producción

- [ ] Verificar que todos los logos se vean bien (las 3 versiones)
- [ ] Reemplazar el favicon por una versión optimizada de 32x32 o 64x64
- [ ] Probar en Chrome, Firefox, Safari
- [ ] Probar en celular real (iOS y Android)
- [ ] Verificar links de WhatsApp y email
- [ ] Comprimir imágenes (TinyPNG, Squoosh)
- [ ] Validar HTML (validator.w3.org)
- [ ] Test de Lighthouse (objetivo: >90 en todas las categorías)
- [ ] Configurar Google Search Console
- [ ] Crear y subir `sitemap.xml` y `robots.txt`
- [ ] Configurar Google Business Profile para SEO local

---

## 📞 Datos de contacto del proyecto

**VIDISA Transportes y Servicios Ltda.**
- **Fundador:** Víctor Díaz Salas
- **Teléfono:** +56 9 6125 8314
- **Email:** vdiazs11@gmail.com
- **Ubicación:** Talcahuano, Región del Biobío, Chile

---

*Última actualización: 2026*
