import './IPhoneRepairs.scss';
import PropTypes from 'prop-types';

import PhoneSpill from '../../assets/phone-water-spill.webp';
import PhoneBattery from '../../assets/iphone-battery.webp';
import PhoneScreen from '../../assets/brokenIphone.webp';
import PhoneData from '../../assets/Iphone-data-recovery.jpg';

const RepairCard = ({ title, imageUrl, issue, causes, solution, parts, repairTime, link }) => {
  return (
    <div className="IPhone-price-repair-card">
      <div className="IPhone-price-repair-card-content">
        <img src={imageUrl} alt={title} className="IPhone-price-repair-card-image" />
        <div className="IPhone-price-repair-content">
          <h2 className="IPhone-price-repair-card-title">{title}</h2>
          <p className="IPhone-price-repair-card-text">
            {issue} {causes} {solution} {parts} {repairTime}
          </p>
          <a href={link} className="IPhone-price-repair-card-button">Learn More</a>
        </div>
      </div>
    </div>
  );
};

RepairCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  causes: PropTypes.string,
  solution: PropTypes.string,
  parts: PropTypes.string,
  repairTime: PropTypes.string,
  link: PropTypes.string.isRequired,
};

const RepairCards = () => {
  return (
    <div className="IPhone-price-repair-cards-container">
      <RepairCard
        title="Water Spill Repair"
        imageUrl={PhoneSpill}
        issue="Issue: Spilled liquid or dropped into water"
        causes="Causes: No power / no screen picture"
        solution="Solution: Diagnose and replace affected parts"
        parts="Parts: OEM"
        repairTime="Repair time:"
        link="/iphone-repair-services/water-spill-repair/"
      />
      <RepairCard
        title="Battery Replacement"
        imageUrl={PhoneBattery}
        issue="Issue: No battery / drains fast"
        causes="Causes: Heavy usage / Defective"
        solution="Solution: Replace battery"
        parts="Parts: OEM"
        repairTime="Battery Replacement Walk-in Service Support"
        link="/iphone-repair-services/battery-replacement/"
      />
      <RepairCard
        title="Screen Replacement"
        imageUrl={PhoneScreen}
        issue="Best iPhone repair in FL! Bring your iPhone to our FL iPhone repair shop. Experience perfection – qualified iPhone techs, and guaranteed service. Transparent Disclaimer: Since"
        link="/iphone-repair-services/screen-replacement/"
      />
      <RepairCard
        title="Data Recovery"
        imageUrl={PhoneData}
        issue="Issue: Need to recover photos, videos and/or files"
        causes="Causes: iPhone won’t start or work properly"
        solution="Solution: Recover files to media or another phone or"
        link="/iphone-repair-services/data-recovery/"
      />
    </div>
  );
};

export default RepairCards;
