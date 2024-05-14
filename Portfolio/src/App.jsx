import './App.css'
import { Route, Routes } from 'react-router-dom'
import WalkIn from './routes/WalkIn'
import Home from './routes/Home'
import About from './routes/About'
import Services from './routes/Services'
import Contact from './routes/Contact'
import DataRecovery from './routes/DataRecovery'

import MacAppleSoftware from './routes/MacAppleSoftware'
import MacPhysicalDamage from './routes/MacPhysicalDamage'
import MacUpgrade from './routes/MacUpgrade'
import MacEmailAndInternet from './routes/MacEmailAndInternet'
import MacSetUp from './routes/MacSetUp'
import MacWontBoot from './routes/MacWontBoot'
import MacVirus from './routes/MacVirus'
import MacInstallWindows from './routes/MacInstallWindows'
import MacJackDcBoard from './routes/MacJackDcBoard'
import MacPowerAdapter from './routes/MacPowerAdapter'
import MacHinge from './routes/MacHinge'
import MacTopCase from './routes/MacTopCase'
import MacBookTouchpadTrackpad from './routes/MacBookTouchpadTrackpad'
import MacBookPassword from './routes/MacBookPassword'
import MacBookDvdDrive from './routes/MacBookDvdDrive'
import MacBookRamMemory from './routes/MacBookRamMemory'
import MacBookHardDrive from './routes/MacBookHardDrive'
import MacBookKeyBoard from './routes/MacBookKeyBoard'
import MacFixStartUp from './routes/MacFixStartUp'
import MacBookPower from './routes/MacBookPower'
import MacBookScreen from './routes/MacBookScreen'
import MacBookSpill from './routes/MacBookSpill'  
import MacBookBattery from './routes/MacBookBattery'
import MacBookData from './routes/MacBookData'
import MacLogicBoard from './routes/MacLogicBoard'
import MacBookLogic from './routes/MacBookLogic'

import WindowsPower from './routes/WindowsPower'
import WindowsScreen from './routes/WindowsScreen' 
import WindowsData from './routes/WindowsData'
import WindowsSlowPC from './routes/WindowsSlowPC'
import WindowsHardDrive from './routes/WindowsHardDrive' 
import WindowsSpill from './routes/WindowsSpill'
import WindowsMachineSetup from './routes/WindowsMachineSetup'
import Windows10 from './routes/Windows10'
import Windows8 from './routes/Windows8'
import Windows7 from './routes/Windows7'
import WindowsVista from './routes/WindowsVista'
import WindowsPhysicalDamage from './routes/WindowsPhysicalDamage'
import WindowsUpgrade from './routes/WindowsUpgrade'
import WindowsLaptopPowerJack from './routes/WindowsLaptopPowerJack'
import WindowsSetup from './routes/WindowsSetup'
import WindowsTune from './routes/WindowsTune'
import WindowsRunsLoud from './routes/WindowsRunsLoud'
import WindowsBlueScreen from './routes/WindowsBlueScreen' 
import WindowsNoEmailInternet from './routes/WindowsNoEmailInternet' 
import WindowsShutOffOverheats from './routes/WindowsShutOffOverheats'
import WindowsLaptopKeyboard from './routes/WindowsLaptopKeyboard'
import WindowsVirusRemoval from './routes/WindowsVirusRemoval'


import MacRepairsPage from './routes/MacRepairsPage'
import PcRepairPage from './routes/PcRepairsPage'
import CustomPCBuild from './routes/CustomPCBuild'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/WalkIn" element={<WalkIn/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/data-recovery" element={<DataRecovery/>}/>
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
      </Routes>
    </div>
  )
}

export default App
