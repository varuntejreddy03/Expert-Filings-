import { Clock3, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services.js';
import { EMAIL, INSTAGRAM_URL, PHONE_PRIMARY, PHONE_SECONDARY } from '../../utils/whatsapp.js';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'ITR Filing', to: '/itr-filing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

function FooterLabel({ children }) {
  return <h3 className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{children}</h3>;
}

function FooterLink({ to, children, small = false }) {
  return (
    <Link
      to={to}
      className={`block border-l-2 border-transparent py-1.5 text-slate-300 transition-all hover:border-brand-blue hover:pl-2 hover:text-white ${
        small ? 'text-xs' : 'text-sm'
      }`}
    >
      {children}
    </Link>
  );
}

function ContactItem({ icon: Icon, value, label }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-green">
        <Icon className="h-3.5 w-3.5 text-white" />
      </span>
      <span>
        <span className="block text-sm leading-5 text-white">{value}</span>
        <span className="block text-xs text-slate-500">{label}</span>
      </span>
    </li>
  );
}

export default function Footer() {
  const firstServiceColumn = services.slice(0, 7);
  const secondServiceColumn = services.slice(7);

  return (
    <footer className="border-t border-white/[0.06] bg-brand-ink text-white">
      <div className="h-[3px] bg-gradient-to-r from-brand-blue to-brand-green" />
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.65fr_1.25fr_1.05fr]">
          <div className="flex flex-col gap-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-16 w-[250px] items-center">
                <img
                  src="/logo-transparent-tight.png"
                  alt="Expert Filings logo"
                  className="h-full w-full object-contain"
                />
              </span>
            </Link>
            <p className="max-w-xs font-display text-lg font-bold leading-7 text-white">
              File with Experts. File with Confidence.
            </p>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Simple • Secure • Stress-Free</p>
            <div className="border-t border-white/[0.05]" />
            <div>
              <p className="mb-3 text-xs font-medium text-slate-500">Follow us:</p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(45deg,#F09433,#E6683C,#DC2743,#CC2366,#BC1888)] px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                <Instagram className="h-4 w-4" />
                @expert_filings
              </a>
            </div>
          </div>

          <div>
            <FooterLabel>Navigation</FooterLabel>
            <nav className="mt-5 space-y-1">
              {quickLinks.map((link) => (
                <FooterLink key={link.to} to={link.to}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          <div>
            <FooterLabel>Our Services</FooterLabel>
            <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-1">
              <div>
                {firstServiceColumn.map((service) => (
                  <FooterLink key={service.slug} to={`/services/${service.slug}`} small>
                    {service.title}
                  </FooterLink>
                ))}
              </div>
              <div>
                {secondServiceColumn.map((service) => (
                  <FooterLink key={service.slug} to={`/services/${service.slug}`} small>
                    {service.title}
                  </FooterLink>
                ))}
              </div>
            </div>
          </div>

          <div>
            <FooterLabel>Contact Us</FooterLabel>
            <ul className="mt-5 space-y-5">
              <ContactItem icon={Phone} value={PHONE_PRIMARY.replace('+91 ', '')} label="Primary" />
              <ContactItem icon={Phone} value={PHONE_SECONDARY.replace('+91 ', '')} label="Secondary" />
              <ContactItem icon={Mail} value={EMAIL} label="Email" />
              <ContactItem icon={MapPin} value="Eluru | Vijayawada | Hyderabad" label="Offices" />
              <ContactItem icon={Clock3} value="Mon-Sun: 10 AM - 7 PM" label="Business Hours" />
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.05] pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Expert Filings. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
