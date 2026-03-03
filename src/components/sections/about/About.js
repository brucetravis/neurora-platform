import React from 'react'
import './About.css'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

export default function About() {
    // inview for the content
    const [ ref, inView ] = useInView({
        triggerOnce: false, // trigger when it is not in View, meaning that It will hide the  content and show when necessary
        threshold: 0.1 // show when the section is 10% visible 
    })

    // titleSpring
    const titleSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(50%)', // hidden at the top
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })

    // left section
    const leftSection = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(-50%)', // hide to the left
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })
    
    // right section
    const rightSection = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(50%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })
    
  return (
    <section className='about-section'>
        <animated.h6 
            className='title' 
            ref={ref}
            style={{
                ...titleSpring,
                width: '100%'
            }}
        >
            About The Platform
        </animated.h6>

        <div className='about-content'>
            <animated.div
                ref={ref}
                style={{
                    ...leftSection,
                    width: '100%'
                }}
                className='left-column'
            >
                <img 
                    src={require('../../../videos/robot-unscreen.gif')}
                    alt="About AI"
                />
            </animated.div>

            
            <animated.div
                ref={ref}
                style={{
                    ...rightSection,
                    width: '100%'
                }}
                className='right-column'
            >
                <p>
                    Neurora is the first stop for <span>African businesses</span> that want to adopt and adapt AI. In today’s fast‑moving AI landscape, 
                    many established businesses struggle to integrate AI effectively, while newcomers need guidance to navigate the digital age. 
                    Our platform connects businesses to every AI product and feature available, recommending the right solutions based on industry, 
                    business goals, and growth objectives.

                    Neurora supports businesses at every stage: <span>entry‑level</span> guidance for which <span>AI features</span> to adopt, <span>management tools</span> to handle 
                    subscriptions and payments in one place, <span>analytical insights</span> to track performance and ROI, and <span>growth-level recommendations</span> to 
                    scale <span>AI features</span> that truly benefit the business. With real-time reports, daily updates on new AI tools, and continual 
                    optimization, Neurora ensures businesses adopt AI efficiently, avoid wasted time and money, and stay competitive in the 
                    AI-driven market.
                </p>
            </animated.div>
        </div>
    </section>
  )
}
