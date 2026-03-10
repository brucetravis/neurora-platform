import React from 'react'
import './IndustryCard.css'
import { Link } from 'react-router-dom'
import { Heart, Lightbulb } from 'lucide-react'
import { animated } from 'react-spring'

export default function IndustryCard({ industry, photo, productPhoto, product, desc, recommendations, spring }) {
  return (
    <animated.div 
        className='industry-card'
        style={{
            ...spring
        }}
    >
        <div className='industry-image'>
            <div className='industry-product-wrapper'>
                <img 
                    src={`${photo}`}
                    alt='Industry product'
                />
                <div className='image-tint'></div>

                <div className='image-title'>
                    <div className='industry-text'>{industry}</div>

                    <div className='title-svg'>
                        <Heart size={22} stroke='#333' />
                    </div>
                </div>
            </div>

            <div className='ai-product'>
                <img 
                    src={`${productPhoto}`}
                    alt='Product pic'
                    className='product-photo'
                />

                <p>{product}</p>
            </div>
        </div>

        <div className='card-texts'>
            <div>
                <h5>{desc}...</h5>
            </div>

            <div className='recommendations d-flex gap-1'>
                <div className='icon'>
                    <Lightbulb size={18} stroke="#ffdd00" />
                </div>
                
                <div className='d-flex gap-1'>
                    {recommendations}
                    <p>recommedations</p>
                </div>
            </div>
        </div>

         <div className='card-footer'>

            <input 
                type='button'
                value='Adopt'
            />

            <Link>
                View Details
            </Link>
        </div>
    </animated.div>
  )
}
