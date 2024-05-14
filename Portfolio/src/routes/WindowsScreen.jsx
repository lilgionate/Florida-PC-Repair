import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsScreenRep from '../components/WindowsScreenRep/WindowsScreenRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsScreen () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Windows Laptop Screen Replacements"/>
      <WindowsScreenRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsScreen;