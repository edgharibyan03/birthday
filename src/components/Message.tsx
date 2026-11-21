import { motion } from 'framer-motion'
import { useRef } from 'react'

const paragraphs = [
  'Իմ սիրուն, իմ սրտի ամենանուրբ ու լուսավոր աղջիկ, շնորհավոր ծնունդդ։ ❤️',
  'Դու իմ կյանքի ամենագեղեցիկ նվերն ես, իմ ժպիտի պատճառը և իմ ամենասիրելի մարդը։ Թող քո յուրաքանչյուր օրը լցված լինի երջանկությամբ, սիրով ու անսահման ժպիտներով։',
  'Մաղթում եմ, որ բոլոր երազանքներդ իրականանան, աչքերդ միշտ փայլեն երջանկությունից, իսկ սիրտդ երբեք չկորցնի իր ջերմությունը։',
  'Շնորհակալ եմ, որ կաս։ Ես քեզ անսահման սիրում եմ։ ❤️',
]

export default function Message() {
  const ref = useRef<HTMLElement>(null)

  return (
    <section
      id="gift"
      ref={ref}
      className="relative z-10 flex min-h-dvh items-center justify-center px-5 py-24 sm:px-8 sm:py-28"
    >
      <motion.article
        className="relative w-full max-w-2xl px-1 sm:px-4"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-8 flex flex-col items-center gap-3 sm:mb-10">
          <span className="text-2xl text-rose-soft/90" aria-hidden>
            ✦
          </span>
          <div className="message-ornament" />
        </div>

        <div className="space-y-7 text-center sm:space-y-9">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              className={`font-serif leading-[1.9] text-cream/95 ${
                i === 0 || i === paragraphs.length - 1
                  ? 'text-[clamp(1.08rem,3.6vw,1.4rem)] font-medium'
                  : 'text-[clamp(0.98rem,3.1vw,1.18rem)] font-normal text-cream-soft/88'
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.15 + i * 0.2,
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12">
          <div className="message-ornament" />
          <motion.span
            className="text-xl text-gold-light"
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          >
            ❤
          </motion.span>
        </div>
      </motion.article>
    </section>
  )
}
