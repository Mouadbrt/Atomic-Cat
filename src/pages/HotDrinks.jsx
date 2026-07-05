import React from 'react'
import MenuGrid from '../components/MenuGrid'
import PageHero from '../components/PageHero'
import { menuItems } from '../data/siteData'

export default function HotDrinks() {
  const items = menuItems.filter((item) => item.category === 'hot')

  return (
    <main className="page-fade">
      <PageHero
        eyebrow="Menu"
        title="Hot Drinks"
        lead="Espresso, latte, cappuccino, mocha, flat white, and chai latte — warm cups made for calm moments."
      />
      <section className="section section--tight">
        <div className="container">
          <MenuGrid items={items} />
        </div>
      </section>
    </main>
  )
}
