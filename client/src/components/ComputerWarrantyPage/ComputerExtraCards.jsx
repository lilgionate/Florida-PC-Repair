import React from 'react';
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

export default PricingCard;