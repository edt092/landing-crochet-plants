/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimización de Imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sp-ao.shortpixel.ai',
      },
      {
        protocol: 'https',
        hostname: 'sinfronterasacademia.info',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 año
  },

  // Compresión
  compress: true,

  // Headers de Seguridad y Performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      // Cache para assets estáticos
      {
        source: '/img/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Rewrites para SEO-friendly URLs (si necesitas en el futuro)
  async rewrites() {
    return []
  },

  // Redirects (ejemplo para www vs non-www)
  async redirects() {
    return [
      // Descomentar cuando configures tu dominio
      // {
      //   source: '/:path*',
      //   has: [
      //     {
      //       type: 'host',
      //       value: 'www.tudominio.com',
      //     },
      //   ],
      //   destination: 'https://tudominio.com/:path*',
      //   permanent: true,
      // },
    ]
  },

  // Optimización del Build
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false, // Ocultar X-Powered-By header

  // Performance y Optimizaciones
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  // Configuración para producción
  productionBrowserSourceMaps: false,

  // Webpack optimizations (opcional)
  webpack: (config, { isServer }) => {
    // Optimizaciones adicionales si son necesarias
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
}

module.exports = nextConfig
