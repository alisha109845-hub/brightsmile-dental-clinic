import { useEffect, useRef, useState } from 'react'
import ServiceCard from './ServiceCard'

export default function ServiceDeck({ services }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const deckRef = useRef(null)
  const wheelLockRef = useRef(false)

  const move = (direction) => {
    setActiveIndex((currentIndex) => (
      (currentIndex + direction + services.length) % services.length
    ))
  }

  useEffect(() => {
    const deck = deckRef.current
    if (!deck) return undefined

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < 10 || wheelLockRef.current) return
      event.preventDefault()
      wheelLockRef.current = true
      move(event.deltaY > 0 ? 1 : -1)
      window.setTimeout(() => {
        wheelLockRef.current = false
      }, 650)
    }

    deck.addEventListener('wheel', handleWheel, { passive: false })
    return () => deck.removeEventListener('wheel', handleWheel)
  }, [services.length])

  return (
    <div className="service-deck-wrap">
      <button
        type="button"
        className="service-deck-control service-deck-control-prev"
        onClick={() => move(-1)}
        aria-label="Show previous service"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div ref={deckRef} className="service-deck" aria-live="polite">
        {services.map((service, index) => {
          const offset = (index - activeIndex + services.length) % services.length
          const position = offset === 0 ? 'active' : offset === 1 ? 'next' : offset === services.length - 1 ? 'previous' : 'hidden'

          return (
            <div key={service.id} className={`service-deck-card service-deck-card-${position}`}>
              <ServiceCard service={service} compact showLearnMore={false} />
            </div>
          )
        })}
      </div>

      <button
        type="button"
        className="service-deck-control service-deck-control-next"
        onClick={() => move(1)}
        aria-label="Show next service"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="service-deck-dots" aria-label="Choose a service">
        {services.map((service, index) => (
          <button
            key={service.id}
            type="button"
            className={`service-deck-dot ${index === activeIndex ? 'is-active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${service.name}`}
            aria-current={index === activeIndex ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  )
}
