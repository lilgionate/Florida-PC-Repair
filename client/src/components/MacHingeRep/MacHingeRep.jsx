import React from 'react';
import './MacHingeRep.scss'; 

const commonFixes = [
  'Your MacBook screen doesn’t open all the way',
  'Your Mac is misaligned',
  'Your hinge isn’t working',
  'Your Mac has trouble opening'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="
    MacBook / MacBook Pro / MacBook Air Hinge Repair / Replacement" cost="$125 +" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Is your MacBook hinge falling apart?  
        It’s possible if your Mac took a fall or from normal wear and tear.  
        Many times, we are able to repair your hinge directly and get you back up 
        and running smoothly again.  
        You should take care of your hinge before it gets worse.
        </p>
        <h2>Why should you fix your MacBook hinge issue?
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
          <h3>MacBook Hinge Replacement Cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
