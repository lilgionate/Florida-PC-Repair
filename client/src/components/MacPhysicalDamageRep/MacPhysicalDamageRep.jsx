import React from 'react';
import './MacPhysicalDamageRep.scss'; 

const commonFixes = [
  'Cracked LCD screen',
  'Broken hinges',
  'Cracked casing',
  'Jammed power button',
  'Bent DVD drive',
  'Hard drive mechanical issue',
  'Damaged bezels / connectors',
  'Keyboard / touchpad spills'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Mac Physical Damage Repair" cost="$85 + based on affected parts and severity" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Need some Mac body work? We will make your Mac 
        looking like new again. Don’t worry about your damaged Mac. Whether it has 
        fallen, been tossed around, or just gone through wear and tear, we pass no 
        judgments and are happy to fix it. 
        Bring it in for a free diagnostic and cost effective solution.
        </p>
        <h2>Computer physical damage we repair:
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
          <h3>Mac Physical Damage Repair Cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
