import React from 'react'
import './NewsCard.css'
import { animated } from 'react-spring'

export default function NewsCard({ imageLink, newsName, news, industry, link, date, cardSpring }) {

    // function to locate to the the actual news page
    const relocate = () => {
        window.open(link, "_blank", "noopener noreferrer")
    }

  return (
    <animated.div
        onClick={relocate}
        className='news-card'
        style={{
            ...cardSpring
        }}
    >
        <img 
            src={imageLink}
            alt={newsName}
        />

        <div className='news-card-content'>
            <div className='news-card-info'>
                <p>{industry}</p>
                <div className='active-dot'></div>
                <h6>{date}</h6>
            </div>

            <div className='news-card-news'>
                <h5>{news}</h5>
            
                <a
                    href={link}
                    target='_blank'
                    rel="noreferrer noopener"
                    className='read-more'
                >
                    Read More
                </a>
            </div>
        </div>
    </animated.div>
  )
}
