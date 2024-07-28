import React from 'react';
import './CyberSecurityPage.scss';
import TimelineUno from './CyberTimeline';
import TimelineDos from './CyberTimelineTwo';
import FeatureList from './CyberTimelineHeader';
import ProtectionPlan from './CyberProtectionPlan';
import CyberTable from './CyberTable';
import CyberNotes from './CyberNotes';
import CyberSecurityStripeContainer from './CyberSecurityStripeContainer';

import CyberSecurity from '../../assets/Cyber-security.jpg';

const CyberSecurityPage = () => {

  return (
   <>
    <div className="cyber-header-container">
        <div className="cyber-header-content">
          <h1 className="cyber-header-title">Cyber Security Protection Plan</h1>
          <p className="cyber-header-des">This plan is for you if you constantly get viruses, pop-ups, browser re-directs.  Or if you want to prevent hackers, ransomware and overall protect your files and computer.</p>
          <button className="cyber-header-button">Sign up for a plan</button>
        </div>
        <div className="cyber-header-img">
          <img src={CyberSecurity} alt="Pc Repair Image" className='cyber-header-image' />
        </div>
      </div>

      <FeatureList />

      <div className='cyber-timeline-components'>
      <TimelineUno />
      <TimelineDos />
      </div>

      <ProtectionPlan />
      <CyberTable />
      <CyberNotes />
      <CyberSecurityStripeContainer />
   </>
  );
};

export default CyberSecurityPage;
