import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacBookLogicBoardRep from '../components/MacBookLogicBoardRep/MacBookLogicBoardRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacBookLogic () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="MacBook Logic Board Repairs"/>
      <MacBookLogicBoardRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacBookLogic;