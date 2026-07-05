import React from 'react'
import PageHero from '../components/PageHero'

export default function Contact() {
  return (
    <main className="page-fade">
      <PageHero
        eyebrow="Get in Touch"
        title="Contact"
        lead="Speak with one of our experts about orders, events, catering, or custom menus."
      />
      <section className="section section--tight">
        <div className="container split">
          <div className="contact-card card reveal">
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
          <form id="form" className="form card reveal">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Tell us what you need..." />
            </div>
            <button className="btn btn--primary" type="button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
