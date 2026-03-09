import React from 'react'
import './News.css'
import latestNews from '../../../data/news'
import NewsCard from '../../cards/newscard/NewsCard'
import { useInView, useSpring, animated } from 'react-spring'

export default function News() {
  // inView state
  const [ ref, inView ] = useInView({
    triggerOnce: false, // display content when the section is inView an out of view
    threshold: 0.1 // Show content when it is 10% visible
  })

  // title spring
  const titleSpring = useSpring({
    transform: inView ? 'translateY(0%)' : 'translateY(-50%)',// initially hide the content below the view port
    opacity: inView ? 1 : 0, // When inView, display the content
    config: { mass: 1, tension: 80, friction: 25 },
    delay: 200
  })

  // upSpring
  const upSpring = useSpring({
    transform: inView ? 'translateY(0%)' : 'translateY(-50%)',// initially hide the content below the view port
    opacity: inView ? 1 : 0, // When inView, display the content
    config: { mass: 1, tension: 80, friction: 25 },
    delay: 200
  })

  //downSpring
  const downSpring = useSpring({
    transform: inView ? 'translateY(0%)' : 'translateY(50%)',// initially hide the content below the view port
    opacity: inView ? 1 : 0, // When inView, display the content
    config: { mass: 1, tension: 80, friction: 25 },
    delay: 200
  })

  const downSpringNums = [1, 3]

  return (
    <section className='news-section' ref={ref}>
      <animated.h2
        style={{
          ...titleSpring
        }}
      >
        Latest News
      </animated.h2>

      <div className='news-content'>
        {latestNews.map((n) => (
          <NewsCard
            key={n.id}
            imageLink={n.photo}
            // newsName={}
            news={n.news}
            industry={n.industry}
            link={n.link}
            date={n.date}
            cardSpring={downSpringNums.includes(n.id) ? upSpring : downSpring }
          />
        ))}
      </div>
    </section>
  )
}
