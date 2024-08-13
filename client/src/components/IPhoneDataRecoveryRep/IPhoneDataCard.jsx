import React from 'react';
import PropTypes from 'prop-types';
import "./IPhoneDataRecoveryRep.scss";

const PricingCard = ({ title, services }) => {
  return (
    <div className="IPhone-data-recovery-content">
      <h3 className="IPhone-data-recovery-title">{title}</h3>
      <div className="IPhone-data-recovery-des">
        {services.map((service, index) => (
          <React.Fragment key={`${service.name}-${index}`}>
            <div className="IPhone-data-recovery-section">
              <h3 className="IPhone-data-recovery-service">{service.name}</h3>
              {[...Array(service.dots)].map((_, dotIndex) => (
                <span key={dotIndex} className="IPhone-data-recovery-dot">.</span>
              ))}
              <span className="IPhone-data-recovery-pricing">{service.price}</span>
            </div>
            <p className="IPhone-data-recovery-price-des">{service.description}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      dots: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PricingCard;
