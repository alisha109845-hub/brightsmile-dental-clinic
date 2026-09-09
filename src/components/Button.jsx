import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-ring disabled:opacity-50 disabled:pointer-events-none'

const variants = {
  primary: 'bg-teal text-white hover:bg-teal-dark shadow-[0_6px_18px_-6px_rgba(76,154,148,0.55)]',
  secondary:
    'bg-transparent text-navy border border-navy/25 hover:border-navy hover:bg-navy-tint',
  ghost: 'bg-transparent text-white border border-white/40 hover:bg-white/10',
  navyFilled: 'bg-navy text-white hover:bg-navy-light shadow-[0_6px_18px_-6px_rgba(16,38,63,0.45)]',
}

export default function Button({
  as = 'button',
  to,
  href,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
