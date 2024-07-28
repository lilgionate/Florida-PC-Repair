import React from 'react';
import './Windows8Rep.scss'; // Import SCSS file

const commonFixes = [
  'Restarting on it own',
  'Hangs at shut down',
  'Windows updates don’t install',
  'Doesn’t start after Windows 8.1 update',
  'Cannot install / upgrade Windows 8',
  'Software doesn’t work properly',
  'Drivers don’t work',
  'Slow start-up or in general'
];

  const TableRow = ({ className, title, cost }) => (
    <div className={`${className} cost`}>
      {title && <span className="title">{title}</span>}
      <span className="cost-value">{cost}</span>
    </div>
  );

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Windows 8 Repair" cost="$85 – $150" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Windows 8 is cheaper, faster, has lots of apps, 
        and integrates SkyDrive for online storage.  But, Windows 8 computers break 
        down too, and we are happy provide a free diagnostic to provide the repair cost.
        </p>
        <p className='power-des'>Common Windows 8 repairs we resolve:</p>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <h2>Should I fix my Windows 8 computer or just buy a new one?</h2>
        <p className='power-header'>Quite candidly, we would have told you never to 
        buy one in the first place. Just as Windows Vista had inherent Windows system 
        issues, so does Windows 8 out of the box. Out of the box meaning it has the 
        potential to easily have software driver conflicts, Windows update instability 
        issues, and blue screen errors. But, with some configuring by our Windows 8 
        experts, we’ll be able to ensure your Windows 8 laptop or desktop 
        is set up to avoid these conflicts and typical Windows 8 repair issues.
        </p>
        <p className='power-header'>Drop in anytime for a free diagnostic so we can 
        also give you an honest diagnostic of your Windows 8 problem. Is it worth it 
        to fix or just buy a new computer? Should you downgrade to Windows 7 or wait 
        until the next version of Windows comes out? We’ll be the first to tell you 
        to get rid of it if it’s not worth it being we have such a high regard for 
        it. If there’s an easy, reasonably priced fix, we will let you know that as 
        well. Either way, rest assured knowing you’ll get a blatantly honest 
        diagnostic and Windows 8 repair service.If you’re a good sleuth, investigator, 
        or have time on your hands, you can take a picture or jot down what Windows 7 
        error message is and simply Google it. Then, you’ll get a ton of different 
        sites presenting different Windows 7 error message solutions. Which one should 
        you pick? Well, go with the most credible website source or one with the most 
        activity and comments. Yes, you run the risk of damaging your computer more if
        you’re not sure what you’re doing, or if you’re given faulty info. 
        If you don’t have the time or tech know-how, we’re only a free diagnostic away.
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
