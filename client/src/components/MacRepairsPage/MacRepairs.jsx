import React from 'react';
import './MacRepairs.scss';

import MacBookCenter from '../../assets/macbook-service-center.avif';

import FixMacStartUp from '../../assets/FixStartUp.jpeg';
import NoPowerFix from '../../assets/NoPowerFix.jpeg';
import ScreenReplacement from '../../assets/ScreenReplacement.jpeg';
import KeyboardReplacement from '../../assets/KeyboardReplacement.jpeg';
import MacBookSpill from '../../assets/SpillDamageRepair.jpeg';
import HarddriveReplacement from '../../assets/HarddriveReplacement.jpeg';
import RAMMemory from '../../assets/RAMMemoryUpgrade.jpeg';
import DVDDrive from '../../assets/DVDDriveReplacement.jpeg';
import PasswordReset from '../../assets/PasswordReset.jpeg';
import TouchpadTrackpad from '../../assets/TouchpadTrackpadReplacement.jpeg';
import TopCase from '../../assets/TopCaseReplacement.jpeg';
import HingeReplacement from '../../assets/HingeReplacement.jpeg';
import BatteryReplacement from '../../assets/BatteryReplacement.jpeg';
import LogicBoard from '../../assets/LogicBoard.jpg';
import PowerAdapter from '../../assets/PowerAdapterReplacement.jpeg';
import JackDCBoard from '../../assets/JackDCInboardReplacement.jpeg';
import LogicBoardReplacement from '../../assets/LogicBoardReplacement.jpeg';
import InstallWindows from '../../assets/InstallWindowsOnMac.jpeg';
import WindowsMacVirus from '../../assets/WindowsMacVirusRemoval.jpeg';
import MacWontBoot from '../../assets/MacWontBoot.jpeg';
import SetUpMac from '../../assets/SetUpNewMac.jpeg';
import EmailAndInternet from '../../assets/EmailAndInternetMacRepair.jpeg';
import MacUpgrade from '../../assets/mac-ssd-upgrade.jpg';
import DamageRepair from '../../assets/MacPhysicalDamageRepair.jpeg';
import AppleSoftware from '../../assets/SoftwareSupport.jpeg';
import MacBookData from '../../assets/DataRecovery.jpeg';

import MacRepair from '../../assets/macRepair.avif';

import ServiceCard from './MacScenarios';
import ImageWithButton from './MacRepairMiddle';
import MacServiceCard from './MacRepairCards';

const MacRepairPage = () => {
    return (
        <>
        <div className="MacRepairContainer">
            <div className="MacRepairsContent">
                <h1 className="MacRepairsTitle">Mac Repairs</h1>
                <p className="MacRepairsDes">
                    We are experts at fixing all Macs. Stop in for an affordable, 
                    speedy reliable Mac repair service in Florida. You may bring your Apple device 
                    to our Florida PC Support shop for a free diagnostic 
                    and quick turn-around. If you prefer to have a Florida Mac repair technician 
                    come to you, contact us to schedule same-day IT service.
                </p>
                <button className="MacRepairsButton">
                    Get a free diagnostic
                </button>
            </div>
            <div className="MacRepairsImg">
                <img src={MacBookCenter} alt="Mac Repair Image" className='MacImg'/>
            </div>
        </div>

        <div className="scenario-service-container">
            <h2 className='scenario-title-header'>Why are we better than the Apple store? Here are some real customer scenarios:</h2>
            <div className="scenario-service-grid">
                <ServiceCard
                    title="My Mac is so slow."
                    description="Do you need help? Take a number or walk in anytime. Which do you prefer? If you have a Mac issue, Apple asks you to reserve a time in advance. At Florida PC Support, you may drop in at your convenience. Time is of the essence and we get that. Your Mac needs help and we want to fix it right away for you. And by the way, we look to actually fix your current Mac, not upsell you on a new one."
                />
                <ServiceCard
                    title="My MacBook doesn’t turn on."
                    description="The Genius Bar’s canned response is: “That will be $1,000 for the logic board replacement.” What?! Florida PC Support responds: “We’ll be happy to provide a free on-the-spot diagnostic. We are able to directly repair the logic board and perform part replacements which would cut your Mac repair cost to a third of what the Apple store usually charges.”"
                />
                <ServiceCard
                    title="I just spilled water on my MacBook Air. Can you help?"
                    description="The Apple store automatically negates your pricey AppleCare warranty support and reverts you to its $1,000 standard fee or tries to sell you a new Mac. New York Computer Help routinely performs Mac spill clean repairs and is able to save you hundreds of dollars by directly removing the spill damage. Further, data recovery is one of our specialties if your Mac looks far gone.”"
                />
                <ServiceCard
                    title="My iMac needs a repair?"
                    description="Can you come to my home or office? Apple doesn’t make house calls. Florida PC Support gladly has a 25-tech team that will be able to assist you in the same day. You’ll receive a certified Apple technician who will take care of all your Apple repair needs.”"
                />
                <ServiceCard
                    title="I need to upgrade my MacBook."
                    description="The Apple store does not work on “older” Macs. Also, it does not perform basic upgrades, such as RAM upgrades and hard drive upgrades. Why? They’re product-focused and want you to buy the newest MacBook. At Florida PC Support, we are service-focused and will do everything in our power to repair, upgrade, and save your precious MacBook. Yes, we actually care!”"
                />
                <ServiceCard
                    title="My Mac is only 6 years old but Apple won’t repair it because it is a “vintage” product that is too old to fix."
                    description="This one really gets us upset! You mean Apple manufactured a product that you paid a ton for, and they refuse to support it any longer?! Just awful! We gladly accept all vintage, antiques, and the most seriously challenged Mac that you need to have repaired. We certainly do not discriminate, welcoming all models, years, and Mac issues!”"
                />
            </div>
        </div>

        <ImageWithButton />

        <div className="mac-services-price-container">
            <div className="mac-services-price-header">Mac Services and Prices - Walk-in Service</div>
            <div className="mac-services-price-grid">
                <MacServiceCard
                    image={FixMacStartUp}
                    altText="Fix Mac Startup"
                    title="Fix Mac Startup / Freezing"
                    priceRange="$85+"
                    linkUrl={'/macbook-start-up'}
                />
                <MacServiceCard
                    image={NoPowerFix}
                    altText="MacBook Won't Power Up Fix"
                    title="MacBook Won't Power Up Fix"
                    priceRange="$85+"
                    linkUrl={'/macbook-power-up'}
                />
                <MacServiceCard
                    image={ScreenReplacement}
                    altText="MacBook Screen Replacements"
                    title="MacBook Screen Replacements"
                    priceRange="$150 - $750"
                    linkUrl={'/macbook-screen'}
                />
                <MacServiceCard
                    image={KeyboardReplacement}
                    altText="Keyboard Replacement"
                    title="Keyboard Replacement"
                    priceRange="$125 - $350"
                    linkUrl={'/macbook-keyboard-replacement'}
                />
                <MacServiceCard
                    image={MacBookSpill}
                    altText="MacBook Spill Repairs"
                    title="MacBook Spill Repairs"
                    priceRange="$125+"
                    linkUrl={'/macbook-spill'}
                />
                <MacServiceCard
                    image={HarddriveReplacement}
                    altText="MacBook Hard Drive Replacements & Upgrades"
                    title="MacBook Hard Drive Replacements & Upgrades"
                    priceRange="$125+"
                    linkUrl={'/macbook-hard-drive-replacement-upgrade'}
                />
                <MacServiceCard
                    image={RAMMemory}
                    altText="RAM / Memory Upgrade"
                    title="RAM / Memory Upgrade"
                    priceRange="$50 - $200"
                    linkUrl={'/macbook-ram-memory-upgrade'}
                />
                <MacServiceCard
                    image={DVDDrive}
                    altText="DVD Drive Replacement"
                    title="DVD Drive Replacement"
                    priceRange="$125 - $195"
                    linkUrl={'/macbook-dvd-drive-replacement'}
                />
                <MacServiceCard
                    image={PasswordReset}
                    altText="Password Reset"
                    title="Password Reset"
                    priceRange="$85"
                    linkUrl={'/macbook-password-reset'}
                />
                <MacServiceCard
                    image={TouchpadTrackpad}
                    altText="Touchpad / Trackpad Replacement"
                    title="Touchpad / Trackpad Replacement"
                    priceRange="$150 - $350"
                    linkUrl={'/mac-touchpad-trackpad-replacement'}
                />
                <MacServiceCard
                    image={TopCase}
                    altText="Top Case Replacement"
                    title="Top Case Replacement"
                    priceRange="$125 - $450"
                    linkUrl={'/mac-top-case-replacement'}
                />
                <MacServiceCard
                    image={HingeReplacement}
                    altText="Hinge Replacement"
                    title="Hinge Replacement"
                    priceRange="$125+"
                    linkUrl={'/mac-hinge-replacement'}
                />
                <MacServiceCard
                    image={BatteryReplacement}
                    altText="Battery Replacement"
                    title="Battery Replacement"
                    priceRange="$100 - $175"
                    linkUrl={'/macbook-battery'}
                />
                <MacServiceCard
                    image={LogicBoard}
                    altText="MacBook Logic Board Repairs"
                    title="MacBook Logic Board Repairs"
                    priceRange="$250 - $750"
                    linkUrl={'/macbook-logic-board'}
                />
                <MacServiceCard
                    image={PowerAdapter}
                    altText="Power Adapter Replacement"
                    title="Power Adapter Replacement"
                    priceRange="$65 - $85"
                    linkUrl={'/mac-power-adapter-replacement'}
                />
                <MacServiceCard
                    image={JackDCBoard}
                    altText="Jack / DC-In Board Replacement"
                    title="Jack / DC-In Board Replacement"
                    priceRange="$75 - $150"
                    linkUrl={'/mac-jack-dc-board-replacement'}
                />
                <MacServiceCard
                    image={LogicBoardReplacement}
                    altText="Logic Board Replacement"
                    title="Logic Board Replacement"
                    priceRange="$250 -$750"
                    linkUrl={'/mac-logic-board-replacement'}
                />
                <MacServiceCard
                    image={InstallWindows}
                    altText="Install Windows On Mac"
                    title="Install Windows On Mac"
                    priceRange="$125"
                    linkUrl={'/install-windows-on-mac'}
                />
                <MacServiceCard
                    image={WindowsMacVirus}
                    altText="Windows / Mac Virus Removal"
                    title="Windows / Mac Virus Removal"
                    priceRange="$85 - $150"
                    linkUrl={'/mac-virus-removal'}
                />
                <MacServiceCard
                    image={MacWontBoot}
                    altText="Mac Won’t Boot"
                    title="Mac Won’t Boot"
                    priceRange="$85+"
                    linkUrl={'/mac-wont-boot-repair'}
                />
                <MacServiceCard
                    image={SetUpMac}
                    altText="Set Up New Mac"
                    title="Set Up New Mac"
                    priceRange="$85 - $150"
                    linkUrl={'/mac-set-up-new'}
                />
                <MacServiceCard
                    image={EmailAndInternet}
                    altText="Email And Internet Mac Repair"
                    title="Email And Internet Mac Repair"
                    priceRange="$125 - $250"
                    linkUrl={'/mac-email-internet-repair'}
                />
                <MacServiceCard
                    image={MacUpgrade}
                    altText="Mac Upgrade"
                    title="Mac Upgrade"
                    priceRange="$50+"
                    linkUrl={'/mac-upgrade'}
                />
                <MacServiceCard
                    image={DamageRepair}
                    altText="Mac Physical Damage Repair"
                    title="Mac Physical Damage Repair"
                    priceRange="$85+"
                    linkUrl={'/mac-physical-damage-repair'}
                />
                <MacServiceCard
                    image={AppleSoftware}
                    altText="Apple Software Support"
                    title="Apple Software Support"
                    priceRange="$85 - $150"
                    linkUrl={'/mac-apple-software-support'}
                />
                <MacServiceCard
                    image={MacBookData}
                    altText="MacBook Data Recovery"
                    title="MacBook Data Recovery"
                    priceRange="$85+"
                    linkUrl={'/macbook-data'}
                />
            </div>
        </div>

        <div className="macbook-repair-bottom-container">
            <img src={MacRepair} alt="Mac Repair" className="mac-repair-img" />
            <div className="overlay">
                <div className="overlay-text">
                    <h1>Need Your Mac Repaired?</h1>
                    <a href="#" >Get a free diagnostic</a>
                </div>
            </div>
        </div>
 
        </>
    );
};

export default MacRepairPage;
