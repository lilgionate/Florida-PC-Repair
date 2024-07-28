import React from 'react';
import './MacVirusRem.scss'; 

const commonFixes = [
  'Your virus, pop-ups, and spyware will be removed.',
  'You will receive anti-virus software protection going forward.',
  'You will receive a full tune-up.',
  'Any recommendations to speed up your Mac will be given.'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Mac virus removal" cost="$85 - $150" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Got a virus on your Mac?  No prob, our Mac virus 
        removal specialists are well trained and equipped to remove your Mac virus.  
        We will secure your Mac from future threats as well.
        </p>
        <h2>What will you get with our Mac virus removal Florida service?
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
          <h3>Windows / Mac virus removal cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
