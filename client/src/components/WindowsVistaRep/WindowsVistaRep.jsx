import React from 'react';
import './WindowsVistaRep.scss'; // Import SCSS file

const commonFixes = [
  'Performance lag or freezing',
  'Software compatibility issues',
  'Hardware / driver conflicts',
  'Won’t start up after Vista update',
  'Remote access / VPN problems',
  'Windows updates fail to install',
  'Long start-up / shut-down process',
  'Won’t come out of sleep mode'
];

  const TableRow = ({ className, title, cost }) => (
    <div className={`${className} cost`}>
      {title && <span className="title">{title}</span>}
      <span className="cost-value">{cost}</span>
    </div>
  );

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Windows Vista Repair" cost="$85 – $150" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Windows Vista has been known to cause PC issues. 
        Our Windows Vista specialists will provide a free diagnostic, locating the 
        exact source of the the problem along with the associated repair cost. 
        Don’t give up hope as we’ve been known to perform miracles on Vista issues.
        </p>
        <p className='power-des'>Common Windows Vista issues we service:</p>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <h2>Why does Windows Vista get such a bad rep?</h2>
        <p className='power-header'>Known as the BSOD OS, or the operating system that always gets blue screens of deaths, Windows definitely is not the most stable of machines. We believe that Microsoft released Windows Vista too fast, causing 
        lots of conflicts and Vista issues, leading to the dreaded blue screen of 
        death.
        </p>
        <p className='power-header'>Yes, we’re not fans of Windows Vista, but we are 
        experienced and certified to take care of all your Windows Vista issues. 
        Simultaneously, we get pleasure knowing that we are fixing what Microsoft 
        should have fixed originally. Killing two 
        birds with one stone, fixing your Vista issue and showing Microsoft who’s boss!
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
