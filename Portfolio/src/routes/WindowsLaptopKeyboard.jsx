import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsLaptopKeyboardRep from '../components/WindowsLaptopKeyboardRep/WindowsLaptopKeyboardRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsLaptopKeyboard () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Laptop Keyboard Replacement"/>
      <WindowsLaptopKeyboardRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsLaptopKeyboard;