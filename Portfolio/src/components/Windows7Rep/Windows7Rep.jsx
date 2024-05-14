import React from 'react';
import './Windows7Rep.scss'; // Import SCSS file

const commonFixes = [
  'Slow processing',
  'Video is blurry',
  'Windows errors / blue screen',
  'Doesn’t start / boot up',
  'Program compatibility issues',
  'Printer Issues',
  'Can’t find DVD drive',
  'Pop-up messages'
];

  const TableRow = ({ className, title, cost }) => (
    <div className={`${className} cost`}>
      {title && <span className="title">{title}</span>}
      <span className="cost-value">{cost}</span>
    </div>
  );

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Windows 7 Repair" cost="$85 – $150" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Windows 7 starts up and shuts down fast and provides 
        backwards compatibility for programs in Windows Vista, XP, and 2000. But, 
        problems may occur and our Windows 7 experts are ready to help when disaster 
        strikes. 
        Get a free diagnostic to determine the Windows 7 issue and precise service rate.
        </p>
        <p className='power-des'>Common Windows 7 repairs we resolve:</p>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <h2>Windows 7 Error Message – How can I fix it?</h2>
        <p className='power-header'>If you’re a good sleuth, investigator, or have 
        time on your hands, you can take a picture or jot down what Windows 7 error 
        message is and simply Google it. Then, you’ll get a ton of different sites 
        presenting different Windows 7 error message solutions. Which one should you 
        pick? Well, go with the most credible website source or one with the most 
        activity and comments. Yes, you run the risk of damaging your computer more 
        if you’re not sure what you’re doing, or if you’re given faulty info. 
        If you don’t have the time or tech know-how, we’re only a free diagnostic away.
        </p>
        <h2>Next steps: How can I see what my Windows 7 repair issue will cost?</h2>
        <p className='power-header'>Stop in for a complimentary diagnostic where 
        we’ll diagnose your Windows 7 computer and provide a flat fee repair cost for 
        your approval. Keep in mind there are no minimum charges or obligations. If 
        you’re not happy with our rate (although we are extremely reasonable), you are 
        not obligated to pay and can leave with the imparted knowledge we provided 
        based on your Windows 7 repair issue. If you’d like to proceed, you’ll be 
        required to approve our Windows 7 flat fee repair cost and pay upon job 
        completion. If for whatever reason, we cannot fix your computer, which is 
        absolutely rare, you are not charged a dime. It’s our satisfaction guarantee 
        promise. We aim to 
        please and are results-driven like you are. If you’re happy, so are we.
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
