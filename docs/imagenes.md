# Set de imágenes de producto — guía de producción

Objetivo: reemplazar las 16 imágenes actuales de `src/assets/` por un set **consistente**
(mismo ángulo, misma luz, mismo fondo, mismo encuadre), **profesional** y **libre de derechos**,
sin que se note generado por IA y sin marcas registradas de terceros.

## 1. Por qué el set actual falla

| Problema | Archivos |
|---|---|
| Fondos distintos: blanco puro, degradado gris, foto de ambiente, collage | todas |
| Collages de catálogo ajeno con texto quemado | `rollos.png`, `varias-tarjetas.png` |
| Resolución insuficiente | `dinner.jpeg` 242×154, `tarjeta-hotel.png` 190×176, `rollo-autocopiante.jpeg` 284×238 |
| Relaciones de aspecto dispares | 780×420, 190×176, 800×800, 306×295, 1280×720 |
| **Marcas registradas de terceros en primer plano** | `visa-debito`, `mastercard-credito`, `dinner`, `sobre-rfid` (UnionPay) |
| Formatos y pesos mezclados | png/jpeg/webp/avif/svg, hasta 888 KB |

**Regla que no se rompe:** ninguna imagen nueva lleva arte de VISA, Mastercard, Diners Club ni
UnionPay. Key Solutions produce cuerpos de tarjeta personalizados según la especificación del
banco; la franquicia se nombra en el texto, nunca se dibuja su logotipo.

## 2. Qué herramienta para qué

| Herramienta | Sirve para | No sirve para |
|---|---|---|
| **Nano Banana Pro** (Gemini) | Producción real del set. Acepta hasta 14 imágenes de referencia y mantiene «misma escena, misma luz, cambia el producto» | — |
| **DALL·E 3** (ChatGPT) | Explorar el look inicial, una sola imagen | Consistencia entre imágenes (no acepta referencia) y cualquier texto: lo escribe mal siempre |
| **Foto real + Nano Banana** | **La mejor opción.** Ver §5 | — |

DALL·E 3 no puede darte un set constante porque cada generación parte de cero. Úsalo sólo para
decidir el look; produce con Nano Banana.

## 3. El bloque base (la clave de la consistencia)

Este bloque va **idéntico, palabra por palabra, en las 16 imágenes**. Sólo cambia la línea SUBJECT.
Va en inglés porque los modelos responden con mucha más precisión fotográfica.

```
Professional studio product photograph. Shot on a full-frame DSLR with a 100mm macro lens at
f/8, ISO 100, tripod-mounted, camera raised to a 30-degree elevated three-quarter angle.
Lighting: one large softbox at 45 degrees camera-left as the key light, a white bounce card
camera-right for fill, and a narrow strip light behind for a subtle rim highlight. Neutral
5500K white balance. Background: seamless, very light cool-grey studio sweep, colour #EEF2F6,
with a smooth gradient falling off slightly darker toward the top corners. The object rests on
a matte white acrylic surface with a soft, realistic contact shadow falling to camera-right.
Object centred, occupying about 70% of the frame width, with generous even margins. Sharp focus
across the whole product, gentle depth-of-field falloff in the background only. Realistic
material texture, natural specular highlights, visible fine surface detail. Straight commercial
catalogue photography, not stylised. 4:3 aspect ratio, 2000x1500 px.

DO NOT INCLUDE: any text, letters, numbers, logos, brand marks, watermarks or signage of any
kind; VISA, Mastercard, Diners Club or UnionPay artwork; hands, people, faces; props, plants,
coffee cups, desks or office scenes; floating or levitating objects; mirror-glossy floors;
rainbow, neon or coloured gel lighting; cartoon, 3D-render, CGI or illustration look; HDR or
over-retouched look; tilted horizon; vignette; border; watermark.
```

### Por qué cada restricción

- **`no text, letters, numbers`** — es el delator número uno de IA. Ninguna imagen del set lleva
  texto generado. Si una tarjeta necesita numeración o un recibo necesita líneas impresas, se
  añade después en diseño, no se le pide al modelo.
- **`no hands, people, props`** — una mano sosteniendo el producto cambia la escala y el encuadre
  en cada toma: es lo que hace que el set actual se vea disparejo.
- **`no HDR, not stylised`** — el «look IA» es contraste exagerado, brillo plástico y simetría
  perfecta. Pedir fotografía de catálogo recta lo desactiva.
- **Lente, diafragma, altura de cámara y temperatura de color fijos** — esto es lo que hace que
  16 imágenes parezcan de la misma sesión.

## 4. Las 16 líneas SUBJECT

Pegá el bloque base y reemplazá `SUBJECT:` por la línea correspondiente.

### Tarjetas

1. **`varias-tarjetas`** — portada tarjetas bancarias
   `SUBJECT: A loose fan of six blank white PVC plastic cards, standard CR80 credit-card size, overlapping in a staggered arc. Each card shows a different technology detail: one with a gold contact EMV chip, one with a black magnetic stripe across the upper back, one plain white, one with a faint embossed blank panel, one slightly translucent white. Matte-laminate finish with fine brushed texture catching the key light. Cards are completely blank with no printing whatsoever.`

2. **`visa-debito`** — tarjeta bancaria débito/crédito
   `SUBJECT: A single blank PVC bank card, CR80 size, deep cobalt blue with a subtle matte finish, lying flat and angled slightly. It has a gold contact EMV chip in the standard position, a small contactless radio-wave arc symbol at the upper right, and a black magnetic stripe visible along the top edge of the card's raised rear. Surface completely free of any printing, numbers or logos.`

3. **`mastercard-credito`** — tarjeta crédito premium oscura
   `SUBJECT: A single blank PVC bank card, CR80 size, charcoal graphite with a soft satin finish and a faint diagonal gradient. Gold contact EMV chip, small contactless radio-wave arc symbol at the upper right, embossed blank raised panel across the lower third catching a sliver of light. No printing, numbers or logos anywhere.`

4. **`dinner`** — tarjeta premium metálica
   `SUBJECT: A single blank premium bank card, CR80 size, brushed silver metallic finish with fine concentric brushing visible under the key light. Gold contact EMV chip, small contactless radio-wave arc symbol. Slightly warmer reflections than a plastic card. Completely blank, no printing, numbers or logos.`

5. **`tarjeta-identificacion`** — carnet corporativo
   `SUBJECT: A blank white PVC identification card in portrait orientation, CR80 size, with a punched slot at the top edge and a thin translucent plastic strap clip attached. A blank rectangular grey placeholder panel where a photograph would sit, and a blank horizontal barcode strip rendered as a smooth grey band with no readable lines. No text or logos.`

6. **`tarjeta-hotel`** y 7. **`tarjeta-pvc-hotel`** — llave de hotel
   `SUBJECT: Two blank white PVC hotel key cards, CR80 size, one lying flat and one leaning against it at a slight angle. Glossy white laminate. The leaning card shows a dark brown magnetic stripe running along its back edge. Both completely blank, no printing, no text, no logos.`

### Fundas RFID

8. **`sobre-rfid`** — portada fundas RFID
   `SUBJECT: Three blank RFID-blocking card sleeves, made of matte silver aluminium-laminated paper, credit-card sized with a thumb-notch cutout on the front face. Arranged overlapping in a staggered row. Slight natural creasing and fibre texture in the aluminium laminate. Completely blank, no printing or symbols.`

9. **`un-sobre`** — funda individual
   `SUBJECT: A single blank RFID-blocking card sleeve in matte silver aluminium-laminated paper, credit-card sized with a thumb-notch cutout, lying at a slight angle with one corner lifted to show the sleeve is open at the top. Fine paper fibre and foil texture. Completely blank.`

10. **`sobrerfid-portada`** — funda personalizada
    `SUBJECT: Two blank RFID-blocking card sleeves in smooth white coated paper with a satin finish, credit-card sized with thumb-notch cutouts, one flat and one standing slightly propped. Clean white printable surface with no printing on it at all.`

### Rollos

11. **`rollos`** — portada rollos
    `SUBJECT: A tight group of four blank thermal paper rolls of slightly different diameters, standing upright on their ends, arranged in a loose cluster. Crisp white thermal paper with visible edge texture and tightly wound layers. One roll has a short length of blank paper tail unspooling and curling softly onto the surface. No printing on the paper.`

