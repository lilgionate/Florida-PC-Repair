import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacBookScreenRep from '../components/MacBookScreenRep/MacBookScreenRep.jsx';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacBookScreen () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="MacBook Screen Replacements"/>
      <MacBookScreenRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacBookScreen;