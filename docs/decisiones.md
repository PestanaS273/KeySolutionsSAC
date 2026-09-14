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
- **Sin texto con degradado, sin contadores animados en el hero, sin banderas emoji.**
- **El vidrio esmerilado sólo como estado, nunca como decoración.** La barra de navegación lo usa
  al hacer scroll (`bg-white/85` + `backdrop-blur-xl`) porque ahí cumple una función: la barra flota
  sobre el video del hero y tiene que separarse del fondo sin taparlo. Fuera de ese caso —tarjetas,
  paneles, cajas de texto— sigue prohibido. Regla revisada por el dueño, 2026-09-14; antes estaba
  prohibido en todas partes.
- Tipografía: **Archivo** para todo el texto (titulares en 700 con tracking ceñido; texto en
  400/500) y **JetBrains Mono** reservada a códigos e identificadores. La mono no es decoración: un código
  se compara carácter a carácter y a ancho fijo se lee mejor. Las cifras van en Archivo con
  variante tabular, así que las columnas cuadran igual. Hoy el uso vivo está en el sitio de KeyERP;
  acá la familia queda declarada para cuando haga falta. Compartida con el sitio de KeyERP, que cambió
  a la vez, para que los dos se lean de la misma casa. Sustituye a Schibsted Grotesk desde
  2026-09-14, por decisión del dueño: buscaba algo más serio y menos genérico. Si cambia en un
  sitio, cambia en los dos.
- Colores: marino (`navy-900/950`) para hero, KeyERP y pie; blanco y `#F8FAFC` alternados en el
  medio; `brand-blue` sólo para acciones y enlaces. El ámbar quedó fuera de la portada.
- Movimiento: entradas cortas al hacer scroll (`AnimatedSection`), nada que se mueva solo en
  bucle **salvo el video de fondo del hero de la portada**. Regla revisada por el dueño,
  2026-09-14; antes no había ninguna excepción. `MotionConfig reducedMotion="user"` en `App.jsx`
  hace que todo el movimiento respete la preferencia del sistema.
- **El video del hero no muestra ninguna pantalla legible.** Ni la nuestra ni una inventada: una
  interfaz falsa o generada se nota, y a este sitio lo leen bancos. El video es atmósfera —la
  máquina que produce el insumo, el terminal donde se usa la tarjeta, el tecleo en la oficina— y
  todo lo que hay que decir está en el texto que va encima. Si algún día se quiere enseñar KeyERP
  funcionando, va como grabación de pantalla real en una sección de producto, nunca en el hero.
- **El material del hero es metraje real de banco de imágenes con licencia comercial**
  (Mixkit), no generado por IA, graduado a monocromo virado a marino para que entre en la paleta.
  El montaje y los ajustes están en `docs/despliegue.md`.
- El hero se mide en carga, no sólo en estética: el póster pesa 60 KB y es lo que ve quien pide
  menos movimiento, quien entra desde el móvil y quien navega con `Save-Data` o con 2G/3G. El video
  (786 KB webm / 1,4 MB mp4) sólo se descarga fuera de esos casos.

## Vínculo con KeyERP

- Todo enlace a KeyERP va a `company.erpUrl` (`https://keyerp.keysolutionssac.com`), con icono de
  flecha externa. La página `/key-erp` se mantiene como puente porque está indexada.
- Los nueve módulos se nombran igual en los dos sitios; si cambia uno, se cambian los dos
  ficheros de datos.
