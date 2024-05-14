import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacBookHardDriveRep from '../components/MacBookHardDriveRep/MacBookHardDriveRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacBookHardDrive () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="MacBook Hard Drive Replacements & Upgrades"/>
      <MacBookHardDriveRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacBookHardDrive;