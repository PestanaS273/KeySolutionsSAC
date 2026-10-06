# Despliegue y operación

## Build

```bash
npm install
cp .env.example .env    # VITE_WEB3FORMS_KEY: la clave de web3forms.com para contacto@keysolutionssac.com
npm run build           # genera dist/
```

`dist/` incluye `.htaccess` (redirección a HTTPS, rutas de la SPA, caché, cabeceras), `robots.txt`
y `sitemap.xml`, copiados desde `public/`.

## Subir a cPanel (Hosting Perú)

1. Administrador de archivos → `public_html/`. Activar «Mostrar archivos ocultos» para ver y
   subir el `.htaccess`.
2. Borrar el contenido anterior (los ficheros de `assets/` llevan hash; los viejos quedan
   huérfanos si no se borran).
3. Subir **el contenido** de `dist/`, no la carpeta.
4. Probar: `https://keysolutionssac.com/`, `/nosotros`, `/clientes`, `/robots.txt`,
   `/sitemap.xml`, y enviar una prueba del formulario.

El subdominio `keyerp.keysolutionssac.com` es otra carpeta (`public_html/keyerp`) y otro
repositorio (`KeyERPWeb`); tiene su propia guía.

## Formulario (Web3Forms)

- La clave (`VITE_WEB3FORMS_KEY`) se registra en web3forms.com y decide a qué correo llega el
  mensaje: hoy, `contacto@keysolutionssac.com`.
- La clave se embebe en el bundle al hacer `build`; cambiarla exige rebuild y resubida.
- En el panel de Web3Forms, «dominios permitidos» debe incluir `keysolutionssac.com`. El
  subdominio de KeyERP usa **otra clave**.
- Desde `localhost` el envío puede fallar por CORS o protección anti-bot de Web3Forms; se prueba en
  producción.

## Google

- Sitemap: `public/sitemap.xml`. Sumar una entrada al crear una ruta pública nueva y actualizar
  `lastmod`.
- Search Console: propiedad `keysolutionssac.com`. Tras un cambio grande, Inspección de URL →
  «Solicitar indexación» en las páginas que cambiaron. Si la propiedad es de dominio (verificada
  por DNS), cubre también el subdominio; si es de prefijo de URL, el subdominio necesita su
  propia propiedad.

## Prerender (HTML ya armado por página)

- `npm run build` = `vite build` + `node scripts/prerender.mjs` + permisos. El prerender abre cada
  ruta de `public/sitemap.xml` en un navegador real y guarda `dist/<ruta>/index.html` con el
  contenido completo: Google, los asistentes de IA (que casi nunca ejecutan JavaScript) y las
  previsualizaciones de WhatsApp o LinkedIn leen la página entera. Termina con una línea por ruta:
  `t1 h1 oculto:0` es lo correcto (un título, un h1, ningún texto con opacidad 0).
- **Una ruta pública nueva entra al sitemap y con eso se prerenderiza.**
- Necesita Playwright (`@playwright/test`, ya en devDependencies) y su navegador:
  `npx playwright install chromium` la primera vez en un equipo nuevo.
- `.htaccess`: `DirectorySlash Off` y una regla que sirve `/ruta/index.html` para `/ruta`, sin la
  redirección 301 a `/ruta/` que Apache haría por defecto (la canónica va sin barra). Probado con
  Apache 2.4 local.
- Al arrancar, `src/main.jsx` borra los metadatos marcados `data-prerender` antes de que la app
  vuelva a pintarlos, para que no queden duplicados.

## Analítica (Google Analytics 4)

- ID de medición de este sitio: **`G-FQRJF0NJHM`** (propiedad «Key Solutions», flujo web
  `keysolutionssac.com`). Va en `.env` como `VITE_GA_ID`; `.env` no se sube a git, así que en un
  equipo nuevo hay que volver a ponerlo. No se pega el fragmento `gtag.js` que da Google en
  `index.html`: el código de `src/lib/analytics.js` lo carga sólo después del consentimiento.
- `VITE_GA_ID` se lee en `npm run build`. Se embebe en el build: cambiarlo exige volver a construir y subir.
- Sin consentimiento no se carga nada. Aceptar y rechazar están al mismo nivel en el aviso, y la
  elección se cambia desde `/privacidad`.
- Las vistas de página de la navegación interna, los clics a otros sitios (WhatsApp incluido) y el
  scroll los mide GA4 con la medición mejorada, activa por defecto en el flujo web.
- Evento propio: `generate_lead` (formulario de contacto enviado). En GA: Administrar → Eventos →
  marcarlo como **evento clave** para verlo como conversión.

## `llms.txt`

`public/llms.txt`: resumen del sitio con enlaces, pensado para asistentes de IA (formato
propuesto en llmstxt.org). Si cambia una página importante, se actualiza acá.

## Video del hero — `public/video/`

Tres ficheros, servidos tal cual desde `public/` (no pasan por Vite, así conservan su nombre):
`hero.webm` (786 KB), `hero.mp4` (1,4 MB) y `hero-poster.jpg` (60 KB). Quién ve qué está explicado
en `src/components/ui/HeroVideo.jsx` y la regla de contenido, en `docs/decisiones.md`.

**De dónde sale el material.** Tres planos de Mixkit (licencia gratuita para uso comercial, sin
atribución): `17675` maquinaria industrial, `6367` terminal POS con tarjeta y `1808` manos
tecleando. Se descargan de `https://assets.mixkit.co/videos/<id>/<id>-720.mp4` (o `-1080.mp4`
cuando existe). No hay nada generado por IA.

**Cómo se monta.** Hace falta `ffmpeg` (`brew install ffmpeg`). Cada plano se recorta a 4,8 s, se
lleva a 1600×900, se desatura y se vira a marino; los tres se encadenan con fundidos de 0,8 s y el
conjunto entra y sale desde `#091929` para que el bucle no tenga costura:

```sh
W=1600; H=900; SEG=4.8; FADE=0.8
base="scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H},setsar=1,fps=25"
tint="hue=s=0,colorbalance=rs=-0.05:bs=0.14:rm=-0.03:bm=0.07:rh=-0.02:bh=0.04,vignette=PI/4.2,format=yuv420p"
GA="${base},eq=contrast=1.24:brightness=0.035:gamma=1.02,${tint}"   # maquinaria
GB="${base},eq=contrast=1.42:brightness=-0.26:gamma=0.80,${tint}"   # POS (fondo claro, hay que hundirlo)
GC="${base},eq=contrast=1.22:brightness=-0.09:gamma=0.92,${tint}"   # tecleo

ffmpeg -y -ss 8.0 -t $SEG -i 17675.mp4 -ss 3.0 -t $SEG -i 6367.mp4 -ss 2.0 -t $SEG -i 1808.mp4 \
  -filter_complex "[0:v]${GA}[a];[1:v]${GB}[b];[2:v]${GC}[c];\
[a][b]xfade=transition=fade:duration=${FADE}:offset=4.0[ab];\
[ab][c]xfade=transition=fade:duration=${FADE}:offset=8.0[abc];\
[abc]fade=t=in:st=0:d=0.7:c=0x091929,fade=t=out:st=12.1:d=0.7:c=0x091929[out]" \
  -map "[out]" -an -t 12.8 -c:v libx264 -crf 18 -preset slow master.mp4

ffmpeg -y -i master.mp4 -an -c:v libvpx-vp9 -crf 36 -b:v 0 -row-mt 1 -cpu-used 2 -pix_fmt yuv420p public/video/hero.webm
ffmpeg -y -i master.mp4 -an -c:v libx264 -crf 27 -preset slow -profile:v main -pix_fmt yuv420p -movflags +faststart public/video/hero.mp4
ffmpeg -y -ss 2.2 -i master.mp4 -frames:v 1 -q:v 6 public/video/hero-poster.jpg
```

**Si se cambia un plano**, los tres tienen que quedar con el mismo brillo medio o el corte
parpadea. Se mide así, y los tres valores no deberían separarse más de 3 puntos:

```sh
for t in 2 6.5 11; do ffmpeg -v error -ss $t -t 0.5 -i master.mp4 \
  -vf "signalstats,metadata=print:key=lavfi.signalstats.YAVG:file=-" -f null - 2>/dev/null \
  | awk -F= '/YAVG/{s+=$2;n++} END{printf "%s\n", s/n}'; done
```

**Los logos** salen de los originales oficiales en
`Desktop/KeyERP-presentacion/Presentacion Empresa/Logos Empresa/` (`Logo completo.png`, 2048×768, y
`Logo solo.png`, 1254×1254, ambos con transparencia). `logoKey-transparente.webp` es el completo
recortado a 206 px de alto (texto marino, para fondo claro); `logoKey-blanco.webp` es el mismo con el
texto «KEY SOLUTIONS SAC» repintado en blanco conservando el alfa (para el hero, la barra sobre el
video y el pie). Los favicons, `apple-touch-icon.png`, `favicon.svg` y `og-image.png` (1200×630, logo
blanco sobre marino) salen del «Logo solo» y del completo blanco. El logo del pie del sitio de KeyERP
(`KeyERPWeb/public/key-solutions.png`) es el completo blanco a 60 px. Si cambia el logo, se rehacen
todos los derivados en los dos repositorios.

## Permisos de los ficheros

`npm run build` termina con `npm run permisos`, que deja `dist/` en 755 para carpetas y 644 para
ficheros. Vite copia `public/` conservando los permisos del disco, así que un fichero que quedó en
600 o 700 en el equipo sube así y el servidor web —que corre con otro usuario— no puede leerlo: el
navegador recibe un **403 Forbidden**, no un 404, lo cual despista porque el fichero sí está.

Si aparece un 403 en un recurso estático (una imagen, el video del hero, el póster), es esto. En
el servidor se corrige desde el gestor de archivos de cPanel, con «Change Permissions» a 644.

## Verificación antes de subir

- `npm run build` sin errores.
- Abrir `npm run preview` y recorrer portada, Nosotros, Clientes y Contacto en escritorio y en
  390 px de ancho; nada debe desbordar horizontalmente.
- `npm run lint`: los avisos `'motion' is defined but never used` son un falso positivo de la
  regla con JSX y se ignoran; cualquier otro error se corrige.
