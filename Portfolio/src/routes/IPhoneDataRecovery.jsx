import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import IPhoneDataRecoveryRep from '../components/IPhoneDataRecoveryRep/IPhoneDataRecoveryRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function  IPhoneDataRecovery () {
  return (
    <>
      <Navbar />
      <HeroTop
      className="MacBookPowerHero"
      heroImg={HomeImg}
      title="Data Recovery"/>
      <IPhoneDataRecoveryRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default IPhoneDataRecovery;