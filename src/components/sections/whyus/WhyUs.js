import React from 'react'
import './WhyUs.css'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import Button from '../../buttons/navBtn/Button'
// import { BarChart2, Compass, CreditCard, Settings, TrendingUp } from 'lucide-react'
// import Points from '../../cards/whyus/Points'

export default function WhyUs() {
    const [ ref, inView ] = useInView({
        triggerOnce: false,
        threshold: 0.1
    })

    // titleSpring
    // const titleSpring = useSpring({
    //     transform: inView ? 'translateY(0%)' : 'translateY(50%)', // hidden at the top
    //     opacity: inView ? 1 : 0,
    //     config: { mass: 1, tension: 80, friction: 25 },
    //     delay: 200
    // })

    // animated card up
    const leftSideSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(-50%)', // hidden at the top
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })
    
    // animated card down
    const rightSideSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(50%)', // hidden at the top
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })
    

  return (
    <section className='whyus-section' ref={ref}>
        <animated.div
            className='left-column'
            style={{
                ...leftSideSpring,
                width: '100%'
            }}
        >

            <div>
                <h6>Get Started with</h6>
                <h3>Entry Level Adoption</h3>
                <p>If you want to get started in your Adoption Journey</p>
                
                <Button text='Get Started' link='/adoption' />
            </div>

            <div>
                <img 
                    src='https://i.pinimg.com/1200x/be/6d/b7/be6db75139daceb45de7f15e1421552a.jpg'
                    alt='AI chat'
                    className='chatImage'
                />

                <img 
                    src={require('../../../videos/robot-unscreen.gif')}
                    alt='AI chat'
                    className='aiCopilot'
                />
            </div>

        </animated.div>

        <animated.div
            className='right-column'
            style={{
                ...rightSideSpring,
                width: '100%'
            }}
        >
            <div>
                <h6>Get Started with</h6>
                <h3>Expert Level Adoption</h3>
                <p>If you are wondering if the products you adopted are helping you.</p>
                
                <Button text='Get Started' link='/adoption' />
            </div>

            <div>
                <img 
                    src='https://i.pinimg.com/736x/12/78/29/127829fad1bba0d7f269c966e8874c81.jpg'
                    alt='AI grok'
                    className='chatImage'
                />

                <img 
                    src='https://i.pinimg.com/736x/74/0b/15/740b15ae050b8de67aa05c6a5977aab2.jpg'
                    alt='AI chat'
                    className='deepseekImage'
                />
            </div>

        </animated.div>
    </section>
  )
}
