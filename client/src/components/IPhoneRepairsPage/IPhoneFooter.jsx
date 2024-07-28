import React from 'react';
import './IPhoneRepairs.scss';

import FooterCheckmark from '../../assets/footer-checkmark.png';


const RepairOption = ({ text }) => (
  <div className="iphone-footer-repair-option">
    <img className="iphone-footer-repair-option-icon" src={FooterCheckmark} alt=''/>
    {text}
  </div>
);

const RepairOptions = () => (
  <div className="iphone-footer-repair-options">
    <RepairOption text="Camera Repair" />
    <RepairOption text="Charging Port Repair" />
    <RepairOption text="Headphone Jack Repair" />
    <RepairOption text="Home Button Repair" />
    <RepairOption text="Microphone Repair" />
    <RepairOption text="Power Button Repair" />
    <RepairOption text="Speaker/Earpiece/Volume Repair" />
    <RepairOption text="Vibrator Repair" />
    <RepairOption text="Wifi Repair" />
  </div>
);

const RepairCard = () => (
  <div className="iphone-footer-repair-card">
    <div className='iphone-footer-background-blur'>
    <h2 className="iphone-footer-repair-card-title">Any other issue?</h2>
    <RepairOptions />
    <div className="iphone-footer-repair-card-button-container">
      <button className="iphone-footer-repair-card-button">Get a Free Diagnostic</button>
    </div>
    </div>
  </div>
);

export default RepairCard;
