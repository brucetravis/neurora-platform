import React from 'react'
import './Landing.css'
import Hero from '../../components/sections/hero/Hero'
import Product from '../../components/sections/product/Product'

export default function Landing() {
  return (
    <section className='landing-page'>
      <Hero />
      <Product />
    </section>
  )
}
