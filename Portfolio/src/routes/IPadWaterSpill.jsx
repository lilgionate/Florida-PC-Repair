import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import IPadWaterSpillRep from '../components/IPadWaterSpillRep/IPadWaterSpillRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function  IPadWaterSpill () {
  return (
    <>
      <Navbar />
      <HeroTop
      className="MacBookPowerHero"
      heroImg={HomeImg}
      title="Water Spill Repair"/>
      <IPadWaterSpillRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default IPadWaterSpill;