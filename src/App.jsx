import React, { useEffect, useMemo, useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import FindUs from './pages/FindUs'
import GiftCards from './pages/GiftCards'
import Home from './pages/Home'
import HotDrinks from './pages/HotDrinks'
import Hours from './pages/Hours'
import Menu from './pages/Menu'
import NotFound from './pages/NotFound'
import Pastries from './pages/Pastries'

const routes = {
  '/': Home,
  '/menu': Menu,
  '/hot-drinks': HotDrinks,
  '/pastries': Pastries,
  '/find-us': FindUs,
  '/hours': Hours,
  '/about': About,
  '/contact': Contact,
  '/careers': Careers,
  '/gift-cards': GiftCards,
}

function getPath() {
  return window.location.pathname.replace(/\/$/, '') || '/'
}

export default function App() {
  const [path, setPath] = useState(getPath)
  const [menuOpen, setMenuOpen] = useState(false)
  const Page = useMemo(() => routes[path] || NotFound, [path])

  useEffect(() => {
    function updatePath() {
      setPath(getPath())
      setMenuOpen(false)
    }

    window.addEventListener('popstate', updatePath)
    return () => window.removeEventListener('popstate', updatePath)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-locked', menuOpen)
  }, [menuOpen])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    const animatedItems = document.querySelectorAll('.reveal,.stagger')
    animatedItems.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [path])

  useEffect(() => {
    const parallaxCards = [...document.querySelectorAll('[data-parallax]')]
    if (!parallaxCards.length) return undefined

    function updateParallax() {
      const y = window.scrollY
      parallaxCards.forEach((element, index) => {
        const speed = index ? -0.035 : 0.05
        element.style.translate = `0 ${y * speed}px`
      })
    }

    updateParallax()
    window.addEventListener('scroll', updateParallax, { passive: true })
    return () => window.removeEventListener('scroll', updateParallax)
  }, [path])

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Page key={path} />
      <Footer />
    </>
  )
}