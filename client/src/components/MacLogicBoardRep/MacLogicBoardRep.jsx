import React from 'react';
import './MacLogicBoardRep.scss'; 

const commonFixes = [
  'We will repair the logic board directly if possible. You will get instant savings.',
  'If logic board needs to be replaced, we will replace it with a new one.',
  'Our Mac specialists will test your new logic board prior to returning.',
  'Cost effective logic board replacement service for you.'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Mac Logic Board Replacement" cost="$250 - $750" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Is your MacBook dead?  No juice?  
        Maybe you spilled something on it?  Maybe it’s just dead. We will 
        provide the most cost effective logic board repair or replacement for you.
        </p>
        <h2>How does our MacBook logic board replacement Florida service work?
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
          <h3>MacBook Logic Board Replacement Cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
