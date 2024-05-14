import React from 'react';
import './MacBookHardDriveRep.scss'; 

const commonFixes = [
  'Failing Mac hard drive',
  'Need more hard drive space',
  'Clone / back up of files',
  'Install new hard drive',
  'Install new operating system',
  'Restore Mac to factory settings'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="500GB SSD + Operating System or Clone / Back-up" cost="$150 – $300" />
    <TableRow title="1TB SSD + Operating System or Clone / Back-up" cost="$300 – $400" />
    <TableRow title="2TB SSD + Operating System or Clone / Back-up" cost="$400 – $700" />
    <TableRow title="4TB SSD + Operating System or Clone / Back-up" cost="$600 – $1,000" />
  </div>
);

const RepairCostsSectionTwo = () => (
    <div className="price-section">
      <TableRow title="Operating System Install / Clone Only (No hard drive)" cost="$125" />
    </div>
  );

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Got a failing hard drive? Or just want more 
        space? Either way, our Mac hard drive install specialists will customize the 
        optimal solution for you. We are able to recover files, increase storage 
        space, upgrade to solid state drives (SSD’s) and back up important files.
        </p>
        <h2>Common Mac hard drive requests we take care of at our Florida Mac repair center:
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
          <h3>Hard Drive Replacement / Upgrade Options:</h3>
          <RepairCostsSection />
        </div>
        <div className='repair-cost-two'>
          <h3>Have your own hard drive? Just need to install the operating system or clone it?</h3>
          <RepairCostsSectionTwo />
        </div>
        <p className='hard-drive-note'>Please note: Apple proprietary solid state hard drives cost additional. 
            Some newer iMacs may cost more as well.  Such costs will be provided in 
            the free estimate first for your approval.  Also, data recovery is an 
            additional cost.
        </p>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
