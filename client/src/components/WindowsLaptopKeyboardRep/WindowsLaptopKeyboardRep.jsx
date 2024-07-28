import React from 'react';
import './WindowsLaptopKeyboardRep.scss'; // Import SCSS file

const commonFixes = [
  'Spilled liquid on the keyboard and now it doesn’t work',
  'Some laptop keys don’t work',
  'Laptop keys are sticky',
  'Incorrect keys are inputted when typing',
  'Just prefer to have a brand, new keyboard'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Laptop Keyboard replacement" cost="$85 – $250" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Did you spill something on your laptop?  Or maybe 
        some of your keys just mysteriously stopped working?  Either way, we don’t 
        judge and are ready to replace 
        your laptop keyboard for you.  Stop in for a speedy laptop replacement service.
        </p>
        <p className='power-des'>Here are some Windows laptop keyboard replacement scenarios we support:</p>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <div>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default WindowsRepairComponent;
