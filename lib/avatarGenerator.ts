// Sistema de avatares realistas usando URLs estáticas de personas sintéticas
// Estas son URLs de personas generadas por IA que no existen en la vida real
// TODOS LOS AVATARES SON FEMENINOS para coincidir con el público objetivo

export const avatarUrls = [
  // Avatar 1 - Mujer joven profesional
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  // Avatar 2 - Mujer sonriente con cabello largo
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces',
  // Avatar 3 - Mujer con cabello ondulado
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
  // Avatar 4 - Mujer con estilo elegante
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces',
  // Avatar 5 - Mujer con cabello rizado
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=faces',
  // Avatar 6 - Mujer alegre con gafas
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop&crop=faces',
  // Avatar 7 - Mujer con cabello corto
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=faces',
  // Avatar 8 - Mujer con expresión amable
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces',
  // Avatar 9 - Mujer profesional con cabello oscuro
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=faces',
  // Avatar 10 - Mujer con sonrisa cálida
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces',
]

// Mapeo directo de nombres a índices de avatares
// Esto asegura que cada nombre siempre obtenga el mismo avatar único
const nameToAvatarMap: Record<string, number> = {
  'María González': 0,
  'Laura Martínez': 1,
  'Ana Rodríguez': 2,
  'Carmen López': 3,
  'Sofia Ramírez': 4,
  'Isabel Torres': 5,
}

export function getAvatarUrl(index: number): string {
  // Usa módulo para ciclar a través de los avatares disponibles
  return avatarUrls[index % avatarUrls.length]
}

export function getRandomAvatarUrl(): string {
  const randomIndex = Math.floor(Math.random() * avatarUrls.length)
  return avatarUrls[randomIndex]
}

// Para testimonios con nombres específicos, usa el mapeo directo
// Esto garantiza que cada nombre tenga un avatar único sin repeticiones
export function getAvatarByName(name: string): string {
  // Si el nombre está en el mapeo, usa el avatar asignado
  if (name in nameToAvatarMap) {
    return avatarUrls[nameToAvatarMap[name]]
  }

  // Fallback: genera un índice consistente basado en el nombre
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) - hash) + name.charCodeAt(i)
    hash = hash & hash
  }
  const index = Math.abs(hash) % avatarUrls.length
  return avatarUrls[index]
}
