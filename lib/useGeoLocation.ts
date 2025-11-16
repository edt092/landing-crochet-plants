import { useState, useEffect } from 'react'

interface GeoData {
  country_code: string
  country: string
  currency: string
  currency_symbol: string
  locale: string
}

const CURRENCY_RATES: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  CAD: 1.36,
  AUD: 1.52,
  MXN: 17.5,
  COP: 3900,
  ARS: 350,
  CLP: 920,
  PEN: 3.75,
  BRL: 4.95,
  JPY: 149,
  CNY: 7.24,
  INR: 83.12,
  GHS: 12.5,
}

const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  CAD: 'C$',
  AUD: 'A$',
  MXN: 'MX$',
  COP: '$',
  ARS: '$',
  CLP: '$',
  PEN: 'S/',
  BRL: 'R$',
  JPY: '¥',
  CNY: '¥',
  INR: '₹',
  GHS: '₵',
}

const CURRENCY_LOCALES: Record<string, string> = {
  USD: 'en-US',
  EUR: 'de-DE',
  GBP: 'en-GB',
  CAD: 'en-CA',
  AUD: 'en-AU',
  MXN: 'es-MX',
  COP: 'es-CO',
  ARS: 'es-AR',
  CLP: 'es-CL',
  PEN: 'es-PE',
  BRL: 'pt-BR',
  JPY: 'ja-JP',
  CNY: 'zh-CN',
  INR: 'en-IN',
  GHS: 'en-GH',
}

// Mapeo de código de país a locale
const COUNTRY_LOCALES: Record<string, string> = {
  US: 'en-US',
  EC: 'es-EC', // Ecuador usa formato latinoamericano aunque use USD
  MX: 'es-MX',
  CO: 'es-CO',
  AR: 'es-AR',
  CL: 'es-CL',
  PE: 'es-PE',
  BR: 'pt-BR',
  ES: 'es-ES',
  DE: 'de-DE',
  FR: 'fr-FR',
  GB: 'en-GB',
  CA: 'en-CA',
  AU: 'en-AU',
  JP: 'ja-JP',
  CN: 'zh-CN',
  IN: 'en-IN',
  GH: 'en-GH',
}

export function useGeoLocation() {
  const [geoData, setGeoData] = useState<GeoData>({
    country_code: 'US',
    country: 'United States',
    currency: 'USD',
    currency_symbol: '$',
    locale: 'en-US',
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGeoData() {
      try {
        const response = await fetch('https://ipwho.is/')
        const data = await response.json()

        // Debug: ver qué devuelve la API
        console.log('🌍 Geolocalización detectada:', {
          país: data.country,
          código_país: data.country_code,
          moneda_API: data.currency,
        })

        if (data.success !== false) {
          const countryCode = data.country_code || 'US'
          let currencyCode = data.currency?.code || 'USD'

          // Ecuador usa USD como moneda oficial
          if (countryCode === 'EC') {
            currencyCode = 'USD'
            console.log('✅ Ecuador detectado - usando USD')
          }

          // Verificar que la moneda esté soportada
          if (!CURRENCY_RATES[currencyCode]) {
            console.warn(`⚠️ Moneda no soportada: ${currencyCode}, usando USD por defecto`)
            currencyCode = 'USD'
          }

          // Determinar el locale: priorizar el del país sobre el de la moneda
          const locale = COUNTRY_LOCALES[countryCode] || CURRENCY_LOCALES[currencyCode] || 'en-US'

          setGeoData({
            country_code: countryCode,
            country: data.country || 'United States',
            currency: currencyCode,
            currency_symbol: CURRENCY_SYMBOLS[currencyCode] || '$',
            locale: locale,
          })

          console.log('💰 Configuración de moneda:', {
            moneda: currencyCode,
            símbolo: CURRENCY_SYMBOLS[currencyCode] || '$',
            tasa: CURRENCY_RATES[currencyCode],
            locale: locale,
          })
        }
      } catch (error) {
        console.error('Error fetching geo data:', error)
        // Mantener valores por defecto
      } finally {
        setLoading(false)
      }
    }

    fetchGeoData()
  }, [])

  return { ...geoData, loading }
}

export function convertPrice(priceUSD: number, targetCurrency: string): number {
  const rate = CURRENCY_RATES[targetCurrency] || 1
  return priceUSD * rate
}

export function formatPrice(
  price: number,
  currency: string,
  currencySymbol: string,
  locale: string = 'en-US'
): string {
  const convertedPrice = convertPrice(price, currency)

  // Formatear según la moneda
  const decimals = ['JPY', 'COP', 'CLP', 'ARS'].includes(currency) ? 0 : 2

  const formattedNumber = new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(convertedPrice)

  return `${currencySymbol}${formattedNumber}`
}

// ============================================================================
// FUNCIÓN TEMPORAL: Calcular impuestos aproximados por país
// ============================================================================
// Esta función es temporal mientras se alinean los precios con Hotmart.
// Hotmart aplica impuestos automáticamente en el checkout según el país.
// ============================================================================

/**
 * Tasas de impuestos aproximadas por país/región
 * Estas son estimaciones basadas en los impuestos que Hotmart suele aplicar
 */
const TAX_RATES_BY_COUNTRY: Record<string, number> = {
  // Norteamérica
  CA: 0.13, // Canadá - GST/HST promedio (varía por provincia: 5%-15%)
  US: 0.0, // EE.UU. - Hotmart generalmente no aplica sales tax automático

  // Europa - IVA/VAT
  DE: 0.19, // Alemania - VAT 19%
  ES: 0.21, // España - IVA 21%
  FR: 0.20, // Francia - VAT 20%
  IT: 0.22, // Italia - IVA 22%
  GB: 0.20, // Reino Unido - VAT 20%
  PT: 0.23, // Portugal - IVA 23%
  NL: 0.21, // Países Bajos - VAT 21%
  BE: 0.21, // Bélgica - VAT 21%
  AT: 0.20, // Austria - VAT 20%
  SE: 0.25, // Suecia - VAT 25%
  DK: 0.25, // Dinamarca - VAT 25%
  FI: 0.24, // Finlandia - VAT 24%
  NO: 0.25, // Noruega - VAT 25%
  PL: 0.23, // Polonia - VAT 23%
  GR: 0.24, // Grecia - VAT 24%
  IE: 0.23, // Irlanda - VAT 23%

  // América Latina
  MX: 0.16, // México - IVA 16%
  BR: 0.25, // Brasil - Impuestos complejos ~25% (ICMS + PIS/COFINS aprox.)
  AR: 0.21, // Argentina - IVA 21%
  CO: 0.19, // Colombia - IVA 19%
  CL: 0.19, // Chile - IVA 19%
  PE: 0.18, // Perú - IGV 18%
  EC: 0.12, // Ecuador - IVA 12%
  UY: 0.22, // Uruguay - IVA 22%
  PY: 0.10, // Paraguay - IVA 10%
  BO: 0.13, // Bolivia - IVA 13%

  // Oceanía
  AU: 0.10, // Australia - GST 10%
  NZ: 0.15, // Nueva Zelanda - GST 15%

  // Asia
  JP: 0.10, // Japón - Consumption Tax 10%
  SG: 0.08, // Singapur - GST 8%
  IN: 0.18, // India - GST 18%
  KR: 0.10, // Corea del Sur - VAT 10%

  // Default para países no listados
  DEFAULT: 0.15, // Aproximado global 15%
}

/**
 * Obtiene la tasa de impuesto para un país específico
 */
export function getTaxRate(countryCode: string): number {
  return TAX_RATES_BY_COUNTRY[countryCode] || TAX_RATES_BY_COUNTRY.DEFAULT
}

/**
 * Calcula el precio con impuestos incluidos
 * @param basePrice - Precio base sin impuestos (en USD)
 * @param countryCode - Código del país (ej: 'CA', 'MX', 'ES')
 * @param currency - Código de moneda (ej: 'CAD', 'EUR')
 * @returns Precio con impuestos en la moneda del país
 */
export function calculatePriceWithTax(
  basePrice: number,
  countryCode: string,
  currency: string
): number {
  const taxRate = getTaxRate(countryCode)
  const priceInCurrency = convertPrice(basePrice, currency)
  const priceWithTax = priceInCurrency * (1 + taxRate)

  return priceWithTax
}

/**
 * Formatea el precio con impuestos incluidos
 * @returns String formateado con el precio incluyendo impuestos aproximados
 */
export function formatPriceWithTax(
  basePrice: number,
  countryCode: string,
  currency: string,
  currencySymbol: string,
  locale: string = 'en-US'
): string {
  const priceWithTax = calculatePriceWithTax(basePrice, countryCode, currency)
  const decimals = ['JPY', 'COP', 'CLP', 'ARS'].includes(currency) ? 0 : 2

  const formattedNumber = new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(priceWithTax)

  return `${currencySymbol}${formattedNumber}`
}

/**
 * Obtiene información completa del precio con y sin impuestos
 */
export function getPriceInfo(
  basePrice: number,
  countryCode: string,
  currency: string,
  currencySymbol: string,
  locale: string = 'en-US'
) {
  const taxRate = getTaxRate(countryCode)
  const basePriceConverted = convertPrice(basePrice, currency)
  const priceWithTax = calculatePriceWithTax(basePrice, countryCode, currency)

  return {
    basePrice: basePriceConverted,
    priceWithTax,
    taxRate,
    taxAmount: priceWithTax - basePriceConverted,
    basePriceFormatted: formatPrice(basePrice, currency, currencySymbol, locale),
    priceWithTaxFormatted: formatPriceWithTax(basePrice, countryCode, currency, currencySymbol, locale),
  }
}
