import SEOHead from '../components/SEOHead'
import { company } from '../data/company'
import { GA_ID } from '../lib/analytics'
import { useLang } from '../i18n/LangContext'

/*
 * Política de privacidad y cookies. Cubre el formulario de contacto y, si está configurada, la
 * analítica. Texto de referencia: conviene que lo revise un abogado antes de darlo por definitivo.
 */
const UPDATED = '6 de octubre de 2026'

const COOKIES = [
  ['lang', 'Este sitio', 'Recordar el idioma elegido.', 'Hasta que se borre'],
  ['consent', 'Este sitio', 'Recordar si aceptó o rechazó la analítica.', 'Hasta que se borre'],
  ['_ga', 'Google Analytics', 'Distinguir visitantes de forma anónima.', '2 años'],
  ['_ga_…', 'Google Analytics', 'Mantener el estado de la sesión.', '2 años'],
]

export default function Privacidad() {
  const { t } = useLang()
  const h2 = 'mt-12 text-xl font-semibold text-navy-900'
  const p = 'mt-4 leading-relaxed text-gray-700'
  return (
    <>
      <SEOHead
        title={t('Política de privacidad y cookies')}
        description={t('Cómo trata Key Solutions S.A.C. los datos del formulario de contacto y qué cookies usa su sitio web.')}
        path="/privacidad"
      />
      <section className="bg-navy-950 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">{t('Privacidad y cookies')}</h1>
          <p className="mt-5 text-lg text-blue-100/80">
            {t('Última actualización:')} {t(UPDATED)}.
          </p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-semibold text-navy-900">{t('Quién es responsable')}</h2>
          <p className={p}>
            {t(company.name)}, RUC {company.ruc}, {company.address}. {t('En Bolivia actúa a través de')} ACOVI Solutions Bolivia S.R.L., La Paz.{' '}
            {t('Contacto para temas de privacidad:')}{' '}
            <a href={`mailto:${company.email}`} className="font-medium text-brand-blue underline">{company.email}</a>.
          </p>

          <h2 className={h2}>{t('Qué datos recogemos y para qué')}</h2>
          <p className={p}>
            {t('Sólo los que usted escribe en el formulario de contacto: nombre, empresa, correo, teléfono, productos de interés y mensaje. Los usamos para responder su consulta o preparar su cotización, y no los vendemos ni los cedemos a terceros para publicidad.')}
          </p>
          <p className={p}>
            {t('El envío del formulario pasa por Web3Forms, un servicio que nos hace llegar el mensaje por correo. Guardamos la conversación mientras dure la relación comercial y la borramos si usted lo pide.')}
          </p>

          <h2 className={h2}>{t('Cookies y analítica')}</h2>
          <p className={p}>
            {GA_ID
              ? t('Usamos Google Analytics 4 para contar visitas y saber qué páginas se leen, de forma agregada. Sólo se activa si usted lo acepta en el aviso; si lo rechaza, no se carga ningún script de Google ni se crea ninguna cookie de analítica. Google puede tratar esos datos fuera de su país, en servidores de Estados Unidos.')
              : t('Hoy este sitio no usa cookies de analítica ni de publicidad.')}
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="py-2 pr-4 font-medium">{t('Nombre')}</th>
                  <th className="py-2 pr-4 font-medium">{t('De quién')}</th>
                  <th className="py-2 pr-4 font-medium">{t('Para qué')}</th>
                  <th className="py-2 font-medium">{t('Duración')}</th>
                </tr>
              </thead>
              <tbody>
                {COOKIES.filter((c) => GA_ID || !c[0].startsWith('_ga')).map(([n, w, f, d]) => (
                  <tr key={n} className="border-b border-gray-100 text-gray-700">
                    <td className="py-2.5 pr-4 font-mono text-[0.85rem] text-navy-900">{n}</td>
                    <td className="py-2.5 pr-4">{t(w)}</td>
                    <td className="py-2.5 pr-4">{t(f)}</td>
                    <td className="py-2.5">{t(d)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            {t('«lang» y «consent» se guardan en el almacenamiento del navegador, no se envían a ningún servidor y son necesarias para que el sitio recuerde sus elecciones.')}
          </p>
          {GA_ID && (
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('open-cookie-banner'))}
              className="mt-6 h-10 rounded-lg border border-gray-300 px-4 text-sm font-semibold text-navy-900 hover:bg-gray-50"
            >
              {t('Cambiar mi elección de cookies')}
            </button>
          )}

          <h2 className={h2}>{t('Sus derechos')}</h2>
          <p className={p}>
            {t('Puede pedir acceso a sus datos, su rectificación, su cancelación o oponerse a su uso escribiendo a')}{' '}
            <a href={`mailto:${company.email}`} className="font-medium text-brand-blue underline">{company.email}</a>.{' '}
            {t('En Perú, estos derechos los reconoce la Ley N.° 29733 de Protección de Datos Personales y su reglamento; si no queda conforme con nuestra respuesta, puede acudir a la Autoridad Nacional de Protección de Datos Personales. En Bolivia, la Constitución Política del Estado protege la intimidad y la privacidad de las personas.')}
          </p>

          <h2 className={h2}>{t('Cambios')}</h2>
          <p className={p}>{t('Si esta política cambia, lo indicaremos con una nueva fecha de actualización en esta página.')}</p>
        </div>
      </section>
    </>
  )
}
