import React from 'react';
import './MacJackDcRep.scss'; 

const commonFixes = [
  'Your MacBook won’t start',
  'Your jack is loose or bent',
  'Your charger doesn’t work',
  'Your jack doesn’t work'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="MacBook / MacBook Pro / MacBook Air DC -In Board Replacement" cost="$75 - $150" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Not getting a charge?  MacBook dead?  
        You may require a jack / DC-in board replacement.  Feel free to bring in your 
        MacBook to our Mac repair 
        Florida service shop to check out the situation to see if this is the case.
        </p>
        <h2>How do you know if your MacBook Jack is bad?
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
          <h3>MacBook Jack / DC-In Board Replacement Cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
