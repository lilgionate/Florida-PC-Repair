import React from 'react';
import './WindowsSetupNew.scss'; // Import SCSS file

const commonFixes = [
  'File transfer from old computer or back-up',
  'Configuration of Internet, email, and Windows',
  'Software installation and configuration',
  'Ensuring anti-virus and firewall are active',
  'Installing all Windows updates',
  'Tutorial on new PC interface'
];

  const TableRow = ({ className, title, cost }) => (
    <div className={`${className} cost`}>
      {title && <span className="title">{title}</span>}
      <span className="cost-value">{cost}</span>
    </div>
  );

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Setup New PC" cost="$85 – $125" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Just leave your computer in the box and leave the 
        rest to us. We’ll make sure it is Internet and email ready. We’ll also 
        transfer your old files over. Need a quick how-to? 
        No problem. You’ll get a tutorial so you’re comfortable with the new PC.
        </p>
        <p className='power-des'>New PC set-up includes:</p>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <h2>Prefer to have a house call or office visit?</h2>
        <p className='power-header'>Sure, we do that too, and do it well we might add. 
        We started out providing onsite computer service for homes and offices so we 
        are onsite new PC set-up experts. You may have a desktop computer or have a 
        lot of different customizations you’d like to set up at your location. Whatever 
        the reason, sometimes, it is easier to have one of our new PC setup techs come 
        to you. We’ll get your new PC up and running, transfer over your old computer files, 
        set up your printer, email, phone, peripherals, and network/internet settings.
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
