'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import ProblemSolution from '@/components/ProblemSolution'
import Benefits from '@/components/Benefits'
import CourseModules from '@/components/CourseModules'
import Testimonials from '@/components/Testimonials'
import Guarantee from '@/components/Guarantee'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'
import ShoppingCart from '@/components/ShoppingCart'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Problem vs Solution */}
      <ProblemSolution />

      {/* Benefits Section */}
      <section id="beneficios">
        <Benefits />
      </section>

      {/* Course Modules */}
      <section id="modulos">
        <CourseModules />
      </section>

      {/* Testimonials / Social Proof */}
      <section id="testimonios">
        <Testimonials />
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
