import React from 'react'; 
import './PcRepairs.scss';

import PCSplitImg from '../../assets/pc-split-img.avif';

import PCFooter from '../../assets/pc-page-footer.jpg'

import MacBookCenter from '../../assets/pc-service-center.jpg';

import CommonIssuesList from './SupportedPcIssues';

import MacServiceCard from './PcRepairCards';

import PCHardDrive from '../../assets/PCHardDriveRepair.jpeg';
import SlowPCIssues from '../../assets/SlowPCIssues.jpeg';
import BrokenScreen from '../../assets/BrokenLaptopScreen.jpeg';
import PCWontstart from '../../assets/PCWontStart1.jpg';
import DataRecovery from '../../assets/DataRecovery3.jpeg';
import WindowsVitrual from '../../assets/WindowsVirtualMachine.jpeg';
import Windows10 from '../../assets/Windows10RepairServices.jpeg';
import Windows8 from '../../assets/Windows8Repair.jpeg';
import Windows7 from '../../assets/windows7.jpg';
import WindowsVista from '../../assets/windowsvista.jpg';
import PCPhysicalDamage from '../../assets/PCPhysicalDamageRepair.jpeg';
import PCUpgrade from '../../assets/PCUpgrade.jpeg';
import LaptopPowerJack from '../../assets/LaptopPowerJackRepair.jpeg';
import LaptopSpill from '../../assets/LaptopSpillRepair.jpeg';
import SetUpNewPC from '../../assets/SetupNewPC.jpeg';
import SlowPCIssues2 from '../../assets/SlowPCIssues.jpeg';
import PCRunsLoud from '../../assets/PCRunsLoudAndNoisy.jpeg';
import BlueScreen from '../../assets/BlueScreenPCError.jpeg';
import NoEmailInternet from '../../assets/NoEmailInternet.jpeg';
import PCShutOff from '../../assets/PCShutsOffOverheats.jpeg';
import LaptopKeyboard from '../../assets/LaptopKeyboardReplacement.jpeg';
import VirusRemoval from '../../assets/VirusRemoval.jpg';

const PcRepairPage = () => {
    return (
        <>
        <div className="PcRepairContainer">
            <div className="PcRepairsContent">
                <h1 className="PcRepairsTitle">PC Repairs</h1>
                <p className="PcRepairsDes">
                Get a free diagnostic on the spot to repair your PC. The turn-around time is 
                the same day to next day. 
                You need your computer fixed right away and we will make that happen for you.
                </p>
                <button className="PcRepairsButton">
                    Get a free diagnostic
                </button>
            </div>
            <div className="PcRepairsImg">
                <img src={MacBookCenter} alt="Pc Repair Image" className='PcImg'/>
            </div>
        </div>

        <CommonIssuesList />

        <div className="pc-repair-service-container">
            <h1 className="pc-repair-service-heading">Drop-off or Onsite Windows / Microsoft repair service: You choose</h1>
            <p className="pc-repair-service-paragraph">
                Whether you prefer a free diagnostic first or same-day visit, we will accommodate you. We will work around your schedule. You may schedule for one of our Florida Microsoft repair service experts to come to your home or office during the same day. Or you may drop off at our repair centers. Either way, you will get a certified Windows PC repair expert take care of your Microsoft issue.
            </p>
        </div>

    <div className="pc-repair-split-container">
      <div className="pc-repair-split-img">
        <img src={PCSplitImg} alt="Computer repair" className="pc-repair-split-image" />
      </div>
      <div className="pc-repair-split-content">
        <h1 className="pc-repair-split-heading-one">Why choose Florida PC Support over Microsoft?</h1>
        <p className="pc-repair-split-paragraph">
          Our Florida Microsoft repair service experts will get the job done right and much faster. Plain and simple. With Microsoft, you will need to call up and take the time to explain your Windows issue to at least 3 different departments. Then, more time will be wasted to have a Microsoft rep remote into your computer. Finally, you’ll need to hope and pray your computer isn’t screwed up worse than it is. We know first-hand since we’ve cleaned up Microsoft’s shoddy repair attempts many times.
        </p>
        <h1 className="pc-repair-split-heading-two">Why is Florida PC Support better than your PC manufacturer?</h1>
        <p className="pc-repair-split-paragraph">
          If you’re thinking of Dell, HP, Lenovo, Sony, Toshiba, Acer, Asus or another PC manufacturer, think again. In most cases, you’ll need to ship your computer into the repair depot. This is only a good service if you have 2-4 weeks to spare. On the other hand, if you want to fix your computer in the same day without any hassles, go to Florida PC Support for the best Microsoft repair service in Florida.  Our PC technicians are certified to work on all the major manufacturer Windows laptops and desktops, and are able to begin fixing your computer as soon as you ask us to.  No red tape, no overcharging, and no tech speak.  Instead, you’ll get straightforward PC repair service and costs that you can trust.
        </p>
      </div>    
    </div>


    <div className="pc-services-price-container">
            <div className="pc-services-price-header">Services and prices for Walk-in Service</div>
            <div className="pc-services-price-grid">
                <MacServiceCard
                    image={PCHardDrive}
                    altText="PC Hard Drive Replacements And Upgrades"
                    title="PC Hard Drive Replacements And Upgrades"
                    priceRange="$210+"
                    linkUrl={'/windows-pc-hard-drive-replacemant-upgrades'}
                />
                <MacServiceCard
                    image={SlowPCIssues}
                    altText="Slow PC Issue"
                    title="Slow PC Issue"
                    priceRange="$125+"
                    linkUrl={'/windows-pc-slow'}
                />
                <MacServiceCard
                    image={BrokenScreen}
                    altText="Windows Laptop Screen Replacements"
                    title="Windows Laptop Screen Replacements"
                    priceRange="$125 - $450"
                    linkUrl={'/windows-pc-screen-replacement'}
                />
                <MacServiceCard
                    image={PCWontstart}
                    altText="Windows / PC Won’t Start Fix"
                    title="Windows / PC Won’t Start Fix"
                    priceRange="$45+"
                    linkUrl={'/windows-pc-wont-start-fix'}
                />
                <MacServiceCard
                    image={DataRecovery}
                    altText="Windows Data Recovery"
                    title="Windows Data Recovery"
                    priceRange="Typically $85 – $250. Lab Recovery Service: $950+"
                    linkUrl={'/windows-pc-data-recovery'}
                />
                <MacServiceCard
                    image={WindowsVitrual}
                    altText="Windows Virtual Machine Setup"
                    title="Windows Virtual Machine Setup"
                    priceRange="$85 - $150"
                    linkUrl={'/windows-pc-virtual-machine-setup'}
                />
                <MacServiceCard
                    image={Windows10}
                    altText="Windows 10 Repair"
                    title="Windows 10 Repair"
                    priceRange="$85 - $150"
                    linkUrl={'/windows-10-repair'}
                />
                <MacServiceCard
                    image={Windows8}
                    altText="Windows 8 Repair"
                    title="Windows 8 Repair"
                    priceRange="$85 - $150"
                    linkUrl={'/windows-8-repair'}
                />
                <MacServiceCard
                    image={Windows7}
                    altText="Windows 7 Repair"
                    title="Windows 7 Repair"
                    priceRange="$85 - $150"
                    linkUrl={'/windows-7-repair'}
                />
                <MacServiceCard
                    image={WindowsVista}
                    altText="Windows Vista Repair"
                    title="Windows Vista Repair"
                    priceRange="$85 - $150"
                    linkUrl={'/windows-vista-repair'}
                />
                <MacServiceCard
                    image={PCPhysicalDamage}
                    altText="PC Physical Damage Repair"
                    title="PC Physical Damage Repair"
                    priceRange="$85+"
                    linkUrl={'/windows-pc-physical-damage-repair'}
                />
                <MacServiceCard
                    image={PCUpgrade}
                    altText="PC Upgrade"
                    title="PC Upgrade"
                    priceRange="$85+"
                    linkUrl={'/windows-pc-upgrade'}
                />
                <MacServiceCard
                    image={LaptopPowerJack}
                    altText="Laptop Power Jack Repair"
                    title="Laptop Power Jack Repair"
                    priceRange="$125 - $250"
                    linkUrl={'/windows-pc-laptop-power-jack-repair'}
                />
                <MacServiceCard
                    image={LaptopSpill}
                    altText="Laptop Spill Repair"
                    title="Laptop Spill Repair"
                    priceRange="$85+"
                    linkUrl={'/windows-pc-spill-repair'}
                />
                <MacServiceCard
                    image={SetUpNewPC}
                    altText="Set Up New PC"
                    title="Set Up New PC"
                    priceRange="$85 - $125"
                    linkUrl={'/windows-pc-new-setup'}
                />
                <MacServiceCard
                    image={SlowPCIssues2}
                    altText="PC Tune-Up"
                    title="PC Tune-Up"
                    priceRange="$85"
                    linkUrl={'/windows-pc-tune-up'}
                />
                <MacServiceCard
                    image={PCRunsLoud}
                    altText="PC Runs Loud And Noisy"
                    title="PC Runs Loud And Noisy"
                    priceRange="$85 - $175"
                    linkUrl={'/windows-pc-runs-loud-noisy'}
                />
                <MacServiceCard
                    image={BlueScreen}
                    altText="Blue Screen PC Error"
                    title="Blue Screen PC Error"
                    priceRange="$85+"
                    linkUrl={'/windows-pc-blue-screen-error'}
                />
                <MacServiceCard
                    image={NoEmailInternet}
                    altText="No Email / Internet"
                    title="No Email / Internet"
                    priceRange="$85 - $125"
                    linkUrl={'/windows-pc-no-email-internet'}
                />
                <MacServiceCard
                    image={PCShutOff}
                    altText="PC Shuts Off /Overheats"
                    title="PC Shuts Off /Overheats"
                    priceRange="$85+"
                    linkUrl={'/windows-pc-shut-off-overheats'}
                />
                <MacServiceCard
                    image={LaptopKeyboard}
                    altText="Laptop Keyboard Replacement"
                    title="Laptop Keyboard Replacement"
                    priceRange="$85 - $250"
                    linkUrl={'/windows-pc-Laptop-keyboard-replacement'}
                />
                <MacServiceCard
                    image={VirusRemoval}
                    altText="PC Virus Removal"
                    title="PC Virus Removal"
                    priceRange="$85 - $150"
                    linkUrl={'/windows-pc-virus-removal'}
                />
            </div>
        </div>

        <div className="pc-repair-bottom-container">
            <img src={PCFooter} alt="Mac Repair" className="pc-repair-img" />
            <div className="overlay">
                <div className="overlay-text">
                    <h1>Need Your PC Repaired?</h1>
                    <a href="#" >Get a free diagnostic</a>
                </div>
            </div>
        </div>

        </>
)}

export default PcRepairPage;