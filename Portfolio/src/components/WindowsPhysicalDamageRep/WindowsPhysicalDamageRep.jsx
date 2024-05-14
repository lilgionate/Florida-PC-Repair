import React from 'react';
import './WindowsPhysicalDamageRep.scss'; // Import SCSS file

const commonFixes = [
  'Cracked LCD screen',
  'Broken hinges',
  'Cracked casing',
  'Jammed power button',
  'Bent DVD drive',
  'Hard drive mechanical issue',
  'Damaged bezels / connectors',
  'Keyboard / touchpad spills'
];

  const TableRow = ({ className, title, cost }) => (
    <div className={`${className} cost`}>
      {title && <span className="title">{title}</span>}
      <span className="cost-value">{cost}</span>
    </div>
  );

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="PC physical damage repair" cost="$85 – $170 + parts" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Computer drops happen.  Your laptop may fall from 
        a table or your desktop may be knocked over.  We cannot plan for it, but our 
        Florida computer repair techs are ready to 
        diagnose your damaged PC for free.  You’ll receive a cost effective solution.
        </p>
        <p className='power-des'>Computer physical damage we repair:</p>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <h2>Trashed your PC? Took a fall? On its last legs?</h2>
        <p className='power-header'>Whatever the reason for your PC being damaged, we 
        don’t judge.  We just fix.  No questions asked.  Your hinge may be on its 
        last thread or casing could be dented beyond belief.  We have been known 
        to make miracles happen and we’ll provide the same miraculous fix to your PC.
        </p>
        <p className='power-header'>We recommend to not let your damaged computer 
        issue linger.  If you have a bad hinge, jack, or another failing part, take 
        care of it 
        right away or else it could get worse and lead to other parts worsening as well.
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
