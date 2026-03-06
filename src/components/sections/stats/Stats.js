import React, { useEffect, useState } from 'react'
import './Stats.css'
import statsData from '../../../data/stats'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

export default function AIStats() {
    // inView state
    const [ ref, inView ] = useInView({
        triggerOnce: false, // it will be triggered when inview and out of view
        threshold: 0.1 // will display content when the section is 10% visible
    })

    // state to hold the current number counting
    const [ counts, setCounts ] = useState(statsData.map(() => 0)) // initial state is 0

    // upSpring
    const upSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(-50%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })

    // downSpring
    const downSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(50%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })

    const statsSpringArray = [2, 4]

    // useEffect to automatically count the numbers on mount
    useEffect(() => {
        // if the component is inView
        if (inView) {
            // function to automatically count the numbers
            const interval = setInterval(() => {
                setCounts(prevCounts => // The array of zeros
                    prevCounts.map((count, index) => {
                        // const target = parseInt(statsData[index].value.replace(/\D/g, "")) // only get numbers, this is for arrays in which the value property has a value that is not included in 0 - 9
                        const target = parseInt(statsData[index].value)
                        
                        // if the count is less than the target
                        if (count < target ) {
                            return count + Math.ceil(target / 50) // incerement by a fraction
                        } else {
                            return target
                        }
                    })
                )
            }, 50)


            // clean up the interval when the component unmounts
            return () => clearInterval(interval)
        }

    }, [inView]) // watch out if the component is inView

  return (
    <section className='stats-section' ref={ref}>
        <div className="dots-layer"></div>
        
        {statsData.map((s, index) => {
            // store the icon in a variable
            const Icon = s.icon

            return (
                <animated.div
                    key={s.id}
                    className='stats-content'
                    style={{
                        ...statsSpringArray.includes(s.id) ? downSpring : upSpring
                    }}
                >
                    <div className='stats-icon'>
                        <Icon size={40} stroke='#fff' />
                    </div>

                    <div className='stats-texts'>
                        <div className='d-flex align-items-center gap-2'>
                            <h5>{counts[index]}</h5>
                            <p className='fs-1'>{s.suffix}</p>
                        </div>
                        <p>{s.label}</p>
                    </div>
                </animated.div>
            )
        })}
    </section>
  )
}

