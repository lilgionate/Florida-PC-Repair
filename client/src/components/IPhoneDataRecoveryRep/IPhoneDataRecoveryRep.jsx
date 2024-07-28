import './IPhoneDataRecoveryRep.scss';
import React from 'react';

import IPhoneDataCard from "./IPhoneDataCard";


const IPhoneDataRecoveryRep = () => {

    const phoneServices = [    
        { name: "File Backup", price: "$85", description: "includes no physical damage, phone fully working", dots: 135 },
        { name: "Standard Recovery", price: "$125 - $250", description: "includes software corruption, start-up issue", dots: 92 },
        { name: "Hardware Recovery", price: "$250 - $450", description: "liquid spills, drops, physical damage, repair / replace failed parts", dots: 85 },
    ]

  return (
    <div className="IPhone-data-recovery-repair-info-container">
      <div className='IPhone-data-recovery-repair-content'>
      <table className="IPhone-data-recovery-repair-info-table">
        <tbody>
          <TableRow header="Issue:" content="Need to recover photos, videos and/or files" />
          <TableRow header="Causes:" content="iPhone won’t start or work properly" />
          <TableRow header="Solution:" content="Recover files to media or another phone or fix phone" />
          <TableRow header="Parts:" content="If needed, brand new parts" />
          <TableRow header="Repair time:" content="1 – 4 days" />
          <TableRow header="Warranty:" content="30 days" />
        </tbody>
      </table>

      <div className="IPhone-data-recovery-container">
        <IPhoneDataCard title="Phone - Tablet" services={phoneServices} />
      </div>

    <h2 className="IPhone-data-recovery-repair-info-title">
       Need to recover files from your iPhone?
    </h2>
    <p className="IPhone-data-recovery-repair-info-text">
        Your iPhone is not working or on its last legs.  Most importantly, you need all 
        of your cherished photos, videos, and important files.  We’re happy to recover 
        your iPhone files for you.
    </p>
      </div>
    </div>
  );
}

const TableRow = ({ header, content }) => {
  return (
    <tr className="IPhone-data-recovery-repair-info-table-row">
      <td className="IPhone-data-recovery-repair-info-table-header-cell">{header}</td>
      <td className="IPhone-data-recovery-repair-info-table-cell">{content}</td>
    </tr>
  );
};

export default IPhoneDataRecoveryRep;
