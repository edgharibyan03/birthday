import { useCallback } from 'react'
import Finale from './components/Finale'
import FloatingDecor from './components/FloatingDecor'
import Hero from './components/Hero'
import Message from './components/Message'

export default function App() {
  const openGift = useCallback(() => {
    const el = document.getElementById('gift')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <div className="bg-romance vignette relative min-h-dvh">
      <FloatingDecor />
      <main className="relative z-10">
        <Hero onOpenGift={openGift} />
        <Message />
        <Finale />
      </main>
    </div>
  )
}
