import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacHingeRep from '../components/MacHingeRep/MacHingeRep.jsx';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacHinge () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Hinge Replacement"/>
      <MacHingeRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacHinge;