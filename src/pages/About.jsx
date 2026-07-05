import React from 'react'
import Link from '../components/Link'
import PageHero from '../components/PageHero'

const values = [
  ['01', 'Coffee', 'Handcrafted espresso drinks made with care.'],
  ['02', 'Events', 'Private events, catering, and custom menus.'],
]

export default function About() {
  return (
    <main className="page-fade">
      <PageHero
        eyebrow="About"
        title="B e y o n d the Cup"
        lead="Handcrafted espresso drinks and freshly baked pastries in a warm, welcoming atmosphere."
      />
      <section className="section section--tight">
        <div className="container grid grid--2">
          <div className="card reveal">
            <img className="rounded-media" src="/assets/img/latte.webp" alt="Latte" />
            <p className="section-copy">From our first roast to your morning cup, every sip tells a story.</p>
          </div>
          <div className="stack reveal">
            <p className="eyebrow">Our Story</p>
            <h2 className="section-title section-title--medium">Wa r m space, fresh coffee, good v i bes.</h2>
            <p className="section-copy">
              Atomic Cat is made for mornings, meetings, study sessions, and everything in between. We keep the menu
              simple, thoughtful, and full of comfort.
            </p>
            <div className="hero__buttons">
              <Link className="btn btn--primary" href="/menu">
                Explore Menu
              </Link>
              <Link className="btn btn--ghost" href="/careers">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid--3 stagger">
            {values.map(([number, title, copy]) => (
              <div className="card" key={number}>
                <span className="badge">{number}</span>
                <h3 className="section-title section-title--medium">{title}</h3>
                <p className="section-copy">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
