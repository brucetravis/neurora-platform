import React from 'react'
import './ProductCategories.css'
import Button from '../../buttons/navBtn/Button'
import productCategories from '../../../data/productCategories'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

export default function ProductCategories() {
    // inView state
    const [ ref, inView ] = useInView({
        triggerOnce: false, // section will be triggered even when out of view
        threshold: 0.1 // section will be viewed when It is 10% visible
    })

    // left column spring
    const leftSpring = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(-50%)', // hidden to the left when not inView
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })


    //right column spring
    const rightSpring = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(50%)', // hidden to the right when not inView
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })


  return (
    <section className='product-categories-section' ref={ref}>
        <animated.div
            style={{
                ...leftSpring
            }}
        >
            <h5>
                The trusted Platform transforming industries through AI adoption
            </h5>

            <Button text="Start Your Adoption Journey" />
        </animated.div>

        <animated.div 
            className='category-block'
            style={{
                ...rightSpring
            }}
        >
            {productCategories.map((p) => {
                // store the icon in a variable
                const Icon = p.icon

                return (
                    <div
                        key={p.id}
                        className={`category`}
                    >
                        <Icon size={40} stroke={p.color} />
                        <p>{p.label}</p>
                    </div>
                )
            })}
        </animated.div>
    </section>
  )
}
