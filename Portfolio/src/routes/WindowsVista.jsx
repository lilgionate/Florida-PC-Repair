import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsVistaRep from '../components/WindowsVistaRep/WindowsVistaRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsVista () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Windows Vista Repair"/>
      <WindowsVistaRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsVista;