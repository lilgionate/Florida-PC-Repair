import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import IPadDataRecoveryRep from '../components/IPadDataRecoveryRep/IPadDataRecoveryRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function  IPadDataRecovery () {
  return (
    <>
      <Navbar />
      <HeroTop
      className="MacBookPowerHero"
      heroImg={HomeImg}
      title="Data Recovery"/>
      <IPadDataRecoveryRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default IPadDataRecovery;