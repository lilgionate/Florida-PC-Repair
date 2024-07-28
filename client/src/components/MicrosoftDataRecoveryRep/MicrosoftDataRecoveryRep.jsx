import React from 'react';
import './MicrosoftDataRecoveryRep.scss';

import MicrosoftDataCard from './MicrosoftDataCard';

const MicrosoftDataRecovery = () => {
    const microsoftServices = [    
        { name: "File Backup", price: "$85", description: "includes no physical damage, phone fully working", dots: 135 },
        { name: "Standard Recovery", price: "$125 - $250", description: "includes software corruption, start-up issue", dots: 92 },
        { name: "Hardware Recovery", price: "$250 - $450", description: "liquid spills, drops, physical damage, repair / replace failed parts", dots: 85 },
    ]

  return (
    <div className="Microsoft-data-recovery-repair-info-container">
        <div className='Microsoft-data-recovery-repair-content'>
        <table className="Microsoft-data-recovery-repair-info-table">
            <tbody>
            <TableRow header="Issue:" content="Microsoft Surface doesn’t turn on or not functioning correctly" />
            <TableRow header="Causes:" content="Drop, fall, impact, defective screen / digitizer" />
            <TableRow header="Solution:" content="Recover files" />
            <TableRow header="Parts:" content="Only new if needed" />
            <TableRow header="Repair time:" content="1 – 5 days" />
            <TableRow header="Warranty:" content="30 days" />
            </tbody>
        </table>

        <div className="Microsoft-data-recovery-container">
        <MicrosoftDataCard title="Phone - Tablet" services={microsoftServices} />
      </div>

            <h2 className="Microsoft-data-recovery-repair-info-title">
            Microsoft Surface Data Recovery – Walk-in Service Help
            </h2>
            <p className="Microsoft-data-recovery-repair-info-text">
            If you need to recover files from your Microsoft Surface, we can help!  
            Microsoft does not recover files.  In fact, if you have a damaged Surface, 
            they’ve been known to force you to buy a refurbished or new Microsoft Surface.  
            And guess what?  You’ll lose your files because recovery is not included.  
            Not us!  We’re happy to recover your files if and when needed.
            </p>
            </div>
        </div>
    );

};

const TableRow = ({ header, content }) => {
    return (
      <tr className="Microsoft-data-recovery-repair-info-table-row">
        <td className="Microsoft-data-recovery-repair-info-table-header-cell">{header}</td>
        <td className="Microsoft-data-recovery-repair-info-table-cell">{content}</td>
      </tr>
    );
  };

export default MicrosoftDataRecovery;

