'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#services' },
  { label: 'Panel', href: '#panel' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Nosotros', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
        scrolled
          ? 'border-b border-white/5'
          : 'bg-transparent'
      )}
      style={scrolled ? {
        background: 'rgba(2, 10, 24, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      } : undefined}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="E-APP"
              className="h-8 md:h-9 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/5493541315119?text=Hola%2C%20quiero%20iniciar%20mi%20proyecto%20con%20E-APP"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #ff6b00, #ffb800)',
                boxShadow: '0 4px 16px rgba(255,107,0,0.3)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 6px 24px rgba(255,107,0,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,107,0,0.3)')}
            >
              Contactar
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'rgba(2, 10, 24, 0.96)',
              backdropFilter: 'blur(16px)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
            className="md:hidden"
          >
            <div className="flex flex-col px-6 py-5 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 hover:text-white py-3 px-2 text-base font-medium transition-colors border-b border-white/5 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5493541315119?text=Hola%2C%20quiero%20iniciar%20mi%20proyecto%20con%20E-APP"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-3 px-5 py-3 rounded-xl text-center font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #ff6b00, #ffb800)' }}
              >
                Iniciar proyecto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
