import React from 'react';
import './WindowsLaptopPowerJackRep.scss'; // Import SCSS file

const commonFixes = [
  'Laptop doesn’t turn on',
  'Only runs on battery',
  'DC jack is loose',
  'Charger only works at an angle',
  'Can’t charge battery',
  'Jack has come off'
];

  const TableRow = ({ className, title, cost }) => (
    <div className={`${className} cost`}>
      {title && <span className="title">{title}</span>}
      <span className="cost-value">{cost}</span>
    </div>
  );

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Laptop Power Jack Repair" cost="$125 – $250" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Your laptop doesn’t power on.  Your power jack is 
        slightly bent.  That could only mean one thing:  you need to replace your power 
        jack.  Our laptop repair 
        technicians will replace your loose jack and ensure it will be a permanent fix.
        </p>
        <p className='power-des'>Common laptop DC jack symptoms we support:</p>
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
