'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCartStore } from '@/lib/cartStore'
import { useGeoLocation, formatPrice as formatLocalPrice } from '@/lib/useGeoLocation'
import Image from 'next/image'
import toast from 'react-hot-toast'

const HOTMART_CHECKOUT_URL = 'https://go.hotmart.com/W102959724X?ap=3527'

export default function ShoppingCart() {
  const [mounted, setMounted] = useState(false)
  const { items, isOpen, toggleCart, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCartStore()
  const { currency, currency_symbol, locale, loading: geoLoading } = useGeoLocation()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Tu carrito está vacío')
      return
    }

    toast.success('Redirigiendo al checkout seguro de Hotmart...')

    setTimeout(() => {
      window.location.href = HOTMART_CHECKOUT_URL
    }, 1000)
  }

  const formatPrice = (price: number) => {
    if (geoLoading) return 'Cargando...'
    return formatLocalPrice(price, currency, currency_symbol, locale)
  }

  return (
    <AnimatePresence>
      {mounted && isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShoppingBag size={24} />
                  <div>
                    <h2 className="text-xl font-bold">Tu Carrito</h2>
                    <p className="text-sm text-primary-100">
                      {getTotalItems()} {getTotalItems() === 1 ? 'producto' : 'productos'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleCart}
                  className="hover:bg-primary-500/30 p-2 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={64} className="text-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Tu carrito está vacío
                  </h3>
                  <p className="text-gray-500">
                    Agrega productos para comenzar tu compra
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="bg-gray-50 rounded-xl p-4 shadow-sm"
                    >
                      <div className="flex gap-4">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-1">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 rounded-md bg-white hover:bg-gray-200 transition-colors"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="w-8 text-center font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 rounded-md bg-white hover:bg-gray-200 transition-colors"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            <button
                              onClick={() => {
                                removeItem(item.id)
                                toast.success('Producto eliminado')
                              }}
                              className="text-red-500 hover:text-red-700 p-1"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
                        {item.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            {formatPrice(item.originalPrice * item.quantity)}
                          </span>
                        )}
                        <span className="text-lg font-bold text-primary-600">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium">{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Envío</span>
                    <span className="font-medium text-success-600">Digital - Gratis</span>
                  </div>
                  <div className="pt-3 border-t border-gray-300 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary-600">{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Proceder al Pago Seguro
                </motion.button>

                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Pago 100% seguro con Hotmart</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
