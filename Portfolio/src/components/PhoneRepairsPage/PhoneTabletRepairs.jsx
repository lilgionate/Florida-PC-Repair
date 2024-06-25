import React from 'react'

import './PhoneTabletRepairs.scss'
import MacBookCenter from '../../assets/phone-Repair.webp'
import PhoneServiceCards from './PhoneServiceCards'
import PhoneIssuesRepair from './PhoneIssuesRepair'
import PhoneFooter from '../../assets/phone-footer.avif'

export default function PhoneTabletRepairs() {
  return (
    <>
        <div className="PhoneRepairContainer">
            <div className="PhoneRepairsContent">
                <h1 className="PhoneRepairsTitle">Phone & Tablet Repairs</h1>
                <p className="PhoneRepairsDes">
                Guaranteed service and affordable prices.  Need we say more?  Your search is over.  Get reliable service for your mobile device now.
                </p>
                <button className="PhoneRepairsButton">
                    Get a free diagnostic
                </button>
            </div>
            <div className="PhoneRepairsImg">
                <img src={MacBookCenter} alt="Pc Repair Image" className='PhoneImg'/>
            </div>
        </div>

        <PhoneServiceCards />
        <PhoneIssuesRepair />

        <div className="phone-repair-bottom-container">
            <img src={PhoneFooter} alt="Mac Repair" className="phone-repair-img" />
            <div className="phone-overlay">
                <div className="phone-overlay-text">
                    <h1>Does Your Phone Need a Fix?</h1>
                    <a href="#" >Get a free diagnostic</a>
                </div>
            </div>
        </div>
    </>
  )
}
