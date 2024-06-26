import React from 'react';
import './IPhoneRepairs.scss';


const IPhoneScenarios = ({ title, description }) => {
    return (
        <div className="IPhone-card-container">
            <h2 className="IPhone-title">{title}</h2>
            <p className="IPhone-text">{description}</p>
        </div>
    );
};


export default function IPhoneServiceCards() {
  return (
    <div className="IPhone-service-container">
            <h2 className="IPhone-title-header">Why are we better than your typical iPhone repair FL shop?</h2>
            <div className="IPhone-service-grid">
                <IPhoneScenarios
                    title="Guaranteed iPhone repairs"
                    description="Fixed right."
                />
                <IPhoneScenarios
                    title="Most affordable pricing in FL"
                    description="You won’t find it cheaper elsewhere."
                />
                <IPhoneScenarios
                    title="Satisfaction guaranteed"
                    description="You’ll receive a 30-day warranty to guard against any defects and iPhone issues. Not happy with our service? Don’t pay a dime."
                />
                <IPhoneScenarios
                    title="Best iPhone repair FL service"
                    description="Best parts? Yes! Cheapest? Check! Fastest? Yup! Best customer service? No doubt! Need we say more?!"
                />
                <IPhoneScenarios
                    title="Done right the first time"
                    description="We’ve repaired iPhones that have been fixed before from other iPhone repair shops and they were missing screws, not secured, and probably caused other issues. Not us. We have been repairing iPhones since they first came out and will ensure it is done right."
                />
            </div>
        </div>
  )
}
