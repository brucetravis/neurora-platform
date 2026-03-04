import React from 'react'
import './Landing.css'
import Hero from '../../components/sections/hero/Hero'
import Product from '../../components/sections/product/Product'
import WhyUs from '../../components/sections/whyus/WhyUs'

export default function Landing() {
  return (
    <section className='landing-page'>
      <Hero />
      <Product />
      <WhyUs />
    </section>
  )
}
