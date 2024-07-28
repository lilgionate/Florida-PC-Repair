import React from 'react';
import './MessengerServiceRep.scss';
import MessengerRep from '../../assets/home-pickup.jpg';
import ServiceSection from './ServicesInclude';
import HowItWorks from './HowItWorks';
import MessengerBottom from './MessengerBottom';

const MessengerService = () => {

  return (
    <>
      <div className="MessengerRepairContainer">
        <div className="MessengerRepairsContent">
          <h1 className="MessengerRepairsTitle">Schedule a Messenger Pickup in Miami</h1>
          <p className="MessengerRepairsDes">Quick.  Easy.  Convenient.</p>
          <button className="MailRepairsButton">Schedule Now</button>
        </div>
        <div className="MessengerRepairsImg">
          <img src={MessengerRep} alt="Pc Repair Image" className='MessengerImg' />
        </div>
      </div>


      <div className="MessengerContentContainer">
        <div className="MessengerSection">
          <h2 className="MessengerTitle">
            Not able to visit us? Or have us visit you? No worries. We’re here to accommodate!
          </h2>
          <p className="MessengerContent">
            Just request a messenger to pick up your computer or device. Then, we’ll provide a free diagnostic, repair it upon approval, and courier it back to you. We’ll do all the legwork for you along with fixing your computer.
          </p>
        </div>
        <div className="MessengerPriceContainer">
          <div className="MessengerPrice">
            <h3 className="MessengerTitleTwo">CONVENIENT MESSENGER SERVICE</h3>
            <p className="MessengerContentTwo">SPECIAL: Just $20 One-Way from North to South Miami.</p>
          </div>
        </div>
      </div>

      <ServiceSection />

      /* Aucity Scheduling Here */

      <HowItWorks />

      <MessengerBottom/>

    </>
  );
};

export default MessengerService;