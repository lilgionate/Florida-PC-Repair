import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import IPhoneWaterSpillRep from '../components/IPhoneWaterSpillRep/IPhoneWaterSpillRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function  IPhoneWaterSpill () {
  return (
    <>
      <Navbar />
      <HeroTop
      className="MacBookPowerHero"
      heroImg={HomeImg}
      title="Water Spill Repair"/>
      <IPhoneWaterSpillRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default IPhoneWaterSpill;