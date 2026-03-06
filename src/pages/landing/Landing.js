import React from 'react'
import './Landing.css'
import Hero from '../../components/sections/hero/Hero'
import Product from '../../components/sections/product/Product'
import WhyUs from '../../components/sections/whyus/WhyUs'
import IndustryProducts from '../../components/sections/industryproducts/IndustryProducts'
import AIStats from '../../components/sections/stats/Stats'

export default function Landing() {
  return (
    <section className='landing-page'>
      <Hero />
      <Product />
      <WhyUs />
      <IndustryProducts />
      <AIStats />
    </section>
  )
}
