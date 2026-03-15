import React from 'react'
import './Upperdiv.css'
import { Laptop, User2, UserPlus2 } from 'lucide-react'

export default function Upperdiv() {
  return (
    <div className='upper-div'>
        <div className='user-welcome'>
            <h5>Welcome in, Nixito</h5>

            <div className='user-welcome-texts'>
                <p>Interviews</p>
                <p>Hired</p>
                <p>Project time</p>
            </div>

            <div className='user-welcome-buttons'>
                <div className='button-black'>
                    <p>15%</p>
                </div>

                <div className='button-yellow'>
                    <p>15%</p>
                </div>

                <div className='button-white'>
                    <p>60%</p>
                </div>
                <div className='button-plain'>
                    <p>10%</p>
                </div>
            </div>
        </div>

        <div className='user-welcome-stats'>
            <div>
                <div className='stat-icon'>
                    <div className='icon'>
                        <User2 
                            size={14}
                            stroke='#333'
                        />
                    </div>

                    <p>78</p>
                </div>
                
                <h6>Employee</h6>
            </div>

            <div>
                <div className='stat-icon'>
                    <div className='icon'>
                        <UserPlus2 
                            size={14}
                            stroke='#333'
                        />
                    </div>

                    <p>
                        56
                    </p>
                </div>
                
                <h6>Hirings</h6>
            </div>

            <div>
                <div className='stat-icon'>
                    <div className='icon'>
                        <Laptop 
                            size={14}
                            stroke='#333'
                        />
                    </div>

                    <p>203</p>
                </div>
                
                <h6>Projects</h6>
            </div>
        </div>
        
    </div>
  )
}
