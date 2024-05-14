import React from 'react';
import './WindowsVirtualMachine.scss'; // Import SCSS file

const commonFixes = [
  'Windows on a Mac',
  'Windows XP/7 on Windows 8/10',
  'Mac on a PC',
  'Ensure old software works',
  'Old Mac OS on new Mac',
  'Back up operating system online',
  'Set up remote computer as second operating system',
  'Save computer space by virtualizing machines'
];

  const TableRow = ({ className, title, cost }) => (
    <div className={`${className} cost`}>
      {title && <span className="title">{title}</span>}
      <span className="cost-value">{cost}</span>
    </div>
  );

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Windows Virtual Machine Setup" cost="$85 – $150" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Your computer is working fine, that’s the not 
        issue. The issue is you want to run another operating system on it. You may 
        want to run an older Windows XP, Vista, or 7 operating system on your newer 
        Windows 8 or 10 computer. Maybe you want to install Windows on your Mac or 
        Mac on your PC. Yes, you can do that!
        </p>
        <p className='power-header'>Stop in any go over all your options. There 
        are a slew of different virtual software programs and we will help isolate 
        them down to the one best solution for your needs.
        </p>
        <p className='power-des'>Common Windows Virtual Machines we set up:</p>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
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
