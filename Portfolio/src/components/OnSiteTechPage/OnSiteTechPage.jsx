import React from 'react';
import './OnSiteTechPage.scss';
import OnSiteRep from '../../assets/OnsiteRep.jpg';



const OnSiteTechPage = () => {

  return (
    <>
      <div className="MessengerRepairContainer">
        <div className="MessengerRepairsContent">
          <h1 className="MessengerRepairsTitle">Schedule your Onsite Visit</h1>
          <p className="MessengerRepairsDes">Need an office or home computer service visit? Schedule now. You’ll get an experienced technician to take care of all your IT issues and computer requests.</p>
          <button className="MailRepairsButton">Schedule Now</button>
        </div>
        <div className="MessengerRepairsImg">
          <img src={OnSiteRep} alt="Pc Repair Image" className='MessengerImg' />
        </div>
      </div>


    </>
  );
};

export default OnSiteTechPage;