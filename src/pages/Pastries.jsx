import React from 'react'
import Link from '../components/Link'
import MenuGrid from '../components/MenuGrid'
import PageHero from '../components/PageHero'
import { menuItems } from '../data/siteData'

export default function Pastries() {
  const items = menuItems.filter((item) => item.category === 'pastry')

  return (
    <main className="page-fade">
      <PageHero eyebrow="Menu" title="Pastries" lead="Freshly baked pastries made to pair with your morning cup." />
      <section className="section section--tight">
        <div className="container">
          <MenuGrid items={items} />
          <div className="card reveal pastry-note">
            <p className="quote">Fresh coffee tastes better with something warm from the oven.</p>
            <div className="hero__buttons">
              <Link className="btn btn--primary" href="/contact">
                Order Now
              </Link>
              <Link className="btn btn--ghost" href="/menu">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
