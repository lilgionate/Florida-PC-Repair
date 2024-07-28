import React from 'react';
import "./IPadDataRecoveryRep.scss";

const PricingCard = ({ title, services }) => {
  return (
    <div className="IPad-data-recovery-content">
      <h3 className="IPad-data-recovery-title">{title}</h3>
      <div className="IPad-data-recovery-des">
        {services.map((service, index) => (
          <React.Fragment key={`${service.name}-${index}`}>
            <div className="IPad-data-recovery-section">
              <h3 className="IPad-data-recovery-service">{service.name}</h3>
              {[...Array(service.dots)].map((_, dotIndex) => (
                <span key={dotIndex} className="IPad-data-recovery-dot">.</span>
              ))}
              <span className="IPad-data-recovery-pricing">{service.price}</span>
            </div>
            <p className="IPad-data-recovery-price-des">{service.description}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;