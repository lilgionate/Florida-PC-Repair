import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import PCUpgrade from '../components/PCUpgrade/PCUpgrade';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsUpgrade () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="PC Upgrade"/>
      <PCUpgrade />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsUpgrade;