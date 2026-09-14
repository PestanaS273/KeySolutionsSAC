import { useEffect, useRef, useState } from 'react'

/*
 * Fondo de video del hero. Tres planos en monocromo virado a marino: la máquina que produce el
 * insumo, el terminal donde se usa la tarjeta y el tecleo en la oficina. No se ve ninguna pantalla
 * legible a propósito (ver docs/decisiones.md): una interfaz inventada delata el montaje y este
 * sitio lo leen bancos.
 *
 * El video es decorativo. Nunca lleva información que no esté también en el texto, así que va con
 * aria-hidden y el bloque no depende de que cargue.
 *
 * Sólo se descarga cuando vale la pena:
 *   - `prefers-reduced-motion: reduce` → se queda el póster fijo.
 *   - pantallas por debajo de 768px → póster fijo (1,3 MB en datos móviles no se justifica).
 *   - `Save-Data` activo o conexión 2g/3g → póster fijo.
 * En todos esos casos el póster ya está pintado como fondo, así que no hay salto ni hueco.
 */

const POSTER = '/video/hero-poster.jpg'

function shouldPlayVideo() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  if (window.matchMedia('(max-width: 767px)').matches) return false
  const conn = navigator.connection
  if (conn?.saveData) return false
  if (conn?.effectiveType && /2g|3g/.test(conn.effectiveType)) return false
  return true
}

export default function HeroVideo() {
  const [play, setPlay] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    // Se decide en el cliente y después del primer pintado: el póster es el LCP y no lo retrasamos.
    const decide = () => setPlay(shouldPlayVideo())
    decide()
    const mq = window.matchMedia('(max-width: 767px)')
    mq.addEventListener('change', decide)
    return () => mq.removeEventListener('change', decide)
  }, [])

  useEffect(() => {
    // Safari en iOS ignora `autoplay` si el elemento se monta después del primer pintado.
    if (play) videoRef.current?.play().catch(() => {})
  }, [play])

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 bg-navy-950 bg-cover bg-center"
      style={{ backgroundImage: `url(${POSTER})` }}
    >
      {play && (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER}
          tabIndex={-1}
        >
          <source src="/video/hero.webm" type="video/webm" />
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  )
}
