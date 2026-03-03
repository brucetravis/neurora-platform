import React from 'react'
import './Product.css'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import aiProducts from '../../../data/products'
import Button from '../../../components/buttons/Button'

export default function Product() {
    // inView state
    const [ ref, inView ] = useInView({
        triggerOnce: false, // meaning that It will be triggered when in view and not in view
        threshold: 0.1 // 
    })

    // title Spring
    const titleSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(-50%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 }
    })

  return (
    <section className='product-section' ref={ref}>
        <animated.h6
            style={{
                ...titleSpring,
                width: '100%'
            }}
            className='title'
        >
            Top AI Products
        </animated.h6>

        <div className='product-models'>
            {aiProducts.map((p) => (
                <div
                    key={p.id}
                    className={`model ${p.className}`}
                >
                    <img 
                        src={p.image}
                        alt={p.product}
                    />
                    {p.product}
                </div>
            ))}
        </div>
        
        <button className='product-btn'>Adopt with Neurora</button>
    </section>
  )
}
