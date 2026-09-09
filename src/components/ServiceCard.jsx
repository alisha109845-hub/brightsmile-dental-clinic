import { Link } from 'react-router-dom'

export default function ServiceCard({ service, compact = false, showLearnMore = true }) {
  return (
    <div className="group bg-surface rounded-lg overflow-hidden border border-line/80 hover:shadow-[0_20px_40px_-24px_rgba(16,38,63,0.35)] hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={`${service.name} treatment at BrightSmile Dental Clinic`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-medium text-navy">{service.name}</h3>
        <p className="mt-2 text-sm text-charcoal-soft leading-relaxed">
          {compact ? service.short : service.description}
        </p>
        {!compact && service.benefits && (
          <ul className="mt-4 space-y-1.5">
            {service.benefits.slice(0, 3).map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-charcoal-soft">
                <svg className="mt-1 shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7.5l3 3 6-6.5" stroke="#4C9A94" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        )}
        {showLearnMore && (
          <Link
            to="/appointment"
            state={{ service: service.name }}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-dark hover:text-navy transition-colors focus-ring rounded-sm"
          >
            Request an appointment
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

