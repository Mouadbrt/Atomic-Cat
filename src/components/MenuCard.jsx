import React from 'react'
export default function MenuCard({ item }) {
  return (
    <article className="menu-card" data-category={item.category}>
      <img src={item.image} alt={item.name} />
      <div className="menu-card__body">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <small>{item.label}</small>
      </div>
    </article>
  )
}
