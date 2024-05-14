import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsHardDriveRep from '../components/WindowsHardDriveRep/WindowsHardDriveRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsHardDrive () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="PC Hard Drive Replacements And Upgrades"/>
      <WindowsHardDriveRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsHardDrive;