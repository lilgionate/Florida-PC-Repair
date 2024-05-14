import React from 'react';
import './MacBookScreenRep.scss'; 

const commonFixes = [
  'Cracked glass',
  'Damaged LCD',
  'Perform spill clean-up',
  'Cracked retina screen',
  'Dead pixels on screen',
  'Cooling system repair',
  'Black screen',
  'Lines on screen'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="2009 - 2012" cost="$150 - $350" />
    <TableRow title="2012 - 2017" cost="$250 - $650" />
    <TableRow title="2017 - 2019" cost="$450 - $750" />
    <TableRow title="iMac LCD Screen" cost="$250 +" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container"> {/* Container for content */}
        <p className='power-header'>Oh no!  You cracked your MacBook screen.  
        And you need help in NYC.  Just like iPhones, MacBook screens are made of glass 
        and can easily break.  Our Mac screen replacement technicians are happy to 
        replace your screen to get you up and running again.  
        Your data and settings will remain intact throughout the process.
        </p>
        <h2>Common MacBook / MacBook Pro / MacBook Air / 
          iMac screen replacements we take care of:
        </h2>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <p className='power-des'>Mac models supported: MacBook, MacBook Pro, MacBook Air, iMac, Mac Pro, Mac mini</p>
        <div>
          <h3>MacBook Screen Replacement Costs:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
