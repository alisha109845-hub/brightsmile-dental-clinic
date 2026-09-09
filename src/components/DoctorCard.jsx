import { useState } from 'react'

export default function DoctorCard({ doctor, compact = false }) {
  const [isOpen, setIsOpen] = useState(false)

  if (compact) {
    return (
      <div
        className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-line/80 bg-surface shadow-[0_8px_20px_-18px_rgba(16,38,63,0.35)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-24px_rgba(16,38,63,0.35)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-teal"
        role="button"
        tabIndex={0}
        aria-label={`${isOpen ? 'Hide' : 'Show'} details for ${doctor.name}`}
        onClick={() => setIsOpen((currentlyOpen) => !currentlyOpen)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setIsOpen((currentlyOpen) => !currentlyOpen)
          }
        }}
      >
        <div className="absolute inset-0">
          <img src={doctor.image} alt={`Portrait of ${doctor.name}`} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className={`absolute inset-0 flex items-center justify-center bg-black/70 p-6 text-center text-white transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
          <div className="max-w-xs">
            <h3 className="font-display text-xl font-medium">{doctor.name}</h3>
            <p className="mt-1 text-sm font-semibold text-teal">{doctor.specialty}</p>
            <p className="mt-1 text-xs text-white/75">{doctor.experience}</p>
            {doctor.bio && <p className="mt-4 text-sm leading-relaxed text-white/90">{doctor.bio}</p>}
          </div>
        </div>
      </div>
    )
  }

  return (
    <article className="doctor-profile">
      <div className="doctor-profile-main">
        <div className="doctor-profile-image">
          <img
            src={doctor.image}
            alt={`Portrait of ${doctor.name}`}
            className={doctor.id === 'dr-sophia-ramirez' ? 'doctor-profile-image-sophia' : ''}
            loading="lazy"
          />
        </div>
        <div className="doctor-profile-intro">
          <h2>{doctor.name}</h2>
          <p>{doctor.specialty}</p>
          <p>{doctor.experience}</p>
        </div>
      </div>
      <div className="doctor-profile-details">
        <div className="doctor-profile-detail-box">
          <h3>Area of care</h3>
          <p>{doctor.specialty} with thoughtful planning shaped around each patient&apos;s needs.</p>
        </div>
        <div className="doctor-profile-detail-box">
          <h3>Patient approach</h3>
          <p>{doctor.bio}</p>
        </div>
      </div>
    </article>
  )
}
