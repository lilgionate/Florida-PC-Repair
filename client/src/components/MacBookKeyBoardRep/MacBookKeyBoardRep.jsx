import React from 'react';
import './MacBookKeyBoardRep.scss'; 

const commonFixes = [
  'Failing hard drive',
  'Failing hard drive cable',
  'Failing logic board',
  'Failing hardware',
  'Overheating',
  'Viruses / spyware'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Operating System / Software Issue" cost="$85 – $125" />
    <TableRow title="Hardware Issue" cost="$125+" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Does your Mac get a question mark at startup? 
        Blinking folder? Gray Screen? Spinning wheel?  Whatever start-up issue or 
        freezing issue you are getting, we are the Mac experts in Florida to get it fixed for you.
        </p>
        <h2>Common Mac start-up / freezing issues we fix all the time:
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
          <h3>Mac Start-up / Freezing Repair Cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
