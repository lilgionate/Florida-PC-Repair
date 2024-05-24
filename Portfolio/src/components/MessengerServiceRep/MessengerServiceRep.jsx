import React from 'react';
import './MessengerServiceRep.scss';
import MailinRep from '../../assets/mail-in-repair.avif';

const MessengerService = () => {

  return (
    <>
      <div className="MessengerRepairContainer">
        <div className="MessengerRepairsContent">
          <h1 className="MessengerRepairsTitle">Nationwide Mail-in Repair & Recycling</h1>
          <p className="MessengerRepairsDes">Now, you can get Florida's best tech repair service wherever you are in the United States.</p>
          <p className="MessengerRepairsDes">Best of all, we’ll ship you a free shipping box and label for your laptop, tablet, phone, hard drive, or other small device. Convenient. Easy. No out of pocket cost to you.</p>
          <button className="MailRepairsButton">Book Now</button>
        </div>
        <div className="MessengerRepairsImg">
          <img src={MailinRep} alt="Pc Repair Image" className='MessengerImg' />
        </div>
      </div>
    </>
  );
};

export default MessengerService;