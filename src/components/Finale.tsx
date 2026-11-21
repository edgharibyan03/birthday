import { motion } from 'framer-motion'

function BigHeart() {
  return (
    <svg
      className="heart-pulse h-[clamp(5.5rem,22vw,9rem)] w-[clamp(5.5rem,22vw,9rem)] text-rose-mid"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <defs>
        <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8a0b0" />
          <stop offset="45%" stopColor="#d4788a" />
          <stop offset="100%" stopColor="#b85a6e" />
        </linearGradient>
      </defs>
      <path
        fill="url(#heartGrad)"
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  )
}

export default function Finale() {
  return (
    <section className="relative z-10 flex min-h-[85dvh] flex-col items-center justify-center overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-32">
      {/* Burst of decorative petals near finale */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-rose-soft/40"
            style={{
              left: `${10 + i * 11}%`,
              top: `${20 + (i % 4) * 15}%`,
              fontSize: `${0.9 + (i % 3) * 0.4}rem`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 15, -10, 0],
              opacity: [0.25, 0.55, 0.25],
            }}
            transition={{
              duration: 4 + i * 0.4,
              delay: i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {i % 2 === 0 ? '❤' : '❀'}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <BigHeart />
      </motion.div>

      <motion.h2
        className="mt-10 max-w-xl font-serif text-[clamp(1.4rem,5vw,2.5rem)] font-medium leading-[1.4] tracking-wide"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.25, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="gold-text">Դու իմ ամենագեղեցիկ պատմությունն ես</span>
        <span className="ml-1 text-rose-soft">❤️</span>
      </motion.h2>

      <motion.p
        className="mt-6 font-sans text-sm font-light tracking-widest text-cream-soft/50 sm:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55, duration: 1 }}
      >
        ընդմիշտ քոնը
      </motion.p>

      <motion.div
        className="mt-12 flex gap-4 text-rose-soft/70"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.8 }}
        aria-hidden
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 2.2,
              delay: i * 0.18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ fontSize: i === 2 ? '1.4rem' : '1rem' }}
          >
            ❤
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}
