import React, { useEffect, useState } from 'react'
import './ScrollBtn.css'
import { ArrowUp } from 'lucide-react'

export default function ScrollBtn() {
    
    // state to display the button
    const [ showBtn, setShowBtn ] = useState(false) // initially hide the button


    // useEffect to display the button when scrolling
    useEffect(() => {
        // function to handle the scroll
        const handleScroll = () => {
            // current scrolling position
            const currentScrollY = window.scrollY

            console.log(currentScrollY)

            //  if the current scrolling position is greater than the ast scrolling position
            if (currentScrollY > 600) {
                // display the button
                setShowBtn(true)

                //otherwise, hide the button
            } else {
                setShowBtn(false)
            }
        }

        // add an event listener
        window.addEventListener('scroll', handleScroll)

        // clean up the listener
        return () => window.removeEventListener('scroll', handleScroll)

    }, []) // watch out for the last scrolling position and the current scrolling position


    // function to scroll up
    const scrollUp = () => {
        window.scrollTo({ top: 0, left: 0, smooth: 0 })
    }

  return (
    <div className='scrollBtn-div'>
        {showBtn && (
            <button 
                className='scrollBtn'
                onClick={scrollUp}
            >
                <ArrowUp 
                    size={24} 
                    stroke="#333"
                    className='icon'
                />
            </button>
        )}
    </div>
  )
}
