import React from 'react';
import './PcRepairs.scss';

const MacServiceCard = ({ image, altText, title, priceRange, linkUrl }) => {
    return (
        <div className="pc-services-price-cards">
            <img src={image} alt={altText} className="pc-services-price-img" />
            <div className="mt-4">
            <a href={linkUrl}>
                <h3 className="pc-services-price-title">{title}</h3>
            </a>
                <p className="pc-services-price">Price Range: {priceRange}</p>
            </div>
        </div>
    );
};

export default MacServiceCard;