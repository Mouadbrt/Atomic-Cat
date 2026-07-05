import React from 'react'
import Link from '../components/Link'

export default function NotFound() {
  return (
    <main className="page-fade">
      <section className="page-hero">
        <div className="container reveal">
          <p className="eyebrow">404</p>
          <h1 className="page-title">Page Not Found</h1>
          <p className="lead not-found-lead">This page does not exist yet.</p>
          <div className="hero__buttons">
            <Link className="btn btn--primary" href="/">
              Back Home
            </Link>
            <Link className="btn btn--ghost" href="/menu">
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
