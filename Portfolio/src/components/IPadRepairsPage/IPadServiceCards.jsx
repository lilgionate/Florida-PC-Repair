import React from 'react';
import './IPadRepairs.scss';


const IPhoneScenarios = ({ title, description }) => {
    return (
        <div className="IPad-card-container">
            <h2 className="IPad-title">{title}</h2>
            <p className="IPad-text">{description}</p>
        </div>
    );
};


export default function IPhoneServiceCards() {
  return (
    <div className="IPad-service-container">
            <h2 className="IPad-title-header">Why are we better than your typical iPad repair FL shop?</h2>
            <div className="IPad-service-grid">
                <IPhoneScenarios
                    title="Quick turn-around iPad repairs"
                    description="You need your iPad fixed ASAP. We get that and will start the process right away."
                />
                <IPhoneScenarios
                    title="Most affordable pricing in FL"
                    description="You won’t find it cheaper elsewhere."
                />
                <IPhoneScenarios
                    title="Satisfaction guaranteed"
                    description="You’ll receive a 60-day warranty to guard against any iPad defect issues. Not happy with our service? Don’t pay a dime."
                />
                <IPhoneScenarios
                    title="Best iPad repair FL service"
                    description="Best parts? Yes! Cheapest? Check! Fastest? Yup! Best customer service? No doubt! Need we say more?!"
                />
                <IPhoneScenarios
                    title="Done right the first time"
                    description="We’ve repaired iPads that have been fixed before from other iPad repair shops and they had screen gaps and did not pass our quality standards.  We have been repairing iPads since they first came out and will ensure it is done right."
                />
            </div>
        </div>
  )
}
