import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacTopCaseRep from '../components/MacTopCaseRep/MacTopCaseRep.jsx';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacTopCase () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Top Case Replacement"/>
      <MacTopCaseRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacTopCase;