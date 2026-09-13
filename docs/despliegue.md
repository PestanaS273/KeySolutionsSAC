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

## Verificación antes de subir

- `npm run build` sin errores.
- Abrir `npm run preview` y recorrer portada, Nosotros, Clientes y Contacto en escritorio y en
  390 px de ancho; nada debe desbordar horizontalmente.
- `npm run lint`: los avisos `'motion' is defined but never used` son un falso positivo de la
  regla con JSX y se ignoran; cualquier otro error se corrige.
