# BRIEF — Sitio Web VIDISA Transportes y Servicios Ltda.

> Documento de contexto y especificación para construir el sitio web de VIDISA con Claude Code. Este archivo contiene toda la información estratégica, visual y técnica necesaria para desarrollar el sitio.

---

## 1. Resumen del Proyecto

**Empresa:** VIDISA Transportes y Servicios Ltda.
**Objetivo del sitio:** Landing page profesional que comunique la identidad de la empresa, genere confianza en clientes potenciales (navieras, agencias, operadores logísticos) y derive contactos directos por WhatsApp / correo.
**Hosting inicial:** GitHub Pages (sitio estático).
**Stack:** HTML5 + CSS3 + JavaScript vanilla (sin frameworks pesados, para mantenerlo liviano y rápido).
**Tipo de sitio:** Single-page (one-page) con secciones ancladas.
**Idioma:** Español (Chile).
**Dominio futuro:** A definir (sugerido: `vidisa.cl` o `transportesvidisa.cl`).

---

## 2. La Empresa

### Identidad básica

- **Razón social:** VIDISA Transportes y Servicios Ltda.
- **Marca comercial:** VIDISA
- **Origen del nombre:** Iniciales del fundador — **VI**ctor **DI**az **SA**las
- **Tipo de empresa:** Familiar, formalizada como Sociedad de Responsabilidad Limitada
- **Ubicación:** Talcahuano, Región del Biobío, Chile
- **Rubro:** Transporte terrestre de contenedores (vacíos actualmente; llenos a futuro)

### Historia / Origen

VIDISA nace como continuación de un legado de tres generaciones de transportistas:

1. **Primera generación:** El abuelo, pionero familiar en el rubro del transporte con camiones.
2. **Segunda generación:** El padre, que heredó la operación y mantuvo el oficio activo.
3. **Tercera generación:** Víctor Díaz Salas, quien decide formalizar la operación bajo su propio nombre y empezar a operar a la par con su padre.

Esta herencia es **el principal activo de marca** y debe estar presente en toda la comunicación. No es un dato decorativo: es el diferencial que ningún competidor pequeño puede replicar.

### Operación actual

- **Flota:** 1 camión Mercedes-Benz 1621 (modelo del año 1991) + 1 semirremolque
- **Conductor:** 1 conductor activo (además del fundador)
- **Ruta principal:** Puerto San Vicente → Depósito CON (Talcahuano)
- **Carga:** Contenedores vacíos de 20', 40' y reefer
- **Modalidad actual:** Trabajo como subcontratista (tercero) para una naviera operando en la zona portuaria del Biobío
- **Foco a corto plazo:** Migrar de subcontratista a operación directa con navieras, agencias y operadores logísticos

> **Nota importante:** La condición actual de subcontratista es operacional, no parte de la identidad pública de la marca. El sitio NO debe mencionarlo. La marca proyecta a dónde va VIDISA, no la posición exacta del primer año.

### Plan de crecimiento (visión 5 años)

| Plazo | Meta |
|-------|------|
| Fin de año actual | 2 camiones + 2 semirremolques |
| Año 2 | 4 camiones, operación principalmente en Biobío |
| Año 3-4 | Equipo más nuevo, inicio de transporte de contenedores **llenos** |
| Año 5 (2031) | **10 camiones propios**, conductores propios, reefer dedicado, operación directa con navieras |

Filosofía de crecimiento: **gradual, sin sobreexigir el equipo**, priorizando mantener calidad de servicio antes que escalar rápido.

---

## 3. Identidad Estratégica

### Misión

> **Brindar servicios de transporte de contenedores en la Región del Biobío priorizando la seguridad de cada operación, cumpliendo los plazos comprometidos y respondiendo con la responsabilidad heredada de tres generaciones de transportistas.**

### Visión

> **Al 2031, ser una empresa referente en transporte de contenedores en la Región del Biobío, con una flota propia de 10 unidades operando directamente con navieras, agencias y operadores logísticos — manteniendo intactos la cercanía, el compromiso y los valores que nos definen desde el primer viaje.**

### Valores

#### 1. Seguridad innegociable
La seguridad de las personas, el equipo y la carga está antes que el plazo, antes que la utilidad y antes que cualquier presión externa. Un viaje seguro es la base de todo lo demás.

#### 2. Palabra empeñada
La empresa lleva el nombre de quien la dirige (VI-DI-SA). Lo que se promete, se cumple. Si hay un retraso o un problema, se avisa con la verdad y se asume la responsabilidad.

#### 3. Puntualidad como hábito
Llegar a tiempo no es una virtud ocasional, es una condición de trabajo. Respetar el tiempo del cliente es respetar el oficio.

#### 4. Cuidado del equipo
No se sobreexige al camión, no se improvisa con la carga, no se toman atajos. Crecer paso a paso, con equipos mantenidos y operaciones planificadas, es lo que permite seguir mañana.

#### 5. Tradición que obliga
Tres generaciones de transportistas no son un dato decorativo: son una vara alta. Cada operación honra (o ensucia) un apellido. Eso obliga a hacer las cosas bien.

### Propuesta de Valor

> **Cuando una naviera, agencia u operador logístico contrata a VIDISA, no contrata un camión más en el patio: contrata a una empresa familiar formalizada, con tres generaciones de oficio detrás, donde la seguridad y la puntualidad son condiciones de trabajo y donde cada operación lleva el nombre y la firma personal de quien la dirige.**

### Tagline principal

> **"Tres generaciones moviendo el Biobío"**

**Alternativas (en caso de querer rotar o usar en distintos contextos):**
- "El transporte que se hereda"
- "Tradición que cumple"
- "El oficio de cumplir"
- "Tres generaciones, una palabra"

---

## 4. Identidad Visual

### Paleta de colores

```css
:root {
  /* Color primario - Rojo VIDISA */
  --vidisa-red: #a60d28;
  --vidisa-red-dark: #7a091d;   /* Para hover, sombras */
  --vidisa-red-light: #c41a35;  /* Para acentos suaves */

  /* Neutros */
  --vidisa-black: #1a1a1a;      /* Texto principal */
  --vidisa-gray-dark: #555555;  /* Texto secundario */
  --vidisa-gray: #888888;       /* Texto terciario, captions */
  --vidisa-gray-light: #f5f5f5; /* Fondos suaves */
  --vidisa-white: #ffffff;

  /* Accent (solo para botón WhatsApp) */
  --whatsapp-green: #25D366;
}
```

### Tipografía

**Recomendación para el sitio:**

- **Títulos / display:** `Montserrat` (Bold/Black) — moderna, geométrica, cargada, transmite solidez
- **Cuerpo de texto:** `Inter` o `Open Sans` — legible, profesional, neutra
- **Acentos / cursivas:** Mantener la misma familia, evitar fuentes decorativas

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Logos disponibles

Los archivos de logo deben estar en `assets/logos/` con los siguientes nombres sugeridos:

| Archivo | Uso |
|---------|-----|
| `vidisa-logo-horizontal.png` | Logo principal (texto VIDISA + camión + contenedor con VIDISA). **Header del sitio.** |
| `vidisa-isotipo.png` | Solo el camión + contenedor con VIDISA (sin texto principal). **Favicon, footer, redes.** |
| `vidisa-truck-only.png` | Solo el camión Mercedes-Benz 1621 sin texto. **Decorativo, secciones.** |
| `vidisa-logo-white.png` | Versión blanca del logo (para usar sobre fondo rojo o negro) |

> Si alguna versión no existe aún, generarla manteniendo coherencia: rojo `#a60d28` + negro + blanco.

### Iconografía

- Usar íconos limpios y minimalistas (SVG preferentemente).
- Bibliotecas recomendadas: **Lucide Icons** o **Heroicons** (gratuitas, modernas).
- Evitar emojis en el cuerpo del sitio (sí pueden usarse en la firma de correo).

### Estilo fotográfico (a futuro)

- Fotos del camión, del puerto, de operaciones reales.
- Tono: documental, cercano, sin filtros excesivos.
- Si no hay fotos propias todavía, evitar stock genérico de camiones de Estados Unidos. Mejor usar **ilustraciones del logo** o **fotos reales** aunque sean simples del único camión actual (eso refuerza la autenticidad).

---

## 5. Tono de Voz

### Cómo escribimos

- **Profesional, pero cercano.** No corporativo frío. No burocrático.
- **Directo.** Frases cortas. Sin rellenos.
- **Honesto.** No prometemos lo que no podemos cumplir. No inflamos cifras.
- **Familiar.** Hablamos de la herencia con orgullo, no con marketing barato.
- **Regional.** Nos identificamos con el Biobío, con Talcahuano, con los puertos. No tratamos de sonar globales.

### Cómo NO escribimos

- ❌ "Líderes en soluciones logísticas integrales" (vacío, todos lo dicen)
- ❌ "Sinergias", "ecosistemas", "verticales" (lenguaje de consultora startupera)
- ❌ "Más de 50 años de experiencia" (sería mentira; tenemos 3 generaciones, no 50 años de empresa)
- ❌ Mayúsculas innecesarias, signos de exclamación múltiples, lenguaje publicitario chillón

### Cómo SÍ escribimos

- ✅ "Tres generaciones de transportistas detrás de cada viaje."
- ✅ "Movemos contenedores en la Región del Biobío con la seguridad como prioridad."
- ✅ "Una empresa familiar formalizada, donde cada operación lleva nuestro apellido."
- ✅ "Operamos desde Talcahuano. Conocemos cada puerto del Biobío como la palma de nuestra mano."

---

## 6. Datos de Contacto

```
Nombre:         Víctor Díaz Salas
Cargo:          Gerente General
Empresa:        VIDISA Transportes y Servicios Ltda.
Teléfono:       +56 9 6125 8314
WhatsApp:       https://wa.me/56961258314
Email:          vdiazs11@gmail.com
Ubicación:      Talcahuano, Región del Biobío, Chile
Cobertura:      Región del Biobío (puertos: San Vicente, Talcahuano, Lirquén, Coronel)
```

---

## 7. Estructura del Sitio Web (Recomendada)

Single-page con las siguientes secciones, en este orden:

### 7.1 Header / Navegación
- Logo a la izquierda (`vidisa-logo-horizontal.png`)
- Menú de anclas: Inicio · Nosotros · Servicios · Cobertura · Contacto
- Botón destacado de WhatsApp en color verde a la derecha
- Sticky (se mantiene visible al hacer scroll)

### 7.2 Hero
- Título grande: **"Tres generaciones moviendo el Biobío"**
- Subtítulo: una frase de la propuesta de valor, simplificada. Por ejemplo: *"Transporte de contenedores en la Región del Biobío con la seriedad de una empresa familiar formalizada y la experiencia de tres generaciones."*
- Dos botones CTA: **"Solicitar cotización"** (WhatsApp) + **"Conocer más"** (scroll a sección Nosotros)
- Imagen/ilustración: el isotipo del camión con contenedor, o foto del camión real si existe
- Fondo: blanco o degradado muy sutil con un acento rojo

### 7.3 Sobre Nosotros / Nuestra Historia
- Título: "Una historia que viene de lejos" o "Tres generaciones, una sola palabra"
- Narrativa breve (2-3 párrafos) sobre el origen familiar:
  - Abuelo pionero
  - Padre continuador
  - Víctor formaliza VIDISA
  - El nombre VIDISA = VIctor DIaz SAlas
- Cita destacada: la **Misión** completa
- Imagen: foto del camión Mercedes 1621 (el camión heritage) o ilustración del logo

### 7.4 Servicios
- Título: "Lo que hacemos"
- 3-4 tarjetas con servicios:
  1. **Transporte de contenedores vacíos** (servicio actual)
  2. **Contenedores 20' / 40' / Reefer** (todos los formatos)
  3. **Operación zona portuaria Biobío** (San Vicente, Talcahuano, Lirquén, Coronel)
  4. **Servicio personalizado a navieras y agencias**
- Cada tarjeta con un ícono limpio + título + 1-2 líneas de descripción

### 7.5 Por qué VIDISA / Valores
- Título: "Por qué elegirnos" o "Lo que nos define"
- Grid de los **5 valores** con íconos:
  - Seguridad innegociable
  - Palabra empeñada
  - Puntualidad como hábito
  - Cuidado del equipo
  - Tradición que obliga
- Cada uno con título + descripción corta (la versión 1 línea de cada valor)

### 7.6 Cobertura / Zona de Operación
- Título: "Operamos en la Región del Biobío"
- Mapa simple (puede ser una imagen estilizada o Google Maps embed) destacando:
  - Talcahuano (base)
  - Puerto San Vicente
  - Puerto Lirquén
  - Coronel
- Texto: cobertura actual + ambición de expansión.

### 7.7 Contacto / CTA Final
- Título: "Cotiza tu próximo traslado"
- Subtítulo: invitación clara a contactar
- Tres formas de contacto en tarjetas:
  - **WhatsApp** (botón grande verde, con link directo)
  - **Llamada** (link tel:)
  - **Email** (link mailto:)
- Datos: nombre, cargo, ubicación

### 7.8 Footer
- Logo (versión clara o blanca según fondo)
- Datos de contacto resumidos
- Tagline: "Tres generaciones moviendo el Biobío"
- Copyright: © 2026 VIDISA Transportes y Servicios Ltda.
- Link a redes sociales (cuando existan)

### 7.9 Botón flotante de WhatsApp
- Botón circular verde en esquina inferior derecha, fijo en pantalla durante todo el scroll.
- Link directo: `https://wa.me/56961258314?text=Hola%20VIDISA,%20me%20interesa%20cotizar%20un%20traslado.`

---

## 8. Especificaciones Técnicas

### Generales
- **Responsive:** Mobile-first. Funcionar perfecto en celular (la mayoría de los clientes B2B revisan desde móvil hoy).
- **Performance:** Carga bajo 2 segundos. Imágenes optimizadas (WebP cuando sea posible). Fuentes con `display=swap`.
- **Accesibilidad:** Cumplir WCAG AA básico — contraste suficiente, alt text en imágenes, navegación por teclado, semantic HTML.
- **SEO básico:**
  - `<title>`: "VIDISA Transportes y Servicios | Transporte de Contenedores en el Biobío"
  - `<meta description>`: 150-160 caracteres con keywords principales
  - Open Graph tags para compartir en WhatsApp/redes
  - `sitemap.xml` y `robots.txt`
  - Datos estructurados Schema.org tipo `LocalBusiness` / `MovingCompany`

### Keywords principales para SEO local
- Transporte de contenedores Talcahuano
- Transporte de contenedores Biobío
- Transporte contenedores vacíos San Vicente
- Transportistas Talcahuano
- Empresa de transporte de contenedores Biobío
- Transporte portuario Talcahuano

### Animaciones
- Sutiles. Fade-in al hacer scroll en secciones.
- Hover effects suaves en botones y tarjetas.
- Sin animaciones extravagantes ni parallax pesados.
- Usar `prefers-reduced-motion` para usuarios que las desactivan.

### Estructura sugerida del repositorio

```
vidisa-web/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── logos/
│   │   ├── vidisa-logo-horizontal.png
│   │   ├── vidisa-isotipo.png
│   │   ├── vidisa-truck-only.png
│   │   └── vidisa-logo-white.png
│   ├── images/
│   │   └── (fotos del camión, puertos, etc.)
│   └── icons/
│       └── (íconos SVG)
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── BRIEF.md  (este archivo)
└── README.md
```

### GitHub Pages

- Crear repo público o privado.
- Settings → Pages → Source: `main` branch, `/` (root).
- URL inicial: `https://[usuario].github.io/vidisa-web/`
- Cuando se compre dominio: configurar `CNAME` apuntando al dominio.

---

## 9. Roadmap

### Fase 1 — MVP (esta etapa)
- Landing single-page con todas las secciones descritas.
- Hosting en GitHub Pages.
- Subdominio `*.github.io`.

### Fase 2 — Dominio propio
- Comprar dominio (`vidisa.cl` o similar) en NIC Chile.
- Apuntar al GitHub Pages vía CNAME.
- Activar HTTPS.

### Fase 3 — Crecimiento
- Sección de noticias / blog (cuando haya algo que contar).
- Casos de éxito / testimonios de clientes.
- Galería de la flota (cuando haya más camiones).
- Integración con Google Business para reseñas.
- Formulario de cotización con backend (Formspree, Netlify Forms o similar).

### Fase 4 — Largo plazo
- Posible portal cliente (tracking de cargas).
- Dashboard interno para gestión de viajes.

---

## 10. Notas Finales para Claude Code

- **No inventes datos.** Si falta información (cifras, nombres de clientes, fotos), déjalo como placeholder claramente marcado o pregúntame.
- **Prioriza claridad sobre creatividad.** Este es un sitio B2B serio, no una marca de moda.
- **Diseño limpio, sin saturar.** Mucho espacio en blanco, jerarquía visual clara.
- **El logo y el rojo `#a60d28` son sagrados.** No alterar tonalidad ni proporciones.
- **Cada sección debe tener un propósito claro** — generar confianza, mostrar capacidad, o llevar al contacto. Si una sección no aporta a uno de esos tres objetivos, eliminarla.
- **Pensar siempre en el usuario móvil primero.** Probablemente un encargado de logística que recibe el link por WhatsApp y lo abre desde el celular.

---

*Documento preparado como brief de contexto. Última actualización: noviembre 2026.*
