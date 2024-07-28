import './IPhoneWaterSpillRep.scss';
import React from 'react';

const RepairInfo = () => {
  return (
    <div className="water-spill-repair-info-container">
      <div className='water-spill-repair-content'>
      <table className="water-spill-repair-info-table">
        <tbody>
          <TableRow header="Issue:" content="Spilled liquid or dropped into water" />
          <TableRow header="Causes:" content="No power / no screen picture" />
          <TableRow header="Solution:" content="Diagnose and replaced affected parts" />
          <TableRow header="Parts:" content="OEM" />
          <TableRow header="Repair time:" content="1 – 3 days" />
          <TableRow header="Warranty:" content="30 days" />
        </tbody>
      </table>
      <div className="water-spill-repair-info-description">
        <h2 className="water-spill-repair-info-title">Water bogged?</h2>
        <p className="water-spill-repair-info-text">
          Whether it was water or another liquid, we are up for the challenge of resurrecting your iPhone from the dead. We have been known to rescue iPhones from the worst of spills, pool, splashes, and more.
        </p>
      </div>
      </div>
    </div>
  );
};

const TableRow = ({ header, content }) => {
  return (
    <tr className="water-spill-repair-info-table-row">
      <td className="water-spill-repair-info-table-header-cell">{header}</td>
      <td className="water-spill-repair-info-table-cell">{content}</td>
    </tr>
  );
};

export default RepairInfo;
