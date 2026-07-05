import React from 'react'
import Link from '../components/Link'
import PageHero from '../components/PageHero'

const jobs = [
  ['Barista', 'Make espresso drinks, welcome guests, and keep the bar moving with care.'],
  ['Baker', 'Help prepare fresh pastries and keep the morning tray ready.'],
  ['Events', 'Support catering, private bookings, and custom menus.'],
]

export default function Careers() {
  return (
    <main className="page-fade">
      <PageHero
        eyebrow="About"
        title="Careers"
        lead="Join a team built around warm service, handcrafted drinks, and a welcoming atmosphere."
      />
      <section className="section section--tight">
        <div className="container grid grid--3 stagger">
          {jobs.map(([title, copy]) => (
            <div className="card" key={title}>
              <h3 className="section-title section-title--medium">{title}</h3>
              <p className="section-copy">{copy}</p>
              <Link className="btn btn--primary card-action" href="/contact">
                Apply
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
