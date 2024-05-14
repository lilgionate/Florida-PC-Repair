import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import Windows10Rep from '../components/Windows10Rep/Windows10Rep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function Windows10 () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Windows 10 Repair"/>
      <Windows10Rep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default Windows10;