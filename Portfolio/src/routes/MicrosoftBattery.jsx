import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MicrosoftBatteryRep from '../components/MicrosoftBatteryRep/MicrosoftBatteryRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function  MicrosoftBattery () {
  return (
    <>
      <Navbar />
      <HeroTop
      className="MacBookPowerHero"
      heroImg={HomeImg}
      title="Microsoft Surface Battery Replacement"/>
      <MicrosoftBatteryRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MicrosoftBattery;