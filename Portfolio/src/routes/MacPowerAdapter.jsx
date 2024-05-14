import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacPowerAdapterRep from '../components/MacPowerAdapterRep/MacPowerAdapterRep.jsx';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacPowerAdapter () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Power Adapter Replacement"/>
      <MacPowerAdapterRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacPowerAdapter;