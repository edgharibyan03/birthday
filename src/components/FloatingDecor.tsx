import { useMemo, type CSSProperties } from 'react'

type DecorKind = 'heart' | 'petal' | 'spark'

interface DecorItem {
  id: number
  kind: DecorKind
  left: string
  top: string
  size: number
  duration: number
  delay: number
  opacity: number
  twinkleDur: number
}

function createItems(count: number, kind: DecorKind): DecorItem[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    kind,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: kind === 'spark' ? 2 + Math.random() * 3 : 10 + Math.random() * 18,
    duration: kind === 'petal' ? 12 + Math.random() * 10 : 14 + Math.random() * 12,
    delay: Math.random() * 14,
    opacity: 0.25 + Math.random() * 0.55,
    twinkleDur: 2 + Math.random() * 3,
  }))
}

function HeartSvg({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

function PetalSvg({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 20 28" fill="currentColor" aria-hidden>
      <ellipse cx="10" cy="14" rx="8" ry="13" />
    </svg>
  )
}

export default function FloatingDecor() {
  const hearts = useMemo(() => createItems(10, 'heart'), [])
  const petals = useMemo(() => createItems(14, 'petal'), [])
  const sparks = useMemo(() => createItems(28, 'spark'), [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden" aria-hidden>
      {hearts.map((item) => (
        <span
          key={`h-${item.id}`}
          className="absolute bottom-[-5%] text-rose-soft"
          style={{
            left: item.left,
            opacity: item.opacity,
            animation: `float-drift ${item.duration}s linear ${item.delay}s infinite`,
            color: item.id % 2 === 0 ? '#e8a0b0' : '#d4788a',
            filter: 'drop-shadow(0 0 6px rgba(232, 160, 176, 0.4))',
          }}
        >
          <HeartSvg size={item.size} />
        </span>
      ))}

      {petals.map((item) => (
        <span
          key={`p-${item.id}`}
          className="absolute top-0"
          style={{
            left: item.left,
            opacity: item.opacity,
            color: item.id % 3 === 0 ? '#b85a6e' : item.id % 3 === 1 ? '#d4788a' : '#e8a0b0',
            animation: `petal-fall ${item.duration}s ease-in-out ${item.delay}s infinite`,
            filter: 'blur(0.2px)',
          }}
        >
          <PetalSvg size={item.size * 0.7} />
        </span>
      ))}

      {sparks.map((item) => (
        <span
          key={`s-${item.id}`}
          className="particle-twinkle absolute rounded-full"
          style={
            {
              left: item.left,
              top: item.top,
              width: item.size,
              height: item.size,
              background:
                item.id % 3 === 0
                  ? 'radial-gradient(circle, #e8d5a3 0%, transparent 70%)'
                  : 'radial-gradient(circle, #fff8f0 0%, transparent 70%)',
              '--dur': `${item.twinkleDur}s`,
              '--delay': `${item.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
