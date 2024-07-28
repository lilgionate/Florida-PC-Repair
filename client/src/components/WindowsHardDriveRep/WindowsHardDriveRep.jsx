import React from 'react';
import './WindowsHardDriveRep.scss'; // Import SCSS file

const commonFixes = [
  'Clicking / noisy hard drive sounds',
  'Slow PC start-up',
  'Windows doesn’t load',
  'Blue screen errors',
  'Can’t open files / programs',
  'Can’t access Internet or peripherals',
  'Need to recover files',
  'Need to repair hard drive'
];

const commonProcess = [
    'If it’s a physically failing PC hard drive, then it has to be replaced no matter what. It cannot be magically repaired as that won’t be a stable hard drive repair solution. You’ll know it’s failing if your hear clicking or our hard drive test diagnostics show bad sectors. If you dropped your laptop, there may be a good chance your hard drive is physically or mechanically failing.',
    'If there’s a corruption within the Windows operating system or registry, then we can recover your files, if needed, and then reinstall your operating system. This is a case where your hard drive does not have to be replaced.',
    'If your computer is reacting slowly when fetching files or saving, there’s a good chance your hard drive may be starting to fail. In that case, it’s safer to replace it then trying to salvage it.',
    'If your computer is smoking, stop, drop, and roll! And then turn it off right away. You hard drive or another part may be up in smoke and well, you know the answer here…it will certainly need to be replaced.'
  ];

  const TableRow = ({ className, title, cost }) => (
    <div className={`${className} cost`}>
      {title && <span className="title">{title}</span>}
      <span className="cost-value">{cost}</span>
    </div>
  );

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="PC Hard Drive Replacement Costs" cost="$150 – $300: 500GB Solid State Hard Drive (SSD) + Operating system" />
    <TableRow cost="$300 – $400:  1TB SSD + Operating system" />
    <TableRow cost="$400 – $700:  2TB SSD + Operating system" />
    <TableRow cost="$600 – $1,000:  4TB SSD + Operating system" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Is your hard drive clicking or noisy? Maybe your 
        computer is slow or not opening some files. Stop work right away to avoid 
        further issues and we’ll be happy to replace your drive and ensure your files 
        are safe. Upfront free diagnostics are provided to 
        determine physically failing hard drives and data recovery costs.
        </p>
        <p className='power-des'>Common bad hard drive scenarios we support:</p>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <h3>Got a bad hard drive? Should it be repaired or replaced?</h3>
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
