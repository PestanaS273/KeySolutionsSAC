import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://keysolutionssac.com'
const SITE_NAME = 'Key Solutions S.A.C'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

export default function SEOHead({
  title,
  description,
  keywords,
  path = '/',
  ogImage = DEFAULT_OG_IMAGE,
  type = 'website',
  structuredData = null,
}) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
  const canonical = `${SITE_URL}${path}`

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_PE" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo */}
      <meta name="geo.region" content="PE-LIM" />
      <meta name="geo.placename" content="Lima, Perú" />
      <meta name="language" content="es" />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}
