import React from 'react';
import './MacBookLogicBoardRep.scss'; // Import SCSS file

const commonFixes = [
  'Liquid spills',
  'Power surges',
  'Not powering on',
  'Battery not charging',
  'No light on the screen',
  'Keyboard / keys not working properly',
  'Trackpad not working well',
  'WiFi not working / light signal',
  'Slow start-up',
  'Freezing issue'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Logic board repair" cost="$250+" />
    <TableRow title="Liquid spill repair" cost="$125 – $400" />
    <TableRow title="Keyboard repair" cost="$150 – $250" />
    <TableRow title="Battery/power button repair" cost="$100 – $150" />
  </div>
);

const MacRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>If your MacBook doesn’t turn on due to a liquid 
        spill or unknown reason, you’re not out of luck.  No, you don’t have to pay a 
        ton to the Apple store to replace your logic board.  There’s a more affordable way, logic board repair.  
        Logic board repair is a sophisticated process whereby our MacBook technicians will locate the exact failed component and replace it.  
        Our skilled Apple techs will be able to save you a lot of money and time.
        </p>
        <h2>What issues will our logic board repair service fix?</h2>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <h2>What happens if we can’t repair your logic board?</h2>
        <p className='power-header2'>No matter how old or new, and what type of Mac 
        it is, we will recover your files.  Data recovery is performed on all models, 
        including:MacBook, MacBook Pro, MacBook Air, iMac, and Mac Pro.  It’s an easy process.  Just drop in for a free 
        data recovery diagnostic and quick recovery turn-around.  No data, no charge.
        service center when disaster strikes and we’ll be happy to recover your files.
        </p>
        <p className='power-des'>Mac models supported: MacBook, MacBook Pro, MacBook Air, iMac, Mac Pro, Mac mini</p>
        <div>
          <h3>Logic board repair Costs:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default MacRepairComponent;
