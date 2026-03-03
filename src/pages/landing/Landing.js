import React from 'react'
import './Landing.css'
import Hero from '../../components/sections/hero/Hero'
import About from '../../components/sections/about/About'
import WhyUs from '../../components/sections/whyus/WhyUs'
import Product from '../../components/sections/product/Product'

export default function Landing() {
  return (
    <section className='landing-page'>
      <Hero />
      <Product />
      <About />
      <WhyUs />
    </section>
  )
}
