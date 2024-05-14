import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacPhysicalDamageRep from '../components/MacPhysicalDamageRep/MacPhysicalDamageRep.jsx';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacPhysicalDamage () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Mac Physical Damage Repair"/>
      <MacPhysicalDamageRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacPhysicalDamage;