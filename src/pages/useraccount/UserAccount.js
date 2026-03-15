import React from 'react'
import './UserAccount.css'
import Upperdiv from '../../components/cards/dashboard/upperdiv/Upperdiv'
import UserImage from '../../components/cards/dashboard/userimage/UserImage'
import Progress from '../../components/cards/progress/Progress'
import TimeTracker from '../../components/cards/dashboard/timetracker/TimeTracker'
import Notifications from '../../components/cards/notifications/Notifications'
import Contributions from '../../components/cards/contributions/Contributions'
import Dates from '../../components/cards/dashboard/dates/Dates'

export default function UserAccount() {
    return (
        <section className='dashboard-container'>
            <div className='dash'>
                <Upperdiv />
            </div>

            <div className='user-information'>
                <div className='dashboard-main'>
                    <div className='dashboard-row-1'>
                        <UserImage />
                        <Progress />
                        <TimeTracker />
                    </div>


                    <div className='contributions-dates'>
                        <Contributions />
                        <Dates />
                    </div>
                </div>
                
                <div className='dashboard-notifications'>
                    <Notifications />
                </div>
            </div>
        </section>
    )
}