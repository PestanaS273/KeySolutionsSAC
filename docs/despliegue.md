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

**Los logos de la barra** (`src/assets/logoKey-blanco.png` y `logoKey-transparente.png`) se
derivaron del original `logoKey.png`, que viene con fondo blanco opaco. El «KS» está calado sobre
el bloque cian, así que el bloque se redibuja y el calado se pinta encima usando el canal rojo del
original como máscara. Si cambia el logo, hay que rehacer los dos derivados.

## Verificación antes de subir

- `npm run build` sin errores.
- Abrir `npm run preview` y recorrer portada, Nosotros, Clientes y Contacto en escritorio y en
  390 px de ancho; nada debe desbordar horizontalmente.
- `npm run lint`: los avisos `'motion' is defined but never used` son un falso positivo de la
  regla con JSX y se ignoran; cualquier otro error se corrige.
