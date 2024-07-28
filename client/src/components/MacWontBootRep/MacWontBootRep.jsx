import React from 'react';
import './MacWontBootRep.scss'; 

const commonFixes = [
  'Freezing Spinning Wheel',
  'Failing hard drive',
  'Dead logic board',
  'Non-working fan',
  'Mac corruption',
  'Liquid Spill'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="MacBook / MacBook Pro / MacBook Air / iMac Won’t Boot Cost" 
              cost="$85 + depending on affected parts and severity" 
    />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Does your Mac fail to power on?  Or Mac isn’t 
        loading all the way?  Our Florida Mac experts will perform a free diagnostic, 
        testing all your parts and 
        operating system to determine the exact issue and flat fee repair cost.
        </p>
        <h2>Common Mac start-up issues we support:
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
          <h3>Mac Won’t Boot / Start-up Cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
