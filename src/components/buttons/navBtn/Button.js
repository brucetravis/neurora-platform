import React from 'react'
import './Button.css'
import { useNavigate } from 'react-router-dom'

export default function Button({ text }) {
  // function to navigate to the next page
  const navigate = useNavigate()
  

  return (
    <div>
      <button
        onClick={() => navigate}
      >
        { text }
      </button>
    </div>
  )
}
