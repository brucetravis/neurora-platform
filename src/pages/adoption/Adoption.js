import React, { useState } from 'react'
import './Adoption.css'

export default function Adoption() {

    // An array of industry objects
    const industries = [
        { id: 1, industry: "Technology" },
        { id: 2, industry: "Healthcare" },
        { id: 3, industry: "Finance" },
        { id: 4, industry: "E-commerce" },
        { id: 5, industry: "Retail" },
        { id: 6, industry: "Logistics" }
    ]

    // An array of inputs
    const adoptionInputs = [
        { id: 1, input: 'industry' },
        { id: 2, input: 'companyName' },
        { id: 3, input: 'companyEmail' },
        { id: 4, input: 'companyObjectives' },
        { id: 5, input: 'companyGoals' }
    ]

    // state to switch the current input
    const [ currentInput, setCurrentInput ] = useState(adoptionInputs[0].id)

  return (
    <section className='adoption-page'>
        <div className='adoption-inputs'>
            <div className='adoption-text'>
                <h3>Your Adoption Journey Starts here</h3>
                <p>
                    The Ideal Platform to Integrate Artificial Intelligence into your workflows
                </p>
            </div>

            <div className='adoption-form'>
                <form>
                    {currentInput === 1 && (
                        <select>
                            {industries.map((i) => (
                                <option
                                    key={i.id}
                                >
                                    {i.industry}
                                </option>
                            ))}
                        </select>
                    )}

                    {currentInput === 2 && (
                        <div className='input-div'>
                            <h6>Company Name</h6>

                            <input 
                                type='text'
                                placeholder='Teklora Limited'
                                name='companyName'
                            />
                        </div>
                    )}

                    {currentInput === 3 && (
                        <div className='input-div'>
                            <h6>Company Email</h6>

                            <input 
                                type='email'
                                placeholder='teklora.company@gmail.com'
                                name='companyEmail'
                            />
                        </div>
                    )}

                    {currentInput === 4 && (
                        <div className='input-div'>
                            <h6>Adoption Objectives</h6>

                            <textarea
                                placeholder='Increase Sales revenue'
                                rows={4}
                            ></textarea>
                        </div>
                    )}

                    {currentInput === 5 && (
                        <div className='input-div'>
                            <h6>Adoption Goals</h6>

                            <textarea
                                placeholder='Increase Sales revenue by 5% next quarter'
                                rows={4}
                            ></textarea>
                        </div>
                    )}

                    <div className='adoption-nav-div'>
                        {adoptionInputs.map((i) => (
                            <div
                                key={i.id}
                                className={`nav-div ${currentInput === i.id ? 'active' : 'inActive'}`}
                                onClick={() => setCurrentInput(i.id)}
                            >
                            </div>
                        ))}
                    </div>

                    <button type='submit' className='m-0'>
                        Adopt
                    </button>
                </form>
            </div>
        </div>

        <div className='adoption-image'>
            <img 
                src={require('../../images/adoption-image-2.png')}
                alt='Cartoon working in an office'
                className='adoption-image'
            />
        </div>
    </section>
  )
}
