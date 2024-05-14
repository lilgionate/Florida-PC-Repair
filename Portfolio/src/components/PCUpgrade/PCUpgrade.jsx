import React from 'react';
import './PCUpgrade.scss'; // Import SCSS file

const commonFixes = [
  'RAM / Memory Speed boost',
  'Hard drive extra storage / Solid state clones',
  'Operating system upgrade to the latest version',
  'Video card graphics upgrade',
  'Network card upgrade for faster browsing',
  'Software Upgrades for better stability'
];

  const TableRow = ({ className, title, cost }) => (
    <div className={`${className} cost`}>
      {title && <span className="title">{title}</span>}
      <span className="cost-value">{cost}</span>
    </div>
  );

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="PC Upgrade" cost="$85 – $170 + parts" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>You don’t need to buy a new computer if you can 
        upgrade your current one in a cost effective manner. Consult with our computer 
        upgrade technicians who will 
        recommend the optimal solution to provide your PC the maximum performance. cost.
        </p>
        <p className='power-des'>Our Windows upgrades include:</p>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <h2>Should I buy a new computer or upgrade my PC?</h2>
        <p className='power-header'>It’s a great question. Our rule of thumb is to 
        only upgrade your PC, along with any additional required computer issues, if 
        it costs less than half of what it costs for a new computer. Another variable 
        to consider is the age. If your computer is 4+ years old, it’s time to throw 
        in the towel. Simply put, a RAM upgrade is the easiest way to double the speed 
        of your computer. Need more space? We can mirror your current info to a larger 
        hard drive and that takes care of that. Any PC upgrade questions, let us know.
        </p>
        <div>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default WindowsRepairComponent;