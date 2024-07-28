import React from 'react';
import './WindowsNoEmailInternetRep.scss'; // Import SCSS file

const commonFixes = [
  'No wireless / network access',
  'Slow Internet speed',
  'Cannot send / receive emails',
  'New email account setup',
  'Cannot open email account',
  'Excessive spam'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="No Email / Internet" cost="$85 – $125" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Our Microsoft technicians will ensure you get browse 
        the Internet as fast as possible. We’ll make sure your emails are sending and
        receiving correctly. You’ll be fully connected quickly and at a reasonable cost.
        </p>
        <p className='power-des'>Internet / Email issues we support:</p>
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
