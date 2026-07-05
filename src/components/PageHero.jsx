import React from 'react'

export default function PageHero({ eyebrow, title, lead }) {
  return (
    <section className="page-hero">
      <div className="container split reveal">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-title">{title}</h1>
        </div>
        <p className="lead">{lead}</p>
      </div>
    </section>
  )
}
