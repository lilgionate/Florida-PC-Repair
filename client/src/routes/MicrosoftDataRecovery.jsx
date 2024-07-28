import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MicrosoftDataRecoveryRep from '../components/MicrosoftDataRecoveryRep/MicrosoftDataRecoveryRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function  MicrosoftDataRecovery () {
  return (
    <>
      <Navbar />
      <HeroTop
      className="MacBookPowerHero"
      heroImg={HomeImg}
      title="Microsoft Surface Data Recovery"/>
      <MicrosoftDataRecoveryRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MicrosoftDataRecovery;