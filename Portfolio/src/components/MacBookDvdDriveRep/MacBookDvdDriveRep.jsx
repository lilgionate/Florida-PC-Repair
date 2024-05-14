import React from 'react';
import './MacBookDvdDriveRep.scss'; 

const commonFixes = [
  'DVD’s and CD’s aren’t able to load',
  'DVD drive is noisy',
  'DVD got stuck in drive',
  'DVD drive causes start-up issues'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="MacBook / MacBook Pro / Mac Pro CD/DVD Optical Drive Replacement" cost="$125" />
    <TableRow title="iMac CD/DVD Optical Drive Replacement" cost="$150 – 195" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>
            Got a bad DVD drive, CD drive or optical drive? 
            Or got a DVD stuck in your DVD drive? We will fix and replace your failing 
            DVD drive. Typically, we will have the DVD drive in stock and can swap your 
            Mac’s failing DVD drive right away. If you need a 
            quick MAC DVD drive replacement NYC service, we can certainly help out.
        </p>
        <h2>Common DVD drive issues we support:
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
          <h3>Mac DVD Drive Replacement Costs:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