12. **`rollos80`** — rollo 80×80
    `SUBJECT: A single blank thermal paper roll, 80mm wide and 80mm in diameter, standing upright with a short blank paper tail unspooling from the top and curling forward. Crisp white thermal paper, tightly wound layers clearly visible on the flat top face, slight natural fibre texture on the cut edge. Paper completely blank.`

13. **`rollo-autocopiante`** — rollo autocopiante
    `SUBJECT: A single three-ply carbonless paper roll standing upright, the three plies clearly visible as distinct layers in white, pale canary yellow and pale pink. A short tail of the three plies fans out from the roll, slightly separated so all three colours are visible. Soft uncoated paper texture. Completely blank, no printing.`

### Sobres y formularios

14. **`formatos-preimpresos`** — formas continuas
    `SUBJECT: A short stack of blank continuous-feed computer paper, fan-folded in an accordion with the folds clearly visible at the sides, and the detachable tractor-feed strips with evenly punched round sprocket holes along both long edges. Plies in white and pale canary yellow alternating. Slightly loose fan so the accordion depth reads clearly. Completely blank, no printed lines, boxes or text.`

15. **`sobre-ventana`** — sobre con ventana
    `SUBJECT: Two blank white business envelopes, DL size, one lying flat face-up and one leaning against it at a slight angle. The flat envelope has a rectangular transparent glassine address window in the lower left, showing a plain pale grey blank interior behind it. Smooth uncoated white paper with a faint natural texture. No printing, no text, no logos, no stamps.`

16. **`pinmailer`** — PIN mailer de seguridad
    `SUBJECT: Two blank security PIN mailer forms, the sealed multi-layer carbonless type with detachable tractor-feed sprocket-hole strips along both long edges, one lying flat and one fanned slightly on top of it. Matte white paper with a visible dark opaque security tint layer showing through the edge of the sealed flap. A perforated tear line runs across the form. Completely blank with no printed text, numbers or barcodes.`

## 5. El método que realmente evita el «look IA»

Generar de cero siempre deja un tufillo sintético. El camino de mejor resultado, y tenés el
producto físico en la mano:

1. **Fotografiá el producto real** con el celular sobre una hoja blanca, luz de ventana, sin
   flash. No importa que la foto sea mediocre: importa la geometría y el material reales.
2. **Subí esa foto a Nano Banana Pro como referencia** y pedí:
   `Keep this exact product, its exact shape, proportions and material. Do not redesign it.
   Relight and recompose it into the following scene:` + el bloque base + `SUBJECT: the product
   in the reference image.`
3. El resultado tiene la geometría real de tu producto y la luz del estudio. No se nota IA porque
   el objeto **no** es inventado.

### Cadena de consistencia (para las que sí generes de cero)

1. Generá primero **una sola** imagen — recomiendo `rollos80`, que es la más simple — e iterá
   hasta que quede impecable. Esa es tu **imagen madre**.
2. Para cada una de las 15 restantes, adjuntá la imagen madre como referencia y pedí:
   `Match the lighting, background, camera angle, shadow direction and colour temperature of the
   reference image exactly. Same scene, same studio setup, different product.` + `SUBJECT: …`
3. Nunca abras un hilo nuevo a mitad del set: el contexto es lo que sostiene la coherencia.
4. Cada 4–5 imágenes, poné las generadas lado a lado y verificá que la sombra caiga en la misma
   dirección y que el gris de fondo sea el mismo. Si una deriva, regenerá esa, no todo el set.

## 6. Banco de imágenes, en paralelo

Verdad incómoda: **el stock no te resuelve el set completo.**

| Producto | Disponibilidad en stock |
|---|---|
| Tarjetas PVC, rollos térmicos, sobre con ventana | Abundante y de buena calidad |
| Formas continuas / papel autocopiante | Escaso: ~135–145 resultados en Adobe Stock, sin series coherentes |
| PIN mailer de seguridad | Prácticamente inexistente |
| Funda de bloqueo RFID | Escaso y casi todo con manos y fondos de ambiente |

Si comprás por producto vas a terminar exactamente donde estás hoy: 16 fotos de 16 sesiones
distintas.

