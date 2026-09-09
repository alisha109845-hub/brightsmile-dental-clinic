import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import AppointmentForm from '../components/AppointmentForm'

export default function Appointment() {
  const location = useLocation()
  const defaultService = location.state?.service || ''

  useEffect(() => {
    document.title = 'Book an Appointment | BrightSmile Dental Clinic'
  }, [])

  return (
    <section className="py-20 md:py-24 bg-bg">
      <div className="container-page">
        <SectionHeading
          eyebrow="Book a Visit"
          title="Request your appointment"
          description="Fill out the form below and our front desk will call or email to confirm your preferred time."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 max-w-3xl mx-auto">
          <AppointmentForm defaultService={defaultService} />
        </div>
      </div>
    </section>
  )
}
