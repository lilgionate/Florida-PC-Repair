import React from 'react';
import './WindowsScreenRep.scss'; // Import SCSS file

const commonFixes = [
  'Cracked screen',
  'Dim / black screen',
  'Discoloration',
  'Bad back light',
  'Image goes in and out',
  'Lines on screen',
  'Dead pixels',
  'Fuzzy image'
];

const commonProcess = [
    'You’ll receive an original, brand-new laptop screen. No used screens here.',
    'We offer a 60-day warranty.  Others offer 30 days or less.',
    'Done within the hour if in stock.  Out-of-stock screens are done within 1-2 days.  That’s fast!',
    'We’re certified to perform repairs for Dell, Lenovo, HP, Sony, and others.  Need we say more?',
    '100% happiness guarantee.  Not happy with our work?  Don’t pay a dime.'
  ];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Typical LCD Screen Replacement Cost" cost="$125 – $195" />
    <TableRow title="Touchscreen / IPS / High-end Screen Replacement Cost" cost="$195 – $450" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>
        Is your laptop cracked or dim?  We can replace 
        laptop screens quickly by the same or next day.  You’ll receive a precise 
        flat fee for the replacement or fix for your screen.  Original screens, 
        certified laptop screen replacement service, and 100% guaranteed service.
        </p>
        <h2>We support the following broken screen issues:</h2>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <h3>Laptop Screen Repair Florida Experts</h3>
        <p className='power-header2'>Florida PC Support replaces over a dozen 
        laptop screens on a daily basis. It is like second nature to us. Why are we 
        the go-to place for laptop screen replacements in Florida? We already have a huge 
        stock of the most popular laptop screens and can get the job done fast and done 
        right. Most importantly, our prices are reasonable and based on the job. 
        Sometimes, it’s not the screen that needs to be replaced, but a cheaper 
        part, such as the inverter board or video cable. We’ll find out your 
        exact broken screen issue, in turn, 
        providing the most cost effective, qualified service.
        </p>
        <h3>The Florida PC Support laptop screen repair service advantage:</h3>
        <ul className='power-ul'>
          {commonProcess.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <div>
          <h3>Windows / PC Laptop Screen Replacement Costs:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default WindowsRepairComponent;
