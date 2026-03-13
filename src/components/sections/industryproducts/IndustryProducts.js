import React from 'react'
import './IndustryProducts.css'
import { animated, useInView, useSpring } from 'react-spring'
import industries from '../../../data/industry'
import IndustryCard from '../../cards/industrycard/IndustryCard'

export default function IndustryProducts() {
    // inView state
    const [ ref, inView ] = useInView({
        triggerOnce: false, // trigger when the user scrolls into and past the section
        threshold: 0.1 // Content will show when the section is 10%  visible
    })

    // title spring
    const titleSpring = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(-50%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })

    // button spring
    const buttonSpring = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(50%)', // if it it inView show it (0%), if not, hide it (50%)
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })

    // upSpring
    const upSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'transformY(-50%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })
    
    // downSpring
    const downSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(50%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 }
    })
    
    // spring Id array
    const springArray = [2, 4, 5, 7]
    

  return ( 
    <section className='industry-products-section' ref={ref}>
        <div 
            className='heading'
        >
            <animated.h2
                className='title'
                style={{
                    ...titleSpring
                }}
            >
                Popular Industries
            </animated.h2>

            <animated.button
                style={{
                    ...buttonSpring
                }}
            >
                View All Products
            </animated.button>
        </div>

        <div 
            className='industry-products'
        >
            {industries.map((i) => (
                <IndustryCard
                    key={i.id} 
                    industry={i.industry}
                    photo={i.image}
                    productPhoto={i.aiProduct.image}
                    product={i.aiProduct.name}
                    desc={i.description}
                    recommendations={i.recommendations}
                    spring={springArray.includes(i.id) ? upSpring : downSpring}
                />
            ))}
        </div>
    </section>
  )
}
