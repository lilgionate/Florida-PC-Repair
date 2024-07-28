import React from 'react';
import './MacBookPowerUp.scss'; // Import SCSS file

const commonFixes = [
  'Repair logic board',
  'Replace logic board',
  'Perform spill clean-up',
  'Replace battery',
  'Replace charger',
  'Cooling system repair',
  'Replace hard drive',
  'Replace Magsafe board',
  'Replace power'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Charger / Battery Replacement" cost="$65 - $150" />
    <TableRow title="Charging Port Repair" cost="$125 - $150" />
    <TableRow title="Hard drive Replacement" cost="$210+" />
    <TableRow title="Spill / Logic Board Fix" cost="$250 +" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container"> {/* Container for content */}
        <p className='power-header'>No power on your Mac? That’s a real bummer. 
            But, we have been able to revive many non-powering up Macs at our Mac repair 
            shop in NYC. Perhaps, you spilled liquid on your Mac? Or it took a sad fall? 
            We don’t judge. We just want to fix your Mac!
        </p>
        <h2>Common fixes we can perform for your Mac that doesn't power up:</h2>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <p className='power-des'>Mac models supported: MacBook, MacBook Pro, MacBook Air, iMac, Mac Pro, Mac mini</p>
        <div>
          <h3>Mac No Power Repair Costs:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
