import Navbar from '../components/Nav/Navbar';
import HeroTop from '../components/Header/Hero-Top';
import HeroBottom from '../components/Header/Hero-Bottom';
import MacFixStartUpRep from '../components/MacFixStartUpRep/MacFixStartUpRep.jsx';
import Footer from '../components/Footer/Footer';

import HomeImg from '../assets/home.avif'; 

function MacBookSpill () {
  return (
    <>
      <Navbar />
      <HeroTop
      cName="MacBookPowerHero"
      heroImg={HomeImg}
      title="Fix Mac Startup / Freezing"/>
      <MacFixStartUpRep />
      <HeroBottom />
      <Footer />
    </>
  )
}

export default MacBookSpill;