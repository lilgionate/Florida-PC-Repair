import React from 'react';
import PropTypes from 'prop-types';
import "./DataRecoveryServices.scss";

const PricingCard = ({ title, prices }) => {
  return (
    <div className="cardDataClasses">
      <h3 className="titleDataClasses">{title}</h3>
      <div className="descriptionDataClasses">
        {prices.map((price, index) => (
          <React.Fragment key={`${price.name}-${index}`}>
            <div className="sectionDataClasses">
              <h3 className="priceDataClasses">{price.name}</h3>
              {[...Array(price.dots)].map((_, dotIndex) => (
                <span key={dotIndex} className="dot">.</span>
              ))}
              <span className="data-pricing">{price.price}</span>
            </div>
            <p className="data-price-des">{price.description}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// Define prop types for the component
PricingCard.propTypes = {
  title: PropTypes.string.isRequired,   // `title` should be a string and is required
  prices: PropTypes.arrayOf(            // `prices` should be an array of objects
    PropTypes.shape({
      name: PropTypes.string.isRequired,   // `name` should be a string and is required
      dots: PropTypes.number.isRequired,   // `dots` should be a number and is required
      price: PropTypes.string.isRequired,  // `price` should be a string and is required
      description: PropTypes.string,       // `description` should be a string
    })
  ).isRequired,
};

export default PricingCard;
