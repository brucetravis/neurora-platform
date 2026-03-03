import React from 'react'
import './WhyUs.css'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import { BarChart2, Compass, CreditCard, Settings, TrendingUp } from 'lucide-react'
import Points from '../../cards/whyus/Points'

export default function WhyUs() {
    const [ ref, inView ] = useInView({
        triggerOnce: false,
        threshold: 0.1
    })

    // titleSpring
    const titleSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(50%)', // hidden at the top
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })

    // animated card up
    const cardUpSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(-50%)', // hidden at the top
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })
    
    // animated card down
    const cardDownSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(50%)', // hidden at the top
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })

    const points = [
        { 
            icon: <Compass size={32} color="#c87cff" />, 
            title: 'Entry-Level Guidance', 
            description: 'Get step-by-step recommendations on which AI tools to adopt for your specific business and industry.',
            animationStyle: cardUpSpring
        },
        { 
            icon: <CreditCard size={32} color="#c87cff" />, 
            title: 'Subscription Management', 
            description: 'Easily subscribe, manage, and consolidate AI tools in one platform, ensuring you never lose track of your investments.',
            animationStyle: cardDownSpring
        },
        { 
            icon: <BarChart2 size={32} color="#c87cff" />, 
            title: 'Analytics & Insights', 
            description: 'Track AI performance in real time, understand what works, and make data-driven decisions to optimize ROI.',
            animationStyle: cardUpSpring
        },
        { 
            icon: <Settings size={32} color="#c87cff" />, 
            title: 'Automation & Efficiency', 
            description: 'Implement AI-driven automation that improves workflow efficiency while monitoring impact and adoption.',
            animationStyle: cardDownSpring
        },
        { 
            icon: <TrendingUp size={32} color="#c87cff" />, 
            title: 'Growth Recommendations', 
            description: 'Receive tailored suggestions on which AI features to scale, helping your business grow strategically and sustainably.',
            animationStyle: cardUpSpring 
        },
    ]

    

  return (
    <section className='whyus-section' ref={ref}>
        <animated.h6 className='title' ref={titleSpring}>What We Offer</animated.h6>
        
        <div className='whyus-content'>
            {points.map((p) => (
                <Points
                    key={p.id}
                    icon={p.icon}
                    title={p.title}
                    content={p.description}
                    animation={p.animationStyle}
                />
            ))}
        </div>
    </section>
  )
}
