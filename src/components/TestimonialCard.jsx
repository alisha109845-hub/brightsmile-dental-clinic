export default function TestimonialCard({ testimonial }) {
  return (
    <div className="story-deck-card rounded-lg">
      <div className="bg-surface rounded-lg border border-line/80 p-7 h-full flex flex-col transition-shadow duration-300 hover:shadow-[0_20px_40px_-24px_rgba(16,38,63,0.35)]">
        <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M8 1.5l2 4.2 4.5.6-3.3 3.2.8 4.5L8 11.8l-4 2.2.8-4.5-3.3-3.2 4.5-.6L8 1.5z"
              fill={i < testimonial.rating ? '#C9A15C' : 'none'}
              stroke="#C9A15C"
              strokeWidth="1"
            />
          </svg>
        ))}
        </div>
        <p className="font-display text-lg text-navy leading-relaxed flex-1">
          &ldquo;{testimonial.quote}&rdquo;              
        </p>
        <div className="mt-6 pt-5 border-t border-line/70">
          <p className="text-sm font-semibold text-charcoal">{testimonial.name}</p>
          <p className="text-xs text-charcoal-soft mt-0.5">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}
