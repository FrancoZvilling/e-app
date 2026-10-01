'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 sm:py-32 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-5xl mx-auto"
      >
        <div className="relative rounded-3xl p-10 sm:p-16 overflow-hidden glow-both">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-card via-navy-light to-navy-card" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-sky-500/10" />
          <div className="absolute inset-0 border border-white/10 rounded-3xl" />

          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-sky-500/20 rounded-full blur-3xl" />

          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03] rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 text-center">
            <motion.span variants={fadeInUp} className="text-sm font-semibold tracking-widest uppercase gradient-text-warm">
              ¿Listo para empezar?
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight"
            >
              Iniciá tu proyecto
              <span className="gradient-text-both block">hoy mismo</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-6 text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Sin costo inicial, sin sorpresas. Solo envianos un mensaje y en menos de 24 horas
              tenemos una propuesta para tu negocio.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5493541315119?text=Hola%2C%20quiero%20iniciar%20mi%20proyecto%20con%20E-APP"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-white text-lg bg-gradient-to-r from-orange-500 to-amber-400 shadow-xl hover:shadow-orange-500/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                <MessageCircle size={24} className="relative z-10" />
                <span className="relative z-10">Hablar por WhatsApp</span>
              </a>
              <a
                href="mailto:francozvilling-programador@hotmail.com"
                className="flex items-center gap-2 px-10 py-5 rounded-2xl font-semibold text-slate-300 hover:text-white glass border border-white/10 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-sky-500/20 hover:shadow-xl text-lg"
              >
                Enviar correo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
