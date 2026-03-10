import React, { useState } from 'react'
import './Registration.css'
import { Lock, Mail, User2 } from 'lucide-react'

export default function Registration() {
    
    // state to switch to the sign in form
    const [ isSignIn, setIsSignIn ] = useState(false) // initially show the sign up form
    
    //  An arry of images
    const formLogos = [
        { id: 1, name: 'google', logo: 'https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg' },
        { id: 2, name: 'facebook', logo: 'https://i.pinimg.com/1200x/92/67/b8/9267b8300988de07fd0651c6c26ba933.jpg' },
        { id: 3, name: 'linkedIn', logo: 'https://i.pinimg.com/1200x/b2/f8/28/b2f828513f21444829a619ce563d4d4e.jpg' }
    ]
    

  return (
    <section className='registration-page'>
        <div className='registration-page-image'>
            <img 
                src='https://i.pinimg.com/736x/09/6e/35/096e359e1e0bee3457c3517b09c4d165.jpg'
                alt='A team using AI for analysis'
                className='registration-image'
            />
        </div>

        <div className={`registration-form ${ isSignIn ? 'inactive' : '' }`}>
            <div className='registration-form-text'>
                <h5>Welcome</h5>
                
                <p className='text-white'>
                    Adopt with Neurora to get the best experience
                </p>

                <button 
                    className='sign-in'
                    onClick={() => setIsSignIn(!isSignIn)}
                >
                    { isSignIn ? 'Sign Up' : 'Sign In' }
                </button>
            </div>

            <form>
                {isSignIn ? (
                    <h3>Login</h3>
                ) : (
                    <h3>Create Account</h3>
                )}
                
                <div className='form-logos'>
                    {formLogos.map((l) => (
                        <div
                            key={l.id}
                            className='form-logo'
                        >
                            <img 
                                src={l.logo}
                                alt='Sign up logo'
                            />
                        </div>
                    ))}
                </div>

                <p className='fw-bold'>or use your email for registration</p>

                <div className='form-inputs'>
                    <div className='input-icon'>
                        <User2 
                            size={20}
                            stroke='#333'
                            className='icon'
                        />

                        <input 
                            type='name' 
                            name='name'
                            placeholder='Full Name'
                        />
                    </div>

                    <div className='input-icon'>
                        <Mail 
                            size={20}
                            stroke='#333'
                            className='icon'
                        />

                        <input 
                            type='email' 
                            name='email'
                            placeholder='Email'
                        />
                    </div>

                    <div className='input-icon'>
                        <Lock
                            size={20}
                            stroke='#333'
                            className='icon'
                        />

                        <input 
                            type='password' 
                            name='password'
                            placeholder='Password'
                        />
                    </div>

                    {isSignIn === false ? (
                        <div className='input-icon'>
                            <Lock
                                size={20}
                                stroke='#333'
                                className='icon'
                            />
                            
                            <input 
                                type='password' 
                                name='confirmPassword'
                                placeholder='confirmPassword'
                            />
                        </div>
                    ) : (
                        ''
                    )}

                    <button className='sign-up'>
                        { isSignIn ? 'Sign In' : 'Sign Up' }
                    </button>
                </div>
            </form>
        </div>
    </section>
  )
}
