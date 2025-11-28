'use client'

import { motion } from 'framer-motion'
import { BookOpen, Award, TrendingUp } from 'lucide-react'

export default function SEOContent() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom max-w-4xl">
        {/* Main SEO Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none"
        >
          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <BookOpen className="text-primary-600" size={32} />
              ¿Por Qué Este Es el Mejor Curso de Crochet Online?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si estás buscando <strong>aprender crochet desde cero</strong> y especializarte
              en la creación de plantas tejidas, has llegado al lugar correcto. Nuestro curso
              de crochet es el más completo del mercado, diseñado específicamente para personas
              que quieren dominar la técnica de <strong>plantas de crochet paso a paso</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Con más de 500 patrones profesionales incluidos, aprenderás desde los puntos básicos
              hasta técnicas avanzadas que te permitirán crear piezas únicas y vendibles. Este
              <strong> ebook de crochet</strong> incluye tutoriales detallados, diagramas claros
              y acceso de por vida a todo el contenido.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-12 bg-gradient-to-br from-primary-50 to-trust-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Award className="text-success-600" size={32} />
              Curso de Crochet Opiniones: Lo Que Dicen Nuestras Estudiantes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Miles de personas ya han transformado su vida con nuestro <strong>curso de crochet</strong>.
              Las opiniones son abrumadoramente positivas, con una calificación promedio de 4.9/5 estrellas.
              Nuestras estudiantes destacan la claridad de las instrucciones, la calidad de los patrones
              y el soporte constante de nuestra comunidad.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lo que hace especial a este curso es que no solo aprendes a tejer, sino que también
              descubres cómo convertir tus creaciones en un negocio rentable. Incluimos estrategias
              probadas de marketing, fotografía de producto y fijación de precios para que puedas
              generar ingresos desde el primer día.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <TrendingUp className="text-primary-600" size={32} />
              Amigurumi Plantas Tutorial: Aprende las Técnicas Más Buscadas
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El <strong>amigurumi de plantas</strong> es una de las tendencias más populares en
              el mundo del crochet. En este tutorial completo, aprenderás a crear cactus, suculentas,
              plantas colgantes y flores realistas usando técnicas profesionales. Cada patrón incluye
              instrucciones paso a paso con fotografías desde múltiples ángulos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Además de los <strong>patrones de crochet PDF gratis</strong> que incluimos como bonos,
              tendrás acceso a nuestra colección premium de más de 500 diseños exclusivos. Aprende
              a tejer plantas que parecen reales, perfectas para decoración del hogar o para vender
              en plataformas como Etsy, Instagram y Facebook Marketplace.
            </p>
          </div>

          {/* Benefits List */}
          <div className="bg-gradient-to-r from-success-100 to-primary-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              ¿Qué Incluye el Curso de Crochet?
            </h3>
            <ul className="space-y-3">
              {[
                '500+ patrones profesionales de plantas, cactus y suculentas',
                'Video tutoriales en HD con explicaciones detalladas',
                'Guías PDF descargables e imprimibles',
                'Acceso de por vida con actualizaciones gratuitas',
                'Comunidad privada de más de 2,500 crocheteras',
                'Estrategias de venta y marketing digital',
                'Calculadora de precios automática',
                '50+ plantillas para redes sociales',
                'Masterclass de fotografía de producto',
                'Garantía de satisfacción de 7 días',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
