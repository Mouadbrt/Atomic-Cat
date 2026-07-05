import React from 'react'
import MenuCard from './MenuCard'

export default function MenuGrid({ items }) {
  return (
    <div className="menu-grid stagger">
      {items.map((item) => (
        <MenuCard key={`${item.name}-${item.category}`} item={item} />
      ))}
    </div>
  )
}
