import './RemoteITPage.scss';
import PropTypes from 'prop-types';

const RemoteSupportFeature = ({ text }) => {
  return (
    <div className="remote-support-feature">
      <i aria-hidden="true" className="remote-support-icon fa-solid fa-check "></i>
      <span className="feature-text">{text}</span>
    </div>
  );
};

RemoteSupportFeature.propTypes = {
  text: PropTypes.string.isRequired,
};

const RemoteSupportSection = () => {
  return (
    <div className="remote-support-section">
      <h2 className="section-title">Remote IT Support</h2>
      <div className="feature-container">
        <RemoteSupportFeature  text="Easy 1-Click Setup" />
        <RemoteSupportFeature  text="On-Demand Remote Support" />
        <RemoteSupportFeature  text="IT Help When You Want" />
      </div>
    </div>
  );
};

export default RemoteSupportSection;
