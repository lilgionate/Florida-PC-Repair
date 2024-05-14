import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsPhysicalDamageRep from '../components/WindowsPhysicalDamageRep/WindowsPhysicalDamageRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsPhysicalDamage () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="PC Physical Damage Repair"/>
      <WindowsPhysicalDamageRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsPhysicalDamage;