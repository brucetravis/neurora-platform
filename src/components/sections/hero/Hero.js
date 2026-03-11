import React from 'react'
import './Hero.css'
import { BiBulb } from 'react-icons/bi'

import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import Stats from '../../cards/herostats/Stats'
import Button from '../../buttons/navBtn/Button'

export default function Hero() {
    // In view state
    const [ref, inView] = useInView({
        /* triggerOnce: false -> we want it to update when scrolling out */
        triggerOnce: false, // update whe It is not in view meaning that It wil hhide the content
        threshold: 0.1 // section is considered to be inView when It is 10% visible
    })

    // left column spring
    const leftSlide = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(-50%)', // starts off screen left
        opacity: inView ? 1 : 0, // fade in and out
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })

    // right column spring
    const rightSlide = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(50%)', // start off hidden to the right
        opacity: inView ? 1 : 0, // fade in/out
        config: { mass: 1, tension: 80, friction: 25 }, // smooth spring motion
        delay: 200
    })

  return (
    <div className='hero-section'>
        <animated.div
            ref={ref}
            className='left-column'
            style={{
                ...leftSlide,
                width: '100%'
            }}
        >
            <div 
                className='d-flex'
            >
                <BiBulb 
                    size={24}
                    color='#ffc83d'
                />
                <p>100+ AI Features Ready To Adopt.</p>
            </div>
            <h1>Helping <span>African Businesses</span> Integrate AI into their workflows.</h1>

            <Button text='Adopt with Neurora' />

            <p className='start'><span>Start Your Adoption Journey with Neurora.</span> For a better future.</p>
        </animated.div>

        <animated.div
            ref={ref}
            className='right-column'
            style={{
                ...rightSlide,
                width: '100%'
            }}
        >

            <img 
                src={require('../../../images/buld-ai-removebg-preview.png')}
                alt='AI Illustration'

            />
        </animated.div>
        

        <Stats />
    </div>
  )
}
