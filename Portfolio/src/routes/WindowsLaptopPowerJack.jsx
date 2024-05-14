import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsLaptopPowerJackRep from '../components/WindowsLaptopPowerJackRep/WindowsLaptopPowerJackRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsLaptopPowerJack () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Laptop Power Jack Repair"/>
      <WindowsLaptopPowerJackRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsLaptopPowerJack;