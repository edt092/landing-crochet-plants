'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import { useCartStore } from '@/lib/cartStore'

export default function Navbar() {
  const { toggleCart, getTotalItems } = useCartStore()
  const [mounted, setMounted] = useState(false)
  const totalItems = getTotalItems()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-sm"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🧶</span>
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-gray-900">
                Plantas de Crochet
              </h1>
              <p className="text-xs text-gray-600">Academia Sin Fronteras</p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#beneficios"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Beneficios
            </a>
            <a
              href="#modulos"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Contenido
            </a>
            <a
              href="#testimonios"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Testimonios
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Cart Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleCart}
            className="relative bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-colors flex items-center gap-2"
          >
            <ShoppingCart size={20} />
            <span className="hidden sm:inline">Carrito</span>
            {mounted && totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-success-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
