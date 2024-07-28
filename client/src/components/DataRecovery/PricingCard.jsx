import React from 'react';
import "./DataRecoveryServices.scss";

const PricingCard = ({ title, prices }) => {
  return (
    <div className="cardDataClasses">
      <h3 className="titleDataClasses">{title}</h3>
      <div className="descriptionDataClasses">
        {prices.map((prices, index) => (
          <React.Fragment key={`${prices.name}-${index}`}>
            <div className="sectionDataClasses">
              <h3 className="priceDataClasses">{prices.name}</h3>
              {[...Array(prices.dots)].map((_, dotIndex) => (
                <span key={dotIndex} className="dot">.</span>
              ))}
              <span className="data-pricing">{prices.price}</span>
            </div>
            <p className="data-price-des">{prices.description}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;