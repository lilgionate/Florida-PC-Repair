import React from 'react';
import './MacTouchpadTrackpadRep.scss'; 

const commonFixes = [
  'Cannot click on MacBook trackpad',
  'MacBook trackpad is slow and sticky',
  'Spilled liquid on trackpad',
  'Trackpad won’t work'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="MacBook / MacBook Pro / MacBook Air Touchpad / Trackpad Replacement" cost="$150 – $350" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Over time, it is common for your MacBook trackpad 
        to stick, get slow, and sometimes fail altogether.  This is part we will 
        replace for you.  Hey, this is an important part.  
        You deal with all the time so don’t let is frustrate you.
        </p>
        <h2>Here are MacBook trackpad replacement cases we support:
        </h2>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <p className='power-des'>
        Mac models supported: MacBook, MacBook Pro, MacBook Air
        </p>
        <div>
          <h3>Mac Password Reset Cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
