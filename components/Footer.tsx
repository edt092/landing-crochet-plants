'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube, Mail, Shield } from 'lucide-react'

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Mail, href: 'mailto:soporte@sinfronterasacademia.info', label: 'Email' },
]

const footerLinks = {
  legal: [
    { label: 'Términos y Condiciones', href: '#' },
    { label: 'Política de Privacidad', href: '#' },
    { label: 'Política de Reembolso', href: '#' },
  ],
  support: [
    { label: 'Preguntas Frecuentes', href: '#faq' },
    { label: 'Soporte', href: 'mailto:soporte@sinfronterasacademia.info' },
    { label: 'Contacto', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Plantas de Crochet
            </h3>
            <p className="text-gray-400 mb-6">
              Transforma tu pasión por el crochet en un negocio rentable. Aprende de los mejores.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Badges */}
          <div>
            <h4 className="text-white font-semibold mb-4">Garantía y Seguridad</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="text-success-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-white font-medium mb-1">
                    Garantía de 7 Días
                  </p>
                  <p className="text-sm text-gray-400">
                    Devolución del 100% si no estás satisfecho
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="text-trust-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-white font-medium mb-1">Pago Seguro</p>
                  <p className="text-sm text-gray-400">
                    Procesado por Hotmart con encriptación SSL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <p className="text-center text-gray-400 mb-4">
            Métodos de pago aceptados
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {['Visa', 'Mastercard', 'PayPal', 'American Express'].map((method) => (
              <div
                key={method}
                className="bg-gray-800 px-4 py-2 rounded-lg text-sm text-gray-300"
              >
                {method}
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
            <p className="mb-4">
              <strong className="text-gray-400">Descargo de responsabilidad:</strong> Los resultados individuales pueden variar.
              Los testimonios y ejemplos no garantizan que obtendrás los mismos resultados. Tu éxito depende de tu dedicación,
              esfuerzo y aplicación de las estrategias enseñadas en el curso.
            </p>
            <p className="mb-4">
              Este sitio no está afiliado a Facebook, Instagram, Etsy o cualquier otra plataforma mencionada.
              Todos los nombres de marcas y logos son propiedad de sus respectivos dueños.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Academia Sin Fronteras. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-500">
              Hecho con ❤️ para emprendedores creativos
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
