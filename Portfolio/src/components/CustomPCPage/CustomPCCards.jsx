import React from 'react';
import './CustomPCPage.scss';
import cardData from './CustomPCCardData'; // Assuming cardData is in a separate file

const Card = ({ title, description, image }) => (
    <div className="custom-pc-card">
        <img className="custom-pc-card-image" src={image} alt={title} />
        <div className="custom-pc-card-content">
            <div className="custom-pc-card-title">{title}</div>
            <p className="custom-pc-card-description">{description}</p>
        </div>
        <div>
            <button className="custom-pc-card-button">
                Learn More
            </button>
        </div>
    </div>
);

const CardList = () => (
    <div className="custom-pc-cards">
        {cardData.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} image={card.image} />
        ))}
    </div>
);

export default CardList;