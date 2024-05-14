import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacBookBatteryRep from '../components/MacBookBatteryRep/MacBookBatteryRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacBookBattery () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Battery Replacement"/>
      <MacBookBatteryRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacBookBattery;