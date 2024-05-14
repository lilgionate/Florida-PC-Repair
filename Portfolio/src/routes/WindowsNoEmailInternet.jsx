import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsNoEmailInternetRep from '../components/WindowsNoEmailInternetRep/WindowsNoEmailInternetRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsNoEmailInternet () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="No Email / Internet"/>
      <WindowsNoEmailInternetRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsNoEmailInternet;