import React from 'react';
import './MacBookSpillRep.scss'; 

const commonFixes = [
  'We directly repair your affected parts.',
  'We will repair your damaged logic board.',
  'We only charge you if your Mac is fixed.',
  'You will receive an affordable solution.'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Spill Damage Direct Repair" cost="$125 – $400" />
    <TableRow title="Keyboard Replacement" cost="$125 – $350" />
    <TableRow title="Trackpad / Touchpad Repair" cost="$125 – $250" />
    <TableRow title="Logic Board Repair" cost="$250 – $450" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>For some reason, Macs love liquids.  
        It's the truth!  We get tons of MacBooks in every day at our Mac repair Florida
        shop with a serious drinking problem.  That's okay though.  We have a revolutionary 
        way to repair Mac spills. It costs a fraction of what Apple charges and it works.
        </p>
        <h2>Why should you use Florida PC Support's Mac spill repair service?
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
          <h3>MacBook Spill Damage Repair Costs:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
