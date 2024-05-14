import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsSpillRep from '../components/WindowsSpillRep/WindowsSpillRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsSpill () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Laptop Spill Repair"/>
      <WindowsSpillRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsSpill;