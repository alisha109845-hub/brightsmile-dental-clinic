import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-sm shadow-[0_2px_20px_-8px_rgba(16,38,63,0.15)]'
          : 'bg-bg'
      } border-b border-line`}
    >
      <nav className="container-page flex items-center justify-between h-20">
        <NavLink to="/" className="flex items-center gap-2 focus-ring rounded-sm" aria-label="BrightSmile Dental Clinic home">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
            <circle cx="15" cy="15" r="14" stroke="#4C9A94" strokeWidth="1.5" />
            <path d="M9 15c2.5 4.5 9.5 4.5 12 0" stroke="#10263F" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-display text-xl font-semibold text-navy">
            BrightSmile
          </span>
        </NavLink>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors focus-ring rounded-sm ${
                    isActive ? 'text-teal-dark' : 'text-charcoal hover:text-teal-dark'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button to="/appointment" variant="primary">
            Book Appointment
          </Button>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 focus-ring rounded-sm"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l14 14M20 6L6 20" stroke="#10263F" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 8h18" stroke="#10263F" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 13h18" stroke="#10263F" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 18h18" stroke="#10263F" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-line bg-bg">
          <ul className="container-page py-4 flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 text-base font-medium border-b border-line/70 focus-ring rounded-sm ${
                      isActive ? 'text-teal-dark' : 'text-charcoal'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-4">
              <Button to="/appointment" variant="primary" className="w-full" onClick={() => setOpen(false)}>
                Book Appointment
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
