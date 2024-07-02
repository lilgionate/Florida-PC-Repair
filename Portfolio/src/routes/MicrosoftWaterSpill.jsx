import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MicrosoftWaterSpillRep from '../components/MicrosoftWaterSpillRep/MicrosoftWaterSpillRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function  MicrosoftWaterSpill () {
  return (
    <>
      <Navbar />
      <HeroTop
      className="MacBookPowerHero"
      heroImg={HomeImg}
      title="Microsoft Water Spill Repair"/>
      <MicrosoftWaterSpillRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MicrosoftWaterSpill;