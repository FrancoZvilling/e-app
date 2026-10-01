'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus, X } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const faqs = [
  {
    question: '¿Qué es un dominio?',
    answer:
      'Un dominio es la dirección de tu sitio web: por ejemplo, "minegocio.com". Es lo que los clientes escriben en el navegador para encontrarte. Nosotros nos encargamos de conseguirlo, configurarlo y renovarlo. Vos solo decís cómo querés llamarlo.',
    color: '#ff6b00',
  },
  {
    question: '¿Qué es una base de datos?',
    answer:
      'Imaginala como un archivero gigante y ordenado donde se guarda toda la información de tu negocio: productos, clientes, pedidos, precios y más. Nosotros la configuramos, protegemos y hacemos backups automáticos para que nunca pierdas nada.',
    color: '#00c2ff',
  },
  {
    question: '¿En qué consiste el mantenimiento mensual?',
    answer:
      'Es el trabajo que hacemos cada mes para que tu plataforma esté siempre funcionando perfectamente: actualizamos las tecnologías, revisamos la seguridad, corregimos errores y aplicamos mejoras continuas. Es como tener un programador en tu equipo sin tener que contratarlo.',
    color: '#a855f7',
  },
  {
    question: '¿Por qué se cobra una suscripción y no un pago único?',
    answer:
      'Un sitio web necesita servidor activo todos los días, actualizaciones de seguridad constantes, soporte cuando algo falla y mejoras continuas. La suscripción cubre esos costos operativos y nos permite darte soporte ilimitado. Es la forma más honesta y justa de trabajar.',
    color: '#10b981',
  },
  {
    question: '¿Qué incluye exactamente la suscripción de $50.000 ARS?',
    answer:
      'Incluye: ✅ Panel de autogestión, ✅ Conexión de tu dominio, ✅ Base de datos gestionada, ✅ Mantenimiento mensual completo, ✅ Actualizaciones de funciones y estilos, ✅ Asesoramiento personalizado, ✅ Protección contra errores y vulnerabilidades. Sin sorpresas ni costos ocultos.',
    color: '#ffb800',
  },
  {
    question: '¿Puedo cancelar en cualquier momento?',
    answer:
      'Podés dejar de pagar cuando quieras. Pero hay que entender cómo funciona: la suscripción es lo que mantiene la web activa. Si el pago se interrumpe, el servicio se da de baja y la página deja de funcionar — es exactamente igual que Netflix, Spotify o cualquier servicio de hosting. Eso sí: si en algún momento decidís volver a activarla, retomás desde donde dejaste, sin perder ningún dato ni configuración.',
    color: '#f43f5e',
  },
  {
    question: '¿Es posible adquirir la propiedad del sistema y prescindir de la suscripción?',
    answer:
      'Sí. Si en algún momento decidís convertirte en propietario completo del sistema, es posible realizar una transferencia de titularidad. En ese caso, se elabora un presupuesto personalizado basado en el trabajo ya desarrollado, el volumen de funcionalidades implementadas y la complejidad del proyecto. Una vez concretada la adquisición, el sistema pasa a ser tuyo en su totalidad: vos o tu equipo se encargan del alojamiento, el mantenimiento y las futuras actualizaciones. Es una opción válida para quienes buscan independencia tecnológica a largo plazo.',
    color: '#a855f7',
  },
]

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      variants={fadeInUp}
      className="overflow-hidden rounded-2xl transition-all duration-300"
      style={{
        background: open
          ? `linear-gradient(135deg, rgba(7,16,32,0.98), rgba(7,16,32,0.95))`
          : 'rgba(7, 16, 32, 0.8)',
        border: `1px solid ${open ? faq.color + '55' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: open ? `0 0 24px ${faq.color}22` : 'none',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        {/* Number + question */}
        <div className="flex items-center gap-4">
          <span
            className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300"
            style={{
              background: open ? faq.color : 'rgba(255,255,255,0.05)',
              color: open ? '#fff' : 'rgba(255,255,255,0.3)',
            }}
          >
            {String(faqs.indexOf(faq) + 1).padStart(2, '0')}
          </span>
          <span
            className="font-semibold text-base sm:text-lg transition-colors duration-300"
            style={{ color: open ? '#fff' : 'rgba(226,232,240,0.85)' }}
          >
            {faq.question}
          </span>
        </div>

        {/* Toggle icon */}
        <div
          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
          style={{
            background: open ? `${faq.color}22` : 'rgba(255,255,255,0.05)',
            border: `1px solid ${open ? faq.color + '44' : 'transparent'}`,
          }}
        >
          {open ? (
            <X size={14} style={{ color: faq.color }} />
          ) : (
            <Plus size={14} className="text-slate-500" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="px-6 pb-6">
              {/* Colored divider */}
              <div
                className="h-px mb-4 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${faq.color}66, transparent)`,
                }}
              />
              <p className="text-slate-400 leading-relaxed pl-12">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,194,255,0.4), transparent)' }}
      />
      <div
        className="absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-sm font-semibold tracking-widest uppercase"
              style={{
                background: 'rgba(255,184,0,0.08)',
                border: '1px solid rgba(255,184,0,0.25)',
                color: '#ffb800',
              }}
            >
              Preguntas Frecuentes
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Explicado para todos,{' '}
              <span className="gradient-text-cool">sin tecnicismos</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Respondemos las preguntas más comunes de forma clara, honesta y sin jerga técnica.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} faq={faq} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
