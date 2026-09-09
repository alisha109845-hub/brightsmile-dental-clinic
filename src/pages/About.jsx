import { useEffect } from 'react'
import SectionHeading from '../components/SectionHeading'
import DoctorCard from '../components/DoctorCard'
import AppointmentCTA from '../components/AppointmentCTA'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import { doctors } from '../data/doctors'
import digitalImagingImage from '../assets/facilities/digital-imaging-suite.jpg'
import treatmentRoomImage from '../assets/facilities/private-treatment-room.jpg'
import restorationImage from '../assets/facilities/restoration.jpg'
import sedationImage from '../assets/facilities/sedation.jpg'

const values = [
  { title: 'Compassion First', text: 'We listen before we treat, and explain every option in plain language.' },
  { title: 'Precision', text: 'Digital diagnostics and careful planning behind every procedure, big or small.' },
  { title: 'Transparency', text: 'Clear pricing and treatment plans, with no surprises at checkout.' },
  { title: 'Continuous Learning', text: 'Our team trains regularly in the latest techniques and materials.' },
]

const facilities = [
  { title: 'Digital Imaging Suite',
    text: 'Our low-radiation digital X-rays and advanced 3D scans give the care team a remarkably clear view of your oral health. With precise images available during the appointment, we can explain findings more clearly, plan treatment with confidence, and catch small concerns before they become larger problems.',
    image: digitalImagingImage
  },
  { title: 'Private Treatment Rooms', text: 'Each private treatment room is designed to feel calm, quiet, and entirely your own. Soft lighting, comfortable surroundings, and thoughtful spacing help take the pressure out of longer appointments, while our clinicians have everything they need close at hand to keep your care efficient and comfortable.', image: treatmentRoomImage },
  { title: 'In-House Lab Partnership', text: 'Through our trusted local dental lab partnership, many crowns and restorations can be completed within the same week. Our dentists work closely with skilled technicians to refine the shape, shade, and fit of every piece, creating results that feel natural and are made to last.', image: restorationImage },
  { title: 'Sedation Options', text: 'If dental visits make you feel uneasy, we offer gentle sedation options to help you feel relaxed from the moment you arrive. Nitrous oxide and oral sedation are discussed carefully in advance, so you can choose the level of support that makes treatment feel manageable and predictable.', image: sedationImage },
]

function ValuesSection() {
  return (
    <section className="values-section">
      <div className="container-page values-layout">
        <div className="values-intro">
          <SectionHeading eyebrow="What Guides Us" title="Our values" />
          <p className="values-note">
            Every longevity program starts with understanding. Here&apos;s how we keep you performing for years to come.
          </p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 100}>
              <article className="value-card">
                <span className="value-card-number">0{index + 1}</span>
                <span className="value-corner-dot value-corner-dot-left" aria-hidden="true" />
                <span className="value-corner-dot value-corner-dot-right" aria-hidden="true" />
                <span className="value-corner-dot value-corner-dot-bottom-left" aria-hidden="true" />
                <span className="value-corner-dot value-corner-dot-bottom-right" aria-hidden="true" />
                <h3 className="font-display text-xl text-navy">{value.title}</h3>
                <p>{value.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  useEffect(() => {
    document.title = 'About Us | BrightSmile Dental Clinic'
  }, [])

  return (
    <>
      <section className="py-20 md:py-28 bg-bg">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Built around patients who used to dread the dentist"
              description="BrightSmile Dental Clinic opened in 2014 with a simple idea: dental visits should feel calm, clear, and genuinely cared for. Fourteen years later, we're still guided by that same idea &mdash; now for over 5,000 patients across Riverside."
            />
            <Button to="/appointment" variant="primary" 
            className="mt-8">Book an Appointment</Button>
          </div>
          <div className="rounded-lg overflow-hidden aspect-4/3 shadow-[0_30px_60px_-24px_rgba(16,38,63,0.3)]">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=900&auto=format&fit=crop"
              alt="BrightSmile Dental Clinic reception area"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-tint">
        <div className="container-page grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-surface rounded-lg border border-line/80 p-8">
            <h3 className="font-display text-2xl text-navy">Our Mission</h3>
            <p className="mt-3 text-charcoal-soft leading-relaxed">
              To make excellent dental care approachable &mdash; combining modern
              technology with an unhurried, human approach to every appointment.
            </p>
          </div>
          <div className="bg-surface rounded-lg border border-line/80 p-8">
            <h3 className="font-display text-2xl text-navy">Our Vision</h3>
            <p className="mt-3 text-charcoal-soft leading-relaxed">
              A Riverside where no one puts off dental care out of fear, cost
              confusion, or a bad past experience.
            </p>
          </div>
        </div>
      </section>

      <ValuesSection />

      <section className="py-24 bg-navy-tint">
        <div className="container-page">
          <SectionHeading eyebrow="Facilities & Technology" title="Equipped for precise, comfortable care" align="center" className="mx-auto" />
          <div className="facility-list mt-14">
            {facilities.map((f, index) => (
              <ScrollReveal key={f.title} delay={index * 120}>
                <article className={`facility-row group ${index % 2 === 0 ? 'facility-row-reverse' : ''}`}>
                  <div className="facility-row-image overflow-hidden rounded-lg">
                    <img src={f.image} alt={f.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="facility-row-copy">
                    <h3 className="font-display text-3xl leading-tight text-navy sm:text-4xl">{f.title}</h3>
                    <p className="mt-6 max-w-xl text-base leading-8 text-charcoal-soft">{f.text}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

     

      <AppointmentCTA />
    </>
  )
}
