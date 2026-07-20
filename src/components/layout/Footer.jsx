import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

function LinkedInIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
import { company } from '../../data/company'
import logo from '../../assets/logo.png'

const productLinks = [
  { label: 'Tarjetas PVC Bancarias', href: '/tarjetas-bancarias' },
  { label: 'Tarjetas Empresa', href: '/tarjetas-empresa' },
  { label: 'Fundas RFID', href: '/fundas-rfid' },
  { label: 'Rollos Térmicos', href: '/rollos-termicos' },
  { label: 'Sobres y Formularios', href: '/sobres-preimpresos' },
]

const softwareLinks = [
  { label: 'Desarrollo Web', href: '/desarrollo-web' },
  { label: 'Software a Medida', href: '/software-a-medida' },
  { label: 'Key ERP', href: '/key-erp' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-2">
          <img src={logo} alt="Key Solutions" className="h-12 w-auto mb-4 brightness-200" />
          <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
            {company.description}
          </p>
          <a
            href={company.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-4 py-2 bg-[#0077B5] text-white text-sm font-medium rounded-lg hover:bg-[#006097] transition-colors"
          >
            <LinkedInIcon size={15} />
            LinkedIn
          </a>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Productos
          </h4>
          <ul className="space-y-2.5">
            {productLinks.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/clientes" className="text-sm text-gray-400 hover:text-white transition-colors">
                Nuestros Clientes
              </Link>
            </li>
          </ul>
        </div>

        {/* Software solutions */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Soluciones de Software
          </h4>
          <ul className="space-y-2.5">
            {softwareLinks.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/soluciones-empresariales"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Ver todas
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Contacto
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-gray-400">
              <MapPin size={15} className="mt-0.5 flex-shrink-0 text-gray-500" />
              {company.address}
            </li>
            <li>
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#25D366] hover:text-green-400 transition-colors font-medium"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={15} className="text-gray-500" />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={15} className="text-gray-500" />
                {company.email}
              </a>
            </li>
          </ul>
          <div className="mt-4 pt-4 border-t border-navy-800 space-y-1">
            <p className="text-xs text-gray-500 font-medium">RUC: {company.ruc}</p>
            <p className="text-xs text-gray-600">Lunes a Viernes · 9am – 6pm</p>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800 max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
        <span>© {new Date().getFullYear()} {company.name}. Todos los derechos reservados.</span>
        <span>Desarrollado por Sebastian Pestana</span>
      </div>
    </footer>
  )
}
