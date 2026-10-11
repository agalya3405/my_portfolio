import { useEffect, useState } from 'react'
import '../styles.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.45 }
    )

    sections.forEach((section) => section && observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="navbar">
      <a className="brand" href="#home">
        AGALYA S
      </a>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setMobileOpen((open) => !open)}
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
        aria-controls="primary-navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="primary-navigation" className={`nav-links ${mobileOpen ? 'open' : ''}`} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={activeSection === item.href.slice(1) ? 'active' : ''}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

    </header>
  )
}

export default Navbar
