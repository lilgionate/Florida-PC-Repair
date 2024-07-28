import React from 'react';
import './WindowsRunsLoudRep.scss'; // Import SCSS file

const commonFixes = [
  'Grinding, noisy, loud fan',
  'Clicking hard drive',
  'Failing power supply',
  'Damaged heat sink',
  'Loose screws',
  'Overall loud humming sound',
  'Intermittent sounds'
];

const commonProcess = [
    'A full diagnosis to confirm the exact reason why your laptop or desktop is noisy.',
    'A clear, flat fee price of the repair cost for your approval to quiet down and fix your PC.',
    'A prompt repair service fix within 1 – 2 days to fix your loud PC issue.',
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
    <TableRow title="PC runs loud and noisy" cost="$85 – $175" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Bang bang, click click, clunkity clunk. These are 
        all noises your Windows laptop or desktop may make. The question is, 
        “Where is it coming from?” And more importantly, “How can it be fixed?”
        </p>
        <p className='power-des'>PC loud, noisy sounds we support:</p>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <h3>What can you expect from our Florida loud and noisy PC repair service?</h3>
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
