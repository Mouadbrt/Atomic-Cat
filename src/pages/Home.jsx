import React from 'react'
import Link from '../components/Link'
import Marquee from '../components/Marquee'
import MenuGrid from '../components/MenuGrid'
import { eventCards, logo, menuItems } from '../data/siteData'

export default function Home() {
  const featuredItems = menuItems.slice(0, 8)

  return (
    <main className="page-fade">
      <section className="hero hero-intro">
        <div className="container">
          <div className="hero__text">
            <div>
              <h1 className="hero__title reveal">Atomic Cat</h1>

            </div>
            <div className="hero__copy reveal">
              <p>
                A cozy modern-retro café designed for slow mornings, creative conversations, focused study sessions, specialty coffee, handmade pastries, and golden-hour nostalgia.
              </p>
            
              <div className="hero__buttons">
                <Link className="btn btn--primary" href="/menu">
                  View Menu
                </Link>
                <Link className="btn btn--secondary" href="/find-us">
                  Find Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-showcase" aria-label="Joe's Coffee shop front">
        <div className="container hero-showcase__container">
          <div className="hero-stage reveal">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/img/hero.mp4" type="video/mp4" />
            </video>

            <div className="hero-card hero-card--americano" data-parallax>
              <img src="/assets/img/iced-coffee.webp" alt="Americano" />
              <div className="hero-card__label">Americano</div>
            </div>

            <div className="hero-card hero-card--latte" data-parallax>
              <img src="/assets/img/latte.webp" alt="Latte" />
              <div className="hero-card__label">Latte</div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="section">
        <div className="container split reveal">
          <div>
            <p className="eyebrow">Atomic Cat</p>
            <h2 className="section-title section-title--medium">More Than A Cafe, It's A M i ndset</h2>
          </div>
          <div>
            <p className="section-copy">
              We’re built on the belief that the best things in life are unfiltered. From our single-origin beans to our stripped-back walls, Atomic Cat is a tribute to authenticity. A place to pause, create, and just be.
            </p>
            <div className="hero__buttons">
              <Link className="btn btn--primary" href="/menu">
                See the Menu
              </Link>
              <Link className="btn btn--ghost" href="/find-us">
                Find Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="split reveal">
            <div>
              <p className="eyebrow">What We Serve</p>
              <h2 className="section-title section-title--medium">Explore What&apos;s on Our Menu</h2>
            </div>
            <p className="section-copy">
              From handcrafted espresso drinks to freshly baked pastries, every item is made with care.
            </p>
          </div>
          <MenuGrid items={featuredItems} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split reveal">
            <div>
              <p className="eyebrow">Beyond the Cup</p>
              <h2 className="section-title section-title--medium">Host Your Next Event at Atomic Cat</h2>
            </div>
            <p className="section-copy">
              From intimate gatherings to full-scale catering, we bring the warmth of Atomic Cat wherever you need it.
            </p>
          </div>
          <div className="grid grid--3 stagger features-grid">
            {eventCards.map((card) => (
              <article className="feature card" key={card.title}>
                <img src={card.image} alt={card.title} />
                <div className="feature__body">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <Link className="btn btn--primary" href="/contact">
                    Get in Touch
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container split reveal">
          <div className="contact-card card">
            <p className="eyebrow">Get in Touch</p>
            <h3>
              Speak with one
              <br />
              of our experts
            </h3>
            <div className="contact-actions">
              <Link href="https://www.instagram.com/atomiccatstpete/">instagram <span>↗</span></Link>
              <Link href="mailto:atomiccatstpete@gmail.com">Email <span>↗</span></Link>
              <Link href="tel:+17272158801">Number <span>↗</span></Link>
            </div>
          </div>
          <div className="map-card card">

            <h3>F i nd Us</h3>
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
            <p>Warm coffee, fresh pastries, and a space made for slow mornings.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
