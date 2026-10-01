import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'E-APP | Desarrollo de Software a Medida · Córdoba, Argentina',
  description:
    'Impulsamos a las empresas y negocios a través de la automatización. Sistemas web, tiendas online y aplicaciones 100% personalizadas sin costo inicial. Suscripción $50.000 ARS/mes.',
  keywords: ['desarrollo web', 'aplicaciones', 'tiendas online', 'automatización', 'software a medida', 'Córdoba'],
  openGraph: {
    title: 'E-APP | Desarrollo de Software a Medida',
    description: 'Sistemas web, tiendas online y aplicaciones 100% personalizadas. Sin costo inicial.',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-[#020817] antialiased">{children}</body>
    </html>
  )
}
