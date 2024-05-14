import React from 'react';
import './MacInstallWindowsRep.scss'; 

const commonFixes = [
  'You are only able to work with certain Windows software for your data.',
  'You don’t want to learn how to use a Mac.',
  'Why not? You can have both Mac and Windows when you want.',
  'You feel more comfortable working in Windows operating systems.'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="MacBook / MacBook Pro / iMac Windows on Mac Install Cost" cost="$125" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Like the look of a Mac, but prefer to work with 
        Windows? That’s fine. We’ll install Windows on your Mac. 
        You name the operating system you’d like or we can recommend one for your Mac.
        </p>
        <h2>Why would you want to install Windows on your Mac?
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
          <h3>Install Windows on Mac Cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
