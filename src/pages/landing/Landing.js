import React, { useEffect } from 'react'
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

  // useEffect to scroll to the top of the page when landing on teh page
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior:"smooth" })
  }, []) //empty dependency array

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
