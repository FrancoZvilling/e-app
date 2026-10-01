'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax: imagen se mueve más lento que el scroll → sensación de profundidad
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#020a18' }}
    >
      {/* ── CAPA 1: Imagen con parallax ── */}
      <motion.div
        style={{ y: imgY }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/assets/Hero.webp"
          alt="Hero background"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.35 }}
        />
      </motion.div>

      {/* ── CAPA 2: Gradientes encima de la imagen para fundirla ── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Funde los bordes laterales con el fondo navy */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, #020a18 0%, transparent 25%, transparent 75%, #020a18 100%)',
        }} />
        {/* Funde arriba (navbar) */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, #020a18 0%, transparent 20%)',
        }} />
        {/* Funde abajo fuertemente para que el contenido no choque con la imagen */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(0deg, #020a18 0%, rgba(2,10,24,0.7) 30%, transparent 60%)',
        }} />
        {/* Tinte naranja top-left — acento de color que se mezcla con la imagen */}
        <div style={{
          position: 'absolute',
          top: '-10%', left: '-10%',
          width: '55%', height: '70%',
          background: 'radial-gradient(circle, rgba(255,107,0,0.12) 0%, transparent 70%)',
        }} />
        {/* Tinte cyan bottom-right */}
        <div style={{
          position: 'absolute',
          bottom: '-10%', right: '-10%',
          width: '55%', height: '70%',
          background: 'radial-gradient(circle, rgba(0,194,255,0.1) 0%, transparent 70%)',
        }} />
        {/* Grid overlay sutil */}
        <div className="absolute inset-0 grid-overlay" style={{ opacity: 0.4 }} />
      </div>

      {/* ── CAPA 3: Contenido ── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
      >
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10 text-sm font-medium"
          style={{
            background: 'rgba(255,107,0,0.12)',
            border: '1px solid rgba(255,107,0,0.35)',
            color: '#ffb800',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          Córdoba, Argentina · Software a medida
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-black tracking-tight leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)' }}
        >
          <span className="text-white">Impulsamos tu negocio</span>
          <br />
          <span className="gradient-text-both">a través de la automatización</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Sistemas web, tiendas online y apps 100% personalizadas.{' '}
          <span className="text-white font-semibold">Sin costo inicial.</span>
        </motion.p>

        {/* Price tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="inline-flex items-center gap-3 mb-10"
        >
          <div
            className="flex items-baseline gap-1 px-5 py-2.5 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,107,0,0.15), rgba(255,184,0,0.08))',
              border: '1px solid rgba(255,107,0,0.35)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span className="text-2xl font-black gradient-text-warm">$50.000</span>
            <span className="text-slate-400 text-sm font-medium">ARS / mes · todo incluido</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://wa.me/5493541315119?text=Hola%2C%20quiero%20iniciar%20mi%20proyecto%20con%20E-APP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-base transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #ff6b00, #ffb800)',
              boxShadow: '0 8px 30px rgba(255,107,0,0.4)',
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 44px rgba(255,107,0,0.6)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,107,0,0.4)')}
          >
            <MessageCircle size={20} />
            Iniciar proyecto en WhatsApp
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-1 text-base"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(0,194,255,0.45)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
          >
            Ver servicios
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
