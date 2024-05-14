import React from 'react';
import "./DataRecoveryServices.scss";

const PricingCard = ({ title, services }) => {
  return (
    <div className="cardDataClasses">
      <h3 className="titleDataClasses">{title}</h3>
      <div className="descriptionDataClasses">
        {services.map((service, index) => (
          <React.Fragment key={`${service.name}-${index}`}>
            <div className="sectionDataClasses">
              <h3 className="priceDataClasses">{service.name}</h3>
              {[...Array(service.dots)].map((_, dotIndex) => (
                <span key={dotIndex} className="dot">.</span>
              ))}
              <span className="data-pricing">{service.price}</span>
            </div>
            <p className="data-price-des">{service.description}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;