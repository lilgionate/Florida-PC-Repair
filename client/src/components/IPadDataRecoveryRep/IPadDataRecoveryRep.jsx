import './IPadDataRecoveryRep.scss';
import React from 'react';

import IPadDataCard from "./IPadDataCard";


const IPhoneDataRecoveryRep = () => {

    const phoneServices = [    
        { name: "File Backup", price: "$85", description: "includes no physical damage, phone fully working", dots: 135 },
        { name: "Standard Recovery", price: "$125 - $250", description: "includes software corruption, start-up issue", dots: 92 },
        { name: "Hardware Recovery", price: "$250 - $450", description: "liquid spills, drops, physical damage, repair / replace failed parts", dots: 85 },
    ]

  return (
    <div className="IPad-data-recovery-repair-info-container">
      <div className='IPad-data-recovery-repair-content'>
      <table className="IPad-data-recovery-repair-info-table">
        <tbody>
          <TableRow header="Issue:" content="Recover files from a non-working iPad" />
          <TableRow header="Causes:" content="Drop, fall, impact, or usage over time" />
          <TableRow header="Solution:" content="Recover files to media or another iPad" />
          <TableRow header="Parts:" content="Only new if needed for the recovery" />
          <TableRow header="Repair time:" content="1 – 3 days" />
          <TableRow header="Warranty:" content="30 days" />
        </tbody>
      </table>

      <div className="IPad-data-recovery-container">
        <IPadDataCard title="Phone - Tablet" services={phoneServices} />
      </div>

    <p className="IPad-data-recovery-repair-info-text">
        If your iPad is not working properly, we can look to recover the files for you. 
        Photos, videos and work information is typically the most important data on your 
        iPad.  If your iPad is beyond repairing, we can still possibly recover your 
        files.  Stop in for your iPad data recovery service.
    </p>
      </div>
    </div>
  );
}

const TableRow = ({ header, content }) => {
  return (
    <tr className="IPad-data-recovery-repair-info-table-row">
      <td className="IPad-data-recovery-repair-info-table-header-cell">{header}</td>
      <td className="IPad-data-recovery-repair-info-table-cell">{content}</td>
    </tr>
  );
};

export default IPhoneDataRecoveryRep;
