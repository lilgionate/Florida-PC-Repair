import './IPadWaterSpillRep.scss';
import React from 'react';

import iPadWaterSpill from '../../assets/iPad_water_spill.png';
  
  
const IPadWaterSpillRep = () => {

  return (
    <div className="IPad-water-spill-repair-info-container">
      <div className='IPad-water-spill-repair-content'>
      <table className="IPad-water-spill-repair-info-table">
        <tbody>
          <TableRow header="Issue:" content="Spilled liquid or dropped into water" />
          <TableRow header="Causes:" content="No power / no screen picture" />
          <TableRow header="Solution:" content="Diagnose and replaced affected parts" />
          <TableRow header="Parts:" content="Only original and brand new" />
          <TableRow header="Repair time:" content="1-3 days" />
          <TableRow header="Warranty:" content="30 days" />
        </tbody>
      </table>
      <div className='IPad-water-spill-img-container'>
        <img src={iPadWaterSpill} alt="ipad battery" className='IPad-water-spill-img' />
      </div>
   
        <p className="IPad-water-spill-info-text">
            You’re not happy. At all. By mistake, you spilled water or liquid on your 
            iPad and it’s not working any longer. Hey, we don’t pass judgements. We just 
            want to get you back up and running again. Feel free to bring in your dead or 
            non-functioning iPad and we’ll give you a free diagnostic to fix your iPad.
        </p>
      </div>
    </div>
  );
}

const TableRow = ({ header, content }) => {
  return (
    <tr className="IPad-water-spill-repair-info-table-row">
      <td className="IPad-water-spill-repair-info-table-header-cell">{header}</td>
      <td className="IPad-water-spill-repair-info-table-cell">{content}</td>
    </tr>
  );
};

export default IPadWaterSpillRep;
