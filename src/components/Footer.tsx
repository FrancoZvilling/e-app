import { MessageCircle, Mail, Instagram } from 'lucide-react'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#services' },
  { label: 'Panel de Control', href: '#panel' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Sobre Mí', href: '#about' },
]

const contactItems = [
  {
    icon: MessageCircle,
    value: '+54 9 3541 315119',
    href: 'https://wa.me/5493541315119',
    color: 'text-emerald-400',
  },
  {
    icon: Mail,
    value: 'francozvilling-programador@hotmail.com',
    href: 'mailto:francozvilling-programador@hotmail.com',
    color: 'text-sky-400',
  },
  {
    icon: Instagram,
    value: '@franco.eapp',
    href: 'https://www.instagram.com/franco.eapp/',
    color: 'text-pink-400',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5" style={{ background: 'rgba(5, 12, 26, 0.6)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* 3 columnas de izquierda a derecha, contenido centrado en cada una */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

          {/* Columna 1 — Brand */}
          <div className="flex flex-col items-center text-center">
            <a href="#hero" className="mb-5">
              <img
                src="/assets/logo.png"
                alt="E-APP"
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
              Sistemas web a medida, sin costo inicial. Suscripción mensual todo incluido.
            </p>
          </div>

          {/* Columna 2 — Navegación */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Contacto */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.value}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors"
                    >
                      <Icon size={14} className={item.color} />
                      <span className="text-sm">{item.value}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col items-center gap-1.5 text-center">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} E-APP · Todos los derechos reservados
          </p>
          <p className="text-slate-600 text-sm">
            Desarrollado por{' '}
            <a
              href="https://wa.me/5493541315119"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold gradient-text-warm hover:opacity-80 transition-opacity"
            >
              Franco Zvilling
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}
