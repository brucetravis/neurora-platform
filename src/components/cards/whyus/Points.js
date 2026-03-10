import React from 'react'
import './Points.css'
import { animated } from 'react-spring'

export default function Points({ icon, title, content, animation }) {
  return (
    <animated.div 
      className='points-card'
      style={{
        ...animation,
        width: '100%'
      }}
    >
      <div className="icon-wrapper">{icon}</div>
      <h3 className="points-title">{title}</h3>
      <p className="points-desc">{content}</p>
    </animated.div>
  )
}
