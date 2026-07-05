import React from 'react'
import InfoList from '../components/InfoList'
import Link from '../components/Link'
import PageHero from '../components/PageHero'
import { contactInfo } from '../data/siteData'

export default function FindUs() {
  return (
    <main className="page-fade">
      <PageHero
        eyebrow="Find Us"
        title="Come by"
        lead="Warm coffee, fresh pastries, and a welcoming place to meet, study, or slow down."
      />
      <section className="section section--tight">
        <div className="container split">
          <div className="map-card card reveal">
            <div className="pin">⌖</div>
            <div className="map-container">
              <iframe
                title="Atomic Cat Location"
                src="https://www.google.com/maps?q=10387+Gandy+Blvd+N+Suite+102,+St.+Petersburg,+FL+33702&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p>Visit us for handcrafted espresso drinks and freshly baked pastries.</p>
          </div>
          <div className="card reveal">
            <p className="eyebrow">Location</p>
            <h2 className="section-title section-title--medium">F i nd Us</h2>
            <InfoList rows={contactInfo} />
            <div className="hero__buttons">
              <Link className="btn btn--primary" href="/contact">
                Contact
              </Link>
              <Link className="btn btn--ghost" href="/hours">
                See Hours
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
