import './RemoteITPage.scss';

import ITSupport from '../../assets/remote-support-pioneer.jpeg';

const TechSupportComponent = () => {
  return (
    <div className="tech-support-container">
      <div className="md:w-1/2">
        <img src={ITSupport} alt="Tech Support" className="tech-support-image" />
      </div>
      <div className="tech-support-content">
        <h2 className="tech-support-title">Instant Tech Help.</h2>
        <h3 className="tech-support-subtitle">No Lines, No Waiting.</h3>
        <p className="tech-support-text">Got a tech issue? Schedule a remote session for easy help.</p>
        <p className="tech-support-text-sm">Your service will be proudly performed by in-house Florida PC Support technicians.</p>
        <button className="tech-support-button">Schedule Now</button>
      </div>
    </div>
  );
};

export default TechSupportComponent;
