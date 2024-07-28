import React from 'react';
import './MacBookPasswordRep.scss'; 

const commonFixes = [
  'You cannot remember your password',
  'You want to change your password',
  'You bought a Mac with a pre-existing password',
  'Your current password doesn’t work'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Password reset" cost="$85" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Whoops, you forgot your Mac password. Don’t worry, 
        we can take care of that for you. We will reset your password so you can 
        access your Mac system again. Just make sure to create a Mac password you’ll remember next time.
        </p>
        <h2>When would you need to reset your Mac password:
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
          <h3>Mac Password Reset Cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
