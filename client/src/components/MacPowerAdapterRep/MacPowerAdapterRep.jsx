import React from 'react';
import './MacPowerAdapterRep.scss'; 

const commonFixes = [
  'Your charger isn’t working',
  'You cannot charge your Mac',
  'Your charger is ripped',
  'You need a new charger'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="MacBook / MacBook Pro / MacBook Power Adapter Replacement" cost="$65 – $85" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Can’t charge your Mac?  Or maybe your pet ate 
        through the cord?  We will supply you with a new MacBook power adapter 
        charger right away.  We stock all MacBook models in our Florida Apple 
        repair shop and welcome you to stop in for your MacBook power adapter purchase.
        </p>
        <h2>Why should you replace your MacBook power adapter?
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
          <h3>MacBook Power Adapter Replacement Cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
