'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, ShoppingBag, Smartphone, Code2, Shield, Headphones } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const services = [
  {
    icon: Globe,
    tag: 'Servicio principal',
    title: 'Sistemas Web',
    titleAccent: 'a medida',
    description:
      'Plataformas web completas adaptadas exactamente a tu negocio: paneles de administración, flujos de trabajo, gestión de datos y automatizaciones.',
    accentColor: '#ff6b00',
    accentColorLight: 'rgba(255,107,0,0.12)',
    accentBorder: 'rgba(255,107,0,0.3)',
    imageLabel: 'Sistema administrativo / ERP web',
    imageIcon: '🖥️',
    imagePath: '/assets/service_web.jpg',
    featured: true,
  },
  {
    icon: ShoppingBag,
    tag: 'E-commerce',
    title: 'Tiendas Online',
    titleAccent: 'profesionales',
    description:
      'Carrito de compras, pasarelas de pago, panel de productos, gestión de stock y reportes de ventas en tiempo real.',
    accentColor: '#00c2ff',
    accentColorLight: 'rgba(0,194,255,0.1)',
    accentBorder: 'rgba(0,194,255,0.3)',
    imageLabel: 'Dashboard de ventas · e-commerce',
    imageIcon: '🛒',
    imagePath: '/assets/service_ecommerce.jpg',
    featured: false,
  },
  {
    icon: Smartphone,
    tag: 'Mobile & Web App',
    title: 'Aplicaciones',
    titleAccent: 'móviles y web',
    description:
      'Apps PWA que funcionan en cualquier dispositivo. Tu cliente accede desde el celular sin necesidad de descargar nada.',
    accentColor: '#a855f7',
    accentColorLight: 'rgba(168,85,247,0.1)',
    accentBorder: 'rgba(168,85,247,0.3)',
    imageLabel: 'App UI · vista móvil',
    imageIcon: '📱',
    imagePath: '/assets/service_apps.jpg',
    featured: false,
  },
  {
    icon: Code2,
    tag: '100% personalizado',
    title: 'Desarrollo',
    titleAccent: 'a tu medida',
    description:
      'Sin plantillas genéricas. Cada proyecto se construye desde cero para adaptarse perfectamente a tu negocio y tus procesos.',
    accentColor: '#ffb800',
    accentColorLight: 'rgba(255,184,0,0.1)',
    accentBorder: 'rgba(255,184,0,0.3)',
    imageLabel: 'Código fuente · arquitectura',
    imageIcon: '⚙️',
    imagePath: '/assets/service_code.jpg',
    featured: false,
  },
  {
    icon: Shield,
    tag: 'Incluido en suscripción',
    title: 'Mantenimiento',
    titleAccent: '& seguridad',
    description:
      'Backups automáticos, actualizaciones de seguridad y monitoreo mensual. Tu plataforma siempre protegida y actualizada.',
    accentColor: '#10b981',
    accentColorLight: 'rgba(16,185,129,0.1)',
    accentBorder: 'rgba(16,185,129,0.3)',
    imageLabel: 'Panel de seguridad · logs',
    imageIcon: '🔒',
    imagePath: '/assets/service_security.jpg',
    featured: false,
  },
  {
    icon: Headphones,
    tag: 'Soporte dedicado',
    title: 'Asesoramiento',
    titleAccent: 'personalizado',
    description:
      'Acompañamiento en cada etapa del proyecto. Resolvemos tus dudas y te guiamos en la toma de decisiones tecnológicas.',
    accentColor: '#f43f5e',
    accentColorLight: 'rgba(244,63,94,0.1)',
    accentBorder: 'rgba(244,63,94,0.3)',
    imageLabel: 'Soporte · chat en tiempo real',
    imageIcon: '💬',
    imagePath: '/assets/service_support.jpg',
    featured: false,
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon
  return (
    <motion.div
      variants={fadeInUp}
      className="service-card flex flex-col overflow-hidden"
      style={{
        background: 'rgba(7, 16, 32, 0.9)',
        border: `1px solid rgba(255,255,255,0.07)`,
        borderRadius: '20px',
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-0.5 w-full"
        style={{ background: `linear-gradient(90deg, ${service.accentColor}, transparent)` }}
      />

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Tag + icon row */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              background: service.accentColorLight,
              color: service.accentColor,
              border: `1px solid ${service.accentBorder}`,
            }}
          >
            {service.tag}
          </span>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: service.accentColorLight, border: `1px solid ${service.accentBorder}` }}
          >
            <Icon size={18} style={{ color: service.accentColor }} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-xl mb-2 leading-snug">
          {service.title}{' '}
          <span style={{ color: service.accentColor }}>{service.titleAccent}</span>
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{service.description}</p>

        {/* Image area */}
        <div
          className="card-image-area mt-auto relative overflow-hidden"
          style={{
            height: service.featured ? '200px' : '160px',
            borderTop: `1px solid ${service.accentBorder}`,
          }}
        >
          <img
            src={service.imagePath}
            alt={service.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay to blend image bottom/top if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,16,32,0.8)] via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Section divider */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,107,0,0.4), transparent)' }}
      />
      <div
        className="absolute -top-60 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,107,0,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-sm font-semibold tracking-widest uppercase"
            style={{
              background: 'rgba(0,194,255,0.08)',
              border: '1px solid rgba(0,194,255,0.25)',
              color: '#00c2ff',
            }}
          >
            Nuestros Servicios
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            ¿Buscás potenciar{' '}
            <span className="gradient-text-warm">tu empresa?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Transformamos tus desafíos empresariales en oportunidades de crecimiento con tecnología a medida.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
