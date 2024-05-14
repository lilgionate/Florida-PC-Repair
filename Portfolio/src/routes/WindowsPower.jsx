import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsPowerUp from '../components/WindowsPowerUp/WindowsPowerUp';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsPower () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Windows / PC Won’t Start Fix"/>
      <WindowsPowerUp />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsPower;