import { Phone, Mail, MessageCircle } from 'lucide-react'
import { useLang } from '../../i18n/LangContext'

import { company } from '../../data/company'

export default function TopBar() {
  const { t } = useLang()
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
            <span>{t('WhatsApp')}</span>
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
          <span className="text-xs text-gray-400">{t('Perú y Bolivia')}</span>
        </div>
      </div>
    </div>
  )
}
