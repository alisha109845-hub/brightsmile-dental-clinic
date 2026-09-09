import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import SmileArc from '../components/SmileArc'
import StatBlock from '../components/StatBlock'
import ServiceDeck from '../components/ServiceDeck'
import WhyChooseSlider from '../components/WhyChooseSlider'
import DoctorCard from '../components/DoctorCard'
import TestimonialCard from '../components/TestimonialCard'
import TransformationStories from '../components/TransformationStories'
import AppointmentCTA from '../components/AppointmentCTA'
import ScrollReveal from '../components/ScrollReveal'
import { services } from '../data/services'
import { doctors } from '../data/doctors'
import { testimonials } from '../data/testimonials'
import bracesImage from '../assets/braces.jpg'

const whyChooseUs = [
  {
    title: 'Experienced Dentists',
    text: 'Our clinicians average over a decade of practice across general, cosmetic, and specialist care.',
    image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1400&auto=format&fit=crop',
    icon: (
      <path d="M12 3l7 4v6c0 5-3.4 8.4-7 10-3.6-1.6-7-5-7-10V7l7-4z" stroke="#4C9A94" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Modern Technology',
    text: 'Digital X-rays, 3D implant planning, and same-week crowns keep visits fast and precise.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1400&auto=format&fit=crop',
    icon: (
      <>
        <rect x="4" y="5" width="16" height="11" rx="1.5" stroke="#4C9A94" strokeWidth="1.6" />
        <path d="M9 20h6M12 16v4" stroke="#4C9A94" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Personalized Treatment',
    text: 'Every plan is built around your goals, timeline, and comfort &mdash; never one-size-fits-all.',
    image: bracesImage,
    icon: (
      <path d="M12 21s-7-4.4-9.5-8.8C.8 8.4 3 5 6.5 5c2 0 3.4 1.1 4.5 2.4C12.1 6.1 13.5 5 15.5 5 19 5 21.2 8.4 19.5 12.2 17 16.6 12 21 12 21z" stroke="#4C9A94" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Comfortable Environment',
    text: 'Calming treatment rooms, sedation options, and a team trained to ease dental anxiety.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400&auto=format&fit=crop',
    icon: (
      <path d="M4 12a8 8 0 1116 0v5a2 2 0 01-2 2h-1v-6h3M4 12v5a2 2 0 002 2h1v-6H4" stroke="#4C9A94" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
    ),
  },
]

export default function Home() {
  useEffect(() => {
    document.title = 'BrightSmile Dental Clinic | A Healthier Smile Starts Here'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-bg">
        <div className="container-page py-10 md:py-12 lg:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="order-2 lg:order-1 w-full max-w-2xl mx-auto text-center lg:text-left">
            <p className="hero-item hero-item-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-dark mb-4">
              Riverside&rsquo;s Trusted Dental Home
            </p>
            <h1 className="hero-item hero-item-2 font-display text-4xl sm:text-5xl md:text-[3.4rem] font-medium leading-[1.08] text-navy">
              A Healthier Smile
              <br />
              Starts Here
            </h1>
            <SmileArc className="hero-item hero-item-3 mt-5 mx-auto lg:mx-0" />
            <p className="hero-item hero-item-4 mt-6 text-lg text-charcoal-soft leading-relaxed max-w-md mx-auto lg:mx-0">
              From routine cleanings to full smile makeovers, BrightSmile pairs
              experienced dentists with gentle, modern care &mdash; so every visit
              feels easy.
            </p>
            <div className="hero-item hero-item-5 mt-9 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button to="/appointment" variant="primary">Book an Appointment</Button>
              <Button to="/services" variant="secondary">Explore Services</Button>
            </div>

            <div className="hero-item hero-item-6 mt-12 flex items-center justify-center lg:justify-start gap-6">
              <div className="flex -space-x-3">
                {doctors.slice(0, 3).map((d) => (
                  <img
                    key={d.id}
                    src={d.image}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover border-2 border-bg"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-semibold text-navy">Gentle care, every visit</p>
                <p className="text-charcoal-soft">Comfort-focused dentistry for all ages</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative w-full max-w-md mx-auto lg:ml-auto">
            <div className="hero-image-reveal relative rounded-lg overflow-hidden h-72 sm:h-80 md:h-96 lg:h-107.5 shadow-[0_30px_60px_-24px_rgba(16,38,63,0.35)]">
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=900&auto=format&fit=crop"
                alt="Dentist consulting with a smiling patient at BrightSmile Dental Clinic"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hero-badge-reveal absolute bottom-3 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-55 sm:bottom-4 sm:left-4 sm:translate-x-0 lg:bottom-5 lg:-left-5 bg-surface rounded-lg shadow-[0_20px_40px_-20px_rgba(16,38,63,0.3)] border border-line/70 p-4 sm:p-5">
              <p className="font-display text-3xl text-navy">Same-day appointments</p>
              <p className="text-xs text-charcoal-soft mt-1">Flexible scheduling for busy families</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <ScrollReveal className="stats-section">
      <section className="border-y border-line bg-surface">
        <div className="container-page py-12 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          <StatBlock value="10+" label="Years Experience" />
          <StatBlock value="5,000+" label="Happy Patients" />
          <StatBlock value="4.9/5" label="Patient Rating" />
          <StatBlock value="6" label="Specialist Doctors" />
        </div>
      </section>
      </ScrollReveal>

      {/* Services */}
      <ScrollReveal>
      <section className="py-24">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="What We Offer"
              title="Complete dental care, under one roof"
              description="From preventive checkups to full restorations, our services cover every stage of your smile."
            />
            <Button to="/services" variant="secondary" className="shrink-0">View All Services</Button>
          </div>
          <ServiceDeck services={services.slice(0, 6)} />
        </div>
      </section>
      </ScrollReveal>

      {/* Why choose us */}
      <ScrollReveal>
      <section className="py-24 bg-navy-tint">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Patients Choose Us"
            title="Dentistry that puts you at ease"
            align="center"
            className="why-heading mx-auto"
          />
          <WhyChooseSlider items={whyChooseUs} />
        </div>
      </section>
      </ScrollReveal>

      {/* Doctors */}
      <ScrollReveal>
      <section className="py-24">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Meet The Team"
              title="Doctors who take the time to listen"
            />
            <Button to="/doctors" variant="secondary" className="shrink-0">Meet the Full Team</Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((d) => (
              <DoctorCard key={d.id} doctor={{ ...d, bio: undefined }} compact />
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal>
      <section className="py-24 bg-navy-tint">
        <div className="container-page">
          <SectionHeading
            eyebrow="Patient Stories"
            title="Trusted by families across Riverside"
            align="center"
            className="mx-auto"
          />
          <div className="story-deck-grid mt-14 grid grid-cols-1 md:grid-cols-2 gap-7">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      <TransformationStories />

      {/* FAQs */}
      <ScrollReveal>
      <section className="py-24 bg-navy-tint">
        <div className="container-page">
          <SectionHeading
            eyebrow="FAQs"
            title="Questions, answered clearly"
            description="Helpful answers about visits, treatment, and making your care feel simple."
            align="center"
            className="mx-auto"
          />
          <div className="faq-list mt-14 mx-auto max-w-4xl">
            {[
              {
                question: 'What should I expect at my first visit?',
                answer: 'We will discuss your goals, review your dental history, perform a complete examination, and explain any recommended next steps before treatment begins.',
              },
              {
                question: 'How often should I visit the dentist?',
                answer: 'Most patients benefit from a checkup and professional cleaning every six months. We may recommend a different schedule based on your needs.',
              },
              {
                question: 'Do you offer cosmetic dentistry consultations?',
                answer: 'Yes. We offer personalized consultations for whitening, bonding, veneers, crowns, and complete smile makeovers.',
              },
              {
                question: 'Are dental treatments painful?',
                answer: 'We use gentle techniques and local anesthetic when needed to keep you comfortable. We will always explain what you may feel before we begin.',
              },
              {
                question: 'Do you treat dental emergencies?',
                answer: 'Yes. Call our office as soon as possible and we will help you understand the next available option for urgent care.',
              },
              {
                question: 'Do you accept dental insurance?',
                answer: 'Our team can help you understand your benefits and provide a clear estimate before your treatment is scheduled.',
              },
            ].map((faq, index) => (
              <details key={faq.question} className="faq-item group" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left font-display text-lg font-medium text-navy marker:hidden">
                  {faq.question}
                  <span className="faq-toggle flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal text-2xl font-light leading-none text-white transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-2xl px-6 pb-6 pr-16 text-sm leading-relaxed text-charcoal-soft">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
        <AppointmentCTA />
      </ScrollReveal>

      
    </>
  )
}
