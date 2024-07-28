import React from 'react';
import './WindowsShutOffOverheatsRep.scss'; // Import SCSS file

const commonFixes = [
  'Failed laptop fan',
  'Overheated motherboard',
  'Clogged heat sink / vent',
  'Casing is hot to the touch',
  'Excess dust / debris',
  'Electrical surge',
  'Failing hardware',
  'Computer turns off on its own'
];

const commonProcess = [
    'A full diagnosis to confirm the exact parts in question of causing your computer to overheat.',
    'A clear, flat fee price of the repair cost for your approval.',
    'A prompt overheating repair service fix within 1 – 2 days.',
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
    <TableRow title="PC Shuts Off / Overheats" cost="$85 – $125 + parts" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Does your PC turn off on its own or gets very hot? 
        That typically means it 
        is overheating and our Florida PC specialists will be able to locate the reason why.
        </p>
        <p className='power-des'>Common overheating or shutting off symptoms we support:</p>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <h3>What can you expect from our Florida computer overheating repair service?</h3>
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
