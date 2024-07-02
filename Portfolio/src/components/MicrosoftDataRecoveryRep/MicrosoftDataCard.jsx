import React from 'react';
import "./MicrosoftDataRecoveryRep.scss";

const PricingCard = ({ title, services }) => {
  return (
    <div className="Microsoft-data-recovery-content">
      <h3 className="Microsoft-data-recovery-title">{title}</h3>
      <div className="Microsoft-data-recovery-des">
        {services.map((service, index) => (
          <React.Fragment key={`${service.name}-${index}`}>
            <div className="Microsoft-data-recovery-section">
              <h3 className="Microsoft-data-recovery-service">{service.name}</h3>
              {[...Array(service.dots)].map((_, dotIndex) => (
                <span key={dotIndex} className="IPhone-data-recovery-dot">.</span>
              ))}
              <span className="Microsoft-data-recovery-pricing">{service.price}</span>
            </div>
            <p className="Microsoft-data-recovery-price-des">{service.description}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;