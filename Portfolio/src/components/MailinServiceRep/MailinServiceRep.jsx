import React from 'react'; 
import './MailinServiceRep.scss';

import NavSocial from '../NavSocial/NavSocial';

import MailinRep from '../../assets/mail-in-repair.avif';


const PcRepairPage = () => {
    return (
        <>
        <div className="PcRepairContainer">
            <div className="PcRepairsContent">
                <h1 className="PcRepairsTitle">Nationwide Mail-in Repair & Recyling</h1>
                <p className="PcRepairsDes">
                  Now, you can get Florida's best tech repair service wherever you are in the United States.
                </p>
                <p className="PcRepairsDes">
                Best of all, we’ll ship you a free shipping box and label for your laptop, tablet, phone, hard drive, or other small device.  Convenient.  Easy.  No out of pocket cost to you.
                </p>
                <button className="PcRepairsButton">
                    Book Now
                </button>
            </div>
            <div className="PcRepairsImg">
                <img src={MailinRep} alt="Pc Repair Image" className='PcImg'/>
            </div>
        </div>
        <NavSocial />
    </>
)};


export default PcRepairPage;