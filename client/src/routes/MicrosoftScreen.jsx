import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MicrosoftScreenRep from '../components/MicrosoftScreenRep/MicrosoftScreenRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function  MicrosoftScreen () {
  return (
    <>
      <Navbar />
      <HeroTop
      className="MacBookPowerHero"
      heroImg={HomeImg}
      title="Microsoft Screen Replacement"/>
      <MicrosoftScreenRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MicrosoftScreen;