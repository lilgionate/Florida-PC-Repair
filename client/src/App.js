import './App.css'
import { Route, Routes } from 'react-router-dom'
import WalkIn from './routes/WalkIn.jsx'
import HomePage from './routes/HomePage.jsx'
import About from './routes/About.jsx'
import Services from './routes/Services.jsx'
import Contact from './routes/Contact.jsx'
import DataRecovery from './routes/DataRecovery.jsx'
import DataRecoveryShipping from './routes/DataRecoveryShipping.jsx'

import MacAppleSoftware from './routes/MacAppleSoftware.jsx'
import MacPhysicalDamage from './routes/MacPhysicalDamage.jsx'
import MacUpgrade from './routes/MacUpgrade.jsx'
import MacEmailAndInternet from './routes/MacEmailAndInternet.jsx'
import MacSetUp from './routes/MacSetUp.jsx'
import MacWontBoot from './routes/MacWontBoot.jsx'
import MacVirus from './routes/MacVirus.jsx'
import MacInstallWindows from './routes/MacInstallWindows.jsx'
import MacJackDcBoard from './routes/MacJackDcBoard.jsx'
import MacPowerAdapter from './routes/MacPowerAdapter.jsx'
import MacHinge from './routes/MacHinge.jsx'
import MacTopCase from './routes/MacTopCase.jsx'
import MacBookTouchpadTrackpad from './routes/MacBookTouchpadTrackpad.jsx'
import MacBookPassword from './routes/MacBookPassword.jsx'
import MacBookDvdDrive from './routes/MacBookDvdDrive.jsx'
import MacBookRamMemory from './routes/MacBookRamMemory.jsx'
import MacBookHardDrive from './routes/MacBookHardDrive.jsx'
import MacBookKeyBoard from './routes/MacBookKeyBoard.jsx'
import MacFixStartUp from './routes/MacFixStartUp.jsx'
import MacBookPower from './routes/MacBookPower.jsx'
import MacBookScreen from './routes/MacBookScreen.jsx'
import MacBookSpill from './routes/MacBookSpill.jsx'  
import MacBookBattery from './routes/MacBookBattery.jsx'
import MacBookData from './routes/MacBookData.jsx'
import MacLogicBoard from './routes/MacLogicBoard.jsx'
import MacBookLogic from './routes/MacBookLogic.jsx'

import WindowsPower from './routes/WindowsPower.jsx'
import WindowsScreen from './routes/WindowsScreen.jsx' 
import WindowsData from './routes/WindowsData.jsx'
import WindowsSlowPC from './routes/WindowsSlowPC.jsx'
import WindowsHardDrive from './routes/WindowsHardDrive.jsx' 
import WindowsSpill from './routes/WindowsSpill.jsx'
import WindowsMachineSetup from './routes/WindowsMachineSetup.jsx'
import Windows10 from './routes/Windows10.jsx'
import Windows8 from './routes/Windows8.jsx'
import Windows7 from './routes/Windows7.jsx'
import WindowsVista from './routes/WindowsVista.jsx'
import WindowsPhysicalDamage from './routes/WindowsPhysicalDamage.jsx'
import WindowsUpgrade from './routes/WindowsUpgrade.jsx'
import WindowsLaptopPowerJack from './routes/WindowsLaptopPowerJack.jsx'
import WindowsSetup from './routes/WindowsSetup.jsx'
import WindowsTune from './routes/WindowsTune.jsx'
import WindowsRunsLoud from './routes/WindowsRunsLoud.jsx'
import WindowsBlueScreen from './routes/WindowsBlueScreen.jsx' 
import WindowsNoEmailInternet from './routes/WindowsNoEmailInternet.jsx' 
import WindowsShutOffOverheats from './routes/WindowsShutOffOverheats.jsx'
import WindowsLaptopKeyboard from './routes/WindowsLaptopKeyboard.jsx'
import WindowsVirusRemoval from './routes/WindowsVirusRemoval.jsx'

import IPhoneWaterSpill from './routes/IPhoneWaterSpill.jsx'
import IPhoneBattery from './routes/IPhoneBattery.jsx'
import IPhoneScreen from './routes/IPhoneScreen.jsx'
import IPhoneDataRecovery from './routes/IPhoneDataRecovery.jsx'

import IPadRepairServices from './routes/IPadRepairServices.jsx'
import IPadScreen from './routes/IPadScreen.jsx'
import IPadBattery from './routes/IPadBattery.jsx'
import IPadWaterSpill from './routes/IPadWaterSpill.jsx'
import IPadDataRecovery from './routes/IPadDataRecovery.jsx'

import MicrosoftSurface from './routes/MicrosoftSurface.jsx'
import MicrosoftScreen from './routes/MicrosoftScreen.jsx'
import MicrosoftBattery from './routes/MicrosoftBattery.jsx'
import MicrosoftWaterSpill from './routes/MicrosoftWaterSpill.jsx'
import MicrosoftDataRecovery from './routes/MicrosoftDataRecovery.jsx'


import MacRepairsPage from './routes/MacRepairsPage.jsx'
import PcRepairPage from './routes/PcRepairsPage.jsx'
import CustomPCBuild from './routes/CustomPCBuild.jsx'
import PhoneRepair from './routes/PhoneRepair.jsx'
import IPhoneRepairServices from './routes/IPhoneRepairServices.jsx'
import CustomPCAnnual from './routes/CustomPCAnnual.jsx'
import MailinService from './routes/MailinService.jsx'
import MessengerService from './routes/MessengerService.jsx'
import OnSiteTech from './routes/OnSiteTech.jsx'
import RemoteIT from './routes/RemoteIT.jsx'
import RemoteITAnnualPlan from './routes/RemoteITAnnualPlan.jsx'
import ComputerWarranty from './routes/ComputerWarranty.jsx'
import Tech from './routes/Tech.jsx'
import TechAnnual from './routes/TechAnnual.jsx'
import TechPlus from './routes/TechPlus.jsx'
import TechPlusAnnual from './routes/TechPlusAnnual.jsx'
import TechPlusShield from './routes/TechPlusShield.jsx'
import TechPlusShieldAnnual from './routes/TechPlusShieldAnnual.jsx'
import CyberSecurity from './routes/CyberSecurity.jsx'
import CyberAnnualPlan from './routes/CyberAnnualPlan.jsx'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/WalkIn" element={<WalkIn/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/data-recovery" element={<DataRecovery/>}/>
        <Route path='/data-recovery-mail-in-request/' element={<DataRecoveryShipping/>}/>
        <Route path="/mac-apple-software-support" element={<MacAppleSoftware/>}/>
        <Route path="/mac-physical-damage-repair" element={<MacPhysicalDamage/>}/>
        <Route path="/mac-upgrade" element={<MacUpgrade/>}/>
        <Route path="/mac-email-internet-repair" element={<MacEmailAndInternet/>}/>  
        <Route path="/mac-set-up-new" element={<MacSetUp/>}/>
        <Route path="/mac-wont-boot-repair" element={<MacWontBoot/>}/>
        <Route path="/mac-virus-removal" element={<MacVirus/>}/>
        <Route path="/install-windows-on-mac" element={<MacInstallWindows/>}/>
        <Route path="/mac-logic-board-replacement" element={<MacLogicBoard/>}/>
        <Route path="/mac-jack-dc-board-replacement" element={<MacJackDcBoard/>}/>
        <Route path="/mac-power-adapter-replacement" element={<MacPowerAdapter/>}/>
        <Route path="/mac-hinge-replacement" element={<MacHinge/>}/>
        <Route path="/mac-top-case-replacement" element={<MacTopCase/>}/>
        <Route path="/mac-touchpad-trackpad-replacement" element={<MacBookTouchpadTrackpad/>}/>
        <Route path="/macbook-password-reset" element={<MacBookPassword/>}/>
        <Route path="/macbook-dvd-drive-replacement" element={<MacBookDvdDrive/>}/>
        <Route path="/macbook-ram-memory-upgrade" element={<MacBookRamMemory/>}/>
        <Route path="/macbook-hard-drive-replacement-upgrade" element={<MacBookHardDrive/>}/>
        <Route path="/macbook-keyboard-replacement" element={<MacBookKeyBoard/>}/>
        <Route path="/macbook-start-up" element={<MacFixStartUp/>}/>
        <Route path="/macbook-power-up" element={<MacBookPower/>}/>
        <Route path="/macbook-screen" element={<MacBookScreen/>}/>
        <Route path="/macbook-spill" element={<MacBookSpill/>}/>
        <Route path="/macbook-battery" element={<MacBookBattery/>}/>
        <Route path="/macbook-data" element={<MacBookData/>}/>
        <Route path="/macbook-logic-board" element={<MacBookLogic/>}/>
        <Route path="/windows-pc-wont-start-fix" element={<WindowsPower/>}/>
        <Route path="/windows-pc-screen-replacement" element={<WindowsScreen/>}/>
        <Route path="/windows-pc-data-recovery" element={<WindowsData/>}/>
        <Route path="/windows-pc-slow" element={<WindowsSlowPC/>}/>
        <Route path="/windows-pc-hard-drive-replacemant-upgrades" element={<WindowsHardDrive/>}/> 
        <Route path="/windows-pc-spill-repair" element={<WindowsSpill/>}/>
        <Route path="/windows-10-repair" element={<Windows10/>}/>
        <Route path="/windows-8-repair" element={<Windows8/>}/>
        <Route path="/windows-7-repair" element={<Windows7/>}/>
        <Route path="/windows-vista-repair" element={<WindowsVista/>}/>
        <Route path="/windows-pc-upgrade" element={<WindowsUpgrade/>}/>
        <Route path="/windows-pc-new-setup" element={<WindowsSetup/>}/>
        <Route path="/windows-pc-tune-up" element={<WindowsTune/>}/>
        <Route path="/windows-pc-virus-removal" element={<WindowsVirusRemoval/>}/>
        <Route path="/windows-pc-shut-off-overheats" element={<WindowsShutOffOverheats/>}/>
        <Route path="/windows-pc-no-email-internet" element={<WindowsNoEmailInternet/>}/>
        <Route path="/windows-pc-blue-screen-error" element={<WindowsBlueScreen/>}/>
        <Route path="/windows-pc-runs-loud-noisy" element={<WindowsRunsLoud/>}/>
        <Route path="/windows-pc-Laptop-keyboard-replacement" element={<WindowsLaptopKeyboard/>}/>
        <Route path="/windows-pc-laptop-power-jack-repair" element={<WindowsLaptopPowerJack/>}/>
        <Route path="/windows-pc-physical-damage-repair" element={<WindowsPhysicalDamage/>}/>
        <Route path="/windows-pc-virtual-machine-setup" element={<WindowsMachineSetup/>}/>
        <Route path="/mac-repairs" element={<MacRepairsPage/>}/>
        <Route path="/pc-repairs" element={<PcRepairPage/>}/>
        <Route path="/custom-pc-build" element={<CustomPCBuild/>}/>
        <Route path="/phone-tablet-repairs" element={<PhoneRepair/>}/>
        <Route path='/iphone-repair-services/' element={<IPhoneRepairServices/>}/>
        <Route path="/iphone-repair-services/water-spill-repair/" element={<IPhoneWaterSpill/>}/>
        <Route path="/iphone-repair-services/battery-replacement/" element={<IPhoneBattery/>}/>
        <Route path="/iphone-repair-services/screen-replacement/" element={<IPhoneScreen/>}/>
        <Route path="/iphone-repair-services/data-recovery/" element={<IPhoneDataRecovery/>}/>
        <Route path="/ipad-repair-services/" element={<IPadRepairServices/>}/>
        <Route path="/ipad-repair-services/ipad-screen-replacement/" element={<IPadScreen/>}/>
        <Route path="/ipad-repair-services/ipad-battery-replacement/" element={<IPadBattery/>}/>
        <Route path="/ipad-repair-services/ipad-water-spill-repair/" element={<IPadWaterSpill/>}/>
        <Route path="/ipad-repair-services/ipad-data-recovery/" element={<IPadDataRecovery/>}/>
        <Route path="/microsoft-surface-repair-services/" element={<MicrosoftSurface/>}/>
        <Route path="/microsoft-surface-repair-services/screen-repair-replacement" element={<MicrosoftScreen/>}/>
        <Route path="/microsoft-surface-repair-services/battery-replacement" element={<MicrosoftBattery/>}/>
        <Route path="/microsoft-surface-repair-services/water-spill-repair/" element={<MicrosoftWaterSpill/>}/>
        <Route path="/microsoft-surface-repair-services/data-recovery/" element={<MicrosoftDataRecovery/>}/>
        <Route path="/custom-pc-build-annual-warranty" element={<CustomPCAnnual/>}/>
        <Route path="/mail-in-to-florida-pc-support" element={<MailinService/>}/>
        <Route path="/device-pick-messenger-service" element={<MessengerService/>}/>
        <Route path="/schedule-a-service/office-visit/" element={<OnSiteTech/>}/>
        <Route path="/schedule-a-service/remote-it-computer-support-service" element={<RemoteIT/>}/>
        <Route path='/schedule-a-service/remote-it-computer-support-service/remote-support-plan-annual/' element={<RemoteITAnnualPlan/>}/>
        <Route path="/warranty-protection-plan/" element={<ComputerWarranty/>}/>
        <Route path="/warranty-protection-plan/tech-plan-signup" element={<Tech/>}/>
        <Route path="/warranty-protection-plan/tech-plan-signup-annual/" element={<TechAnnual/>}/>
        <Route path="/warranty-protection-plan/tech-plus-plan-signup/" element={<TechPlus/>}/>
        <Route path="/warranty-protection-plan/tech-plus-plan-signup-annual/" element={<TechPlusAnnual/>}/>
        <Route path="/warranty-protection-plan/tech-plus-shield-plan-signup/" element={<TechPlusShield/>}/>
        <Route path="/warranty-protection-plan/tech-plus-shield-plan-signup-annual/" element={<TechPlusShieldAnnual/>}/>
        <Route path="/cyber-computer-security-protection-plan/" element={<CyberSecurity/>}/>
        <Route path="/cyber-security-annual-plan/" element={<CyberAnnualPlan/>}/>
      </Routes>
    </div>
  )
}

export default App;
