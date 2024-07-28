import React from 'react';
import './MessengerServiceRep.scss';

const ServiceCard = ({ imageSrc, altText, description }) => {
  const isFontAwesomeIcon = imageSrc.startsWith('fa-');

  return (
    <div className="MessengerServicesContent">
      {isFontAwesomeIcon ? (
        <i className={`MessengerServicesIcon ${imageSrc}`} aria-hidden="true"></i>
      ) : (
        <img aria-hidden="true" alt={altText} src={imageSrc} className="MessengerServicesImg" />
      )}
      <p className="MessengerServicesDes">{description}</p>
    </div>
  );
};

const ServiceSection = () => {
  return (
    <div className="MessengerServicesContainer">
      <div className="MessengerServicesItems">
        <h2 className="MessengerServicesTitle">Your Service Includes</h2>
        <div className="MessengerServicesCards">
          <ServiceCard
            imageSrc="fa-solid fa-clock"
            altText="clock"
            description="Same-day coverage & Quick turn-around time"
          />
          <ServiceCard
            imageSrc="fa-solid fa-certificate"
            altText="certified"
            description="Certified, reliable, professional service. Satisfaction guaranteed."
          />
          <ServiceCard
            imageSrc="fa-solid fa-dollar-sign"
            altText="dollar"
            description="Upfront cost for approval. Affordable flat fees"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
