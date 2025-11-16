'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Play, FileText, Download, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { getImagesByCategory } from '@/lib/imageLoader'

const modules = [
  {
    number: 1,
    title: 'Fundamentos del Crochet para Plantas',
    lessons: 8,
    duration: '2h 15min',
    topics: [
      'Materiales esenciales y dónde conseguirlos al mejor precio',
      'Puntos básicos y avanzados para plantas',
      'Lectura e interpretación de patrones profesionales',
      'Técnicas de tensión perfecta',
    ],
  },
  {
    number: 2,
    title: 'Creación de Tu Primera Planta',
    lessons: 12,
    duration: '3h 30min',
    topics: [
      'Maceta de crochet con estructura interna',
      'Hojas realistas con diferentes técnicas',
      'Ensamblaje y acabados profesionales',
      'Trucos para darle vida a tus plantas',
    ],
  },
  {
    number: 3,
    title: 'Colección de Cactus y Suculentas',
    lessons: 15,
    duration: '4h 45min',
    topics: [
      '10 patrones exclusivos de cactus',
      'Suculentas miniatura y decorativas',
      'Técnicas de texturizado realista',
      'Creación de composiciones y arreglos',
    ],
  },
  {
    number: 4,
    title: 'Fotografía de Producto',
    lessons: 6,
    duration: '1h 45min',
    topics: [
      'Iluminación perfecta con recursos mínimos',
      'Composición y fondos que venden',
      'Edición básica con apps gratuitas',
      'Creación de contenido para redes sociales',
    ],
  },
  {
    number: 5,
    title: 'Estrategias de Venta y Precio',
    lessons: 10,
    duration: '2h 30min',
    topics: [
      'Cálculo de costos y fijación de precios rentables',
      'Estrategias de venta en Instagram y Facebook',
      'Creación de tienda en Etsy desde cero',
      'Marketing de contenidos para artesanos',
    ],
  },
  {
    number: 6,
    title: 'Escalado y Automatización',
    lessons: 7,
    duration: '2h 00min',
    topics: [
      'Creación de kits y bundles de alto valor',
      'Ventas en marketplaces internacionales',
      'Delegación y producción en escala',
      'Creación de ingresos pasivos con patrones',
    ],
  },
]

export default function CourseModules() {
  const [expandedModule, setExpandedModule] = useState<number | null>(0)
  const bonusImages = getImagesByCategory('bonus')
  const tutorialImages = getImagesByCategory('tutorials')

  const totalLessons = modules.reduce((acc, mod) => acc + mod.lessons, 0)
  const totalDuration = modules.reduce((acc, mod) => {
    const [hours, mins] = mod.duration.split('h ')
    return acc + parseInt(hours) * 60 + parseInt(mins)
  }, 0)

  return (
    <section className="section-spacing bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge bg-trust-100 text-trust-700 mb-4">
            Contenido del Ebook
          </span>
          <h2 className="heading-lg text-gray-900 mb-6">
            Un Roadmap Completo Hacia{' '}
            <span className="text-primary-600">Tu Éxito</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {totalLessons} lecciones • {Math.floor(totalDuration / 60)}h {totalDuration % 60}min de contenido •
            Acceso de por vida
          </p>
        </motion.div>

        {/* Modules */}
        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((module, index) => (
            <motion.div
              key={module.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-soft overflow-hidden border border-gray-100"
            >
              {/* Module Header */}
              <button
                onClick={() =>
                  setExpandedModule(expandedModule === index ? null : index)
                }
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {module.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {module.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Play size={14} />
                        {module.lessons} lecciones
                      </span>
                      <span className="flex items-center gap-1">
                        <FileText size={14} />
                        {module.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedModule === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-gray-400" size={24} />
                </motion.div>
              </button>

              {/* Module Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedModule === index ? 'auto' : 0,
                  opacity: expandedModule === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 bg-gray-50">
                  <ul className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <CheckCircle
                          className="text-success-500 flex-shrink-0 mt-0.5"
                          size={18}
                        />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bonus Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-success-600 to-success-700 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">+ Bonos Exclusivos Valorados en $150.000</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: Download,
                title: '50+ Patrones Premium',
                value: '$60.000',
              },
              {
                icon: Play,
                title: 'Masterclass de Marketing',
                value: '$45.000',
              },
              {
                icon: FileText,
                title: 'Plantillas para Redes',
                value: '$45.000',
              },
            ].map((bonus, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <bonus.icon className="mx-auto mb-3" size={32} />
                <h4 className="font-semibold mb-2">{bonus.title}</h4>
                <p className="text-success-100">Valor: {bonus.value}</p>
              </div>
            ))}
          </div>

          {/* Bonus Images */}
          {bonusImages.length > 0 && (
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {bonusImages.slice(0, 2).map((img, i) => (
                <div key={i} className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Ebook Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            CONOCE UN POCO EL EBOOK POR DENTRO
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_398,h_541/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_20-1.png"
                alt="Vista interior del ebook - Página 1"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_392,h_554/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_21-2.png"
                alt="Vista interior del ebook - Página 2"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_391,h_560/https://sinfronterasacademia.info/wp-content/uploads/2024/06/Screenshot_19.png"
                alt="Vista interior del ebook - Página 3"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
