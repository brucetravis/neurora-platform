import React from 'react'
import './AboutPage.css'
import About from '../../components/sections/about/About'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

export default function AboutPage() {
  // inView state for the about page
  const [ ref, inView ] = useInView({
    triggerOnce: false, //tigger when the page is even out of view
    threshold: 0.1 //animate when the page is 10% visisble
  })

  // titleSpring
  const titleSpring = useSpring({
      transform: inView ? 'translateY(0%)' : 'translateY(50%)', // hidden at the top
      opacity: inView ? 1 : 0,
      config: { mass: 1, tension: 80, friction: 25 },
      delay: 200
  })

  
  return (
    <section className='about-page' ref={ref}>
      <div className='about-page-image'>
        <img 
          src='https://i.pinimg.com/736x/23/19/cd/2319cd4c079fd5a272e28aeb0d94a13b.jpg'
          alt='A team discussing analytics from AI'
        />

        <animated.h6 
            className='title' 
            style={{
                ...titleSpring,
                width: '100%'
            }}
        >
            About The Platform
        </animated.h6>
      </div>
      <div>
        <About />
      </div>
    </section>
  )
}
