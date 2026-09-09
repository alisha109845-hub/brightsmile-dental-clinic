import { useEffect, useRef, useState } from 'react'

export default function StatBlock({ value, label }) {
  const cardRef = useRef(null)
  const resizeTimeoutRef = useRef(null)
  const [hasEntered, setHasEntered] = useState(false)
  const [countRun, setCountRun] = useState(0)
  const numericValue = Number.parseFloat(value.replace(/,/g, ''))
  const decimalPlaces = Number.isInteger(numericValue) ? 0 : 1
  const valueSuffix = value.includes('/5') ? '/5' : value.endsWith('+') ? '+' : ''
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasEntered(true)
        observer.disconnect()
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' })

    observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasEntered) return undefined

    const handleResize = () => {
      window.clearTimeout(resizeTimeoutRef.current)
      resizeTimeoutRef.current = window.setTimeout(() => {
        setCountRun((run) => run + 1)
      }, 180)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.clearTimeout(resizeTimeoutRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [hasEntered])

  useEffect(() => {
    if (!hasEntered) return undefined

    const duration = 1400
    const startTime = performance.now()
    let animationFrame

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(numericValue)
      return undefined
    }

    const animateValue = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easedProgress = 1 - ((1 - progress) ** 3)
      setDisplayValue(progress === 1 ? numericValue : numericValue * easedProgress)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateValue)
      }
    }

    animationFrame = requestAnimationFrame(animateValue)
    return () => cancelAnimationFrame(animationFrame)
  }, [countRun, hasEntered, numericValue])

  return (
    <div ref={cardRef} className={`stats-card stats-card-reveal ${hasEntered ? 'is-visible' : ''} text-center bg-teal p-6 md:p-7 rounded-lg shadow-[0_14px_30px_-16px_rgba(16,38,63,0.5)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_-16px_rgba(16,38,63,0.55)]`}>
      <p className="font-display text-4xl md:text-5xl font-medium text-white">
        {displayValue.toLocaleString('en-US', { minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces })}{valueSuffix}
      </p>
      <p className="mt-1.5 text-sm text-white/80 tracking-wide">{label}</p>
    </div>
  )
}
