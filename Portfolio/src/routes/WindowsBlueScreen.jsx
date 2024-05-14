import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsBlueScreenErr from '../components/WindowsBlueScreenErr/WindowsBlueScreenErr';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsBlueScreen () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Blue Screen PC Error"/>
      <WindowsBlueScreenErr />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsBlueScreen;