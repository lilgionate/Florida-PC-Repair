import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsShutOffOverheatsRep from '../components/WindowsShutOffOverheatsRep/WindowsShutOffOverheatsRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsShutOffOverheats () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="PC Shuts Off / Overheats"/>
      <WindowsShutOffOverheatsRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsShutOffOverheats;