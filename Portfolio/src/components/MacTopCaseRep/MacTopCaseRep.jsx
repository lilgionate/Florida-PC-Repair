import React from 'react';
import './MacTopCaseRep.scss'; 

const commonFixes = [
  'You dropped your Mac and dented it',
  'Your top case is damaged',
  'Your MacBook side is damaged',
  'You want a brand new MacBook top case'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="
MacBook / MacBook Pro / MacBook Air Top Case Replacement" cost="$125 – $450" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Has your MacBook taken a fall? Is the top case 
        mangled a bit? Need to replace it to get it looking brand spanking-new again? 
        We can turn back the clock for you and replace your MacBook top case.
        </p>
        <h2>Why would you want to replace your MacBook top case?
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
          <h3>MacBook Top Case Replacement Cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
