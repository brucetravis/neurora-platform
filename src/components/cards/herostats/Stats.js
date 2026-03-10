import React from 'react'
import './Stats.css'

export default function Stats() {

    // an array of images
    const statImages = [
        { id: 1, image: 'https://i.pinimg.com/1200x/62/16/9f/62169fb4f961f71ff689f1d6a215dc6f.jpg' },
        { id: 2, image: 'https://i.pinimg.com/1200x/bd/f3/e8/bdf3e8621178bc9207fec2d512de166a.jpg' },
        { id: 3, image: 'https://i.pinimg.com/736x/5d/da/5c/5dda5cb40026b40b2f09d5ec61733cbf.jpg' },
        { id: 4, image: 'https://i.pinimg.com/736x/6e/1c/c4/6e1cc4cc72a5cef35be0eda605c8e46b.jpg' },
        { id: 5, image: 'https://i.pinimg.com/1200x/c4/a4/80/c4a480885ca6a7edb3f79a6d76151f78.jpg' }
    ]

  return (
    <div className='stats-card'>
        <div>
            {statImages.map((stat) => (
                <img
                    key={stat.id}
                    src={stat.image}
                    alt='stat pics'
                    className='stat-pics'
                />
            ))}
        </div>

        <div className='d-flex flex-column align-items-center'>
            <p>100K+</p>
            
            <h6>Businesses Adopting</h6>
        </div>
    </div>
  )
}
