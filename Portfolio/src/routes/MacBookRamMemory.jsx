import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacBookRamMemoryUp from '../components/MacBookRamMemoryUp/MacBookRamMemoryUp';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacBookRamMemory () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="RAM / Memory Upgrade"/>
      <MacBookRamMemoryUp />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacBookRamMemory;