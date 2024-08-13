import './IPadRepairs.scss'; 

import FooterCheckmark from '../../assets/footer-checkmark.png';
import PropTypes from 'prop-types';

const RepairOption = ({ text }) => (
  <div className="IPad-footer-repair-option">
    <img className="IPad-footer-repair-option-icon" src={FooterCheckmark} alt=''/>
    {text}
  </div>
);

RepairOption.propTypes = {
  text: PropTypes.string.isRequired,
};

const RepairOptions = () => (
  <div className="IPad-footer-repair-options">
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
  <div className="IPad-footer-repair-card">
    <div className='IPad-footer-background-blur'>
      <h2 className="IPad-footer-repair-card-title">Any other issue?</h2>
      <RepairOptions />
      <div className="IPad-footer-repair-card-button-container">
        <button className="IPad-footer-repair-card-button">Get a Free Diagnostic</button>
      </div>
    </div>
  </div>
);

export default RepairCard;
