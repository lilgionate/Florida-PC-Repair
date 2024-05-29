import React from 'react';
import './MessengerServiceRep.scss'

const heroBgClass = "bg-cover bg-center text-white py-16 px-4";
const maxContainerClass = "max-w-3xl mx-auto text-center";
const titleClass = "text-4xl font-bold mb-4";
const textClass = "text-lg mb-8";
const buttonClass = "bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600";

const HeroSection = () => {
  return (
    <div className={`${heroBgClass}`} style={{backgroundImage: "url('https://placehold.co/1920x1080')"}}>
      <div className={`${maxContainerClass}`}>
        <h1 className={`${titleClass}`}>Batman may have saved Gotham. But we will rescue your technology all without leaving the safety of your home or office.</h1>
        <p className={`${textClass}`}>Busy fighting crime all day, or more likely in meetings, or just don’t have the time to bring your computer to us? Don’t worry, our trusty sidekick, Robin (let’s just pretend), will pick up and deliver your phone, tablet, laptop, or computer. You can throw it in a suitcase, bag, or just hand it over as is. Same-day messenger service is available by scheduling your pick-up by 12 Noon.</p>
        <a href="#" className={`${buttonClass}`}>Schedule a Pickup Now</a>
      </div>
    </div>
  );
};

export default HeroSection;
