import React from 'react'
import './Landing.css'
import Hero from '../../components/sections/hero/Hero'
import Product from '../../components/sections/product/Product'
import WhyUs from '../../components/sections/whyus/WhyUs'
import IndustryProducts from '../../components/sections/industryproducts/IndustryProducts'
import AIStats from '../../components/sections/stats/Stats'
import ProductCategories from '../../components/sections/productcategories/ProductCategories'
import Success from '../../components/sections/success/Success'
import News from '../../components/sections/news/News'

export default function Landing() {
  return (
    <section className='landing-page'>
      <Hero />
      <Product />
      <WhyUs />
      <IndustryProducts />
      <AIStats />
      <ProductCategories />
      <Success />
      <News />
    </section>
  )
}
