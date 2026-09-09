import { useEffect, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

const contactInitial = { name: '', email: '', message: '' }

export default function Contact() {
  const [values, setValues] = useState(contactInitial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.title = 'Contact Us | BrightSmile Dental Clinic'
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) nextErrors.email = 'Enter a valid email.'
    if (!values.message.trim()) nextErrors.message = 'Please add a short message.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSent(true)
  }

  return (
    <>
      <section className="py-20 md:py-24 bg-bg">
        <div className="container-page">
          <SectionHeading
            eyebrow="Get In Touch"
            title="We'd love to hear from you"
            description="Questions about treatment, insurance, or your next visit? Reach out and we'll get back to you within one business day."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <InfoRow label="Address" value="228 Maple Grove Avenue, Riverside, CA 92501" />
            <InfoRow label="Phone" value="(555) 214-7890" />
            <InfoRow label="Email" value="hello@brightsmiledental.com" />
            <InfoRow label="Opening Hours" value="Mon–Fri: 8am–6pm · Sat: 9am–2pm · Sun: Closed" />

            <div className="rounded-lg overflow-hidden border border-line aspect-4/3 bg-navy-tint flex items-center justify-center">
              <iframe
                title="BrightSmile Dental Clinic location"
                src="https://www.google.com/maps?q=228+Maple+Grove+Avenue,+Riverside,+CA+92501&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <Button href="https://maps.google.com" variant="secondary">Get Directions</Button>
          </div>

          <div>
            {sent ? (
              <div className="bg-teal-tint border border-teal/25 rounded-lg p-10 text-center h-full flex flex-col items-center justify-center">
                <h3 className="font-display text-2xl text-navy">Message sent</h3>
                <p className="mt-2 text-charcoal-soft max-w-sm">
                  Thanks, {values.name.split(' ')[0]}. We'll reply to {values.email} within one business day.
                </p>
                <Button variant="secondary" className="mt-6" onClick={() => { setValues(contactInitial); setSent(false) }}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="bg-surface rounded-lg border border-line/80 p-6 md:p-8 space-y-6">
                <div>
                  <label htmlFor="c-name" className="block text-sm font-medium text-navy mb-1.5">Full Name</label>
                  <input
                    id="c-name" name="name" type="text" value={values.name} onChange={handleChange}
                    className={`w-full rounded-md border bg-bg px-4 py-2.5 text-sm focus-ring outline-none ${errors.name ? 'border-red-400' : 'border-line focus:border-teal'}`}
                    placeholder="Your name" aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-600" role="alert">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-sm font-medium text-navy mb-1.5">Email Address</label>
                  <input
                    id="c-email" name="email" type="email" value={values.email} onChange={handleChange}
                    className={`w-full rounded-md border bg-bg px-4 py-2.5 text-sm focus-ring outline-none ${errors.email ? 'border-red-400' : 'border-line focus:border-teal'}`}
                    placeholder="you@email.com" aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-600" role="alert">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="c-message" className="block text-sm font-medium text-navy mb-1.5">Message</label>
                  <textarea
                    id="c-message" name="message" rows={5} value={values.message} onChange={handleChange}
                    className={`w-full rounded-md border bg-bg px-4 py-2.5 text-sm focus-ring outline-none ${errors.message ? 'border-red-400' : 'border-line focus:border-teal'}`}
                    placeholder="How can we help?" aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-600" role="alert">{errors.message}</p>}
                </div>
                <Button type="submit" variant="primary" className="w-full">Send Message</Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function InfoRow({ label, value }) {
  return (
    <div className="flex gap-3 text-sm">
      <span className="text-teal-dark font-semibold w-32 shrink-0">{label}</span>
      <span className="text-charcoal-soft">{value}</span>
    </div>
  )
}
