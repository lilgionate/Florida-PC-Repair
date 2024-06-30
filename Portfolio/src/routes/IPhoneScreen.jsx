import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import IPhoneScreenRep from '../components/IPhoneScreenRep/IPhoneScreenRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function  IPhoneScreen () {
  return (
    <>
      <Navbar />
      <HeroTop
      className="MacBookPowerHero"
      heroImg={HomeImg}
      title="Screen Replacement"/>
      <IPhoneScreenRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default IPhoneScreen;