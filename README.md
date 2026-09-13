# Key Solutions S.A.C — Sitio web

Sitio corporativo de Key Solutions S.A.C: provisión y distribución de insumos para el sector
financiero (tarjetas PVC bancarias, rollos térmicos, fundas RFID, formularios preimpresos) y
soluciones de software (desarrollo web, software a medida) y KeyERP, nuestro producto, que tiene su
propio sitio en `https://keyerp.keysolutionssac.com` (repositorio `KeyERPWeb`).

**Documentación: [`docs/README.md`](docs/README.md)** — bitácora de cambios, dónde vive cada
contenido, despliegue en cPanel y decisiones de contenido y diseño.

## Stack

- [React 19](https://react.dev) + [Vite](https://vitejs.dev)
- [React Router](https://reactrouter.com) para el ruteo
- [Tailwind CSS](https://tailwindcss.com) para estilos
- [Framer Motion](https://www.framer.com/motion/) para animaciones
- Tipografía Schibsted Grotesk (Google Fonts), compartida con el sitio de KeyERP
- [react-helmet-async](https://github.com/staylor/react-helmet-async) para SEO por página
- [react-hook-form](https://react-hook-form.com) + [Web3Forms](https://web3forms.com) para el formulario de contacto

## Desarrollo local

```bash
npm install
cp .env.example .env   # completar VITE_WEB3FORMS_KEY con una clave de web3forms.com
npm run dev
```

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción
- `npm run preview` — previsualizar el build
- `npm run lint` — ESLint

## Estructura

```
src/
  components/    componentes reutilizables (layout, UI, SEO, formulario de contacto)
  data/          contenido del sitio (productos, software, clientes, trayectoria, blog, empresa)
  pages/         una página por ruta
docs/            documentación del sitio
```
