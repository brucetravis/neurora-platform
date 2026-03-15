import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import { Menu, X } from 'lucide-react'

export default function Header() {
    
    // An array of pages
    const pages = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/aboutPage"  },
        { id: 3, name: "Adoption", path: "/adoption"  },
        { id: 4, name: "AI Products", path: "/products"  },
        { id: 5, name: "Industries", path: "/industries"  },
        { id: 6, name: "News", path: "/news"  }
    ]

    // state to track the last scrolling position
    const [ lastScrollY, setLastScrollY ] = useState(0) // initially, It is at the top

    // state ot display and hide the header
    const [ showHeader, setShowHeader ] = useState(true) // initially show the header

    // statw to know if the user has scrolled so that we acn add teh background
    const [ scrolled, setScrolled ] = useState(false) // initially the user has not scrolled

    const [isHover, setIsHover] = useState(false)

    // state to open and close the header on mobile
    const [ isOpen, setIsOpen ] = useState(false) // initial state is false (meaning that the header is closed)

    // useLocation to track the loacation of the page
    const location = useLocation()

    const isAboutPage = location.pathname === '/aboutPage'

    // inView state
    const [ ref, inView ] = useInView({
        triggerOnce: false,
        threshold: 0.1
    })

    // linkSpring
    const linkSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(-50%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })

    // logo spring
    const logoSpring = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(-50)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })

    // buttonSpring 
    const buttonSpring = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(50%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })

    const buttonStyle = {
        background: isHover && isAboutPage ? '#fff' : isHover ? 'rgb(43, 19, 73, 0.8)' : 'none',
        // color: isHover ? '#fff' : isAboutPage && !scrolled ? '#fff' : '#2b1349',
        color: isHover && isAboutPage ? '#2b1349' : isHover ? '#fff' : isAboutPage && !scrolled ? '#fff' : '#2b1349',
        border: `2px solid ${isAboutPage && !scrolled ? '#fff' : '#2b1349'}`,
        padding: '5px 40px',
        borderRadius: '50px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    }
    

    // function to navigate to another page
    const navigate = useNavigate()
    

    // useEffect to hide the header when scrolling down
    useEffect(() => {
        // function to handle the scrolling position
        const handleScroll = () => {
            // track the current scrolling position
            const currentScrollY = window.scrollY
            
            // if the last scrolling position is smaller than the current scrolling position
            if (currentScrollY > lastScrollY) {
                // hide the header
                setShowHeader(false)
                // Otherwise show the header
            } else {
                setShowHeader(true)
            }

            // Add background and shadow after scrolling 50px
            if (currentScrollY > 50) setScrolled(true)
            else setScrolled(false)

            // upate the lastscroll position with the current scroll position
            setLastScrollY(currentScrollY)
        }

        // listen fro the scroll event
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [ lastScrollY])


  return (
    <header
        ref={ref}
        className={`header ${ showHeader ? 'show' : 'hide' } ${scrolled ? 'scrolled' : ''}`}
    >
        <animated.div
            style={{
                ...logoSpring
            }}
        >
            {/* <img 
                src={require('../../images/logo.jpg')}
                alt='Neurora logo'
                className='logo'
            /> */}
        </animated.div>

        <animated.div 
            className='header-links'
            style={{
                ...linkSpring
            }}
        >
            {pages.map((p) => (
                <Link
                    key={p.id}
                    to={p.path}
                    // className={`${location.pathname === '/aboutPage' ? "text-white": ''}`}
                    style={{
                        color: isAboutPage && !scrolled
                                ? 'white' 
                                : '#2b1349'
                    }}
                >
                    {p.name}
                </Link>
            ))}
        </animated.div>

        <Menu 
            size={30}
            stroke='#333'
            onClick={() => setIsOpen(true)} // open the header
            className='open-mobile-icon'
        />

        <animated.div
            style={{
                ...buttonSpring
            }}

            className="d-flex align-items-center gap-2"
        >
            <button
                className='login-btn'
                style={buttonStyle}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={() => navigate('/userRegistration')}
            >
                Login
            </button>

            <div 
                className="user-header-image"
                onClick={() => navigate('/useraccount')}
            >
                <img 
                    src='https://i.pinimg.com/736x/4c/00/2a/4c002a9f9a5b2bbe84b688afb044accb.jpg'
                    alt='User Profile'
                />
            </div>
        </animated.div>

        {isOpen && (
            <animated.nav
                className={`mobile-nav`}
                style={{
                    ...linkSpring
                }}
            >
                <X 
                    size={30}
                    stroke="#333"
                    onClick={() => setIsOpen(false)} // close the header when the header is closed
                    className='close-mobile-icon'
                />

                {pages.map((p) => (
                    <Link
                        key={p.id}
                        to={p.path}
                    >
                        {p.name}
                    </Link>
                ))}

            </animated.nav>
        )}
    </header>
  )
}
