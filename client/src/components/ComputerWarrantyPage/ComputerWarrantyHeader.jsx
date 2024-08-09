import PropTypes from 'prop-types';
import './ComputerWarrantyPage.scss';

const ComputerWarrantyFeature = ({ text }) => {
  return (
    <div className="computer-warranty-feature">
      <i aria-hidden="true" className="computer-warranty-icon fa-solid fa-check"></i>
      <span className="computer-warranty-text">{text}</span>
    </div>
  );
};

ComputerWarrantyFeature.propTypes = {
  text: PropTypes.string.isRequired,
};

const ComputerWarrantySection = () => {
  return (
    <div className="computer-warranty-section">
      <h2 className="computer-warranty-title">Tech Protection Plan</h2>
      <div className="computer-warranty-container">
        <ComputerWarrantyFeature text="Day 1 Fixes, No Wait Time" />
        <ComputerWarrantyFeature text="Unlimited Repairs & Service" />
        <ComputerWarrantyFeature text="Skip The Claim Process" />
      </div>
    </div>
  );
};

export default ComputerWarrantySection;
