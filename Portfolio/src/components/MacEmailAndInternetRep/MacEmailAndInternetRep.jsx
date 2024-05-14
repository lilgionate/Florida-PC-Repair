import React from 'react';
import './MacEmailAndInternetRep.scss'; 

const commonFixes = [
  'No wireless / network access',
  'Slow Internet speed',
  'Cannot send/receive emails',
  'New email account setup',
  'Cannot open email account',
  'Excessive spam'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="MacBook / MacBook Pro / MacBook Air / iMac Internet – Email Issue Repair" cost="$125 – $250" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Our Apple technicians will ensure you can browse 
        the Internet as fast as possible.  We’ll make sure your emails are sending 
        and receiving correctly.  
        You’ll be fully connected quickly and at a reasonable cost.
        </p>
        <h2>Internet/Email issues we support:
        </h2>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <p className='power-des'>
        Mac models supported: MacBook, MacBook Pro, MacBook Air, iMac, Mac Pro, Mac mini
        </p>
        <div>
          <h3>Internet / Email Mac Repair Cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
