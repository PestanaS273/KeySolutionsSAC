import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react'
import logoKeyColor from '../../assets/logoKey-transparente.png'
import logoKeyBlanco from '../../assets/logoKey-blanco.png'
import { company } from '../../data/company'
import LangToggle from '../ui/LangToggle'
import { useLang } from '../../i18n/LangContext'

const products = [
  { label: 'Tarjetas PVC Bancarias', href: '/tarjetas-bancarias' },
  { label: 'Tarjetas Empresa', href: '/tarjetas-empresa' },
  { label: 'Fundas RFID', href: '/fundas-rfid' },
  { label: 'Rollos Térmicos', href: '/rollos-termicos' },
  { label: 'Sobres y Formularios', href: '/sobres-preimpresos' },
]

const software = [
  { label: 'Desarrollo Web', href: '/desarrollo-web' },
  { label: 'Software a Medida', href: '/software-a-medida' },
]

export default function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [softwareOpen, setSoftwareOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
    setSoftwareOpen(false)
  }, [pathname])

  /* Sólo la portada tiene un hero con video detrás: ahí la barra arranca transparente y se vuelve
     blanca translúcida al hacer scroll. En el resto del sitio arranca ya en ese estado. */
  const isHome = pathname === '/'
  const overlay = isHome && !scrolled && !mobileOpen

  /* Cada ítem es una pastilla que se resalta sola al pasar el cursor. La barra entera no cambia:
     que todo el fondo se aclare por acercarse a un enlace era desproporcionado. */
  const navLink =
    'px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
    (overlay ? 'focus-visible:ring-white focus-visible:ring-offset-navy-950' : 'focus-visible:ring-brand-blue focus-visible:ring-offset-white')
  const activeClass = overlay ? 'text-white bg-white/15' : 'text-brand-gold bg-navy-50'
  const inactiveClass = overlay
    ? 'text-white/80 hover:text-white hover:bg-white/15'
    : 'text-gray-700 hover:text-brand-blue hover:bg-gray-100/90'

  return (
    <nav
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ${
        overlay
          ? 'bg-transparent border-b border-white/10'
          : 'bg-white/85 backdrop-blur-xl backdrop-saturate-150 border-b border-gray-200/80 shadow-[0_1px_20px_-8px_rgba(13,43,78,0.35)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue">
          <img
            src={overlay ? logoKeyBlanco : logoKeyColor}
            alt={t("Key Solutions")}
            width={294}
            height={103}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            to="/nosotros"
            className={`${navLink} ${pathname === '/nosotros' ? activeClass : inactiveClass}`}
          >
            {t('Nosotros')}
          </Link>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`${navLink} flex items-center gap-1 ${
                pathname.startsWith('/tarjetas') ||
                pathname === '/rollos-termicos' ||
                pathname === '/sobres-preimpresos' ||
                pathname === '/fundas-rfid'
                  ? activeClass
                  : inactiveClass
              }`}
            >
              {t('Productos y Servicios')}
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-60 bg-white rounded-xl shadow-card-hover border border-gray-100 overflow-hidden"
                >
                  {products.map((p) => (
                    <Link
                      key={p.href}
                      to={p.href}
                      className={`block px-4 py-3 text-sm font-medium transition-colors ${
                        pathname === p.href
                          ? 'bg-blue-50 text-brand-blue'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-brand-blue'
                      }`}
                    >
                      {t(p.label)}
                    </Link>
                  ))}
                  <Link
                    to="/productos"
                    className="block px-4 py-3 text-sm font-semibold text-brand-navy border-t border-gray-100 hover:bg-navy-50 transition-colors"
                  >
                    {t('Ver todos los productos →')}
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Software dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSoftwareOpen(true)}
            onMouseLeave={() => setSoftwareOpen(false)}
          >
            <button
              className={`${navLink} flex items-center gap-1 ${
                pathname === '/soluciones-empresariales' ||
                pathname === '/desarrollo-web' ||
                pathname === '/software-a-medida'
                  ? activeClass
                  : inactiveClass
              }`}
            >
              {t('Soluciones de Software')}
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${softwareOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence>
              {softwareOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-60 bg-white rounded-xl shadow-card-hover border border-gray-100 overflow-hidden"
                >
                  {software.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className={`block px-4 py-3 text-sm font-medium transition-colors ${
                        pathname === s.href
                          ? 'bg-blue-50 text-brand-blue'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-brand-blue'
                      }`}
                    >
                      {t(s.label)}
                    </Link>
                  ))}
                  <Link
                    to="/soluciones-empresariales"
                    className="block px-4 py-3 text-sm font-semibold text-brand-navy border-t border-gray-100 hover:bg-navy-50 transition-colors"
                  >
                    {t('Ver todas las soluciones →')}
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href={company.erpUrl}
            rel="noopener"
            className={`${navLink} inline-flex items-center gap-1 ${
              overlay
                ? 'text-sky-300 hover:text-white hover:bg-white/15'
                : 'text-brand-blue hover:text-navy-900 hover:bg-gray-100/90'
            }`}
          >
            {t('KeyERP')}
            <ArrowUpRight size={14} />
          </a>
          <Link
            to="/clientes"
            className={`${navLink} ${pathname === '/clientes' ? activeClass : inactiveClass}`}
          >
            {t('Clientes')}
          </Link>
          <Link
            to="/blog"
            className={`${navLink} ${pathname.startsWith('/blog') ? activeClass : inactiveClass}`}
          >
            {t('Blog')}
          </Link>
          <Link
            to="/contacto"
            className={`ml-3 px-5 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              overlay
                ? 'bg-white text-navy-950 hover:bg-blue-50 focus-visible:ring-white focus-visible:ring-offset-navy-950'
                : 'bg-brand-navy text-white hover:bg-navy-800 focus-visible:ring-brand-blue focus-visible:ring-offset-white'
            }`}
          >
            {t('Contacto')}
          </Link>
          <span className="ml-1">
            <LangToggle dark={overlay} />
          </span>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
        <LangToggle dark={overlay} />
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            overlay ? 'text-white hover:bg-white/15' : 'text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={t("Menú")}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              <Link
                to="/nosotros"
                className="py-2.5 text-sm font-medium text-gray-700 hover:text-brand-blue"
              >
                {t('Nosotros')}
              </Link>
              <div className="py-1">
                <p className="text-xs font-semibold text-gray-500 mb-2">
                  {t('Productos y Servicios')}
                </p>
                {products.map((p) => (
                  <Link
                    key={p.href}
                    to={p.href}
                    className="block py-2 pl-3 text-sm text-gray-700 hover:text-brand-blue border-l-2 border-gray-100 hover:border-brand-blue transition-colors"
                  >
                    {t(p.label)}
                  </Link>
                ))}
                <Link
                  to="/productos"
                  className="block py-2 pl-3 text-sm font-semibold text-brand-navy border-l-2 border-brand-navy"
                >
                  {t('Ver todos →')}
                </Link>
              </div>
              <div className="py-1">
                <p className="text-xs font-semibold text-gray-500 mb-2">
                  {t('Soluciones de Software')}
                </p>
                {software.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="block py-2 pl-3 text-sm text-gray-700 hover:text-brand-blue border-l-2 border-gray-100 hover:border-brand-blue transition-colors"
                  >
                    {t(s.label)}
                  </Link>
                ))}
                <Link
                  to="/soluciones-empresariales"
                  className="block py-2 pl-3 text-sm font-semibold text-brand-navy border-l-2 border-brand-navy"
                >
                  {t('Ver todas →')}
                </Link>
              </div>
              <a
                href={company.erpUrl}
                rel="noopener"
                className="py-2.5 text-sm font-semibold text-brand-blue inline-flex items-center gap-1"
              >
                {t('KeyERP')} <ArrowUpRight size={14} />
              </a>
              <Link
                to="/clientes"
                className="py-2.5 text-sm font-medium text-gray-700 hover:text-brand-blue"
              >
                {t('Clientes')}
              </Link>
              <Link
                to="/blog"
                className="py-2.5 text-sm font-medium text-gray-700 hover:text-brand-blue"
              >
                {t('Blog')}
              </Link>
              <Link
                to="/contacto"
                className="mt-2 py-3 text-center bg-brand-navy text-white text-sm font-semibold rounded-lg"
              >
                {t('Contacto')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
