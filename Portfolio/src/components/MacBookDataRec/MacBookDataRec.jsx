import React from 'react';
import './MacBookDataRec.scss'; // Import SCSS file

const commonFixes = [
  'Spinning wheel',
  'Clicking hard drive',
  'Flashing question mark',
  'Start-up error',
  'MacBook spill',
  'Kernel panic',
  'Accidentally deleted files',
  'MacBook drop/fall'
];

const commonProcess = [
    'Bring over your Mac in question.',
    'Get a free data recovery flat fee cost along with an estimate of time.',
    'Decide if you’d like to proceed.',
    'If not, there’s no charge.',
    'If you approve, we proceed with the Mac data recovery service.',
    'Expect it to be ready the same day up to 3-5 days as our typical response time.',
    'If we cannot recover your Mac hard drive files, there is no charge.'
  ];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Non-physical Data Recovery" cost="$85 – $250" />
    <TableRow title="Lab Recovery Mechanical Recovery" cost="$500 +" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Macs are well-built, but can still crash too.  
        You can count on us as your dedicated MacBook and iMac data recovery service.  No waiting or taking a number here.  Just come into our Apple 
        service center when disaster strikes and we’ll be happy to recover your files.
        </p>
        <h2>We recover files from the following Mac issues:</h2>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <p className='power-header2'>No matter how old or new, and what type of Mac 
        it is, we will recover your files.  Data recovery is performed on all models, 
        including:MacBook, MacBook Pro, MacBook Air, iMac, and Mac Pro.  It’s an easy process.  Just drop in for a free 
        data recovery diagnostic and quick recovery turn-around.  No data, no charge.
        service center when disaster strikes and we’ll be happy to recover your files.
        </p>
        <h2>So what’s next?  What’s the Mac data recovery process?</h2>
        <ul className='power-ul'>
          {commonProcess.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <p className='power-des'>Mac models supported: MacBook, MacBook Pro, MacBook Air, iMac, Mac Pro, Mac mini</p>
        <div>
          <h3>Mac Data Recovery Cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
