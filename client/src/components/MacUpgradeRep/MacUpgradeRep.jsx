import React from 'react';
import './MacUpgradeRep.scss'; 

const commonFixes = [
  'RAM / Memory Speed boost',
  'Hard drive extra storage / Solid state clones',
  'Operating system upgrade to the latest version',
  'Video card graphics upgrade',
  'Network card upgrade for faster browsing',
  'Software Upgrades for better stability'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Mac Upgrade Cost" cost="$50 + depending on parts and labor" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>You don’t need to buy a new computer if you can 
        upgrade your current one in a cost effective manner. Consult with our Florida 
        Mac upgrade 
        technicians who will recommend the optimal solution to maximize your system.
        </p>
        <h2>Our Mac upgrades include:
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
          <h3>Mac Upgrade Cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
