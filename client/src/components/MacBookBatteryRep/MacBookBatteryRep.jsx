import React from 'react';
import './MacBookBatteryRep.scss'; // Import SCSS file

const commonFixes = [
  'Battery is dead',
  'You don’t have battery life like before',
  'MacBook doesn’t boot',
  'Battery needs reconditioning'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="MacBook / MacBook Pro / MacBook Air Battery Replacement" cost="$100 - $175" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container"> {/* Container for content */}
        <p className='power-header'>
            Is your MacBook losing its battery charge? 
            This definitely happens over time and we can replace your MacBook battery for 
            you. Instant refresh: MacBook battery replacement service.
        </p>
        <h2>Why should you replace your MacBook battery?</h2>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <p className='power-des'>Mac models supported: MacBook, MacBook Pro, MacBook Air</p>
        <div>
          <h3>MacBook Battery Replacement Cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
