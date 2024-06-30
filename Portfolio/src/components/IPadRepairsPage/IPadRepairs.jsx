import React from 'react'
import './IPadRepairs.scss'
import IPadServiceCards from './IPadServiceCards'
import IPadDataSearch from './IPadDataSearch'
import IPadPriceCards from './IPadPriceCards'
import IPadFooter from './IPadFooter'

import MacBookCenter from '../../assets/ipad-header.jpeg'

export default function IPhoneRepairs() {
  return (
    <>
    <div className="IPadRepairContainer">
            <div className="IPhoneRepairsContent">
                <h1 className="IPhoneRepairsTitle">iPad Repairs</h1>
                  <p className="IPhoneRepairsDes">
                    We’ve been repairing iPads since the first model. Not only do we 
                    have the experience, but our affordable rates, quick service, and 
                    quality parts are unmatchable. All models of iPads and types of 
                    repairs are welcome. Feel free to contact us for company bulk 
                    repairs. We have signed up many happy company customers as we’re 
                    able to bang out many iPad cracked screens quickly with our team 
                    of qualified iPad technicians.
                  </p>

                <button className="IPhoneRepairsButton">
                    Get a free diagnostic
                </button>
            </div>
            <div className="IPhoneRepairsImg">
                <img src={MacBookCenter} alt="Pc Repair Image" className='IPadImg'/>
            </div>
        </div>

        <IPadServiceCards />
        <IPadDataSearch />
        <IPadPriceCards />
        <IPadFooter />
    </>
  )
}
