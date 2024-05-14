import React from 'react';
import './WindowsSlowPCIssue.scss'; // Import SCSS file

const commonFixes = [
  'Computer virus infection',
  'Spyware / pop-up issue',
  'Failing hard drive',
  'Failing RAM',
  'Failing motherboard',
  'Corrupted operating system',
  'Corrupted software / registry',
  'Lack of storage capacity'
];

const commonProcess = [
    'A full diagnosis to confirm the exact reason why your PC is slowing down.',
    'A clear, flat fee price of the repair cost for your approval to speed up your PC.',
    'A prompt repair service fix within 1 – 2 days to fix your slow PC issue.',
    'A service warranty of 60 days ensuring your full satisfaction.'
  ];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Slow PC Issue" cost="$85 – $125" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>It’s not ideal when your PC decides to run at a 
        snail’s pace.  Many things could cause your Windows computer to run slowly.  
        Reverting your computer back to how it ran when you first bought it is the 
        ultimate objective.  We are here to figure 
        out why your PC is running slowly and how to get it back on track.
        </p>
        <p className='power-des'>Common slow PC issues we support:</p>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <h3>What can you expect from our Florida slow PC repair service?</h3>
        <ul className='power-ul'>
          {commonProcess.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <div>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default WindowsRepairComponent;
