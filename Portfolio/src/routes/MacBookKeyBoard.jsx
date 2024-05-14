import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacBookKeyBoardRep from '../components/MacBookKeyBoardRep/MacBookKeyBoardRep';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacBookKeyBoard () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Keyboard Replacement"/>
      <MacBookKeyBoardRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacBookKeyBoard;