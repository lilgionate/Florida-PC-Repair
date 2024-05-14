import React from 'react';
import './WindowsPowerUp.scss'; // Import SCSS file

const commonFixes = [
  'First, don’t fret.  It may be an easy fix.  Make sure your plug or AC Adapter is plugged in and secure in the back of your computer.  Maybe it is loose.',
  'Secondly, make sure the other end of your power cable or charger is securely in a wall socket or power strip.  Try another outlet in case one outlet is bad.',
  'Press the power button again.  Maybe you’ll get lucky this time.',
  'If no luck, bring in your non-powering computer to our PC Won’t Start Repair NYC shop for a free diagnostic and computer repair.  Most repairs are fixed within hours.'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Charger / Power Supply Replacement" cost="	$45 – $175" />
    <TableRow title="Operating System Issue" cost="$85 – $125" />
    <TableRow title="RAM Replacement" cost="	$50 – $150" />
    <TableRow title="Hard Drive / Motherboard Replacement" cost="	$210+" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container"> {/* Container for content */}
        <p className='power-header'>Does your computer fail to power on?  
        Or Windows isn’t loading all the way? Our NYC PC experts will perform a free 
        diagnostic, testing all your parts and operating system to determine the exact 
        issue and flat fee repair cost. We are computer experts at determining non-starting PC issues.!
        </p>
        <h2>I’m getting no power on my computer.</h2>
        <p className='power-header'>This may be as simple as replacing the power 
        supply, battery, charger or RAM.  Or you may have some critical motherboard, 
        laptop jack, component failure.  We do all of the above and are happy to 
        provide a free diagnostic to determine why your computer won’t power on.
        </p>
        <h2>My PC doesn’t load Windows all the way.</h2>
        <p className='power-header'>In this case, there’s a little bit more hope in 
        that it’s not a serious catastrophe. You may have a Windows corruption, PC 
        virus infection, or hard drive issue. Allow our PC repair specialists to check this out for you.
        </p>
        <h2>My laptop gets power, but I can’t see anything on the screen.</h2>
        <p className='power-header'>This is usually a screen issue and we stock 
        parts in-house for quick laptop screen replacements.  Of course, this may 
        also mean the inverter, video connector, or other display issues are present.
        </p>
        <h3>My Computer Won’t Start. What first steps should I take?</h3>
        <ol className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ol>
        <div>
          <h3>PC / Windows Laptop Won’t Start Repair Costs:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default WindowsRepairComponent;
