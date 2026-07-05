import React, { useMemo, useState } from 'react'
import MenuGrid from '../components/MenuGrid'
import PageHero from '../components/PageHero'
import { menuItems } from '../data/siteData'

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Hot Drinks', value: 'hot' },
  { label: 'Cold Drinks', value: 'cold' },
  { label: 'Pastries', value: 'pastry' },
]

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState('all')
  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return menuItems
    return menuItems.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <main className="page-fade">
      <PageHero
        eyebrow="What We Serve"
        title="Menu"
        lead="Explore what's on our menu: hot drinks, cold drinks, and pastries made with care."
      />
      <section className="section section--tight">
        <div className="container">
          <div className="tabs reveal">
            {filters.map((filter) => (
              <button
                className={`tab ${activeFilter === filter.value ? 'is-active' : ''}`}
                type="button"
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <MenuGrid items={filteredItems} />
        </div>
      </section>
    </main>
  )
}