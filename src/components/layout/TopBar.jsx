import { Phone, Mail, MessageCircle } from 'lucide-react'

function LinkedInIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
import { company } from '../../data/company'

export default function TopBar() {
  return (
    <div className="bg-navy-950 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#25D366] hover:text-green-400 transition-colors font-medium"
          >
            <MessageCircle size={13} />
            <span>WhatsApp</span>
          </a>
          <a
            href={`tel:${company.phone}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={13} />
            <span>{company.phone}</span>
          </a>
          <a
            href={`mailto:${company.email}`}
            className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail size={13} />
            <span>{company.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 hidden sm:inline">Presencia en:</span>
          <span className="text-xs font-semibold text-gray-300">🇵🇪 Perú · 🇧🇴 Bolivia</span>
          <a
            href={company.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <LinkedInIcon size={13} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  )
}
