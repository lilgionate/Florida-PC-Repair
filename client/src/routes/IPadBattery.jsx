import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import IPadBatteryRep from '../components/IPadBatteryRep/IPadBatteryRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function  IPadBattery () {
  return (
    <>
      <Navbar />
      <HeroTop
      className="MacBookPowerHero"
      heroImg={HomeImg}
      title="Battery Replacement"/>
      <IPadBatteryRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default IPadBattery;