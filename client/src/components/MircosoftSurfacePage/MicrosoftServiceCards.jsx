import React from 'react';
import './MicrosoftSurfaceRep.scss';


const IPhoneScenarios = ({ title, description }) => {
    return (
        <div className="Microsoft-card-container">
            <h2 className="Microsoft-title">{title}</h2>
            <p className="Microsoft-text">{description}</p>
        </div>
    );
};


export default function IPhoneServiceCards() {
  return (
    <div className="Microsoft-service-container">
            <h2 className="Microsoft-title-header">Why are we better than your typical Microsoft Surface repair FL shop?</h2>
            <div className="Microsoft-service-grid">
                <IPhoneScenarios
                    title="Fast diagnostic"
                    description="You need your Microsoft Surface back ASAP.  We get that."
                />
                <IPhoneScenarios
                    title="Most affordable pricing in FL"
                    description="You won’t find it cheaper elsewhere."
                />
                <IPhoneScenarios
                    title="Satisfaction guaranteed"
                    description="You’ll receive a 30-day warranty to guard against any defects and issues. Not happy with our service? Don’t pay a dime."
                />
                <IPhoneScenarios
                    title="Best Microsoft Surface repair in FL"
                    description="Best parts? Yes! Cheapest? Check! Fastest? Yup! Best customer service? No doubt! Need we say more?!"
                />
                <IPhoneScenarios
                    title="Done right the first time. All done in-house."
                    description="We’ve repaired Microsoft Surface tablets since they first came out.  We take pride in performing all Surface repairs in-house.  No need to ship it out to Microsoft."
                />
            </div>
        </div>
  )
}
