
import React, { useState, useEffect } from 'react';
import './WalkIn-Repair.scss';

const WalkInRepair = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isStoreOpen, setIsStoreOpen] = useState(false);
    const [nextOpeningTime, setNextOpeningTime] = useState('');

    // Define functions to get current time, check store status, and calculate next opening time
    const getCurrentTime = () => {
        return new Date();
    };

    const checkStoreStatus = () => {
        const currentHour = currentTime.getHours();
        // Define your store's opening and closing hours
        const openingHour = 9; // 9:00 AM
        const closingHour = 17; // 5:00 PM
        setIsStoreOpen(currentHour >= openingHour && currentHour < closingHour);
    };

    const calculateNextOpeningTime = () => {
        const currentHour = currentTime.getHours();
        // Define your store's opening and closing hours
        const openingHour = 9; // 9:00 AM
        const closingHour = 17; // 5:00 PM
        if (!isStoreOpen) {
            let nextOpeningDate = new Date();
            let nextClosingDate = new Date();
            if (currentHour >= closingHour) {
                nextOpeningDate.setDate(nextOpeningDate.getDate() + 1); // Next day
                nextClosingDate.setDate(nextClosingDate.getDate() + 1); // Next day
            }
            nextOpeningDate.setHours(openingHour);
            nextOpeningDate.setMinutes(0);
            nextOpeningDate.setSeconds(0);
            nextClosingDate.setHours(closingHour);
            nextClosingDate.setMinutes(0);
            nextClosingDate.setSeconds(0);
            
            // Convert opening and closing hours to standard time format (12-hour clock)
            const nextOpeningTimeHours = nextOpeningDate.getHours() % 12 || 12; // Handle midnight (0) as 12
            const nextClosingTimeHours = nextClosingDate.getHours() % 12 || 12; // Handle midnight (0) as 12
            const nextOpeningTimePeriod = nextOpeningDate.getHours() < 12 ? 'AM' : 'PM';
            const nextClosingTimePeriod = nextClosingDate.getHours() < 12 ? 'AM' : 'PM';
    
            // Format the date for display
            const nextOpeningDateString = nextOpeningDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    
            setNextOpeningTime(`Next Opening Time: ${nextOpeningDateString}, ${nextOpeningTimeHours}${nextOpeningTimePeriod} - ${nextClosingTimeHours}${nextClosingTimePeriod}`);
        }
    };
    

    // Update current time periodically
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000); // Update every second
        return () => clearInterval(timer);
    }, []);

    // Update store status and next opening time when current time changes
    useEffect(() => {
        checkStoreStatus();
        calculateNextOpeningTime();
    }, [currentTime]);

    return (
      <div className='walkin-background'>
      <div className='WalkIn-container'>
      <div className='WalkIn-header'>
        <h1 className='WalkIn-title'>Repair Center</h1>
      </div>
      <div className='WalkIn-wrapper'>
      <div className="walkin-card-container">
      <h2 className="walkin-card-title">FLORIDA PC SUPPORT</h2>
      <p className="walkin-card-address">
        972 SW 143rd Ave Pembroke Pines, FL 33027
      </p>
      <p className="walkin-schedule-info">
        <strong>Open Today</strong> 11AM - 6PM
      </p>
      <p className="walkin-schedule-info">
        <strong>Open Tomorrow</strong> 11AM - 2PM
      </p>
      <a href="#" className="walkin-next-7-days-link" aria-label="Next 7 days schedule">
        Next 7 days...
      </a>
      <p className="walkin-appointment-info">By Appointment Only</p>
      <button className="walkin-schedule-button" aria-label="Schedule Drop-off">
        Schedule Drop-off
      </button>
    </div>
        <div className='location-map-wrapper'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1551.9208405755262!2d-80.33475760737464!3d25.99977299604164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bb8e7f838ac5%3A0x6340ed004188d429!2sfloridapcsupport!5e0!3m2!1sen!2sus!4v1712463650391!5m2!1sen!2sus" 
                  className='location-map' 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>

     <div className="MailIn-container">
         <div className="MailIn-content">
            <h2 className='mailin-title'>Mail-In Repair</h2>
            <p className='mailin-des'>Can't find a store near you?</p>
            <button className='mailin-btn'>Mail in your device</button>
         </div>
    </div>
  </div>
    );
};

export default WalkInRepair;
