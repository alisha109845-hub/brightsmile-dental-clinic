import Button from './Button'
import SmileArc from './SmileArc'

export default function AppointmentCTA() {
  return (
    <section className="bg-navy relative overflow-hidden">
      <div className="container-page py-20 relative z-10 text-center">
        <SmileArc className="mx-auto" color="#4C9A94" />
        <h2 className="font-display text-3xl md:text-4xl font-medium text-white mt-5 max-w-xl mx-auto leading-tight">
          Your healthier, brighter smile is one visit away
        </h2>
        <p className="mt-4 text-white/70 max-w-md mx-auto">
          Same-week appointments available. Most insurance plans accepted.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/appointment" variant="primary">Book an Appointment</Button>
          <Button href="tel:+15552147890" variant="ghost">Call (555) 214-7890</Button>
        </div>
      </div>
      <svg
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-[0.08]"
        width="900" height="200" viewBox="0 0 900 200" fill="none" aria-hidden="true"
      >
        <path d="M20 40C220 190 680 190 880 40" stroke="white" strokeWidth="60" strokeLinecap="round" />
      </svg>
    </section>
  )
}
