import SmileArc from './SmileArc'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}) {
  const isCenter = align === 'center'
  return (
    <div
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.18em] mb-3 ${
            light ? 'text-teal-tint' : 'text-teal-dark'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl font-medium leading-tight ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      <SmileArc
        className={`mt-4 ${isCenter ? 'mx-auto' : ''}`}
        color={light ? '#EAF4F2' : 'var(--color-teal)'}
      />
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? 'text-white/75' : 'text-charcoal-soft'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
