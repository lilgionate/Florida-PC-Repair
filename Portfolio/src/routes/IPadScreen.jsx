import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import IPadScreenRep from '../components/IPadScreenRep/IPadScreenRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function  IPadScreen () {
  return (
    <>
      <Navbar />
      <HeroTop
      className="MacBookPowerHero"
      heroImg={HomeImg}
      title="Screen Replacement"/>
      <IPadScreenRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default IPadScreen;