import React from 'react'
import './Button.css'
import { useNavigate } from 'react-router-dom'

export default function Button({ text, link }) {
  // function to navigate to the next page
  const navigate = useNavigate()
  

  return (
    <div>
      <button
        onClick={() => navigate(link)}
      >
        { text }
      </button>
    </div>
  )
}
