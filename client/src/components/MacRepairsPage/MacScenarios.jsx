import React from 'react';
import './MacRepairs.scss';


const MacScenarios = ({ title, description }) => {
    return (
        <div className="scenarios-card-container">
            <h2 className="scenarios-title">{title}</h2>
            <p className="scenarios-text">{description}</p>
        </div>
    );
};

export default MacScenarios;