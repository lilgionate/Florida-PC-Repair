import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacWontBootRep from '../components/MacWontBootRep/MacWontBootRep.jsx';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacWontBoot () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Mac Won’t Boot"/>
      <MacWontBootRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacWontBoot;