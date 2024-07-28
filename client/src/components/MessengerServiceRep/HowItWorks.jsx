import React from 'react';
import './MessengerServiceRep.scss';

const Step = ({ number, description }) => (
  <div className="how-it-works-gridItem">
    <div className="how-it-works-stepNumber">{number}</div>
    <p className="how-it-works-stepDescription">{description}</p>
  </div>
);

const StepsSection = () => (
  <div className="how-it-works-container">
    <div className="how-it-works-textCenter">
      <h2 className="how-it-works-heading">
        Let us pick up and deliver your computer or device for you. And, of course, fix it in between.
      </h2>
      <p className="how-it-works-subHeading">
        Here's how it works:
      </p>
    </div>
    <div className="how-it-works-gridContainer">
        <Step
          number="1"
          description="Complete the Schedule a Pick-Up Form and pay by credit card for the messenger service you’d like (i.e. laptop, phone, tablet, etc)."
        />
        <Step
          number="2"
          description="We’ll schedule a messenger to pick up your equipment within 2 hours."
        />
        <Step
          number="3"
          description="Once we receive it, we’ll perform a free diagnostic and provide the flat fee price for you."
        />
        <Step
          number="4"
          description="Upon your approval, we’ll fix and deliver it back to you. Or you may choose to pick it up. Your choice."
        />
    </div>
  </div>
);

const StepsComponent = () => <StepsSection />;

export default StepsComponent;
