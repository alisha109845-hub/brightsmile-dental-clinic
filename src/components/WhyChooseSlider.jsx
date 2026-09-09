import { useEffect, useState } from 'react'

export default function WhyChooseSlider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % items.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [items.length])

  return (
    <div className="why-slider">
      <div className="why-slider-stage" aria-live="polite">
        {items.map((item, index) => (
          <article
            key={item.title}
            className={`why-slide ${index === activeIndex ? 'is-active' : ''}`}
            style={{ backgroundImage: `url("${item.image}")` }}
            aria-hidden={index !== activeIndex}
          >
            <div className="why-slide-shade" />
            <div className="why-slide-content">
              <div className="why-slide-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {item.icon}
                </svg>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-white">{item.title}</h3>
              <p className="mt-3 max-w-xl text-sm md:text-base leading-relaxed text-white/80">{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="why-slider-controls">
        <div className="why-slider-dots" aria-label="Choose a reason">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`why-slider-dot ${index === activeIndex ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${item.title}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