**El truco para que el stock sea constante:** no busques por producto, buscá por **fotógrafo**.
Encontrá una imagen que te guste, entrá al portafolio de ese colaborador y comprá ahí el resto.
Un mismo fotógrafo usa el mismo fondo y la misma luz en toda su serie. En Adobe Stock además
funcionan «Find similar» y «More from this series».

**Recomendación de plataforma:** Adobe Stock, licencia estándar, plan de 10 imágenes/mes (~USD 30).
Cubre uso web comercial sin atribución. iStock por créditos es la alternativa.

**Evitá Freepik en su nivel gratuito:** exige atribución y es precisamente el look de plantilla
libre que no querés.

### Plan híbrido (el que yo tomaría)

- Tarjetas, rollos y sobre con ventana → **stock de un solo fotógrafo**, que es donde hay oferta.
- Formas continuas, PIN mailer y fundas RFID → **foto real tuya + Nano Banana** (§5), que es donde
  el stock no llega y donde además tenés el producto.
- Todo pasa después por la normalización técnica de §7, que es lo que termina de igualarlas.

## 6b. Estado del set (2026-09-14)

**Integradas: 13 tomas**, todas WebP 1200×900, 472 KB en total.

| Archivo | Dónde se usa |
|---|---|
| `varias-tarjetas.webp` | portada Tarjetas Bancarias · imagen de especificaciones en `TarjetasBanca.jsx` |
| `visa-debito.webp` | ficha VISA Débito / Crédito |
| `mastercard-credito.webp` | ficha Mastercard Débito / Crédito |
| `dinner.webp` | ficha Diners Club |
| `tarjeta-identificacion.webp` | ficha Tarjeta de Identificación / Acceso |
| `tarjeta-pvc.webp` | portada Tarjetas Empresa · ficha Tarjeta Llave de Hotel · imagen de sectores en `TarjetasEmpresa.jsx` |
| `sobre-rfid.webp` | portada Fundas RFID · ficha Funda de Bloqueo RFID Individual |
| `rfid-portada.webp` | ficha Funda RFID Personalizada (funda blanca imprimible) |
| `rollos.webp` | portada Rollos Térmicos · ficha Rollo Térmico 80×80 |
| `rollo-autocopiante.webp` | ficha Rollo Autocopiante |
| `formatos-preimpresos.webp` | portada Sobres y Formularios · ficha Formas Continuas |
| `sobre-ventana.webp` | ficha Sobre con Ventana |
| `pinmailer.webp` | ficha PIN Mailer de Seguridad |

### Qué falta generar (opcional, ninguna es urgente)

Ninguna página repite hoy una foto dentro de sí misma. Lo que queda es reutilización entre
portada y ficha de detalle, que se nota poco pero se puede pulir:

1. **Rollo térmico 80×80 individual** — prompt **#12**. Hoy la ficha de detalle reusa la foto de
   grupo de la portada. Es la más rentable de las tres.
2. **Tarjeta llave de hotel** — prompt **#7**, la versión de una sola tarjeta apoyada mostrando la
   banda. `tarjeta-pvc.webp` carga hoy con tres usos distintos.
3. **Formas continuas en segundo encuadre** — prompt **#14** variando a un plano más cerrado del
   acordeón, para separar portada de ficha.
4. **Funda RFID plateada individual** — prompt **#9**, una sola funda de aluminio. Hoy la ficha
   «Individual» reusa la toma de tres de la portada.

## 7. Normalización técnica (al integrarlas al sitio)

Independiente del origen, antes de entrar a `src/assets/`:

- **Relación de aspecto 4:3** en todas, sin excepción.
- **2000×1500 px** de origen; exportar a **1200×900** para el sitio y **600×450** para `srcset`.
- **WebP calidad 82**, objetivo por debajo de 120 KB.
- **Mismo fondo** `#EEF2F6` y mismo margen interior en todas.
- Nombres en kebab-case coherentes con `src/data/products.js`.

Cuando tengas el set, lo integro yo: conversión, `srcset`, actualización de `src/data/products.js`,
`alt` en español dentro de `t('…')` con su traducción en `src/i18n/en.js`, y entrada en
`docs/bitacora.md`.
