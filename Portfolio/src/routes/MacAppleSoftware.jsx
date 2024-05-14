import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacAppleSoftwareSup from '../components/MacAppleSoftwareSup/MacAppleSoftwareSup';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function  MacAppleSoftware () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Apple Software Support"/>
      <MacAppleSoftwareSup />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacAppleSoftware;