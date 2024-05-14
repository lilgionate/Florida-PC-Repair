import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsDataRec from '../components/WindowsDataRec/WindowsDataRec';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsData () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Windows Data Recovery"/>
      <WindowsDataRec />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsData;