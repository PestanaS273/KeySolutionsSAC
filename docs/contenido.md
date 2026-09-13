# Dónde vive cada contenido

Regla: **el contenido está en `src/data/`, las páginas lo pintan.** Para cambiar un texto, un
cliente o un dato de la empresa no hace falta tocar un componente.

## Idiomas — `src/i18n/`

`LangContext.jsx` decide el idioma y expone `t()`; `en.js` es el diccionario español → inglés,
indexado por la frase en español exactamente como está en el código (espacios normalizados).
**Regla**: todo texto visible se escribe en español dentro de `t('…')` y se agrega su traducción a
`en.js`. Lo que falte se muestra en español, nunca rompe. Los datos de `src/data/` se traducen al
pintarlos (`t(item.title)`), así que los ficheros de datos siguen en español.

## Datos de la empresa — `src/data/company.js`

Nombre, RUC, dirección, teléfono, WhatsApp, correo (`contacto@keysolutionssac.com`),
URL de KeyERP (`erpUrl`) y la línea de ACOVI Solutions Bolivia (`bolivia`). Lo leen la barra
superior, el pie, la portada, Contacto y Nosotros.

## Trayectoria, clientes y colaboradores — `src/data/trayectoria.js`

| Export | Qué es | Dónde se ve |
|---|---|---|
| `tracks` | Las tres líneas de trabajo (tarjetas, insumos, software) | Nosotros |
| `installedSystems` | Sistemas instalados en instituciones financieras, **sin nombrar cuál** | Nosotros |
| `clientsBySector` | Instituciones por sector (texto) | Clientes; el total se calcula y aparece en portada y bajo los logos |
| `partners` | Empresas con las que colaboramos (nombre, URL, logo, texto) | Nosotros, Clientes |
| `presence` | Perú y Bolivia: empresa, ciudades, detalle | Nosotros |

**Agregar un cliente sin logo**: sumar el nombre en el sector que corresponda de `clientsBySector`.
**Agregar un cliente con logo**: PNG o SVG en `src/assets/`, importarlo en `src/data/clients.js`
y sumar `{ name, logo }` a `clients`. Los logos se muestran a 40 px de alto en escala de grises
(portada y Nosotros) y en color en Clientes; un PNG de 300 px de ancho alcanza.

## Productos e insumos — `src/data/products.js`

Categorías (portada, catálogo) y productos por categoría (páginas de producto). Imágenes en
`src/assets/`.

## Software y KeyERP — `src/data/software.js`

`softwareServices` (las tres líneas: web, a medida, KeyERP con `external: true`), `erpModules`
(los nueve módulos, mismos nombres y orden que el sitio de KeyERP), `erpCustomization`,
`erpDifferentiators`, `webDevServices`, `webDevStack`, `webDevProcess`, `customSoftwareUseCases`,
`customSoftwareApproach`.

**Si cambia un módulo de KeyERP, se cambia en los dos repositorios**: acá en `erpModules` y en
`KeyERPWeb/src/data/modules.ts`.

## Formulario de contacto — `src/data/contact.js` y `src/components/ui/ContactForm.jsx`

`INTERESTS` es la lista de casillas «Qué le interesa». El formulario es uno solo y se usa en la
portada (`#contacto`) y en `/contacto`. El envío va a Web3Forms con la clave de `.env`
(`VITE_WEB3FORMS_KEY`); ver `despliegue.md`.

## Blog — `src/data/blog.js`

Artículos con `slug`, `title`, `category` y contenido. La portada muestra los tres primeros.

## Páginas — `src/pages/`

| Ruta | Fichero | Notas |
|---|---|---|
| `/` | `Home.jsx` | Hero, catálogo, KeyERP, software, clientes, presencia, contacto, guías |
| `/nosotros` | `Nosotros.jsx` | Todo sale de `trayectoria.js` |
| `/clientes` | `Clientes.jsx` | Logos + sectores + colaboradores |
| `/contacto` | `Contacto.jsx` | Formulario + datos |
| `/key-erp` | `KeyErp.jsx` | Página puente al subdominio; se conserva porque está indexada |
| `/soluciones-empresariales`, `/desarrollo-web`, `/software-a-medida` | | Software |
| `/productos` y las cinco páginas de producto | | Insumos |
| `/blog`, `/blog/:slug` | | |

Las rutas se registran en `src/App.jsx` y, si son públicas, en `public/sitemap.xml`.

## SEO — `src/components/SEOHead.jsx` e `index.html`

Cada página declara título, descripción, palabras clave, ruta canónica y, si aplica, datos
estructurados (`structuredData`). El JSON-LD global de la organización (con ACOVI como
suborganización y KeyERP como producto) está en `index.html`.

## Componentes compartidos — `src/components/`

- `layout/`: `TopBar`, `Navbar` (ítem KeyERP externo), `Footer`.
- `ui/SectionTitle.jsx`: título y subtítulo de sección. **No pinta rótulo pequeño** aunque se le
  pase `label` (ver `decisiones.md`).
- `ui/SoftwareHero.jsx`: cabecera de las páginas de software. Acepta `primaryCta.external`.
- `ui/ClientsCarousel.jsx`: rejilla de logos (el nombre es histórico; ya no es carrusel).
- `ui/SoftwareServiceCard.jsx`: fila de servicio, sin tarjeta ni icono.
- `ui/ContactForm.jsx`: el formulario.
