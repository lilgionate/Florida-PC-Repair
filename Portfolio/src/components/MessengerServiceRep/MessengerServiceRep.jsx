import React from 'react';
import './MessengerServiceRep.scss';
import MessengerRep from '../../assets/home-pickup.jpg';

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
    </>
  );
};

export default MessengerService;