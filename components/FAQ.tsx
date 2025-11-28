'use client'

import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: '¿Es este el mejor curso de crochet online para aprender plantas?',
    answer: 'Sí. Somos el curso de crochet #1 en español especializado en plantas. Con más de 2,500 estudiantes activos y una calificación de 4.9/5 estrellas, ofrecemos 500+ patrones profesionales, acceso de por vida y una comunidad activa. Ningún otro curso ofrece esta combinación de cantidad, calidad y soporte.',
  },
  {
    question: '¿Puedo aprender crochet desde cero con este curso?',
    answer: 'Absolutamente. El curso está diseñado para que puedas aprender crochet desde cero. Incluimos un módulo completo de fundamentos donde te enseñamos todos los puntos básicos, cómo leer patrones, y las técnicas esenciales. Si nunca has tejido antes, este es el lugar perfecto para empezar.',
  },
  {
    question: '¿Qué opiniones tienen otros estudiantes del curso de crochet?',
    answer: 'Las opiniones del curso de crochet son excelentes. Tenemos más de 847 reseñas con un promedio de 4.9/5 estrellas. Los estudiantes destacan la claridad de las instrucciones, la calidad de los patrones y el soporte constante. El 92% de quienes aplican las estrategias del curso logran hacer su primera venta en los primeros 30 días.',
  },
  {
    question: '¿El curso incluye patrones de crochet PDF gratis?',
    answer: 'Sí. Incluimos 7 bonos con patrones de crochet PDF gratis, además de los 500+ patrones profesionales del curso principal. Todos son descargables e imprimibles. También tienes acceso a nuestra colección exclusiva de plantas, cactus y suculentas que no encontrarás en ningún otro lugar.',
  },
  {
    question: '¿Cómo aprendo a hacer plantas de crochet paso a paso?',
    answer: 'El curso te guía para hacer plantas de crochet paso a paso con videos en HD, diagramas detallados y explicaciones claras. Cada patrón incluye instrucciones completas desde el inicio hasta el acabado final. Aprenderás técnicas profesionales para crear hojas realistas, texturas naturales y ensamblajes perfectos.',
  },
  {
    question: '¿Qué incluye el tutorial de amigurumi plantas?',
    answer: 'El tutorial de amigurumi plantas incluye técnicas especializadas para crear cactus, suculentas y plantas decorativas. Aprenderás texturizado realista, creación de composiciones, macetas tejidas y acabados profesionales. Cada tutorial tiene videos desde múltiples ángulos y trucos no documentados en otros cursos.',
  },
  {
    question: '¿Necesito experiencia previa en crochet?',
    answer: 'No necesariamente. El ebook está diseñado para que personas con conocimientos básicos puedan seguirlo sin problema. Si sabes hacer cadenas y puntos básicos, estás lista para empezar. Si eres principiante total, incluimos un módulo de fundamentos.',
  },
  {
    question: '¿Cuánto tiempo tengo acceso al curso?',
    answer: 'El acceso es DE POR VIDA. Una vez que compres, el curso es tuyo para siempre. Además, todas las actualizaciones futuras están incluidas sin costo adicional. Sin mensualidades ni renovaciones.',
  },
  {
    question: '¿Qué materiales necesito para empezar?',
    answer: 'Necesitarás hilos de algodón, ganchillo, relleno y algunos materiales básicos que puedes conseguir en cualquier mercería. En la primera lección te damos una lista completa con recomendaciones de dónde comprar al mejor precio.',
  },
  {
    question: '¿Realmente puedo ganar dinero vendiendo plantas de crochet?',
    answer: 'Sí. El 92% de nuestros estudiantes que aplican las estrategias del curso hacen su primera venta en los primeros 30 días. Muchos generan ingresos de $500-$1,500 USD mensuales. El mercado de decoración artesanal está en auge y la demanda de plantas tejidas es muy alta.',
  },
  {
    question: '¿Qué pasa si no me gusta el curso?',
    answer: 'Tienes 7 días de garantía total. Si por cualquier razón no estás satisfecha, solo envíanos un email y te devolvemos el 100% de tu dinero, sin preguntas ni complicaciones.',
  },
  {
    question: '¿Cuándo puedo empezar a tomar el curso?',
    answer: 'INMEDIATAMENTE. Una vez que completes tu compra, recibirás acceso instantáneo a todo el contenido. Puedes comenzar a aprender en menos de 2 minutos.',
  },
  {
    question: '¿El curso incluye certificado?',
    answer: 'Sí. Al completar el curso recibes un certificado digital que puedes compartir en tus redes sociales y usar para darle más credibilidad a tu negocio de plantas de crochet.',
  },
  {
    question: '¿Puedo acceder desde mi celular?',
    answer: 'Absolutamente. La plataforma es 100% responsive. Puedes acceder desde computadora, tablet o smartphone, donde sea que estés.',
  },
  {
    question: '¿Hay algún costo adicional después de comprar?',
    answer: 'No. El precio que ves es el precio final. No hay mensualidades, ni costos ocultos, ni upgrades obligatorios. Pagas una vez y tienes acceso a todo, para siempre.',
  },
  {
    question: '¿Recibiré ayuda si tengo dudas?',
    answer: 'Por supuesto. Tienes acceso a nuestra comunidad privada donde puedes hacer preguntas y compartir tus proyectos. Además, nuestro equipo de soporte responde en menos de 24 horas.',
  },
]

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge bg-primary-100 text-primary-700 mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="heading-lg text-gray-900 mb-6">
            ¿Tienes Dudas?{' '}
            <span className="text-primary-600">Aquí las Resolvemos</span>
          </h2>
          <p className="text-xl text-gray-600">
            Las respuestas a las preguntas más comunes de nuestros estudiantes
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-primary-300 transition-colors"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  {expandedIndex === index ? (
                    <Minus className="text-primary-600" size={20} />
                  ) : (
                    <Plus className="text-primary-600" size={20} />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expandedIndex === index ? 'auto' : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-gray-50 to-primary-50 rounded-2xl p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Aún tienes preguntas?
          </h3>
          <p className="text-gray-600 mb-6">
            Nuestro equipo está listo para ayudarte. Escríbenos y te respondemos en menos de 24 horas.
          </p>
          <a
            href="mailto:soporte@sinfronterasacademia.info"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            <span>Contactar Soporte</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
