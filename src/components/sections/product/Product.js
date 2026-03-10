import React from 'react'
import './Product.css'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import aiProducts from '../../../data/products'
import { useNavigate } from 'react-router-dom'

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

    // upSpring
    const upSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(-50%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 }
    })

    // downSpring
    const downSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(50%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 }
    })

    // function to navigate to another page
    const navigate = useNavigate()

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
                <animated.div
                    key={p.id}
                    className={`model ${p.className}`}
                    style={{
                        ...p.spring === 'up' ? upSpring : downSpring,
                        width: '100%'
                    }}
                >
                    <img 
                        src={p.image}
                        alt={p.product}
                    />
                    {p.product}
                </animated.div>
            ))}
        </div>
        
        <animated.button
            className='product-btn'
            style={{
                ...upSpring
            }}

            onClick={() => navigate('/aboutPage')}
        >
            About Our Platform
        </animated.button>
    </section>
  )
}
