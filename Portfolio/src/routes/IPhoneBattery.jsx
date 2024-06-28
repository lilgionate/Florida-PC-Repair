import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import IPhoneBatteryRep from '../components/IPhoneBatteryRep/IPhoneBatteryRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function  IPhoneBattery () {
  return (
    <>
      <Navbar />
      <HeroTop
      className="MacBookPowerHero"
      heroImg={HomeImg}
      title="Battery Replacement"/>
      <IPhoneBatteryRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default IPhoneBattery;