import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsRunsLoudRep from '../components/WindowsRunsLoudRep/WindowsRunsLoudRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsRunsLoud () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="PC Runs Loud And Noisy"/>
      <WindowsRunsLoudRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsRunsLoud;