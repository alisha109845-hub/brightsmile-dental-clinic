import { useEffect } from 'react'
import SectionHeading from '../components/SectionHeading'
import DoctorCard from '../components/DoctorCard'
import AppointmentCTA from '../components/AppointmentCTA'
import ScrollReveal from '../components/ScrollReveal'
import { doctors } from '../data/doctors'

export default function Doctors() {
  useEffect(() => {
    document.title = 'Our Doctors | BrightSmile Dental Clinic'
  }, [])

  return (
    <>
      <section className="py-20 md:py-24 bg-bg">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Team"
            title="Doctors who take the time to listen"
            description="Four specialists, one shared approach: explain clearly, treat gently, and follow up until you're comfortable."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page doctors-list">
          {doctors.map((d) => (
            <ScrollReveal key={d.id} delay={doctors.indexOf(d) * 120}>
              <DoctorCard doctor={d} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <AppointmentCTA />
    </>
  )
}
