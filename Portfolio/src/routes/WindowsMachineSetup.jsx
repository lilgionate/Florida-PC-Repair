import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import WindowsVirtualMachine from '../components/WindowsVirtualMachine/WindowsVirtualMachine';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function WindowsMachine () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Windows Virtual Machine Setup"/>
      <WindowsVirtualMachine />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default WindowsMachine;