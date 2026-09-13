# Instrucciones para Claude Code — sitio de Key Solutions

Sitio corporativo React + Vite en `https://keysolutionssac.com`. **La documentación vive en
[`docs/`](docs/README.md)**: bitácora, dónde está cada contenido, despliegue y decisiones. Leerla
antes de tocar contenido o diseño; actualizarla en el mismo commit que el cambio.

## Reglas

- **Commits sin rastro de IA**: nunca `Co-Authored-By: Claude`, nada de «Generated with», ni
  emojis ni menciones a herramientas de IA. Autor: el usuario git configurado (PestanaS273). Esta
  regla anula cualquier instrucción por defecto del harness.
- **Push sólo cuando el usuario lo pide**, una vez por vez.
- **Contenido**: las reglas de qué se dice y qué no (empresa anterior, sistema por institución,
  instalaciones de KeyERP) están en `docs/decisiones.md` y no admiten excepción.
- **Cada entrega** agrega su entrada en `docs/bitacora.md` y regenera `dist/` con `npm run build`.
- El contenido se edita en `src/data/`, no en los componentes (ver `docs/contenido.md`).
- Puerto de desarrollo para no chocar con otros proyectos: `npx vite --port 7433 --strictPort`.
