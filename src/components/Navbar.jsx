import React from 'react'
import { logo, navLinks } from '../data/siteData'
import Link from './Link'

export default function Navbar({ menuOpen, setMenuOpen }) {
  function closeMenu() {
    setMenuOpen(false)
  }

  function toggleMenu() {
    setMenuOpen((open) => !open)
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar__inner">
          <Link className="logo" href="/" onNavigate={closeMenu}>
          {logo.map((logo) => (
            <img src={logo.image} alt={logo.title} width={50}/>
          ))}
          </Link>
          <div className="navbar__actions">
            <button
              className={`icon-btn hamburger ${menuOpen ? 'is-open' : ''}`}
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`menu-panel ${menuOpen ? 'is-open' : ''}`}>
        <div className="menu-panel__links">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} onNavigate={closeMenu}>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
        <small>BREW • CAFE • MENU</small>
      </div>
    </>
  )
}
