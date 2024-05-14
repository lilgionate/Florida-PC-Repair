import React from 'react'
import './OurServices.scss'

import img2 from '../../assets/macbook-pro-black-screen-repair-nyc.jpg'
import img3 from '../../assets/macbook-screen-replacement-nyc.jpg'
import img4 from '../../assets/SpillDamageRepair.jpg'
import img5 from '../../assets/Macbook-battery-replacement-nyc.png'
import img6 from '../../assets/logic-board-macbook-repair-service-nyc.jpg'
import img7 from '../../assets/DataRecovery.jpg'
import img8 from '../../assets/BrokenLaptopScreen.jpg'
import img9 from '../../assets/DataRecovery-1.jpg'
import img10 from '../../assets/PCWontStart.jpg'
import img11 from '../../assets/SlowPCIssues.jpg'
import img12 from '../../assets/PCHardDriveRepair.jpg'
import img13 from '../../assets/LaptopSpillRepair.jpg'


const certification = () => {
  return (
    <>
    <section className="about">
        <div className="secContainer">
            <h3 className="title">
            Your Go-To Mac Repair Center
            </h3>
            <p className='Our-des'>
            Directly repairing logic boards and all MacBook, iMac, and Mac Pro issues, saving you time and money.
            </p>

            <div className="mainContent container grid">
            <div className="itemContainerRow">
                <div className="itemContainer">
                <a href="http://localhost:5173/macbook-power-up">
                    <div className="singleItem">
                       <img className='img-OurServices' src={img2} alt="" />
                       <h3>MacBook Won’t Power Up</h3>
                    </div>
                    </a>
                </div> 

                <div className="itemContainer"> 
                <a href="http://localhost:5173/macbook-screen">
                    <div className="singleItem">
                       <img className='img-OurServices' src={img3} alt="" />
                       <h3>MacBook Screen Replacement</h3>
                   </div>
                </a>
                </div>

                <div className="itemContainer"> 
                <a href="http://localhost:5173/macbook-spill">
                   <div className="singleItem">
                      <img className='img-OurServices' src={img4} alt="" />
                      <h3>MacBook Spill Repair</h3>
                    </div>
                </a>
                </div>
                </div>

                <div className="itemContainerRow">
                <div className="itemContainer">
                <a href="http://localhost:5173/macbook-battery">
                    <div className="singleItem">
                       <img className='img-OurServices' src={img5} alt="" />
                       <h3>MacBook Battery Replacement</h3>
                    </div>
                </a>
                </div>

                <div className="itemContainer">
                <a href="http://localhost:5173/macbook-logic-board">
                    <div className="singleItem">
                       <img className='img-OurServices' src={img6} alt="" />
                       <h3>MacBook Logic Board Repair</h3>
                    </div>
                </a>
                </div>

                <div className="itemContainer">
                <a href="http://localhost:5173/macbook-data">
                    <div className="singleItem">
                       <img className='img-OurServices' src={img7} alt="" />
                       <h3>MacBook Data Recovery</h3>
                    </div>
                </a>
                </div>
                </div>
            </div>
        </div>
    </section>

<section className="about section">
<div className="secContainer">
    <h3 className="title">
    Fixing all Windows / PC issues
    </h3>
    <p className='Our-des'>Repairing laptops, desktops, PCs, custom gaming machines, all-in-ones, and tablets.</p>

    <div className="mainContent container grid">
    <div className="itemContainerRow">
        <div className="itemContainer">
        <a href="http://localhost:5173/windows-pc-screen-replacement">
            <div className="singleItem">
               <img className='img-OurServices' src={img8} alt="" />
               <h3>Windows Laptop Screen Replacement</h3>
            </div>
        </a>
        </div> 

        <div className="itemContainer"> 
        <a href="http://localhost:5173/windows-pc-data-recovery">
            <div className="singleItem">
               <img className='img-OurServices' src={img9} alt="" />
               <h3>Windows Data Recovery</h3>
           </div>
        </a>
        </div>

        <div className="itemContainer"> 
        <a href="http://localhost:5173/windows-pc-wont-start-fix">
           <div className="singleItem">
              <img className='img-OurServices' src={img10} alt="" />
              <h3>Windows / PC Won’t Start Fix</h3>
            </div>
        </a>
        </div>
        </div>

        <div className="itemContainerRow">
        <div className="itemContainer">
        <a href="http://localhost:5173/windows-pc-slow">
            <div className="singleItem">
               <img className='img-OurServices' src={img11} alt="" />
               <h3>Slow PC Issue</h3>
            </div>
        </a>
        </div>

        <div className="itemContainer">
        <a href="http://localhost:5173/windows-pc-hard-drive-replacemant-upgrades">
            <div className="singleItem">
               <img className='img-OurServices' src={img12} alt="" />
               <h3>Windows / PC Hard Drive Fix</h3>
            </div>
        </a>
        </div>

        <div className="itemContainer">
        <a href="http://localhost:5173/windows-pc-spill-repair">
            <div className="singleItem">
               <img className='img-OurServices' src={img13} alt="" />
               <h3>Laptop Spill Repair</h3>
            </div>
        </a>
        </div>
        </div>
    </div>
</div>
</section>
</>
  )
}

export default certification