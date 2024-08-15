import './MicrosoftSurfaceRep.scss'
import MicrosoftServiceCards from './MicrosoftServiceCards'
import MicrosoftDataSearch from './MicrosoftDataSearch'
import MicrosoftPriceCards from './MicrosoftPriceCards'
import MicrosoftFooter from './MicrosoftFooter'

import MacBookCenter from '../../assets/microsoft-surface.jpg'

export default function IPhoneRepairs() {
  return (
    <>
    <div className="MicrosoftRepairContainer">
            <div className="MicrosoftRepairsContent">
                <h1 className="MicrosoftRepairsTitle">Microsoft Surface Repairs</h1>
                  <p className="MicrosoftRepairsDes">
                  Best Microsoft Surface repairs in FL! Bring your Microsoft Surface device to 
                  our FL Microsoft repair shop for an on-the-spot diagnostic.  We typically 
                  stock all parts so you’ll be in and out quickly.  Experience 
                  perfection – original parts, qualified Microsoft techs, and guaranteed service.
                  </p>

                <button className="MicrosoftRepairsButton">
                    Get a free diagnostic
                </button>
            </div>
            <div className="MicrosoftRepairsImg">
                <img src={MacBookCenter} alt="Pc Repair Image" className='IPadImg'/>
            </div>
        </div>

        <MicrosoftServiceCards />
        <MicrosoftDataSearch />
        <h2 className="Microsoft-title-header-middle">$100 off when installing both your screen and battery at the same time!</h2>
        <MicrosoftPriceCards />
        <MicrosoftFooter />
    </>
  )
}
