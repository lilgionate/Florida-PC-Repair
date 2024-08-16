import './RemoteITPage.scss';

import RemoteAssistant from '../../assets/Remote-Assistance.png';

const RemoteServiceCard = () => {
  return (
    <div className="it-pricing-card-container">
      <div className="it-pricing-card">
        <div className="it-pricing-card-header">
          <img src={RemoteAssistant} alt="remote per issue" className="it-pricing-img" />
          <h3 className="it-pricing-title">Remote (per issue)</h3>
          <p className="it-pricing-des">When disaster strikes</p>
        </div>
        <div className="it-pricing-card-content">
          <div className="it-pricing-price-container">
            <span className="it-pricing-price"><span className='it-price-dollar'>$</span>35</span>
            <span className="it-pricing-sub">every 15 minutes</span>
          </div>
          <div className="it-pricing-feature-list">
            <li className="it-pricing-feature-item">
              <i className="it-pricing-icon fa-solid fa-circle-check"></i>
              <span>Quick computer fixes & setups</span>
            </li>
            <div className="it-pricing-divider"></div>
            <li className="it-pricing-feature-item">
              <i className="it-pricing-icon fa-solid fa-circle-check"></i>
              <span>Schedule a tech when needed</span>
            </li>
            <div className="it-pricing-divider"></div>
            <li className="it-pricing-feature-item">
              <i className="it-pricing-icon fa-solid fa-circle-check"></i>
              <span>Save on time and money</span>
            </li>
          </div>
          <div className="it-pricing-text-center">
            <button className="it-pricing-button">Schedule Now</button>
          </div>
        </div>
      </div>

      <div className="it-pricing-card">
        <div className="it-pricing-card-header">
          <img src={RemoteAssistant} alt="remote per year" className="it-pricing-img" />
          <h3 className="it-pricing-title">Remote (per year)</h3>
          <p className="it-pricing-des">Annual peace of mind coverage</p>
        </div>
        <div className="it-pricing-card-content">
        <div className="it-pricing-price-container">
            <span className="it-pricing-price"><span className='it-price-dollar'>$</span>500</span>
            <span className="it-pricing-sub">per year</span>
          </div>
          <div className="it-pricing-feature-list">
            <li className="it-pricing-feature-item">
              <i className="it-pricing-icon fa-solid fa-circle-check"></i>
              <span>Dedicated tech team</span>
            </li>
            <div className="it-pricing-divider"></div>
            <li className="it-pricing-feature-item">
              <i className="it-pricing-icon fa-solid fa-circle-check"></i>
              <span>Preventative maintenance</span>
            </li>
            <div className="it-pricing-divider"></div>
            <li className="it-pricing-feature-item">
              <i className="it-pricing-icon fa-solid fa-circle-check"></i>
              <span>Cover all issues & requests</span>
            </li>
          </div>
          <div className="it-pricing-text-center">
            <a href="/schedule-a-service/remote-it-computer-support-service/remote-support-plan-annual/">
            <button className="it-pricing-button">Choose Plan</button>
            </a>
            <p className="it-pricing-sub-text">*Up to 12 remote sessions per year on 1 computer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoteServiceCard;
