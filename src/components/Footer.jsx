import React from 'react'
import { footerGroups } from '../data/siteData'
import Link from './Link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <h2>
              Atom i c  Cat
            </h2>
            <p className="section-copy footer-copy">
              Handcrafted espresso drinks and freshly baked pastries in a warm, welcoming atmosphere.
            </p>
          </div>
          <div className="footer__links">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                {group.links.map((link) => (
                  <Link key={link.path} href={link.path}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Atomic Cat Coffee</span>
          <span>Fresh coffee, warm people, good vibes.</span>
        </div>
      </div>
    </footer>
  )
}
