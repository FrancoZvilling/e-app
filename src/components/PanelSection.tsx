'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Package, TrendingUp, Settings, Users, Bell, DollarSign, CheckCircle } from 'lucide-react'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations'

const features = [
  { icon: Package, text: 'Gestión de productos y stock en tiempo real', color: 'text-orange-400' },
  { icon: TrendingUp, text: 'Control de ingresos y reportes de ventas', color: 'text-sky-400' },
  { icon: Users, text: 'Administración de clientes y pedidos', color: 'text-emerald-400' },
  { icon: Settings, text: 'Configuración sin necesidad de un programador', color: 'text-amber-400' },
  { icon: Bell, text: 'Notificaciones y alertas automáticas', color: 'text-purple-400' },
  { icon: DollarSign, text: 'Ahorrás horas de trabajo administrativo', color: 'text-rose-400' },
]

export default function PanelSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="panel" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
      <div className="absolute top-1/2 -right-60 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text */}
          <div>
            <motion.span variants={fadeInUp} className="text-sm font-semibold tracking-widest uppercase gradient-text-cool">
              Panel de Control
            </motion.span>
            <motion.h2 variants={fadeInLeft} className="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">
              Tu negocio,
              <span className="gradient-text-warm block">en tus manos</span>
            </motion.h2>
            <motion.p variants={fadeInLeft} className="mt-5 text-slate-400 text-lg leading-relaxed">
              Olvidate de depender de un técnico para hacer cambios simples. Tu panel de autogestión
              te permite administrar todo tu negocio desde cualquier dispositivo, en segundos.
            </motion.p>

            <motion.ul variants={staggerContainer} className="mt-8 space-y-4">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <motion.li
                    key={feature.text}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-0.5 p-1.5 rounded-lg bg-white/5">
                      <Icon size={16} className={feature.color} />
                    </div>
                    <span className="text-slate-300 text-base">{feature.text}</span>
                  </motion.li>
                )
              })}
            </motion.ul>
          </div>

          {/* Right: Mock dashboard */}
          <motion.div variants={fadeInRight} className="relative">
            <div className="glass border border-sky-500/20 rounded-2xl p-6 shadow-2xl glow-cool">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider">Panel de Control</p>
                  <h3 className="text-white font-bold text-lg">Mi Negocio</h3>
                </div>
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                  style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#10b981',
                  }}
                >
                  <CheckCircle size={13} />
                  Autogestión total
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: 'Ventas Hoy', value: '$24.500', up: true, color: 'text-emerald-400' },
                  { label: 'Pedidos', value: '12', up: true, color: 'text-sky-400' },
                  { label: 'Productos', value: '48', up: false, color: 'text-amber-400' },
                ].map((stat) => (
                  <div key={stat.label} className="glass-warm rounded-xl p-3 text-center">
                    <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Recent orders */}
              <div className="space-y-2">
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-3">Pedidos Recientes</p>
                {[
                  { id: '#1042', product: 'Remera Premium', amount: '$8.500', status: 'Pagado' },
                  { id: '#1041', product: 'Zapatillas Sport', amount: '$32.000', status: 'En camino' },
                  { id: '#1040', product: 'Mochila Urban', amount: '$12.000', status: 'Pagado' },
                ].map((order) => (
                  <div key={order.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <div>
                      <span className="text-slate-500 text-xs">{order.id}</span>
                      <p className="text-white text-sm font-medium">{order.product}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-sm font-bold">{order.amount}</p>
                      <span className="text-xs text-emerald-400">{order.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                  <span>Meta mensual</span>
                  <span>73%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '73%' } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                  />
                </div>
              </div>
            </div>


          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
