import { useEffect } from 'react'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import AppointmentCTA from '../components/AppointmentCTA'
import { services } from '../data/services'

export default function Services() {
  useEffect(() => {
    document.title = 'Services | BrightSmile Dental Clinic'
  }, [])

  return (
    <>
      <section className="py-20 md:py-24 bg-bg">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete dental care for every stage of your smile"
            description="Eight core services, delivered by a team that takes the time to explain every option before you decide."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      <AppointmentCTA />
    </>
  )
}
