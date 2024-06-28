import React from 'react'
import './IPhoneRepairs.scss'
import IPhoneServiceCard from './IPhoneServiceCards'
import IPhoneDataSearch from './IPhoneDataSearch'
import IPhonePriceCards from './IPhonePriceCards'

import MacBookCenter from '../../assets/brokenIphone.webp'

export default function IPhoneRepairs() {
  return (
    <>
    <div className="IPhoneRepairContainer">
            <div className="IPhoneRepairsContent">
                <h1 className="IPhoneRepairsTitle">iPhone Repairs</h1>
                <p className="IPhoneRepairsDes">
               <span className='IPhoneRepairsDesBold'>Best iPhone repair in FL! </span>  
               Bring your iPhone to our Florida iPhone repair shop. Experience perfection – 
               qualified iPhone techs, and guaranteed service.
                </p>
                <p className="IPhoneRepairsDes">
               <span className='IPhoneRepairsDesBold'>Transparent Disclaimer: </span> 
               Since our parts are not barcoded by Apple, screen and battery replacements 
               will work fine, but will show a persistent message that part is not genuine 
               or unknown.
                </p>
                <p className="IPhoneRepairsDes">
                Why? Our parts are OEM, meaning they are coming from the same factories as Apple, but the parts are not serialized through the Apple network. As such,  you will receive an authenticity message after replacement. 
                </p>
                <p className="IPhoneRepairsDes">
                We’d rather you know upfront as most of our customers don’t care about this. But, some do.
                </p>
                <button className="IPhoneRepairsButton">
                    Get a free diagnostic
                </button>
            </div>
            <div className="IPhoneRepairsImg">
                <img src={MacBookCenter} alt="Pc Repair Image" className='IPhoneImg'/>
            </div>
        </div>

        <IPhoneServiceCard />
        <IPhoneDataSearch />
        <IPhonePriceCards />
    </>
  )
}
