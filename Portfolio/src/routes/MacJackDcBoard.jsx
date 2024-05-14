import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacJackDcRep from '../components/MacJackDcRep/MacJackDcRep.jsx';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacJackDc () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Jack / DC-In Board Replacement"/>
      <MacJackDcRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacJackDc;