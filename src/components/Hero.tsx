import { motion } from 'framer-motion'

interface HeroProps {
  onOpenGift: () => void
}

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25 + i * 0.18,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

export default function Hero({ onOpenGift }: HeroProps) {
  return (
    <section className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-5 py-16 text-center sm:px-8">
      <motion.div
        className="mb-8 flex gap-3 sm:mb-10 sm:gap-5"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="inline-block text-rose-soft"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 2.4,
              delay: i * 0.35,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              fontSize: i === 1 ? '2.4rem' : '1.6rem',
              filter: 'drop-shadow(0 0 12px rgba(232, 160, 176, 0.55))',
            }}
          >
            ❤
          </motion.span>
        ))}
      </motion.div>

      <motion.h1
        className="font-serif text-[clamp(1.85rem,6.5vw,3.75rem)] font-medium leading-[1.25] tracking-wide text-cream"
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <span className="gold-text">Ծնունդդ շնորհավոր,</span>
        <br />
        <span className="mt-1 inline-block">իմ սեր ❤️</span>
      </motion.h1>

      <motion.p
        className="mt-5 max-w-md font-sans text-[clamp(0.95rem,3.2vw,1.2rem)] font-light leading-relaxed text-cream-soft/85 sm:mt-6"
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        Իմ կյանքի ամենագեղեցիկ մարդու համար
      </motion.p>

      <motion.div
        className="mt-4 message-ornament opacity-70 sm:mt-5"
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      />

      <motion.button
        type="button"
        onClick={onOpenGift}
        className="btn-gift mt-10 cursor-pointer rounded-full px-8 py-3.5 font-sans text-[0.95rem] font-medium tracking-wide text-cream sm:mt-12 sm:px-10 sm:py-4 sm:text-base"
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        whileTap={{ scale: 0.97 }}
      >
        Բացել իմ նվերը
      </motion.button>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-light/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1.6, duration: 0.8 },
          y: { delay: 1.6, duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        aria-hidden
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  )
}
