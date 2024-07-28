import React from 'react';
import './MacNewSetUp.scss'; 

const commonFixes = [
  'File transfer from old computer or back-up',
  'Configuration of Internet, email, and Mac operating system',
  'iTunes, bookmarks, and printer setup',
  'Installing all Mac updates',
  'Tutorial on new Mac'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="New MacBook / MacBook Pro / MacBook Air / iMac Set up" cost="$85 – $150" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Just leave your computer in the box and leave the 
        rest to us.  We’ll make sure it is Internet and email ready.  
        We’ll also transfer your old files over.  Need a quick how-to?  No problem.  
        You’ll get a tutorial so you’re comfortable with the new Mac.
        </p>
        <h2>New Mac set-up includes:
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
          <h3>Set up New Mac Cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
