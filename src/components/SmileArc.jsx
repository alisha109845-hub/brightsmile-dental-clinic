// Signature motif: a soft arc echoing a smile curve, used as an underline / divider.
export default function SmileArc({ className = '', color = 'var(--color-teal)' }) {
  return (
    <svg
      className={`smile-arc ${className}`}
      viewBox="0 0 64 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 2C10 11 54 11 62 2"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}
