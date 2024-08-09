import React from 'react';
import PropTypes from 'prop-types';
import "./ComputerWarrantyPage.scss";

const PricingCard = ({ title, services }) => {
  return (
    <div className="ExtraCard">
      <h3 className="Extra-title">{title}</h3>
      <div className="Extra-description">
        {services.map((service, index) => (
          <React.Fragment key={`${service.name}-${index}`}>
            <div className="Extra-section">
              <h3 className="Extra-price">{service.name}</h3>
              {[...Array(service.dots)].map((_, dotIndex) => (
                <span key={dotIndex} className="Extra-dot">.</span>
              ))}
              <span className="Extra-data-pricing">{service.price}</span>
            </div>
            <p className="Extra-data-price-des">{service.description}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// Adding PropTypes validation
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
