import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsTuneUp from '../components/WindowsTuneUp/WindowsTuneUp';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsTune () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="PC Tune-Up"/>
      <WindowsTuneUp />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsTune;