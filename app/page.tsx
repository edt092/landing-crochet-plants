'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import SEOContent from '@/components/SEOContent'
import Benefits from '@/components/Benefits'
import PatternGallery from '@/components/PatternGallery'
import ValueProposition from '@/components/ValueProposition'
import Testimonials from '@/components/Testimonials'
import BonusSection from '@/components/BonusSection'
import CourseModules from '@/components/CourseModules'
import Guarantee from '@/components/Guarantee'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'
import ShoppingCart from '@/components/ShoppingCart'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Encabezado Provocador */}
      <Hero />

      {/* Trust Badges */}
      <TrustBadges />

      {/* SEO Content - Texto Optimizado */}
      <SEOContent />

      {/* Benefits Section - Beneficios del Producto */}
      <section id="beneficios">
        <Benefits />
      </section>

      {/* Pattern Gallery - Galería de Patrones */}
      <PatternGallery />

      {/* Value Proposition - Propuesta de Valor con Descuento */}
      <ValueProposition />

      {/* Testimonials / Social Proof */}
      <section id="testimonios">
        <Testimonials />
      </section>

      {/* Bonus Section - 7 Bonos de Regalo */}
      <BonusSection />

      {/* Course Modules - Contenido del Ebook */}
      <section id="modulos">
        <CourseModules />
      </section>

      {/* Guarantee Section */}
      <Guarantee />

      {/* FAQ Section */}
      <section id="faq">
        <FAQ />
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <FloatingChat />
      <ShoppingCart />
    </main>
  )
}
