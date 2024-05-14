import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import Windows8Rep from '../components/Windows8Rep/Windows8Rep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function Windows8 () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Windows 8 Repair"/>
      <Windows8Rep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default Windows8;