import { useState, useEffect, useMemo } from 'react';
import './WalkIn-Repair.scss';

import greenCheck from '../../assets/green-check.png';
import redX from '../../assets/red-x.png';

const WalkInRepair = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [todaySchedule, setTodaySchedule] = useState('');
  const [tomorrowSchedule, setTomorrowSchedule] = useState('');

  const schedule = useMemo(() => ({
    Monday: '9AM - 6PM',
    Tuesday: '9AM - 6PM',
    Wednesday: '9AM - 6PM',
    Thursday: '9AM - 6PM',
    Friday: '9AM - 6PM',
    Saturday: '10AM - 3PM',
    Sunday: 'Closed'
  }), []);

  const daysOfWeek = useMemo(() => [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ], []);

  useEffect(() => {
    const today = new Date();
    const todayDayName = daysOfWeek[today.getDay()];
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const tomorrowDayName = daysOfWeek[tomorrow.getDay()];

    setTodaySchedule(schedule[todayDayName]);
    setTomorrowSchedule(schedule[tomorrowDayName]);
  }, [daysOfWeek, schedule]);

  const getNext7DaysSchedule = () => {
    const today = new Date();
    const next7Days = [];

    for (let i = 2; i < 9; i++) {
      const currentDate = new Date();
      currentDate.setDate(today.getDate() + i);
      const dayName = daysOfWeek[currentDate.getDay()];
      next7Days.push({
        day: dayName,
        schedule: schedule[dayName]
      });
    }

    return next7Days;
  };

  const next7DaysSchedule = getNext7DaysSchedule();

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
              <strong>Open Today</strong> {todaySchedule}
            </p>
            <p className="walkin-schedule-info">
              <strong>Open Tomorrow</strong> {tomorrowSchedule}
            </p>
            <p
              className="walkin-next-7-days-link"
              aria-label="Next 7 days schedule"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Next 7 days...
            </p>
            {showDropdown && (
              <div className="walkin-schedule-dropdown">
                {next7DaysSchedule.map((dayInfo, index) => (
                  <p key={index}>
                    <img
                      className='walkin-scheduler-check'
                      src={dayInfo.day === 'Sunday' ? redX : greenCheck}
                      alt={dayInfo.day === 'Sunday' ? 'red X' : 'green check'}
                    />
                    {dayInfo.day}: {dayInfo.schedule}
                  </p>
                ))}
              </div>
            )}
            <p className="walkin-appointment-info">By Appointment Only</p>
            <button className="walkin-schedule-button" aria-label="Schedule Drop-off">
              Schedule Drop-off
            </button>
          </div>
          <div className='walkin-location-map-wrapper'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1551.9208405755262!2d-80.33475760737464!3d25.99977299604164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bb8e7f838ac5%3A0x6340ed004188d429!2sfloridapcsupport!5e0!3m2!1sen!2sus!4v1712463650391!5m2!1sen!2sus"
              className='walkin-location-map'
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

     <div className="MailIn-container">
         <div className="MailIn-content">
            <h2 className='mailin-title'>Mail-In Repair</h2>
            <p className='mailin-des'>Can&apos;t find a store near you?</p>
            <button className='mailin-btn'>Mail in your device</button>
         </div>
    </div>
  </div>
    );
};

export default WalkInRepair;
