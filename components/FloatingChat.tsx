'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, MessageCircle, Minimize2 } from 'lucide-react'
import Image from 'next/image'
import { useGeoLocation, formatPrice } from '@/lib/useGeoLocation'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

function getAutoResponses(price: string) {
  return {
    hola: '¡Hola! 👋 ¿En qué puedo ayudarte hoy?',
    precio: `El ebook tiene un precio especial de lanzamiento de solo ${price} (75% OFF). ¡Aprovecha esta oferta limitada! 💰`,
    curso: 'Nuestro ebook incluye técnicas avanzadas de crochet, patrones exclusivos y estrategias de venta. 🧶',
    ebook: 'Nuestro ebook incluye técnicas avanzadas de crochet, patrones exclusivos y estrategias de venta. 🧶',
    pago: 'Aceptamos todos los métodos de pago seguros a través de Hotmart. Tu compra está 100% protegida. 🔒',
    garantia: '¡Tienes 7 días de garantía total! Si no estás satisfecho, te devolvemos tu dinero. ✅',
    acceso: 'El acceso es inmediato tras la compra. Podrás ver todo el contenido desde cualquier dispositivo. 📱💻',
    ayuda: 'Estoy aquí para ayudarte. Pregúntame sobre el ebook, precio, garantía o cualquier duda que tengas. 😊',
    default: 'Gracias por tu mensaje. Un asesor te responderá pronto. Mientras tanto, ¿quieres saber sobre precio, contenido o garantía? 💬',
  }
}

export default function FloatingChat() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const { currency, currency_symbol, locale } = useGeoLocation()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy Angie 👋 ¿Tienes alguna pregunta sobre el ebook?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-open después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setIsOpen(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [hasInteracted])

  // Follow-up automático a los 60 segundos
  useEffect(() => {
    if (isOpen && !hasInteracted) {
      const followUpTimer = setTimeout(() => {
        addBotMessage(
          '¿Necesitas ayuda para decidirte? Pregúntame lo que quieras, estoy aquí para ayudarte 😊'
        )
        playNotificationSound()
      }, 60000)

      return () => clearTimeout(followUpTimer)
    }
  }, [isOpen, hasInteracted])

  // Scroll automático
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const playNotificationSound = () => {
    // Crear sonido de notificación simple
    if (typeof window !== 'undefined' && !audioRef.current) {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.value = 800
      oscillator.type = 'sine'

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.5)
    }
  }

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const getAutoResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    const priceFormatted = formatPrice(12.99, currency, currency_symbol, locale)
    const autoResponses = getAutoResponses(priceFormatted)

    for (const [keyword, response] of Object.entries(autoResponses)) {
      if (keyword !== 'default' && lowerMessage.includes(keyword)) {
        return response
      }
    }

    return autoResponses.default
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    setHasInteracted(true)

    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue('')

    // Simular typing
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      const response = getAutoResponse(inputValue)
      addBotMessage(response)
      playNotificationSound()
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setHasInteracted(true)
    if (!isOpen) {
      setIsMinimized(false)
    }
  }

  return (
    <>
      {/* Botón flotante */}
      <AnimatePresence>
        {mounted && !isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleChat}
            className="fixed bottom-6 right-6 z-50 bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-2xl shadow-primary-600/50"
          >
            <MessageCircle size={28} />
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold"
            >
              1
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Ventana de chat */}
      <AnimatePresence>
        {mounted && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? 'auto' : '600px'
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image
                    src="/img/angie.jfif"
                    alt="Angie"
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-white object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-success-500 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-semibold">Angie</h3>
                  <p className="text-xs text-primary-100">En línea</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="hover:bg-primary-500/30 p-2 rounded-lg transition-colors"
                >
                  <Minimize2 size={18} />
                </button>
                <button
                  onClick={toggleChat}
                  className="hover:bg-primary-500/30 p-2 rounded-lg transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-primary-600 text-white rounded-br-none'
                            : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {message.timestamp.toLocaleTimeString('es-ES', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-gray-200">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Escribe tu mensaje..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSendMessage}
                      className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full transition-colors"
                    >
                      <Send size={20} />
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
