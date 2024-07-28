import React from 'react';
import './MacBookRamMemoryUp.scss'; 

const commonFixes = [
  'Speed up your boot-up time',
  'Reduce freezing',
  'Reduce beachballs',
  'Faster Internet speed',
  'Quicker programs',
  'Be more productive'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="2GB RAM upgrade" cost="$50" />
    <TableRow title="4GB RAM upgrade" cost="$75" />
    <TableRow title="8GB RAM upgrade" cost="$100 – $125" />
    <TableRow title="16GB RAM upgrade" cost="$150 – 195" />
  </div>
);

const RepairCostsSectionTwo = () => (
    <div className="price-section">
      <TableRow title="2GB – 64GB RAM upgrade" cost="$50 and up based on model of RAM" />
    </div>
  );

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Just like old age, Macs get slower over time. 
        The easiest, most cost-effective solution is to get a RAM upgrade. It will 
        speed it up quickly without affecting your files. Not sure how much RAM you 
        can upgrade to? No worries, 
        we’ll let you know the upgrade options and choices you have for your Mac.
        </p>
        <h2>Common Mac RAM upgrade requests we take care of:
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
          <h3>MacBook / MacBook Pro / Mac Mini RAM Upgrade Costs:</h3>
          <RepairCostsSection />
        </div>
        <div className='repair-cost-two'>
          <h3>iMac RAM Upgrade Costs:</h3>
          <RepairCostsSectionTwo />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
