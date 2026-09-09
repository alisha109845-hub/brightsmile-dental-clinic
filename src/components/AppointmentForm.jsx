import { useState } from 'react'
import { services } from '../data/services'
import { doctors } from '../data/doctors'
import Button from './Button'

const initialState = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  service: '',
  doctor: '',
  message: '',
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  if (!values.phone.trim()) {
    errors.phone = 'Please enter a phone number.'
  } else if (!/^[\d()+\-\s]{7,20}$/.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number.'
  }
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.date) errors.date = 'Please choose a preferred date.'
  if (!values.time) errors.time = 'Please choose a preferred time.'
  if (!values.service) errors.service = 'Please select a service.'
  return errors
}

export default function AppointmentForm({ defaultService = '' }) {
  const [values, setValues] = useState({ ...initialState, service: defaultService })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="bg-teal-tint border border-teal/25 rounded-lg p-10 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-teal flex items-center justify-center">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
            <path d="M6 13l5 5 9-11" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-navy mt-5">Request received</h3>
        <p className="mt-2 text-charcoal-soft max-w-md mx-auto leading-relaxed">
          Thank you, {values.name.split(' ')[0]}. Our front desk will call {values.phone} within
          one business day to confirm your appointment on {values.date} at {values.time}.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setValues(initialState)
            setSubmitted(false)
          }}
        >
          Book another appointment
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-surface rounded-lg border border-line/80 p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Full Name" name="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            className={inputClass(errors.name)}
            placeholder="Jordan Smith"
            aria-invalid={!!errors.name}
          />
        </Field>

        <Field label="Phone Number" name="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            className={inputClass(errors.phone)}
            placeholder="(555) 123-4567"
            aria-invalid={!!errors.phone}
          />
        </Field>

        <Field label="Email Address" name="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className={inputClass(errors.email)}
            placeholder="jordan@email.com"
            aria-invalid={!!errors.email}
          />
        </Field>

        <Field label="Preferred Service" name="service" error={errors.service}>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={handleChange}
            className={inputClass(errors.service)}
            aria-invalid={!!errors.service}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.name}>{s.name}</option>
            ))}
          </select>
        </Field>

        <Field label="Preferred Date" name="date" error={errors.date}>
          <input
            id="date"
            name="date"
            type="date"
            value={values.date}
            onChange={handleChange}
            className={inputClass(errors.date)}
            aria-invalid={!!errors.date}
          />
        </Field>

        <Field label="Preferred Time" name="time" error={errors.time}>
          <input
            id="time"
            name="time"
            type="time"
            value={values.time}
            onChange={handleChange}
            className={inputClass(errors.time)}
            aria-invalid={!!errors.time}
          />
        </Field>

        <Field label="Preferred Doctor (optional)" name="doctor">
          <select
            id="doctor"
            name="doctor"
            value={values.doctor}
            onChange={handleChange}
            className={inputClass()}
          >
            <option value="">No preference</option>
            {doctors.map((d) => (
              <option key={d.id} value={d.name}>{d.name}</option>
            ))}
          </select>
        </Field>

        <div className="md:col-span-2">
          <Field label="Message (optional)" name="message">
            <textarea
              id="message"
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              className={inputClass()}
              placeholder="Tell us anything that would help us prepare for your visit."
            />
          </Field>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <Button type="submit" variant="primary">
          Request Appointment
        </Button>
        <p className="text-xs text-charcoal-soft">We'll confirm by phone or email within one business day.</p>
      </div>
    </form>
  )
}

function Field({ label, name, error, children }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-navy mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

function inputClass(error) {
  return `w-full rounded-md border bg-bg px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal-soft/60 focus-ring outline-none transition-colors ${
    error ? 'border-red-400' : 'border-line focus:border-teal'
  }`
}
