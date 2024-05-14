import React from 'react';
import './WindowsTuneUp.scss'; // Import SCSS file

const commonFixes = [
  'Removal of unnecessary start-up programs',
  'Virus / spyware removal and protection',
  'Error checking to prevent future PC issues',
  'Speeding up overall performance of PC',
  'Physical dust cleaning',
  'Updating of drivers / Windows / software',
  'Removing any registry / software conflics',
  'Take-home tips to keep PC in good shape'
];

const commonProcess = [
    'Faster boot time – We will remove any unnecessary start-up programs and files which slow down your PC.',
    'Faster Internet – Our PC experts will wipe out any malicious browser add-ons, bars, and extensions. This will ensure that your Internet Explorer, Firefox, Chrome, and Safari are running smoothly.',
    'Spyware be gone! If you have background spyware and stuff gumming up your overall performance, we’ll ensure they’re exterminated.',
    'Registry clean up – Over time, program files may be left over, conflict with others, or just misbehave. We’ll ensure the registry is looking the way it needs to look.',
    'Virus checks – Got a PC virus? We’ll scan your PC to see if there are any viruses, trojans, rootkits, malware, or anything else that is malicious and ensure your system is clean of it. Please note that virus removal service may be an additional charge depending on the level of severity.',
    'Hard drive check – We will make sure you don’t have bad or failing sectors on your hard drive. This could slow down your hard drive and ultimately stop your computer from booting. Definitely an important thing to check!'
  ];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="PC Tune-Up" cost="$85" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Just like a car, if you don’t tune up your PC, 
        it will become slower and start to have problems. Be proactive and get a 
        professional tune-up. 
        It just takes 60 minutes and will make your computer running like new.
        </p>
        <p className='power-des'>Our PC tune up covers the following services:</p>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <h3>What do I get for a PC tune up?</h3>
        <ul className='power-ul'>
          {commonProcess.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <div>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default WindowsRepairComponent;
