import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsSetupNew from '../components/WindowsSetupNew/WindowsSetupNew';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsSetup () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Set Up New PC"/>
      <WindowsSetupNew />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsSetup;