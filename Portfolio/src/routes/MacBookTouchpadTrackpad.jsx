import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacTouchpadTrackpadRep from '../components/MacTouchpadTrackpadRep/MacTouchpadTrackpadRep.jsx';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacTouchpadTrackpad () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Touchpad / Trackpad Replacement"/>
      <MacTouchpadTrackpadRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacTouchpadTrackpad;