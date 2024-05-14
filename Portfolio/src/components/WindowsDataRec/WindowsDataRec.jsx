import React from 'react';
import './WindowsDataRec.scss'; // Import SCSS file

const commonFixes = [
  'Blue screen of death',
  'Virus',
  'No power',
  'Laptop spill',
  'Clicking laptop',
  'Windows start-up issue',
  'Overheating / Shutting off',
  'Freezing / Slow Windows'
];

const commonEquipment = [
    'PCs',
    'Macs',
    'Laptops',
    'Desktops',
    'Servers',
    'Network attached storage (NAS)',
    'External hard drives',
    'Internal hard drives',
    'Thumb drives'
  ];

  const commonProcess = [
    'Your laptop isn’t working and you need to recover your files.  Take a breath, take another one, and repeat three more times.',
    'Bring your laptop or desktop hard drive to us for a free diagnostic. We’ll let you know if it is recoverable, the cost, and turn-around time.',
    'What’s the cost? Generally, easier PC and laptop recovery jobs are $85 – $250 while harder jobs are more. It is a case by case basis so we’ll give you the exact flat fee cost according to the severity of your hard drive status.',
    'Based on the diagnostic, it’s up to you to decide if you want to proceed.',
    'The data recovery process may take anywhere from 1 day for non-physical hard drive issues to 5-10 days for hardware, lab recovery jobs.  We will give you more of a definitive time frame after assessing your laptop hard drive.',
    'You will pay only for a successful recovery.  If we cannot recover anything, you don’t pay a penny.  If the recovery is a partial one, then we will prorate it for you.  If your required files are not recoverable, there will be no charge if you don’t want the other files.'
  ];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <div className="data-recovery">
    <TableRow title="Data Recovery" cost="Typically $85 – $250. Lab Recovery Service: $950+" />
    </div>
    <TableRow title="Non-hardware recovery" cost="$85 – $350" />
    <TableRow title="Lab recovery (mechanical failure)" cost="$225" />
    <TableRow title="1TB SATA Hard Drive + Operating System" cost="$275" />
    <TableRow title="2TB SATA Hard Drive + Operating System" cost="$350" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>
        Your computer will not last forever.  That’s because there is a hard drive 
        along with other parts that have shelf lives to them.  The hard drive itself 
        contains many moving parts that is expected to fail over time due to 
        overheating, physical impact, dust, debris, or otherwise.  
        If you don’t have a file back up, we will still be able to recover your files
        </p>
        <h2>We recover files from the following computer issues:</h2>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>

        <h2>We perform data recovery from the following equipment:</h2>
        <ul className='power-ul'>
          {commonEquipment.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>

        <h2>How does the data recovery process work?</h2>
        <ul className='power-ul'>
          {commonProcess.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <div>
          <h3>Windows / PC Laptop Screen Replacement Costs:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default WindowsRepairComponent;
