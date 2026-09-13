import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react'
import logoKey from '../../assets/logoKey.png'
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
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
    setSoftwareOpen(false)
  }, [pathname])

  const navLink = 'text-sm font-medium transition-colors duration-200'
  const activeClass = 'text-brand-gold'
  const inactiveClass = 'text-gray-700 hover:text-brand-blue'

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logoKey} alt={t("Key Solutions")} className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
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
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-52 bg-white rounded-xl shadow-card-hover border border-gray-100 overflow-hidden"
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
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-white rounded-xl shadow-card-hover border border-gray-100 overflow-hidden"
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
            className={`${navLink} inline-flex items-center gap-1 text-brand-blue hover:text-navy-900`}
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
            className="px-5 py-2 bg-brand-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-800 transition-colors duration-200"
          >
            {t('Contacto')}
          </Link>
          <LangToggle />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
        <LangToggle />
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          onClick={() => setMobileOpen((v) => !v)}
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
