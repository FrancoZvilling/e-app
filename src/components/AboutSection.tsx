'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Instagram, Linkedin, Code, LayoutDashboard, Rocket } from 'lucide-react'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations'

const stats = [
  { icon: Code, value: '100%', label: 'Código a medida', color: 'text-orange-400' },
  { icon: LayoutDashboard, value: '24/7', label: 'Autogestión incluida', color: 'text-emerald-400' },
  { icon: Rocket, value: '$0', label: 'Costo inicial', color: 'text-sky-400' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Creator card */}
          <motion.div variants={fadeInLeft} className="relative">
            <div className="glass border border-purple-500/20 rounded-3xl p-8 relative overflow-hidden">
              {/* BG gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-sky-500/20 to-transparent rounded-full blur-2xl" />

              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-xl shadow-orange-500/20" style={{ border: '2px solid rgba(255,107,0,0.3)' }}>
                  <img
                    src="/assets/fz.jpeg"
                    alt="Franco Zvilling"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#020a18] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-1">Franco Zvilling</h3>
              <p className="gradient-text-warm font-semibold text-lg mb-2">Programador Web · Fundador de E-APP</p>
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                <MapPin size={14} />
                <span>Córdoba, Argentina</span>
              </div>

              <p className="text-slate-400 leading-relaxed mb-6">
                Soy Franco, desarrollador full-stack apasionado por crear herramientas que realmente
                impacten en el negocio de las personas. Fundé E-APP con la misión de democratizar el
                acceso a la tecnología para empresas de todo tamaño, sin importar el presupuesto inicial.
              </p>

              {/* Social links */}
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/francozvilling/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 text-slate-300 hover:text-white hover:border-pink-500/40 transition-all duration-300 hover:-translate-y-0.5 text-sm font-medium"
                >
                  <Instagram size={16} className="text-pink-400" />
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/francozvilling/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 text-slate-300 hover:text-white hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-0.5 text-sm font-medium"
                >
                  <Linkedin size={16} className="text-sky-400" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Mission + stats */}
          <motion.div variants={fadeInRight}>
            <span className="text-sm font-semibold tracking-widest uppercase gradient-text-cool">
              Sobre E-APP
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">
              Tecnología
              <span className="gradient-text-warm block">sin barreras</span>
            </h2>
            <p className="mt-5 text-slate-400 text-lg leading-relaxed">
              E-APP nació de una idea simple: que ninguna empresa debería quedarse sin acceso a tecnología
              de calidad por falta de presupuesto. Por eso eliminamos el costo inicial y lo transformamos
              en una suscripción mensual accesible.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Cada proyecto es tratado como si fuera propio. Desde la primera reunión hasta el
              lanzamiento y más allá, estamos con vos en cada etapa.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    variants={fadeInUp}
                    className="glass border border-white/8 rounded-2xl p-5 text-center hover:-translate-y-1 transition-transform duration-300"
                  >
                    <Icon size={24} className={`${stat.color} mx-auto mb-2`} />
                    <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
                    <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
