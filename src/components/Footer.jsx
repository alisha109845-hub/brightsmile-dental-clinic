import { Link } from 'react-router-dom'
import SmileArc from './SmileArc'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="26" height="26" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                <circle cx="15" cy="15" r="14" stroke="#4C9A94" strokeWidth="1.5" />
                <path d="M9 15c2.5 4.5 9.5 4.5 12 0" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-display text-lg font-semibold">BrightSmile</span>
            </div>
            <p className="text-sm text-white/65 leading-relaxed">
              Modern, gentle dental care for every stage of your smile &mdash; from first checkups to full restorations.
            </p>
            <SmileArc className="mt-5" color="#4C9A94" />
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li><Link className="hover:text-teal-tint focus-ring rounded-sm" to="/about">About Us</Link></li>
              <li><Link className="hover:text-teal-tint focus-ring rounded-sm" to="/services">Services</Link></li>
              <li><Link className="hover:text-teal-tint focus-ring rounded-sm" to="/doctors">Our Doctors</Link></li>
              <li><Link className="hover:text-teal-tint focus-ring rounded-sm" to="/appointment">Book Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li><Link className="hover:text-teal-tint focus-ring rounded-sm" to="/services">General Dentistry</Link></li>
              <li><Link className="hover:text-teal-tint focus-ring rounded-sm" to="/services">Cosmetic Dentistry</Link></li>
              <li><Link className="hover:text-teal-tint focus-ring rounded-sm" to="/services">Dental Implants</Link></li>
              <li><Link className="hover:text-teal-tint focus-ring rounded-sm" to="/services">Orthodontics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">
              Visit Us
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75 leading-relaxed">
              <li>228 Maple Grove Avenue<br />Riverside, CA 92501</li>
              <li>(555) 214-7890</li>
              <li>hello@brightsmiledental.com</li>
              <li>Mon&ndash;Fri: 8am&ndash;6pm, Sat: 9am&ndash;2pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/55">
          <p>&copy; {new Date().getFullYear()} BrightSmile Dental Clinic. All rights reserved.</p>
          <p>Designed as a portfolio concept &mdash; not a real medical provider.</p>
        </div>
      </div>
    </footer>
  )
}
