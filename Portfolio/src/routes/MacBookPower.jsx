import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacBookPowerUp from '../components/MacBookPowerUp/MacBookPowerUp';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacBookPower () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="MacBook Won’t Power Up Fix"/>
      <MacBookPowerUp />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacBookPower;