import React from 'react';
import './Card.scss';

import img1 from '../../assets/warranty.jpeg';
import img2 from '../../assets/IT-Support.jpg';
import img3 from '../../assets/onsite.jpg';
import img4 from '../../assets/custom.jpg';
import img5 from '../../assets/data-recovery.jpg';
import img6 from '../../assets/warranty1.jpg';

const ServiceCard = ({ imageUrl, altText, title }) => (
  <div className="service-card-background">
  <div className="service-card">
    <img src={imageUrl} alt={altText} className="service-card-image" />
    <div className="service-card-content">
      <h3 className="service-card-title">{title}</h3>
    </div>
    </div>
  </div>
);

const ServicesGrid = () => (
  <div className="services-grid">
    <ServiceCard imageUrl={img1} altText="Repair Centers" title="Repair Center" />
    <ServiceCard imageUrl={img2} altText="Remote IT Support" title="Remote IT Support" />
    <ServiceCard imageUrl={img3} altText="Onsite Tech Visit" title="Onsite Tech Visit" />
    <ServiceCard imageUrl={img4} altText="Custom PC Build & Repair" title="Custom PC Build & Repair" />
    <ServiceCard imageUrl={img5} altText="Data Recovery" title="Data Recovery" />
    <ServiceCard imageUrl={img6} altText="Tech Protection Warranty" title="Tech Protection Warranty" />
  </div>
);

const App = () => {
  return (
    <div>
      <ServicesGrid />
    </div>
  );
};

export default App;
