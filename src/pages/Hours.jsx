import React from 'react'
import InfoList from '../components/InfoList'
import Link from '../components/Link'
import PageHero from '../components/PageHero'
import { hours } from '../data/siteData'

export default function Hours() {
  return (
    <main className="page-fade">
      <PageHero
        eyebrow="Find Us"
        title="Hours"
        lead="Stop by for your morning cup, your afternoon reset, or a cozy evening coffee."
      />
      <section className="section section--tight">
        <div className="container split">
          <div className="card reveal">
            <p className="eyebrow">Opening Hours</p>
            <InfoList rows={hours} />
          </div>
          <div className="card reveal">
            <p className="quote">From our first roast to your morning cup, every sip tells a story.</p>
            <div className="hero__buttons">
              <Link className="btn btn--primary" href="/menu">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
