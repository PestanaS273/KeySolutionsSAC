# Bitácora del sitio de Key Solutions

Una entrada por entrega, la más reciente arriba. Fecha, commit y lo que cambió para el visitante.
El detalle técnico está en el commit; acá va lo que alguien sin leer código necesita saber.

## 2026-09-13 — Logos del pptx, dirección y documentación

- **Nosotros**: bloque «Quiénes están al frente» con los dos socios directores (nombre, área y una
  línea), sin fotos ni enlaces a perfiles personales.
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
