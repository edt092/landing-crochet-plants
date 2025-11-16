# Función Temporal: Cálculo de Impuestos por País

## Contexto

Hotmart aplica automáticamente impuestos (IVA, GST, VAT, etc.) en el checkout según el país del comprador. Esto hace que el precio final sea diferente al precio base mostrado en la landing page.

**Ejemplo:**
- Precio base: **CAD 12.99**
- En checkout de Hotmart (Canadá): **CAD 21.00** (incluye ~62% de impuestos)

⚠️ **Nota:** La diferencia puede confundir a los usuarios. Estas funciones temporales ayudan a mostrar el precio aproximado final.

---

## Funciones Disponibles

Todas las funciones están en: `lib/useGeoLocation.ts`

### 1. `getTaxRate(countryCode: string): number`

Obtiene la tasa de impuesto de un país específico.

```typescript
import { getTaxRate } from '@/lib/useGeoLocation'

const taxRate = getTaxRate('CA') // 0.13 (13% para Canadá)
const taxRate = getTaxRate('ES') // 0.21 (21% IVA España)
const taxRate = getTaxRate('MX') // 0.16 (16% IVA México)
```

### 2. `calculatePriceWithTax(basePrice, countryCode, currency): number`

Calcula el precio con impuestos incluidos en la moneda local.

```typescript
import { calculatePriceWithTax } from '@/lib/useGeoLocation'

// Precio base: $12.99 USD
// Usuario en Canadá
const priceWithTax = calculatePriceWithTax(12.99, 'CA', 'CAD')
// Resultado: ~20.94 CAD (12.99 USD = 17.66 CAD + 13% GST/HST)
```

### 3. `formatPriceWithTax(basePrice, countryCode, currency, currencySymbol, locale): string`

Formatea el precio con impuestos como string listo para mostrar.

```typescript
import { formatPriceWithTax } from '@/lib/useGeoLocation'

const formatted = formatPriceWithTax(12.99, 'CA', 'CAD', 'C$', 'en-CA')
// Resultado: "C$20.94"
```

### 4. `getPriceInfo(basePrice, countryCode, currency, currencySymbol, locale)`

Devuelve toda la información completa sobre el precio.

```typescript
import { getPriceInfo } from '@/lib/useGeoLocation'

const priceInfo = getPriceInfo(12.99, 'CA', 'CAD', 'C$', 'en-CA')

// Resultado:
{
  basePrice: 17.66,                    // Precio base en CAD
  priceWithTax: 20.94,                 // Precio con impuestos
  taxRate: 0.13,                       // Tasa de impuesto (13%)
  taxAmount: 3.28,                     // Monto del impuesto
  basePriceFormatted: "C$17.66",      // Precio base formateado
  priceWithTaxFormatted: "C$20.94"    // Precio con impuestos formateado
}
```

---

## Ejemplo de Uso en Componentes

### Hero.tsx (Ya implementado)

```tsx
import { useGeoLocation, formatPrice, getPriceInfo } from '@/lib/useGeoLocation'

export default function Hero() {
  const { currency, currency_symbol, locale, country_code, loading } = useGeoLocation()

  return (
    <div>
      {/* Precio base */}
      <span className="text-4xl font-bold">
        {formatPrice(12.99, currency, currency_symbol, locale)}
      </span>

      {/* Precio con impuestos - solo si el país tiene impuestos > 5% */}
      {!loading && country_code !== 'US' && (() => {
        const priceInfo = getPriceInfo(12.99, country_code, currency, currency_symbol, locale)
        const taxPercentage = Math.round(priceInfo.taxRate * 100)

        if (taxPercentage > 5) {
          return (
            <p className="text-sm text-gray-600">
              💡 Precio aproximado con impuestos ({taxPercentage}%):
              <strong>{priceInfo.priceWithTaxFormatted}</strong>
            </p>
          )
        }
        return null
      })()}
    </div>
  )
}
```

### Otro componente (ejemplo)

```tsx
import { useGeoLocation, getPriceInfo } from '@/lib/useGeoLocation'

export default function PricingCard() {
  const { currency, currency_symbol, locale, country_code } = useGeoLocation()

  const productPrice = 12.99
  const priceInfo = getPriceInfo(productPrice, country_code, currency, currency_symbol, locale)

  return (
    <div className="pricing-card">
      <div className="price">
        <span className="base-price">{priceInfo.basePriceFormatted}</span>
        <span className="final-price">{priceInfo.priceWithTaxFormatted}</span>
      </div>
      <p className="tax-info">
        Incluye {Math.round(priceInfo.taxRate * 100)}% de impuestos
        ({priceInfo.taxAmount.toFixed(2)})
      </p>
    </div>
  )
}
```

---

## Tasas de Impuestos por País/Región

### Norteamérica
- 🇨🇦 Canadá (CA): **13%** GST/HST promedio
- 🇺🇸 EE.UU. (US): **0%** (Hotmart no aplica sales tax automático)

### Europa (IVA/VAT)
- 🇩🇪 Alemania (DE): **19%**
- 🇪🇸 España (ES): **21%**
- 🇫🇷 Francia (FR): **20%**
- 🇬🇧 Reino Unido (GB): **20%**
- 🇮🇹 Italia (IT): **22%**
- 🇵🇹 Portugal (PT): **23%**
- 🇸🇪 Suecia (SE): **25%**
- 🇩🇰 Dinamarca (DK): **25%**

### América Latina
- 🇲🇽 México (MX): **16%**
- 🇧🇷 Brasil (BR): **25%** (aprox.)
- 🇦🇷 Argentina (AR): **21%**
- 🇨🇴 Colombia (CO): **19%**
- 🇨🇱 Chile (CL): **19%**
- 🇵🇪 Perú (PE): **18%**
- 🇪🇨 Ecuador (EC): **12%**

### Oceanía
- 🇦🇺 Australia (AU): **10%**
- 🇳🇿 Nueva Zelanda (NZ): **15%**

### Asia
- 🇯🇵 Japón (JP): **10%**
- 🇸🇬 Singapur (SG): **8%**
- 🇮🇳 India (IN): **18%**

**Default:** 15% para países no listados

---

## Notas Importantes

1. **Estas son aproximaciones:** Las tasas reales pueden variar según:
   - Provincia/estado (ej: Canadá tiene GST/HST diferente por provincia)
   - Tipo de producto (digital vs físico)
   - Políticas específicas de Hotmart

2. **Hotmart es quien aplica los impuestos reales** en el checkout oficial

3. **Esta función es temporal** y está marcada claramente en el código como `// FUNCIÓN TEMPORAL`

4. **No todos los países están incluidos:** Si un país no está en la lista, se usa la tasa default del 15%

5. **Actualizar las tasas:** Si encuentras que alguna tasa está incorrecta, actualiza el objeto `TAX_RATES_BY_COUNTRY` en `lib/useGeoLocation.ts`

---

## Cuándo Remover Esta Función

Esta función temporal se puede remover cuando:

1. Hotmart permita mostrar el precio final con impuestos antes del checkout
2. Se implemente una integración directa con la API de Hotmart para obtener precios reales
3. Se decida no mostrar el precio con impuestos en la landing

---

## Preguntas Frecuentes

**P: ¿Por qué no coincide exactamente con el precio de Hotmart?**
R: Son aproximaciones basadas en tasas generales. Hotmart aplica las tasas exactas según su sistema.

**P: ¿Por qué Canadá muestra CAD 21.00 si el cálculo da CAD 20.94?**
R: Puede haber redondeos, fees adicionales, o tasas provinciales específicas que Hotmart aplica.

**P: ¿Puedo personalizar las tasas?**
R: Sí, edita el objeto `TAX_RATES_BY_COUNTRY` en `lib/useGeoLocation.ts:193`

**P: ¿Qué pasa si el usuario está en un país no listado?**
R: Se usa la tasa default del 15% (`TAX_RATES_BY_COUNTRY.DEFAULT`)
