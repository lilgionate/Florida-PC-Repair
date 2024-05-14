import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacLogicBoardRep from '../components/MacLogicBoardRep/MacLogicBoardRep.jsx';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacLogicBoard () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Logic Board Replacement"/>
      <MacLogicBoardRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacLogicBoard;