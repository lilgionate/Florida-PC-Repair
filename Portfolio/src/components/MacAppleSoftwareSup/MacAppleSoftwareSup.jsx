import React from 'react';
import './MacAppleSoftwareSup.scss'; 

const commonFixes = [
  'Email – Entourage, Outlook, Mail, Thunderbird',
  'Productivity – Microsoft Office (Word, Excel, PowerPoint), iWork (Pages, Numbers, Keynote), FileMaker',
  'Media / Design – iLife (iPhoto, iWeb, iMovie, iDVD, GarageBand, iWeb), Adobe, AutoCAD',
  'iOS Apps – iTunes / iCloud setup and backup, FaceTime',
  'Financial – QuickBooks, Quicken, AccountEdge',
  'Windows installs – Parallels, VMware Fusion'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="MacBook / MacBook Pro / MacBook Air / iMac / Mac mini Apple Support Cost" cost="$85 – $150" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Our Florida Mac software 
        specialists will install, upgrade, configure, and repair your applications.
        </p>
        <h2>Common Apple software we support:
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
          <h3>Apple Software Support Cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;