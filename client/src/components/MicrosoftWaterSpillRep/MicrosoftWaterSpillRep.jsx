import React from 'react';
import './MicrosoftWaterSpillRep.scss';

const MicrosoftWaterSpill = () => {

  return (
    <div className="Microsoft-water-spill-repair-info-container">
        <div className='Microsoft-water-spill-repair-content'>
        <table className="Microsoft-water-spill-repair-info-table">
            <tbody>
            <TableRow header="Issue:" content="Microsoft Surface is not functioning well" />
            <TableRow header="Causes:" content="Water or other liquid spill" />
            <TableRow header="Solution:" content="Fix Microsoft Surface or recover files" />
            <TableRow header="Parts:" content="Only original and brand new" />
            <TableRow header="Repair time:" content="1 – 4 days" />
            <TableRow header="Warranty:" content="30 days" />
            </tbody>
        </table>

            <h2 className="Microsoft-water-spill-repair-info-title">
            Microsoft Surface Spill Repair – Walk-in Service Help
            </h2>
            <p className="Microsoft-water-spill-repair-info-text">
            If your Microsoft Surface gets wet, you have options.  You can get it fixed if 
            the service costs are reasonable.  If your Surface is beyond repair or doesn’t 
            make economic sense, you can still look to recover the files.  Either way, we 
            can help support your Microsoft Surface repair service.
            </p>
            </div>
        </div>
    );

};

const TableRow = ({ header, content }) => {
    return (
      <tr className="Microsoft-water-spill-repair-info-table-row">
        <td className="Microsoft-water-spill-repair-info-table-header-cell">{header}</td>
        <td className="Microsoft-water-spill-repair-info-table-cell">{content}</td>
      </tr>
    );
  };

export default MicrosoftWaterSpill;

