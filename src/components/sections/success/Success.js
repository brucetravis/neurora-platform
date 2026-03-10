import React from 'react'
import './Success.css'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

export default function Success() {

  // An array of numbers that represent divs
  const divNums = [
    { id: 1, design: 'active' },
    { id: 2, design: 'inActive' },
    { id: 3, design: 'inActive' }
  ]

  // state to control content visibility when in View
  const [ ref, inView ] = useInView({
    triggerOnce: false, // tirigger even when content is not visible
    threshold: 0.1 // show content when 10% visible
  })

  // left visibility spring
  const leftSpring = useSpring({
    transform: inView ? 'translateX(0%)' : 'translate(-50%)',
    opacity: inView ? 1 : 0,
    config: { mass: 1, tension: 80, friction: 25},
    delay: 200  
  }) 

  // right visibility spring
  const rightSpring = useSpring({
    transform: inView ? 'translateX(0%)' : 'translateX(50%)',
    opacity: inView ? 1 : 0,
    config: { mass: 1, tension: 80, friction: 25 },
    delay: 200
  })

  return (
    <section className='success-stories-section' ref={ref}>
      <div className='success-content'>
        <div className='dot-layer'></div>
        
        <div className='left-column'>

          <animated.div 
            className='left-column-content'
            style={{
              ...leftSpring
            }}
          >
            <h2>Success Stories</h2>

            <p>
              Accelerate innovation with word-class tech teams beyong more stoic along goodness
            </p>

            <h6>James Smith </h6>

            <div
              className='stories'
            >
              {divNums.map((d, i) => (
                <div
                  key={d.id}
                  className={`stories ${d.design === 'active' ? 'active-story' : 'inactive-story'}`}
                >

                </div>
              ))}
            </div>
          </animated.div>
        </div>


        <animated.div 
          className='right-column'
          style={{
            ...rightSpring
          }}
        >
          <div className='image-section'>
            <div className='dot-circle'></div>

            <div className='image-circle'>
              <img 
                src='https://i.pinimg.com/736x/50/16/3e/50163eedce6771ccb3dae716452c4a25.jpg'
                alt='Digital marketer using AI'
              />
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  )
}
