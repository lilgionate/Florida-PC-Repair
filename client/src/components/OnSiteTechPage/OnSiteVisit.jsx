import PropTypes from 'prop-types';
import './OnSiteTechPage.scss';

const OnsiteVisit = () => {
  return (
    <div className="onsite-visit-container">
      <h2 className="onsite-visit-heading">Schedule your Onsite Visit</h2>
      <div className="onsite-visit-as-needed">
        <h3 className="onsite-visit-title">As-Needed</h3>
      </div>
      <div className="onsite-visit-info">
        <p className="onsite-visit-price"><span className='onsite-visit-dollar'>$</span>150/hr</p>
        <p className="onsite-visit-sub">1-hr minimum</p>
      </div>
      <ul className="onsite-visit-list">
        <ListItem text="Great for quick fixes" />
        <div className="onsite-visit-divider"></div>
        <ListItem text="Available 7 days a week" />
        <div className="onsite-visit-divider"></div>
        <ListItem text="Outsource your IT issue list" />
      </ul>
      <div className="onsite-visit-info">
        <button className="onsite-visit-button">Schedule Now</button>
      </div>
      <p className="onsite-visit-note">Pay hourly as needed</p>
    </div>
  );
};

const ListItem = ({ text }) => {
  return (
    <li className="onsite-visit-list-item">
      <i aria-hidden="true" className="onsite-visit-icon fa-solid fa-circle-check"></i>
      {text}
    </li>
  );
};

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default OnsiteVisit;
