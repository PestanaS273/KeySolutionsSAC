# Decisiones de contenido y diseño

Reglas que se cumplen en todo el sitio. Cada una con su motivo: sin motivo no es regla.

## Contenido

- **No se menciona la empresa anterior en Bolivia** (nombre, NIT, matrícula, representante,
  oficinas) ni las representaciones comerciales antiguas. La trayectoria se cuenta como trayectoria
  del equipo; las empresas vigentes son Key Solutions S.A.C. (Perú) y ACOVI Solutions Bolivia
  S.R.L. (Bolivia). Decisión del dueño, 2026-09-12.
- **No se dice qué sistema se instaló en qué institución.** Se listan los sistemas (qué hacen) y,
  aparte, las instituciones (por sector). Cruzarlos es información del cliente, no nuestra.
  Decisión del dueño, 2026-09-13.
- **La dirección (los dos socios) no se muestra por ahora.** El bloque existe en Nosotros, en el
  folleto y en el deck, oculto; se activa cuando el dueño lo decida. Sin fotos ni perfiles personales.
- **No se menciona si KeyERP tiene o no instalaciones.** Se describe el producto y quién está
  detrás.
- **Los clientes se nombran con el nombre con el que se contrató**, aunque hayan cambiado o se
  hayan integrado; la página lo aclara en una nota.
- **Tecnologías internas fuera del sitio de KeyERP**; en este sitio, el stack de desarrollo web
  (`webDevStack`) sí se muestra porque es un servicio que se vende.
- Tono: tercera persona formal («su empresa», «cuéntenos»), frases cortas, cifras sólo cuando
  cambian una decisión. Sin superlativos sin respaldo.

## Idioma y SEO

- **El español es el idioma que se indexa.** Las URLs son las mismas en los dos idiomas; el inglés es
  un cambio en el navegador del visitante. Por eso los rastreadores reciben siempre español y las
  palabras clave objetivo están en español. Si algún día hace falta posicionar en inglés, la salida
  es `/en/…` con `hreflang`, no este conmutador.
- **Sin enlaces a perfiles personales** (LinkedIn) ni crédito de autor en el pie: el sitio habla de
  la empresa.
- Palabras clave objetivo, que aparecen en títulos, descripciones y texto: Key ERP / KeyERP, Key ERP
  Bolivia, Key ERP Perú, ERP Bolivia, ERP Perú, ERP banca, tarjetas PVC Perú, tarjetas PVC Bolivia,
  chips Bolivia, desarrollo software Bolivia / Perú, venta de software.

## Diseño

- **Sin rótulos pequeños en mayúsculas sobre los títulos** («NUESTROS CLIENTES», «¿POR QUÉ
  ELEGIRNOS?»). Era ruido repetido en cada sección; `SectionTitle` ya no los pinta.
- **Sin carruseles infinitos** (logos, stack). Una rejilla fija se lee; un marquee no.
- **Sin tarjetas icono + título + texto en rejilla** como recurso por defecto. Los servicios,
  razones y sistemas van como listas o filas con divisor.
- **Sin texto con degradado, sin vidrio esmerilado decorativo, sin contadores animados en el
  hero, sin banderas emoji.**
- **Una sola familia tipográfica, Schibsted Grotesk**, compartida con el sitio de KeyERP para que
  los dos se lean de la misma casa.
- Colores: marino (`navy-900/950`) para hero, KeyERP y pie; blanco y `#F8FAFC` alternados en el
  medio; `brand-blue` sólo para acciones y enlaces. El ámbar quedó fuera de la portada.
- Movimiento: entradas cortas al hacer scroll (`AnimatedSection`), nada que se mueva solo en
  bucle.

## Vínculo con KeyERP

- Todo enlace a KeyERP va a `company.erpUrl` (`https://keyerp.keysolutionssac.com`), con icono de
  flecha externa. La página `/key-erp` se mantiene como puente porque está indexada.
- Los nueve módulos se nombran igual en los dos sitios; si cambia uno, se cambian los dos
  ficheros de datos.
