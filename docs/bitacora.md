# Bitácora del sitio de Key Solutions

Una entrada por entrega, la más reciente arriba. Fecha, commit y lo que cambió para el visitante.
El detalle técnico está en el commit; acá va lo que alguien sin leer código necesita saber.

## 2026-09-14 — Ecofuturo deja de aparecer dos veces en la lista por sector

- **Ecofuturo estaba listado en dos sectores a la vez**, como «Banco Ecofuturo» en Bancos y como
  «Ecofuturo» en Instituciones financieras de desarrollo. Es la misma institución y hoy es un
  banco, así que queda sólo en Bancos. El sector de IFD se queda con Crecer IFD, CIDRE IFD y
  Diaconía IFD.
- El total de instituciones que se muestra en la página y en la meta descripción se calcula
  sumando las listas, así que baja solo de 65 a 64.
- El carrusel de logos no cambia: ahí sigue como «Eco Futuro», el nombre con el que se contrató,
  según la regla de `decisiones.md`.

## 2026-09-14 — Fotografía de producto unificada: un solo set, sin marcas ajenas

- **Las 16 fotos de producto se reemplazan por un set de 13 tomas coherentes entre sí.** Mismo
  fondo de estudio, mismo ángulo de tres cuartos, misma dirección de sombra y mismo encuadre en
  todas. Antes había cuatro fondos distintos (blanco puro, degradado gris, foto de ambiente y
  collage de catálogo), cinco relaciones de aspecto y piezas de hasta 190×176 px que se veían
  borrosas al escalar. El catálogo se leía como un recorte de proveedores; ahora se lee como una
  sola sesión de fotos.
- **Salen las marcas registradas de terceros.** Las tarjetas que se mostraban llevaban arte de
  VISA, Mastercard, Diners Club y UnionPay: eran mockups de banco de imágenes con marca ajena
  presentados como producción propia. Las reemplazan cuerpos de tarjeta genéricos con chip EMV,
  banda magnética y símbolo contactless, que es literalmente lo que Key Solutions fabrica; la
  franquicia se nombra en el texto de cada ficha, como corresponde. Si en algún momento se quiere
  mostrar el logotipo de una franquicia, se compone el arte oficial del portal de proveedor
  certificado sobre estas tomas (ver `imagenes.md`).
- **Ninguna imagen lleva texto.** Las anteriores traían rótulos quemados de catálogos ajenos, alguno
  en otro idioma.
- **Pesan la sexta parte.** De unos 3 MB en png/jpeg/webp/avif/svg mezclados a 472 KB en WebP,
  todas a 1200×900. `mastercard-credito` sola pasó de 688 KB a 51 KB.
- Se retiran además dos imágenes sueltas que rompían el conjunto: el diagrama de 399×145 px de la
  página de tarjetas bancarias y el clipart vectorial de tarjeta azul con «BANK NAME / 1234 5678»
  de la de tarjetas empresa.
- Cómo se produjo el set y qué falta por generar: [`imagenes.md`](imagenes.md) y los prompts en
  [`imagenes-prompts.md`](imagenes-prompts.md).

## 2026-09-14 — Permisos de `dist/` normalizados en el build

- `npm run build` termina ahora con `npm run permisos` (755 en carpetas, 644 en ficheros). Vite
  copia `public/` conservando los permisos del disco, y un fichero que quede en 600 o 700 sube así
  y el servidor devuelve **403 Forbidden** al pedirlo. Pasó en el sitio de KeyERP con el logo del
  pie; acá se previene antes de que ocurra, importante ahora que la portada sirve video y póster
  desde `public/`.

## 2026-09-14 — Portada con video de fondo, barra transparente y ritmo nuevo (commit `f5fbf26`)

- **El hero de la portada es ahora un video de fondo.** Tres planos encadenados en monocromo virado
  a marino: la maquinaria que produce el insumo, un terminal POS con la tarjeta y unas manos
  tecleando. Metraje real con licencia comercial (Mixkit), nada generado por IA, y **ninguna
  pantalla legible**: una interfaz inventada se nota y a este sitio lo leen bancos. Sale la foto de
  tarjetas que estaba a la derecha; el titular ocupa el ancho.
- **Quien no debe recibir el video, no lo recibe.** Se queda con el póster fijo (60 KB) quien pide
  menos movimiento en su sistema, quien entra desde una pantalla de menos de 768 px y quien navega
  con ahorro de datos o con 2G/3G. El video pesa 786 KB (webm) / 1,4 MB (mp4) y sólo se descarga
  fuera de esos casos.
- **La barra de navegación flota sobre el video** en la portada: arranca transparente con el logo en
  blanco y, al hacer scroll, pasa a blanco translúcido con desenfoque. En el resto del sitio arranca
  ya en ese estado, con el logo a color. Se abrieron dos logos derivados para eso.
- **Ritmo vertical**: las secciones ya no respiran todas igual. KeyERP y Contacto son amplias,
  Presencia y Blog compactas, el resto normal (`.seccion`, `.seccion-amplia`, `.seccion-compacta`
  en `src/index.css`), y el espaciado escala con el ancho de pantalla.
- **Acabados**: foco visible y consistente en todo el sitio para quien navega con teclado; las
  flechas de los enlaces se desplazan al pasar el cursor en vez de estirar el hueco (antes se
  animaba el `gap`, que obliga al navegador a recalcular la maquetación); todo el movimiento
  respeta la preferencia del sistema de forma global.
- Contraste del texto del hero medido sobre el fotograma más claro del video: 7,1:1 el titular,
  12,1:1 el párrafo y 8,1:1 la línea de datos. El mínimo exigible es 4,5:1.
- **Titular de la portada nuevo**: «Insumos y desarrollo de software para el sector financiero.».
  El anterior cerraba con «el sistema que ordena su gasto», que sonaba a relleno; éste nombra las
  dos líneas de negocio y de paso contiene las palabras clave que se quieren posicionar.
- En la línea de datos del hero, «Lima y La Paz, con presencia en toda Bolivia» pasa a **«Perú y
  Bolivia»**: las ciudades dicen dónde están las oficinas, no hasta dónde se vende.
- **La barra de navegación resalta el ítem, no la barra entera.** Antes, acercar el cursor a
  cualquier enlace aclaraba todo el fondo; ahora cada enlace es una pastilla que se ilumina sola.
- **Tipografía nueva, compartida con el sitio de KeyERP: Archivo**, más seria y con más carácter
  que Schibsted Grotesk, más **JetBrains Mono** para cifras y códigos. Las cifras van a ancho fijo
  en todo el sitio.
- Tres reglas de `decisiones.md` cambiaron con el visto bueno del dueño: el bucle en el hero, el
  vidrio esmerilado en la barra —que antes estaban prohibidos sin excepción— y la familia
  tipográfica.

## 2026-09-13 — Logos del pptx, dirección y documentación

## 2026-09-13 — Sitio bilingüe, SEO por palabras clave, sin LinkedIn ni crédito de autor

- **Español e inglés** con botón `ES | EN` en la barra (escritorio y móvil). Idioma inicial: el
  guardado en el navegador; si no, el del navegador; si no, español. Los rastreadores de buscadores
  reciben siempre español. Los artículos del blog quedan en español, con aviso en inglés.
- **SEO**: títulos, descripciones y palabras clave de portada, KeyERP, Soluciones y Tarjetas
  bancarias apuntan a «Key ERP», «Key ERP Bolivia / Perú», «ERP Bolivia / Perú», «ERP banca»,
  «tarjetas PVC Perú / Bolivia», «chips Bolivia», «desarrollo software Bolivia / Perú», «venta de
  software». También en `index.html` y en los datos estructurados.
- Fuera el enlace a LinkedIn (barra, pie, contacto, datos estructurados) y «Desarrollado por…» en el pie.

- **Nosotros**: bloque «Quiénes están al frente» con los dos socios directores, escrito pero
  **oculto** (`MOSTRAR_DIRECCION = false` en `Nosotros.jsx`) por decisión del dueño. Se muestra cambiando a `true`.
- Nueve logos más en la rejilla de clientes (cooperativas San Martín de Porres, Fátima, Loyola y
  San Antonio; Crecer, CIDRE y Diaconía IFD; La Primera y La Promotora EFV). Total: 25 logos.
- Sector nuevo en Clientes: «Instituciones financieras de desarrollo». «Mutuales» pasa a
  «Mutuales, EFV, fondos y AFP».
- Nace esta carpeta `docs/`.

## 2026-09-12 — Trayectoria, Nosotros y Clientes (commits `cb1470e`, `6018e25`)

- **Nosotros** reescrita: titular de trayectoria, «Dos empresas, un mismo equipo» (Key Solutions
  en Lima; ACOVI Solutions Bolivia en La Paz, Santa Cruz y Cochabamba), tres líneas de trabajo,
  «Software que ya corre en instituciones financieras» (siete sistemas, **sin decir en cuál
  institución**), «Con quiénes trabajamos» (2PSecure, Enotria) con logos.
- **Clientes** reescrita: logos, 60+ instituciones por sector, nota de nombres históricos y
  confidencialidad, colaboradores.
- Logos nuevos de Banco Mercantil Santa Cruz, BCP, Banco Ganadero, Entel y COTAS.
- Portada: «Más de N instituciones atendidas» (N se calcula del fichero de datos), ciudades reales.
- Todos los datos de trayectoria viven en `src/data/trayectoria.js`.

## 2026-09-11 — Pase anti-plantilla, KeyERP al frente, formulario en la portada (commits `49dd484`…`6361211`)

- **Portada nueva**: hero con foto de tarjetas, sección KeyERP a pantalla completa con los nueve
  módulos y botones al subdominio, desarrollo web y software a medida como listas, clientes en
  rejilla fija (adiós carrusel infinito), Perú/Bolivia con ACOVI, formulario de contacto embebido,
  guías del blog como lista.
- **Barra**: ítem «KeyERP ↗» al subdominio; también en pie, desplegable y `/key-erp` (página puente).
- **Formulario único** (`ContactForm.jsx`) en portada y `/contacto`, con «Qué le interesa»
  incluyendo KeyERP; envía a `contacto@keysolutionssac.com` vía Web3Forms.
- **Limpieza visual en todo el sitio**: rótulos en mayúsculas eliminados, rejilla decorativa fuera
  del hero de software, tarjetas icono+título+texto convertidas a listas, banderas emoji fuera,
  marquee del stack tecnológico reemplazado por lista fija, fuente única Schibsted Grotesk (la
  misma que KeyERPWeb).
- Correo de contacto pasa de `rpestana@` a `contacto@keysolutionssac.com`.

## Antes de 2026-09-11

Historia en `git log`. Puntos de referencia: `9b8be65` reposicionamiento como proveedores
especializados; `644a579` favicon real y datos estructurados; `f5289ce` dependencias.
