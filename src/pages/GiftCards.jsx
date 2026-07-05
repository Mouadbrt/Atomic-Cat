import React from 'react'
import Link from '../components/Link'
import PageHero from '../components/PageHero'

export default function GiftCards() {
  return (
    <main className="page-fade">
      <PageHero
        eyebrow="About"
        title="Gift Cards"
        lead="Give someone a warm cup, a fresh pastry, and a reason to stop by Joe's."
      />
      <section className="section section--tight">
        <div className="container split">
          <div className="card reveal">
            <p className="quote">A small card, a good coffee, and a better day.</p>
          </div>
          <div className="card reveal">
            <p className="eyebrow">Gift Cards</p>
            <h2 className="section-title section-title--medium">Coffee for someone you like.</h2>
            <p className="section-copy">
              Gift cards can be used for hot drinks, cold drinks, pastries, private events, and custom menus.
            </p>
            <div className="hero__buttons">
              <Link className="btn btn--primary" href="/contact">
                Get a Gift Card
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
