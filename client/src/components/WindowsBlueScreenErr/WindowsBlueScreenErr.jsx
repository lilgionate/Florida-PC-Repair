import React from 'react';
import './WindowsBlueScreenErr.scss'; // Import SCSS file

const commonFixes = [
  'Hard drive failure',
  'RAM / motherboard issues',
  'Virus / spyware infection',
  'Windows update issue',
  'Overheating / thermal issue',
  'Windows corruption',
  'Software / driver conflicts',
  'Faulty start-up programs',
  'Hardware component failure',
  'Failing peripheral device'
];

const commonProcess = [
    'First, disconnect any cables. You never know if your USB mouse, printer, or external hard drive is causing the issue.',
    'Reboot your computer. There may be a software conflict or overloaded Windows session that can easily be flushed out with a Windows restart.',
    'These two easy steps typically resolve the blue screen of death error 4 out of 10 times. If you’re still having BSOD messages, you can certainly bring it to the PC blue screen error Florida experts, Florida PC Support, for a free diagnostic and speedy fix.'
  ];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Blue Screen PC Error" cost="$85 – $125 + parts" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Congrats – you have reached the ultimate serious 
        hardware or software failure. Don’t worry, our PC techs take pride in finding 
        the exact cause and quick fix. Our one-hour 
        complimentary diagnostic test will give you the cost of repair for your approval.
        </p>
        <p className='power-des'>Common blue screen symptoms we support:</p>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <h3>Got a blue screen error on screen – How can I fix it?</h3>
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
