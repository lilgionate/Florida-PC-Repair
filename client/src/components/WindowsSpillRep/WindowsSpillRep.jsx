import React from 'react';
import './WindowsSpillRep.scss'; // Import SCSS file

const commonFixes = [
  'Free diagnostic, including flat fee cost',
  'Complete disassembly of parts',
  'Individually clean parts and contacts',
  'Air-dry and reassembly parts',
  'Quick part replacements if needed',
  'Fast file recovery upon request'
];

const commonProcess = [
    'First of all, don’t power it back up! Assume you won’t be lucky. Even if you power it up the first time, if there’s enough damage, it will take a short and turn off immediately. Don’t think you’re one of the lucky ones. You could be doing more damage. Leave it off for a good 24 hours.',
    'Turn your laptop face down with its lid fully open. No rice, no magic bags, no blow dryers. Just simple gravity. While you have your laptop off, the key is to have the water seep away from your motherboard and internal parts.',
    'Turn it on after 24 hours. If you’re one of the lucky ones, the damage has been averted. At worst, hopefully, a few keys or the keyboard is not working which means it absorbed the water and sacrificed itself for the betterment of your laptop. We can certainly replace your keyboard quickly at a reasonable cost.'
  ];

  const TableRow = ({ className, title, cost }) => (
    <div className={`${className} cost`}>
      {title && <span className="title">{title}</span>}
      <span className="cost-value">{cost}</span>
    </div>
  );

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Laptop Spill Cleaning" cost="$85 – $150 (please note motherboard repair or part replacements will cost more)" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>Whether coffee, wine, water, or another kind of 
        liquid accidentally spilled onto your computer, we can still fix your laptop. 
        We will assess the damage for free and let you know if any part 
        replacements are needed along with the spill clean-up service.
        </p>
        <p className='power-des'>Laptop spill clean service includes:</p>
        <ul className='power-ul'>
          {commonFixes.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ul>
        <h3>Spilled water on your laptop? What should you do first?</h3>
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
