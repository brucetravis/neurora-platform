import React from 'react'
import './Landing.css'
import Hero from '../../components/sections/hero/Hero'
import About from '../../components/sections/about/About'

export default function Landing() {
  return (
    <section className='landing-page'>
      <Hero />
      <About />
    </section>
  )
}
