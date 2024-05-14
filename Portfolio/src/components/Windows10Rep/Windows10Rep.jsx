import React from 'react';
import './Windows10Rep.scss'; // Import SCSS file

const commonFixes = [
  'Windows upgrade issue from Vista/7/8',
  'Windows 10 updates don’t install',
  'Windows 10 programs don’t work',
  'Windows 10 is slow after upgrade',
  'Cannot install / upgrade Windows 10',
  'Printer doesn’t work properly',
  'Windows 10 drivers don’t work',
  'Odd or intermittent behavior'
];

  const TableRow = ({ className, title, cost }) => (
    <div className={`${className} cost`}>
      {title && <span className="title">{title}</span>}
      <span className="cost-value">{cost}</span>
    </div>
  );

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Windows 10 Repair" cost="$85 – $150" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Windows 10 is the next version after Windows 8 and 
        combines the best of Windows 7’s start button and Windows 8’s metro interface. 
        It also allows you to dictate to it, search the computer and Internet simultaneously, 
        and sync devices on the fly.  If you are having upgrading to Windows 10, we can 
        certainly help. We have already fixed tons of Windows 10 issues.  Feel free to 
        stop in for a free diagnostic to provide the exact Windows 10 repair cost and 
        service time.  Or if you prefer, we can dispatch a Windows 10 Florida expert to you.
        </p>
        <p className='power-des'>Common Windows 10 repairs we resolve:</p>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <h2>Should I fix my Windows 10 computer or downgrade to Windows 7 or 8?</h2>
        <p className='power-header'>Great question! We get this 
        regularly. Windows 10 is here to stay people. If you don’t 
        know by now, Microsoft support rolls out an acceptable operating 
        system every other year. It has run true to course as per Windows 
        2000, Windows XP, Windows 7 and now Windows 10. The less than 
        adequate operating system versions have been in the in between 
        ones, Windows ME, Windows Vista, and Windows 8. So, as history 
        dictates, this one is a keeper and as such, you should dig in and enjoy. 
        Now, if we were discussing, 
        Windows Vista or Windows 8, we would tell you the opposite.
        </p>
        <p className='power-header'>Drop in anytime for a free diagnostic so we can 
        give you an honest diagnostic of your Windows 10 problem. Is it worth it to 
        fix or just buy a new computer? Should you downgrade to Windows 7 or Windows 
        8. Downgrading usually makes sense only if you have older programs that don’t 
        work well with Windows 10 and you cannot upgrade them. Otherwise, you should 
        get your Windows 10 computer repaired if it’s not in terrible shape. Either 
        way, rest assured 
        knowing you’ll get a blatantly honest diagnostic and Windows 10 repair service.
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
