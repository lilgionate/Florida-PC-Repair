import React from 'react';
import './WindowsVirusRemovalRep.scss'; // Import SCSS file

const commonProcess = [
  'Walk in to our 3750 Inverrary Dr virus removal service shop.  Prefer to have a security expert come to you?  Call us at (786) 674-1176 to schedule an appointment or book online.',
  'Get your virus removed during the same day.  No files or programs will be removed.',
  'Get a free anti-virus software installed on your computer.  Hey, the one you had before didn’t work obviously.',
  'Warranty is for 60 days.  If the virus comes back for whatever reason, we’ll remove it again free of charge.'
];

const TableRow = ({ title, cost }) => (
  <div className="flex-container">
    <p>{title}</p>
    <p>{cost}</p>
  </div>
);

const RepairCostsSection = () => (
  <div className="price-section">
    <TableRow title="Computer Virus Removal" cost="$85 – $150" />
  </div>
);

const WindowsRepairComponent = () => {
  return (
    <>
    <div className="mac-power-container">
      <div className="content-container">
        <p className='power-header'>
        Is your computer acting strangely?  If you suspect a virus on your Windows 
        computer, stop right away to prevent further damage 
        and call us to remove it. We’ll also ensure you are protected going forward.
        </p>
        <p className='power-header'>
        It’s always a good rule of thumb that you should never let a PC virus fester. 
        It will only get worse and at its worst could corrupt your files and prevent 
        your PC from starting up.  We are real pros at getting rid of Windows viruses 
        here in Florida.  We rarely ever have to reinstall your Windows operating system 
        since we are usually able to directly remove PC viruses.  And it’s not fun 
        when you have to start out from scratch again with your computer.  Your files 
        will be safe and you’ll be able to work on your computer as you did before.
         Hey, they don’t call us the best PC virus removal in Florida for nothing!
        </p>
        <h2>Do PC’s get more viruses than Macs?</h2>
        <p className='power-header'>
        In one word, yes!  There are still more Windows computers being used than 
        Macs.  That means that the virus creators look to get more bang for their 
        buck. Viruses may only be created for one type of format, Windows operating 
        systems or Apple operating systems.  So, these evil-doers create a virus that 
        will infect the most amount of systems, PC computers.  Creating the most havoc 
        is their goal, and our end game here is to ensure you are protected against 
        such maliciousness.  That being said, Macs still get viruses and are getting 
        attacked more and more.  You are certainly 
        not immune to viruses, trojans, and spyware just because you are a Mac user.
        </p>
        <h2>I got a virus.  Will I lose my files?  Do you need to wipe out all my files to reinstall Windows?</h2>
        <p className='power-header2'>Nope!  99 out of 100 times we are able to remove 
        the virus so you don’t have to worry about your precious files being erased.  
        The only time we have to reinstall Windows fresh is if your hard drive is 
        failing or if your operating system is corrupted or damaged beyond repair. 
         As for the virus itself, let’s just say that we are a step ahead of the virus 
         creators and believe there is no virus we cannot stop.  In essence, we can 
         remove any virus.  But, if your operating system or hardware is totally belly 
         up, well, there’s nothing anyone can do but reinstall Windows.  Even in the 
         case of reinstalling Windows, we are typically able to salvage all your files.  
         So, whether we have to install Windows or not, 
        we are also experts in data recovery.  So, fear not with Florida PC Support!
        </p>
        <h3>PC Virus Removal Process – How does it work?</h3>
        <ol className='power-ul'>
          {commonProcess.map((fix, index) => (
            <li key={index}>{fix}</li>
          ))}
        </ol>
        <div>
          <h3>Windows / PC virus removal cost:</h3>
          <RepairCostsSection />
        </div>
      </div>
    </div>
    </>
  );
};

export default WindowsRepairComponent;
