import React from 'react';
import './CyberSecurityPage.scss';

import CyberSecurity from '../../assets/Cyber-security.jpg';

const CyberSecurityPage = () => {
  return (
   <>
    <div className="MessengerRepairContainer">
        <div className="MessengerRepairsContent">
          <h1 className="MessengerRepairsTitle">Cyber Security Protection Plan</h1>
          <p className="MessengerRepairsDes">This plan is for you if you constantly get viruses, pop-ups, browser re-directs.  Or if you want to prevent hackers, ransomware and overall protect your files and computer.</p>
          <button className="MailRepairsButton">Sign up for a plan</button>
        </div>
        <div className="MessengerRepairsImg">
          <img src={CyberSecurity} alt="Pc Repair Image" className='MessengerImg' />
        </div>
      </div>
   </>
  );
};

export default CyberSecurityPage;
