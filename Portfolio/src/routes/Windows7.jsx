import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import Windows7Rep from '../components/Windows7Rep/Windows7Rep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function Windows7 () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Windows 7 Repair"/>
      <Windows7Rep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default Windows7;