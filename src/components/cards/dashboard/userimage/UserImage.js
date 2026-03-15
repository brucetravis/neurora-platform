import React from 'react'
import './UserImage.css'

export default function UserImage() {
  return (
    <div className='user-image'>
      <img 
        src='https://i.pinimg.com/736x/4c/00/2a/4c002a9f9a5b2bbe84b688afb044accb.jpg'
        alt='user pic'
      />
      
      <div className='user-name'>
        <div>
          <h6>Peter Till</h6>
          <p>Ui/Ux Designer</p>
        </div>

        <div>
          <div className='price'>
            <p>$1200</p>
          </div>
        </div>
      </div>
    </div>
  )
}
