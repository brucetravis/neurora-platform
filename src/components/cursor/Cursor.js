import React, { useEffect, useState } from 'react'
import './Cursor.css'

export default function Cursor() {

    // stat to track the position of the cursor
    const [ position, setPosition ] = useState({ x: 0, y: 0 })

    const [ trail, setTrail ] = useState([]) // store the latest position

    // Track the mouse position
    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', moveCursor)

        // clean up
        return () => window.removeEventListener('mousemove', moveCursor)

    }, []) // watch out for nothing

    // add trail positions
    useEffect(() => {
        const interval = setInterval(() => {
            setTrail((prev) => {
                const newTrail = [...prev, { x: position.x, y: position.y }]
                if(newTrail.length > 30) newTrail.shift()
                return newTrail
            })
        }, 16)

        return () => clearInterval(interval)
    }, [position])

  return (
    <>
        <div
            className='custom-cursor'
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        >
            
        </div>

        {/* trail */}
        {trail.map((t, i) => (
            <div 
                key={i}
                className='trail-dot'
                style={{
                    left: `${t.x}px`,
                    top: `${t.y}px`,
                    opacity: (1 + 1) / trail.length,
                    transform: `translate(-50%, -50%) scale(${i / trail.length}) rotate(${Math.random() * 360}deg)`
                }}
            />
        ))}
    </>
  )
}
