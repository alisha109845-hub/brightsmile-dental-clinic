import { useEffect, useRef, useState } from 'react'
import veneersBefore from '../assets/transformations/veeners-before.png'
import veneersAfter from '../assets/transformations/veeners-after.png'
import veneersPatient from '../assets/transformations/veeners-patient.png'
import makeoverBefore from '../assets/transformations/makeover-before.png'
import makeoverAfter from '../assets/transformations/makeover-after.png'
import makeoverPatient from '../assets/transformations/makeover-patient.png'
import whiteningBefore from '../assets/transformations/whitening-before.png'
import whiteningAfter from '../assets/transformations/whitening-after.png'
import whiteningPatient from '../assets/transformations/whitening-patient.png'

const transformations = [
  {
    title: 'Porcelain Veneers',
    description: 'A refined smile design that brightens the teeth and creates a balanced, natural-looking finish.',
    patientImage: veneersPatient,
    beforeImage: veneersBefore,
    afterImage: veneersAfter,
  },
  {
    title: 'Full Smile Makeover',
    description: 'A carefully planned combination of restorative and cosmetic care designed around the patient’s features.',
    patientImage: makeoverPatient,
    beforeImage: makeoverBefore,
    afterImage: makeoverAfter,
  },
  {
    title: 'Whitening & Bonding',
    description: 'Subtle whitening and precision bonding restore brightness while keeping the result natural and personal.',
    patientImage: whiteningPatient,
    beforeImage: whiteningBefore,
    afterImage: whiteningAfter,
  },
]

export default function TransformationStories() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current
      if (!section) return

      const scrollDistance = section.offsetHeight - window.innerHeight
      const sectionProgress = scrollDistance > 0
        ? Math.min(1, Math.max(0, -section.getBoundingClientRect().top / scrollDistance))
        : 0
      setProgress(sectionProgress)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  const activeIndex = Math.min(transformations.length - 1, Math.floor(progress * transformations.length))

  return (
    <section ref={sectionRef} className="transformation-stories bg-bg">
      <div className="transformation-stories-sticky">
        <div className="container-page transformation-stories-frame">
          <div className="transformation-stories-heading text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-dark">Real Results</p>
            <h2 className="mt-2 font-display text-3xl text-navy sm:text-4xl">Smiles, transformed</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-charcoal-soft">A few of the transformations our cosmetic and restorative treatments have made possible.</p>
          </div>

          <div className="transformation-story-stage" aria-live="polite">
            {transformations.map((transformation, index) => {
              const distance = index - progress * transformations.length
              const isActive = index === activeIndex
              const translateY = distance < 0 ? distance * 8 : distance * 100
              const scale = isActive ? 1 : Math.max(0.93, 1 - Math.abs(distance) * 0.025)

              return (
                <article
                  key={transformation.title}
                  className="transformation-story-card"
                  style={{
                    zIndex: transformations.length - Math.abs(Math.round(distance)),
                    transform: `translate3d(0, ${translateY}%, 0) scale(${scale})`,
                  }}
                  aria-hidden={!isActive}
                >
                  <div className="transformation-story-copy">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-dark">{String(index + 1).padStart(2, '0')} / {String(transformations.length).padStart(2, '0')}</p>
                    <h3 className="mt-4 font-display text-3xl leading-tight text-navy sm:text-4xl">{transformation.title}</h3>
                    <p className="mt-5 max-w-md text-sm leading-7 text-charcoal-soft">{transformation.description}</p>
                  </div>

                  <div className="transformation-story-images">
                    <div className="transformation-face-image">
                      <img src={transformation.patientImage} alt={`Patient portrait after ${transformation.title}`} loading="lazy" />
                    </div>
                    <div className="transformation-comparison" tabIndex="0">
                      <div className="transformation-comparison-pane">
                        <img src={transformation.beforeImage} alt={`${transformation.title} before treatment`} loading="lazy" />
                        <span>Before</span>
                      </div>
                      <div className="transformation-comparison-pane">
                        <img src={transformation.afterImage} alt={`${transformation.title} after treatment`} loading="lazy" />
                        <span>After</span>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="transformation-story-progress" aria-label={`Transformation ${activeIndex + 1} of ${transformations.length}`}>
            {transformations.map((transformation, index) => (
              <span key={transformation.title} className={index === activeIndex ? 'is-active' : ''} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
